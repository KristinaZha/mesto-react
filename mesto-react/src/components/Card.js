import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
      <div className="element">
      <button type ='button' 
      className="element__delete"
      title="Удалить"></button>
      <img className="element__pic"
      src ={props.card.link}
      alt ={props.card.name}
      onClick={handleClick}/>
      <div className="element__box">
          <h3 className="element__title">{props.card.name}</h3>
          <div className="element__button">
              <button type="button"
              className="element__like"
              title="Нравится"></button>
              <span className="element__like-count">{props.card.likes.length}</span>
          </div>
      </div>

      </div>);}
      export default Card;