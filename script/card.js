const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

const popupImage = document.querySelector('.popup-image');
const picture = document.querySelector('.popup-image__image');
const imageTitle = document.querySelector('.popup-image__text');
const imageCloseButton = document.querySelector('.popup-image__close-button');


class Card {
   constructor(data, cardSelector) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
   }
   _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector)
         .content
         .cloneNode(true);
      return cardElement;
   }
   generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__title').textContent = this._name;
      return this._element;
   }
   _handleOpenPopup() {
      picture.src = this._image;
      popupImage.classList.add('popup_opened');
   }
   _handleClosePopup() {
      picture.src = '';
      popupImage.classList.remove('popup_opened');
   }
   _like() {
      function like(evt) {
         evt.target.classList.toggle('card__button_active');
      }
   }
   _setEventListeners() {
      this._element.addEventListener('click', () => {
         this._handleOpenPopup();
      });
      imageCloseButton.addEventListener('click', () => {
         this._handleClosePopup();
      })
   }
}
initialCards.forEach((item) => {
   const card = new Card(item, '.item_template');
   const cardElement = card.generateCard();
   document.querySelector('.photos__cards').append(cardElement);
});