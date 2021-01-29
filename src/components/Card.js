import React from 'react';


function Card(props) {


  function handleClick() {
    props.onCardClick(props.card);
  }


  return (
    <li className="elements__list-item" >
        <button className="elements__delete-button"></button>
        <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <div className="elements__caption-space">
            <h2 className="elements__caption">{props.card.name}</h2>
            <div className="element__like-container">
                 <button className="elements__caption-like" type="button"></button>
                 <p className="elements__likes-number">{props.card.likes.length}</p>
            </div>       
        </div>
    </li>
  )
}

export default Card;