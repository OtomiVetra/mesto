import Popup from "./Popup";

export default class PopupWithForm extends Popup {
   constructor(selector, handleSubmit) {
      super(selector);
      this.formEl = this._popupEl.querySelector("form");
      this._handleSubmit = handleSubmit;
      this.open = this.open.bind(this);
   }
   _getInputValues() {
      const entries = new FormData(this.formEl).entries();
      const data = {};
      for (let pair of entries) {
         data[pair[0]] = pair[1];
      }
      return data;
   }
   setEventListeners() {
      super.setEventListeners();
      this.formEl.addEventListener('submit', (e) => {
         e.preventDefault();
         this._handleSubmit(this._getInputValues(), this.formEl);
         this.close();
      })
   }
   close() {
      super.close();
      this.formEl.reset()
   }
}

