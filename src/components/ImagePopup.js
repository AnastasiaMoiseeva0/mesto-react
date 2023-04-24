function ImagePopup() {
  return (
    <div className="popup popup_background-dark popup_image">
      <div className="popup__container popup__container_wide">
        <button
          type="button"
          className="button button_background_transparent popup__close"
        ></button>
        <div className="popup__photo-wrapper">
          <img className="popup__photo"/>
          <figcaption className="popup__caption"></figcaption>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;