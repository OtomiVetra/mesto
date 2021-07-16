import Popup from './Popup';
export default class PopupWithImage extends Popup {
   constructor(selector) {
      super(selector);
      this.open = this.open.bind(this);
      this.setEventListeners();
   }

   open(image, text) {
      this._popupEl.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
      const picture = this._popupEl.querySelector('.popup-image__image');
      const imageTitle = this._popupEl.querySelector('.popup-image__text');
      picture.src = image;
      imageTitle.textContent = text;
   }
}

