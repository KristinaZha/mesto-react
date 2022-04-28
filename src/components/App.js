import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {
  const [isPopupAvatarOpen, setPopupAvatarOpened] = React.useState(false);
  const [isPopupProfileOpen, setPopupProfileOpened] = React.useState(false);
  const [isPopupPlaceOpen, setPopupPlaceOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  // first page
  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getCards()])
      .then(([userData, cards]) => {
        setCards(cards);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //like card
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLike(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
           state.map((c) => (c._id === card._id ? newCard : c))
          );   
        })
        .catch((err) => {
          console.log(err);
        });
}
  //delete card
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => 
      setCards((state) => state.filter((c) => c._id !== card._id && c))
    )
      .catch((err) => {
        console.log(err);
      });
  }
  //
  function handleUpdateUser(user) {
    api.editProfile(user.name, user.about)
      .then((editUser) => {
        setCurrentUser({
          ...currentUser,
          name: editUser.name,
          about: editUser.about
        });
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //
  function handleChangeAvatar(data) {
    api.changeAvatar(data.avatar)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          avatar:res.avatar
        });
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //
  function handleAddPlace(card) {
    api.addCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // open popup
  function handleEditProfileClick() {
    setPopupProfileOpened(true);
  }
  function handleAddPlaceClick() {
    setPopupPlaceOpened(true);
  }
  function handleEditAvatarClick() {
    setPopupAvatarOpened(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closePopups() {
    setPopupProfileOpened(false);
    setPopupAvatarOpened(false);
    setPopupPlaceOpened(false);
    setSelectedCard({});
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />

          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDeleteClick={handleCardDelete}
          />

          <Footer />

          <EditProfilePopup
            isOpen={isPopupProfileOpen}
            onClose={closePopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isPopupAvatarOpen}
            onClose={closePopups}
            onUpdateAvatar={handleChangeAvatar}
          />

          <AddPlacePopup
            isOpen={isPopupPlaceOpen}
            onClose={closePopups}
            onAddPlace={handleAddPlace}
          />

          <PopupWithForm
            title="Вы уверены?"
            name="delete"
            onClose={closePopups}
            buttonText="Да"
          />

          <ImagePopup onClose={closePopups} card={selectedCard} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
