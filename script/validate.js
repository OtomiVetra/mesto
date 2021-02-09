const showInputError = (formElement, inputElement, errorMessage) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add('popup__input-text_error');
   errorElement.textContent = errorMessage;
   errorElement.classList.add('popup__form-error');
};
const hideInputError = (formElement, inputElement) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove('popup__input-text_error');
   errorElement.classList.remove('popup__form-error');
   errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
      hideInputError(formElement, inputElement);
   }
};
const hasInvalidInput = (inputList) => {
   return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
   });
};
const toggleButtonState = (inputList, buttonElement) => {
   if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit-button_inactive');
      buttonElement.setAttribute("disabled", "true");
   } else {
      buttonElement.classList.remove('popup__submit-button_inactive')
      buttonElement.removeAttribute("disabled");
   }
};
const setEventListeners = (formElement) => {
   const inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
   const buttonElement = formElement.querySelector('.popup__submit-button');
   toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
         checkInputValidity(formElement, inputElement);
         toggleButtonState(inputList, buttonElement);
      })
   })
}
const enableValidation = () => {
   const formList = Array.from(document.querySelectorAll('.popup__form'));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
         evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
      fieldsetList.forEach((fieldset) => {
         setEventListeners(fieldset);
      });
   });
};
enableValidation();