export class Card {
   constructor(data, cardSelector, handleCardClick) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
   }
   _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector)
         .content
         .querySelector('.card')
         .cloneNode(true);
      return cardElement;
   }
   generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__image').alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
      return this._element;
   }
   _like() {
      this.likeButton.classList.toggle('card__button_active');
   }
   _delete() {
      this._element.remove();
   }
   _setEventListeners() {
      this.deleteButton = this._element.querySelector('.card__delete-button');
      this.deleteButton.addEventListener('click', () => this._delete());
      this.likeButton = this._element.querySelector('.card__button');
      this.likeButton.addEventListener('click', () => this._like());
      this.preview = this._element.querySelector('.card__image');
      this.preview.addEventListener('click', () => this._handleCardClick(this._link, this._name));
   };
};