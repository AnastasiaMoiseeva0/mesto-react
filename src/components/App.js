import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([user]) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card, setCards) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditAvatar={() => handleEditAvatarClick()}
          onEditProfile={() => handleEditProfileClick()}
          onAddPlace={() => handleAddPlaceClick()}
          onCardClick={(card) => handleCardClick(card)}
          onCardLike={(card, setCards) => handleCardLike(card, setCards)}
        />
        <PopupWithForm
          title="Редактировать профиль"
          name="editProfilePopup"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="nameInput"
            className="edit-form__field edit-form__field_name-input"
            placeholder="Имя"
            type="text"
            name="nameInput"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="nameInput-error"></span>
          <input
            id="jobInput"
            className="edit-form__field edit-form__field_job-input"
            placeholder="О себе"
            type="text"
            name="jobInput"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="jobInput-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="newCardPopup"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="placeTitleInput"
            className="edit-form__field edit-form__field_title-input"
            type="text"
            placeholder="Название"
            name="titleInput"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="placeTitleInput-error"></span>
          <input
            id="urlInput"
            className="edit-form__field edit-form__field_url-input"
            type="url"
            placeholder="Ссылка на картинку"
            name="urlInput"
            required
          />
          <span className="urlInput-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Вы уверены"
          name="deleteCard"
          buttonText="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="editAvatar"
          buttonText="Сохранить"
          isOpen={isEditAvatarOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatarInput"
            className="edit-form__field edit-form__field_url-input"
            placeholder="Ссылка на картинку"
            type="url"
            name="avatarInput"
            required
          />
          <span className="avatarInput-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </CurrentUserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
