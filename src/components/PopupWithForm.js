import React from 'react';

function PopupWithForm(props) {


  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={(e)=>{if(e.target.classList.contains('popup')){props.onClose()}}}>
        <div className="popup__content">
                <button type="button" className={`popup__close popup__close_place_${props.name}`} onClick={props.onClose}></button>
                <h2 className="popup__title">
                        {`${props.title}`}
                </h2>

                <form className="popup__form" name={`${props.name}-form`} noValidate>
                    <fieldset className="popup__form-set">
                        {props.children}
                     </fieldset>
                </form>
        </div>
                    
    </div>

  )
}

export default PopupWithForm;