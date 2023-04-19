import "./index.css";
import mestoLogo from "./images/mesto-logo.svg"; 

function App() {
  return (
    <body className="page">
      <header>
        <img
          className="header__logo"
          src={mestoLogo}
          alt="Логотип Mesto Russia"
        />
      </header>
      <main>
        <section className="profile">
          <div className="profile__edit-avatar">
            <img
              className="profile__avatar"
              src="<%=require('./images/profile-avatar.jpg')%>"
              alt="Аватар пользователя"
            />
            <button className="button button_background_transparent button_size_medium profile__avatar-button"></button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                type="button"
                className="button button_border_slim button_size_small profile__edit-button"
              ></button>
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
          <button
            type="button"
            className="button button_border_wide profile__add"
          ></button>
        </section>
        <section className="places">
          <template className="place_template">
            <article className="place">
              <button
                type="button"
                class="button button_background_transparent button_size_small place__icon-trash"
              ></button>
              <img className="place__photo place_url" />
              <div className="place__info">
                <h2 className="place__title"></h2>
                <div className="place__like">
                  <button
                    type="button"
                    class="button button_background_transparent place__icon-like"
                  ></button>
                  <span className="place__like-counter">0</span>
                </div>
              </div>
            </article>
          </template>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__logo">&copy; 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_form_edit-profile">
        <div className="popup__container popup__container_white">
          <button
            type="button"
            class="button button_background_transparent popup__close"
          ></button>
          <form
            className="edit-form edit-form_profile"
            name="editForm"
            novalidate
          >
            <h2 className="edit-form__title">Редактировать профиль</h2>
            <input
              id="nameInput"
              class="edit-form__field edit-form__field_name-input"
              placeholder="Имя"
              type="text"
              name="nameInput"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="nameInput-error"></span>
            <input
              id="jobInput"
              class="edit-form__field edit-form__field_job-input"
              placeholder="О себе"
              type="text"
              name="jobInput"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="jobInput-error"></span>
            <button type="submit" class="edit-form__submit button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_new-card">
        <div className="popup__container popup__container_white">
          <button
            type="button"
            class="button button_background_transparent popup__close"
          ></button>
          <form className="edit-form edit-form_card" name="cardForm" novalidate>
            <h2 className="edit-form__title">Новое место</h2>
            <input
              id="placeTitleInput"
              className="edit-form__field edit-form__field_title-input"
              type="text"
              placeholder="Название"
              name="titleInput"
              minlength="2"
              maxlength="30"
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
            <button type="submit" className="edit-form__submit button">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_background-dark popup_image">
        <div className="popup__container popup__container_wide">
          <button
            type="button"
            className="button button_background_transparent popup__close"
          ></button>
          <div className="popup__photo-wrapper">
            <img className="popup__photo" />
            <figcaption className="popup__caption"></figcaption>
          </div>
        </div>
      </div>
      <div className="popup popup_delete-card">
        <div className="popup__container popup__container_white">
          <form className="edit-form">
            <button
              type="button"
              className="button button_background_transparent popup__close"
            ></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="edit-form__submit button">
              Да
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_edit-avatar">
        <div className="popup__container popup__container_white">
          <button
            type="button"
            className="button button_background_transparent popup__close"
          ></button>
          <form
            className="edit-form edit-form_profile"
            name="avatarForm"
            novalidate
          >
            <h2 className="edit-form__title">Обновить аватар</h2>
            <input
              id="avatarInput"
              className="edit-form__field edit-form__field_url-input"
              placeholder="Ссылка на картинку"
              type="url"
              name="avatarInput"
              required
            />
            <span className="avatarInput-error"></span>
            <button type="submit" className="edit-form__submit button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default App;
