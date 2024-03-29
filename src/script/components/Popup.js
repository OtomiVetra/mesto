export default class Popup {
   constructor(selector) {
      this._popupEl = document.querySelector(selector);
      this.close = this.close.bind(this);
      this._closePopupOverlay = this._closePopupOverlay.bind(this);
      this._handleEscClose = this._handleEscClose.bind(this);
   }
   open() {
      this._popupEl.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
   }
   close() {
      this._popupEl.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
   }
   _handleEscClose(evt) {
      if (evt.key === 'Escape') {
         this.close()
      }
   }
   _closePopupOverlay(evt) {
      if (evt.target === evt.currentTarget) {
         this.close()
      }
   }
   setEventListeners() {
      this._popupEl.addEventListener('click', this._closePopupOverlay);
      this._popupEl.querySelector('.popup__close-button').addEventListener('click', this.close);
   }
}