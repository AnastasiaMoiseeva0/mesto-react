import { useEffect, useState, useContext } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike}) {
  
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    Promise.all([api.getInitialCards()])
    .then(([cards]) => {
      setCards(cards);
    })
    .catch(error => {
      console.log(error)
    });
  }, [])

   return (
    <main>
      <section className="profile">
        <div className="profile__edit-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            alt="Аватар пользователя"
          ></div>
          <button 
            className="button button_background_transparent button_size_medium profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="button button_border_slim button_size_small profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="button button_border_wide profile__add"
          onClick={onAddPlace}
        ></button>
      </section>
    <section className="places">
        {cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={(card) => onCardLike(card, setCards)}/>)}
      </section>
    </main>
  );
}

export default Main;
