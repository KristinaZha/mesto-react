import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userInfo, setUserInfo] = React.useState({ userName: '', userDescription: '', userAvatar: '' });
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getProfile(), api.getCards()])
                .then(([res, cards]) => {
                setUserInfo({userName: res.name, userDescription: res.about, userAvatar: res.avatar});
                setCards(cards)
            })
            .catch(console.log);
    }, []);
    
   
    return (
        <main>
            <section className="profile">
                <img className="profile__avatar"
                    src={userInfo.userAvatar}
                    alt="аватар" />
                <button className="profile__avatar-button"
                    type="button"
                    onClick={onEditAvatar}></button>
                <div className="profile__box">
                    <div className="profile__text">
                        <h1 className="profile__title">{userInfo.userName}</h1>
                        <button className="profile__edit-button"
                            type="button"
                            title="Редактировать профиль"
                            onClick={onEditProfile}></button>

                    </div>
                    <p className="profile__subtitle">{userInfo.userDescription}</p>

                </div>
                <button className="profile__button"
                    type="button"
                    title="Добавить фотографию"
                    onClick={onAddPlace}></button>
            </section>
            <section className="elements"> {cards.map((card) => {
                return (
                    <Card card={card}
                        key={card._id}
                        onCardClick={onCardClick} />
                )
            })}

            </section>
        </main>
    );

        }