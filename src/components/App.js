import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isPopupAvatarOpen, setPopupAvatarOpened] = React.useState(false); 
  const [isPopupProfileOpen, setPopupProfileOpened] = React.useState(false);
  const [isPopupPlaceOpen, setPopupPlaceOpened] = React.useState(false);

  const [selectedCard, setCardOpen] = React.useState({})

  // open popup
  function handleEditProfileClick() {
    setPopupProfileOpened(true);
  }
  function handleAddPlaceClick(){
    setPopupPlaceOpened(true);
  }
  function handleEditAvatarClick() {
    setPopupAvatarOpened(true)
  }
  function handleCardClick () {
    setCardOpen(card);
  }
  function closePopups() {
    setPopupProfileOpened(false)
    setPopupAvatarOpened(false)
    setPopupPlaceOpened(false)
    setCardOpen({})
  }
  return (
    <div className= "page">
      <Header/>
<Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
<Footer/>
{/*popup-profile*/}
<PopupWithForm title='Редактировать профиль' name='profile' buttonText='Сохранить' isOpen={isPopupProfileOpen} onClose={closePopups}>
  <input required minlength="2" maxlength="40" name="name" class="form__input form__input_name"
          type="text" value="" id="input__name"/>
          <span id="input__name-error" class="error-message">Вы пропустили это поле</span>

          <input id="input__proff" required minlength="2" maxlength="200" name="role" class="form__input form__input_role"
          type="text" value="" />
        <span id="input__proff-error" class="error-message">Вы пропустили это поле</span>
</PopupWithForm>

{/*popup-card*/}

<PopupWithForm title='Новая карточка' name='cards' buttonText='Сохранить' isOpen={isPopupPlaceOpen} onClose={closePopups}>
<input id="input__username" class="form__input form__input_text" required minlength="2" maxlength="30"
          name="name" placeholder="Название" type="text" value="" />
        <span id="input__username-error" class="error-message">Вы пропустили это поле</span>
        <input id="input__href" required name="href" placeholder="Ссылка на картинку" type="url"
          class="form__input form__input_image" value="" />
        <span id="input__href-error" class="error-message">Введите адрес сайта</span>
</PopupWithForm>
{/*popup-avatar*/}
<PopupWithForm title='Сменить аватар' name='avatar' buttonText='Сохранить' isOpen={isPopupAvatarOpen} onClose={closePopups}> 
<input required type="url" id="input__avatar" placeholder="Ссылка на аватар" name="avatar"
          class="form__input form__input_avatar"/>
        <span class="error-message" id="input__avatar-error">Введите ссылку</span>
</PopupWithForm>

{/*popup-delete*/}
<PopupWithForm title='Удалить фото?' name='remove' buttonText='Да'/>
<ImagePopup card={selectedCard} onClose={closePopups}/>
 </div>
  );
}

export default App;









