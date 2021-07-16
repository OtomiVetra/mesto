import '../pages/index.css';
import { Card } from './classes/Card.js';
import { FormValidator } from './validate.js';
import { closePopup, openPopup, closePopupOverlay } from './utils/utils.js';
import { initialCards } from './initial-сards.js';
import PopupWithImage from './classes/PopupWithImage';
import PopupWithForm from './classes/PopupWithForm';
import UserInfo from './classes/UserInfo';
const openButton = document.querySelector('.person__edit-button');
const allPopup = document.querySelector('.popup');
// const profilePopup = document.querySelector('.profile-popup');
// const profileCloseButton = document.querySelector('.profile-popup__close-button');
// const formElement = document.querySelector('.profile-popup__form');
// const nameInput = document.querySelector('.popup__input-text_type_name');
// const jobInput = document.querySelector('.popup__input-text_type_job');
// const name = document.querySelector('.person__name');
// const job = document.querySelector('.person__activity');
const cardNameInput = document.querySelector('.popup-add-card__input-name');
const cardLinkInput = document.querySelector('.popup-add-card__input-link');
const popupAdded = document.querySelector('.popup-add-card');
const openButtonAdded = document.querySelector('.profile__button');
const closeButtonAdded = document.querySelector('.popup-add-card__close-button');
const list = document.querySelector('.photos__cards');// список куда вставляем элемент
const formAddedElement = document.querySelector('.popup-add-card__form')// форма добавления
// const imageCloseButton = document.querySelector('.popup-image__close-button');
// const popupImage = document.querySelector('.popup-image');

const popupWhithImage = new PopupWithImage('.popup-image');

const userInfo = new UserInfo('.person__name', '.person__activity');

const popupWithProfile = new PopupWithForm('.profile-popup', userInfo.setUserInfo);

initialCards.forEach((item) => {
   const card = new Card(item, '.item_template', popupWhithImage.open);
   const cardElement = card.generateCard();
   list.append(cardElement);
});

// const closeProfilePopup = function () {
//    closePopup(profilePopup)
// }
// const openProfilePopup = function () {
//    openPopup(profilePopup)
//    nameInput.value = name.textContent;
//    jobInput.value = job.textContent;
//    validatorEditProfile.resetFormState(); // @todo:
// }
const openPopupAdded = function () {
   openPopup(popupAdded)
   validarotAddCard.resetFormState();
}

const closePopupAdded = function () {
   closePopup(popupAdded)
}
// const closePopupImage = function () {
//    closePopup(popupImage);
// }


// function handleFormSubmit(evt) {
//    evt.preventDefault();
//    name.textContent = nameInput.value;
//    job.textContent = jobInput.value;
//    closePopup(profilePopup);
// }
// formElement.addEventListener('submit', handleFormSubmit);
function addition(evt) {
   const item = {
      name: cardNameInput.value,
      link: cardLinkInput.value
   }
   const card = new Card(item, '.item_template');
   const cardElement = card.generateCard();
   list.prepend(cardElement);
   closePopupAdded();
   formAddedElement.reset();
   evt.preventDefault();
}
formAddedElement.addEventListener('submit', addition);
openButtonAdded.addEventListener('click', openPopupAdded);
closeButtonAdded.addEventListener('click', closePopupAdded);
popupAdded.addEventListener('click', closePopupOverlay);
// imageCloseButton.addEventListener('click', closePopupImage);
openButton.addEventListener('click', popupWithProfile.open);
// profileCloseButton.addEventListener('click', closeProfilePopup);
allPopup.addEventListener('click', closePopupOverlay);



const validatorConfig = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input-text',
   submitButtonSelector: '.popup__submit-button',
   inactiveButtonClass: 'popup__submit-button_inactive',
   inputErrorClass: 'popup__input-text_error',
   errorClass: 'popup__form-error',
};

// const validatorEditProfile = new FormValidator(validatorConfig, formElement);
// validatorEditProfile.enableValidation();
const validarotAddCard = new FormValidator(validatorConfig, formAddedElement);
validarotAddCard.enableValidation();





