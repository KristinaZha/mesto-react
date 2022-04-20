function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_foto ${props.card.link && "popup_opened"}`}
      id="popup_type_foto"
    >
      <div className="popup__foto-window">
        <button
          className="popup__close-button"
          type="button"
          title="Закрыть"
          id="button_close_image"
          onClick={props.onClose}
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__figure-foto"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="popup__figcaption">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
