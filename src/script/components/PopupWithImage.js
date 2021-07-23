import Popup from './Popup';
export default class PopupWithImage extends Popup {
   constructor(selector) {
      super(selector);
      this.open = this.open.bind(this);
   }

   open(image, text) {
      super.open();
      const picture = this._popupEl.querySelector('.popup-image__image');
      const imageTitle = this._popupEl.querySelector('.popup-image__text');
      picture.src = image;
      imageTitle.textContent = text;
      picture.alt = text;
   }
}

