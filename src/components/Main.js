import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';




function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then((res) => {

        setUserName(res[0].name);
        setUserDescription(res[0].about);
        setUserAvatar(res[0].avatar);

        setCards(res[1]);

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const InitionalCardList = cards.map((initionalCard) =>
    <Card card={initionalCard} onCardClick={props.onCardClick} key={initionalCard._id}/>
  );


  return (
    <main>
              <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                  <img className="profile__avatar" src={userAvatar} alt="аватар" />
                </div>

                <div className="profile__info">
                  <h1 className="profile__title">{userName}</h1>

                  <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>

                  <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
              </section>

              <section className="elements">
                <ul className="elements__list">

                    {InitionalCardList}

                </ul>
              </section>

            </main>
  )
}

export default Main;