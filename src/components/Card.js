function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  } 

  return (
          <article className="place">
            <button
              type="button"
              className="button button_background_transparent button_size_small place__icon-trash"
            ></button>
            <div className="place__photo place_url" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} ></div>
            <div className="place__info">
              <h2 className="place__title">{card.name}</h2>
              <div className="place__like">
                <button
                  type="button"
                  className="button button_background_transparent place__icon-like"
                >{card.like}</button>
                <span className="place__like-counter">{card.likes.length}</span>
              </div>
            </div>
          </article>
  )
}

export default Card
