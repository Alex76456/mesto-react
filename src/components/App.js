import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    escListener(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    escListener(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    escListener(true);
  }

  function handleCardClick(choosenCard) {
    setSelectedCard(choosenCard);
    setIsImagePopupOpen(true);
    escListener(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard('');
    escListener(false);
  }

  function onEscClosePopup(ev) {
    if (ev.key === "Escape") {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsImagePopupOpen(false);
      setSelectedCard({});
    }
  }

  function escListener(isOpen) {
    if (isOpen === true) {
      document.addEventListener('keydown', onEscClosePopup);
    } else {
      document.removeEventListener('keydown', onEscClosePopup);
    }
  }


  return (
    <div className="root">
      <div className="page">
            <Header />

            <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            />

            <Footer />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />

            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} 
            children={
                <fieldset className="popup__form-set">
                        <label className="popup__form-field">
                            <input className="popup__input popup__input_type_name" type="text" name="title" id="name-input" placeholder="Имя" required minLength="2" maxLength="40" />
                            <span className="popup__input-error" id="name-input-error">Вы пропустили это поле.</span>
                        </label>

                        <label className="popup__form-field">
                            <input className="popup__input popup__input_type_job" type="text" name="subtitle" id="job-input" placeholder="Профессия" required minLength="2" maxLength="200" />
                            <span className="popup__input-error" id="job-input-error">Вы пропустили это поле.</span>
                        </label>
                        <button className="popup__submit" type="submit">Сохранить</button>
                        </fieldset>
            }/>

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
            children={
                <fieldset className="popup__form-set">
                        <label className="popup__form-field">
                            <input className="popup__input popup__input_type_avatar-link" type="url" name="avatar-link" id="url-avatar-input" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error" id="url-avatar-input-error">Вы пропустили это поле.</span>
                        </label>

                        <button className="popup__submit" type="submit">Сохранить</button>
                        </fieldset>
            }/>

            <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} 
            children={
                <fieldset className="popup__form-set">
                        <button className="popup__submit" type="submit">Да</button>
                </fieldset>
            }/>

            <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} 
            children={
                <fieldset className="popup__form-set">
                        <label className="popup__form-field">
                            <input className="popup__input popup__input_type_place" type="text" name="place" id="place-input" placeholder="Название" required minLength="2" maxLength="30" />
                            <span className="popup__input-error" id="place-input-error">Вы пропустили это поле.</span>
                        </label>

                        <label className="popup__form-field">
                            <input className="popup__input popup__input_type_link" type="url" name="link" id="url-input" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error" id="url-input-error">Вы пропустили это поле.</span>
                        </label>
                        <button className="popup__submit" type="submit">Создать</button>
                </fieldset>
            }/>

      </div>

    </div>
  );
}

export default App;