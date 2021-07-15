export default class Popup {
   constructor(selector) {
      this._popupEl = document.querySelector(selector);
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
      this._popupEl.addEventListener('click', this._closePopupOverlay());
   }
}