import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"

function App() {
  const [isPopupAvatarOpen, setPopupAvatarOpened] = React.useState(false)
  const [isPopupProfileOpen, setPopupProfileOpened] = React.useState(false)
  const [isPopupPlaceOpen, setPopupPlaceOpened] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  // open popup
  function handleEditProfileClick() {
    setPopupProfileOpened(true)
  }
  function handleAddPlaceClick() {
    setPopupPlaceOpened(true)
  }
  function handleEditAvatarClick() {
    setPopupAvatarOpened(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }
  function closePopups() {
    setPopupProfileOpened(false)
    setPopupAvatarOpened(false)
    setPopupPlaceOpened(false)
    setSelectedCard({})
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        {/*popup-profile*/}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          onClose={closePopups}
          isOpen={isPopupProfileOpen}
          buttonText="Сохранить"
        >
          <div className="popup__input-container">
            <input
              id="name-input"
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="description-input"
              type="text"
              className=" popup__input popup__input_type_description"
              name="about"
              placeholder="Пользователь"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error description-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isPopupAvatarOpen}
          onClose={closePopups}
          buttonText="Сохранить"
        >
          <div className="popup__input-container">
            <input
              id="avatar-input"
              type="url"
              className="popup__input popup__input_type_avatar"
              name="avatar"
              placeholder="Ссылка"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isPopupPlaceOpen}
          onClose={closePopups}
          buttonText="Сохранить"
        >
          <div className="popup__input-container">
            <input
              id="place-input"
              type="text"
              className="popup__input popup__input_type_place"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error place-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="url-input"
              type="url"
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Ссылка"
              required
            />
            <span className="popup__input-error url-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          onClose={closePopups}
          buttonText="Да"
        />

        <ImagePopup onClose={closePopups} card={selectedCard} />
      </div>
    </div>
  )
}

export default App
