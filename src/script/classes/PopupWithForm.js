import Popup from "./Popup";
import { FormValidator } from './Validate.js';

const validatorConfig = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input-text',
   submitButtonSelector: '.popup__submit-button',
   inactiveButtonClass: 'popup__submit-button_inactive',
   inputErrorClass: 'popup__input-text_error',
   errorClass: 'popup__form-error',
};

export default class PopupWithForm extends Popup {
   constructor(selector, handleSubmit) {
      super(selector);
      this._formEl = this._popupEl.querySelector("form");
      this._handleSubmit = handleSubmit;
      this.open = this.open.bind(this);
      this.setEventListeners();
      const validator = new FormValidator(validatorConfig, this._formEl);
      validator.enableValidation();
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
      this._popupEl.querySelector('.popup__close-button').addEventListener('click', this.close);
      this._formEl.addEventListener('submit', (e) => {
         e.preventDefault();
         this._handleSubmit(this._getInputValues());
         this.close();
      })
   }
   close() {
      this._popupEl.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
   }
}


