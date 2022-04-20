import React from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="аватар" />
        <button
          className="profile__avatar-button"
          type="button"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__box">
          <div className="profile__text">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              title="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          title="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card card={card} key={card.id} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}
export default Main;
