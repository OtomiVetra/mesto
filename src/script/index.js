import '../pages/index.css';
import { Card } from './components/Card.js';
import Section from "./components/Section.js";
import { initialCards } from './utils/initial-сards.js';
import PopupWithImage from './components/PopupWithImage';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';
import { FormValidator } from './components/Validate.js';
import { validatorConfig } from "./utils/constants.js"



const openButton = document.querySelector('.person__edit-button');
const openButtonAdded = document.querySelector('.profile__button');

const popupWhithImage = new PopupWithImage('.popup-image');
popupWhithImage.setEventListeners();
const userInfo = new UserInfo('.person__name', '.person__activity');
const popupWithProfile = new PopupWithForm('.profile-popup', userInfo.setUserInfo);
const validator = new FormValidator(validatorConfig, popupWithProfile.formEl);
validator.enableValidation();
popupWithProfile.setEventListeners();
openButton.addEventListener('click', () => {
   validator.resetFormState();
   popupWithProfile.open();
});

const cardRenderer = (item) => {
   const card = new Card(item, '.item_template', popupWhithImage.open);
   const cardElement = card.generateCard();
   section.addItem(cardElement);
};

const section = new Section({
   items: initialCards,
   renderer: cardRenderer
}, ".photos__cards");
section.renderCards();
const popupWithCard = new PopupWithForm('.popup-add-card', cardRenderer);
const cardValidator = new FormValidator(validatorConfig, popupWithCard.formEl);
cardValidator.enableValidation();
popupWithCard.setEventListeners();
openButtonAdded.addEventListener('click', () => {
   cardValidator.resetFormState();
   popupWithCard.open();
});