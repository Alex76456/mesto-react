import React from 'react';


function ImagePopup(props) {


  return (

    <div className={`popup popup_type_image  ${props.isOpen ? 'popup_opened' : ''}`} 
    onClick={(e)=>{if(e.target.classList.contains('popup')){props.onClose()}}}>

        <figure className="popup__image-container" >
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <img className="popup__image" src={`${props.card.link}`} alt={props.card.name} />
            <figcaption className="popup__image-caption">{props.card.name}</figcaption>
         </figure>
     </div>

  )
}

export default ImagePopup;