import React from "react";

export default function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup-foto ${card.link && "popup_opened"}`}>
            <figure>
                <img className="popup-foto__image"
                    src={`${card.link}`}
                    alt={card.name}
                />
                <figcaption className="popup-foto__caption">
                    {card.name}
                </figcaption>
            </figure>
            <button className="popup__close-button" type= 'button' onClick={onClose}/>
        </div>
    )

}