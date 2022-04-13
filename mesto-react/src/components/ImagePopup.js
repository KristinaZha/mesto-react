function ImagePopup(props) {
    return (
        <div className={`popup popup-foto ${props.card.link && "popup_opened"}`}
        id = "popup-foto">
            <figure>
                <img className="popup-foto__image"
                src={props.card.link}
                alt={props.card.name}
            />
            <figcaption className="popup-foto__caption">
                {props.card.name}
            </figcaption>
            </figure>
        </div>
    )

}