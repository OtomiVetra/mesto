import Popup from "./Popup";
export default class PopupWithForm extends Popup {
   constructor(selector, handleSubmit) {
      super(selector);
      this._formEl = this._popupEl.querySelector("form");
      this._handleSubmit = handleSubmit;
      this.open = this.open.bind(this);
      this.setEventListeners();
   }
   _getInputValues() {
      const entries = new FormData(this._formEl).entries();
      const data = {};
      for (var pair of entries) {
         data[pair[0]] = pair[1];
      }
      return data;
   }
   setEventListeners() {
      this._popupEl.addEventListener('click', this._closePopupOverlay);
      // @todo: добавить обработчик close
      this._formEl.addEventListener('submit', (e) => {
         e.preventDefault();
         this._handleSubmit(this._getInputValues());
         this.close();
      })
   }
   close() {
      this._popupEl.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
      // @todo: сбросить поля формы
   }
}