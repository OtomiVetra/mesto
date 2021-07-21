import '../pages/index.css';
import { Card } from './classes/Card.js';
import Section from "./classes/Section.js";
import { initialCards } from './initial-сards.js';
import PopupWithImage from './classes/PopupWithImage';
import PopupWithForm from './classes/PopupWithForm';
import UserInfo from './classes/UserInfo';

const openButton = document.querySelector('.person__edit-button');
const openButtonAdded = document.querySelector('.profile__button');

const popupWhithImage = new PopupWithImage('.popup-image');
const userInfo = new UserInfo('.person__name', '.person__activity');
const popupWithProfile = new PopupWithForm('.profile-popup', userInfo.setUserInfo);

const section = new Section({
   items: initialCards,
   renderer: (item, list) => {
      const card = new Card(item, '.item_template', popupWhithImage.open);
      const cardElement = card.generateCard();
      list.append(cardElement);
   }
}, ".photos__cards");
const popupWithCard = new PopupWithForm('.popup-add-card', section.addItem);

openButtonAdded.addEventListener('click', popupWithCard.open);
openButton.addEventListener('click', popupWithProfile.open);
