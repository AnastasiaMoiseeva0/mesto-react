import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(cards);
    })
    .catch(error => {
      console.log(error)
    });
  })

   return (
    <main>
      <section className="profile">
        <div className="profile__edit-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
            alt="Аватар пользователя"
          ></div>
          <button 
            className="button button_background_transparent button_size_medium profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="button button_border_slim button_size_small profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          type="button"
          className="button button_border_wide profile__add"
          onClick={onAddPlace}
        ></button>
      </section>
    <section className="places">
        {cards.map((card) => <Card key={card.id} card={card} />)}
      </section>
    </main>
  );
}

export default Main;
