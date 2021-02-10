import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const [ userName, setUserName ] = useState('');
	const [ userDescription, setUserDescription ] = useState('');
	const [ userAvatar, setUserAvatar ] = useState('');

	const [ cards, setCards ] = useState([]);

	useEffect(() => {
		Promise.all([ api.getUser(), api.getInitialCards() ])
			.then(([ userData, cardsData ]) => {
				setUserName(userData.name);
				setUserDescription(userData.about);
				setUserAvatar(userData.avatar);

				setCards(cardsData);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main>
			<section className="profile">
				<div className="profile__avatar-container" onClick={onEditAvatar}>
					<img className="profile__avatar" src={userAvatar} alt="аватар" />
				</div>

				<div className="profile__info">
					<h1 className="profile__title">{userName}</h1>

					<button className="profile__edit-button" type="button" onClick={onEditProfile} />

					<p className="profile__subtitle">{userDescription}</p>
				</div>
				<button className="profile__add-button" type="button" onClick={onAddPlace} />
			</section>

			<section className="elements">
				<ul className="elements__list">
					{cards.map((initionalCard) => {
						return (<Card card={initionalCard} onCardClick={onCardClick} key={initionalCard._id} />)
					})}
				</ul>
			</section>
		</main>
	);
}

export default Main;
