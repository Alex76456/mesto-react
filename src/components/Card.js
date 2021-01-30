import React from 'react';

function Card({ card, onCardClick }) {
	function handleClick() {
		onCardClick(card);
	}

	return (
		<li className="elements__list-item">
			<button className="elements__delete-button" />
			<img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
			<div className="elements__caption-space">
				<h2 className="elements__caption">{card.name}</h2>
				<div className="element__like-container">
					<button className="elements__caption-like" type="button" />
					<p className="elements__likes-number">{card.likes.length}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
