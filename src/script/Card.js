import { openPopup } from './utils/utils.js';
export class Card {
   constructor(data, cardSelector) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
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
      this._element.querySelector('.card__title').textContent = this._name;
      return this._element;
   }
   _like() {
      this.likeButton.classList.toggle('card__button_active');
   }
   _delete() {
      const del = this._element.remove();
   }
   _zoom() {
      const popupImage = document.querySelector('.popup-image');
      openPopup(popupImage);
      const picture = document.querySelector('.popup-image__image');
      const imageTitle = document.querySelector('.popup-image__text');
      picture.src = this._link;
      imageTitle.textContent = this._name;
   }
   _setEventListeners() {
      this.deleteButton = this._element.querySelector('.card__delete-button');
      this.deleteButton.addEventListener('click', () => this._delete());
      this.likeButton = this._element.querySelector('.card__button');
      this.likeButton.addEventListener('click', () => this._like());
      this.preview = this._element.querySelector('.card__image');
      this.preview.addEventListener('click', () => this._zoom());
   };
};