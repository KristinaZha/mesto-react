export default function PopupWithForm({title, name, isOpen, buttonText='Сохранить', children, onClose}) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__window">
                <button className="popup__close-button" type="button" onClick={onClose}/>
                <h2 className="popup__title">{title}</h2>
                <form className="form" name={`form-${name}`} noValidate>
                    {children}
                    <button type= 'submit' className="form__type-submit">{buttonText}</button>
                </form>


            </div>
        </div>
        )
}