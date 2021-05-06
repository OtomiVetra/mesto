export class FormValidator {
   constructor(validatorConfig, form, inputs, button) {
      this.validatorConfig = validatorConfig;
      this.form = form;
      this.inputs = Array.from(this.form.querySelectorAll(this.validatorConfig.inputSelector));
      this.button = this.form.querySelector(this.validatorConfig.submitButtonSelector);
   }
   preventFormSubmit(e) {
      e.preventDefault();
   }
   enableValidation() {
      this._setInputListener();
      this.form.addEventListener('submit', (e) => {
         this.preventFormSubmit(e);
      })
   }
   _setInputListener() {
      this.inputs.forEach(input => {
         input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this._toggleButtonState(this.inputs, this.button);
         })
      })
   }
   _toggleButtonState(inputs, button) {
      if (!this._hasInvalidInput(inputs)) {
         button.classList.add(this.validatorConfig.inactiveButtonClass);
         button.disabled = true;
      } else {
         button.classList.remove(this.validatorConfig.inactiveButtonClass)
         button.disabled = false;
      }
   }
   resetFormState() {
      const inputs = Array.from(this.form.querySelectorAll(this.validatorConfig.inputSelector));
      inputs.forEach(input => {
         this._hideInputError(input);
      })
      /* const activeButtonPopup = this.form.querySelector(this.validatorConfig.submitButtonSelector);
      activeButtonPopup.classList.add(this.validatorConfig.inactiveButtonClass);
      activeButtonPopup.disabled = true; */
      this._toggleButtonState(this.inputs, this.button);
   }
   _hasInvalidInput(inputs) {
      return inputs.every(input => input.validity.valid);
   }
   _checkInputValidity(input) {
      if (!input.validity.valid) {
         this._showInputError(input);
      } else {
         this._hideInputError(input);
      }
   }
   _showInputError(input) {
      const errorElement = this.form.querySelector(`.${input.id}-error`);
      input.classList.add(this.validatorConfig.inputErrorClass);
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(this.validatorConfig.errorClass);
   }
   _hideInputError(input) {
      const errorElement = this.form.querySelector(`.${input.id}-error`);
      input.classList.remove(this.validatorConfig.inputErrorClass);
      errorElement.classList.remove(this.validatorConfig.errorClass);
      errorElement.textContent = '';
   }
};
