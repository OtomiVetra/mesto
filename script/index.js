const openButton = document.querySelector('.person__edit-button');
const popup = document.querySelector('.popup');
const profilePopup = document.querySelector('.profile-popup');
const closeButton = document.querySelector('.profile-popup__close-button');
const formElement = document.querySelector('.profile-popup__form');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_job');
const name = document.querySelector('.person__name');
const job = document.querySelector('.person__activity');
const cardNameInput = document.querySelector('.popup-add-card__input-name');
const cardLinkInput = document.querySelector('.popup-add-card__input-link');
//переменные открытия и закрытия попапа добавления картинки
const popupAdded = document.querySelector('.popup-add-card');
const openButtonAdded = document.querySelector('.profile__button');
const closeButtonAdded = document.querySelector('.popup-add-card__close-button');
//массив с изначальными карточками
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
const userTemplate = document.querySelector('.item_template').content;// template элемент
const list = document.querySelector('.photos__cards');// список куда вставляем элемент
const formAddedElement = document.querySelector('.popup-add-card__form')// форма добавления
//переменные для открытия картинки на весь экран
const popupImage = document.querySelector('.popup-image');
const picture = document.querySelector('.popup-image__image');
const imageTitle = document.querySelector('.popup-image__text');
const imageCloseButton = document.querySelector('.popup-image__close-button');

//универсальные функции открытия и закрытия
function closePopup(item) {
   item.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc);
}
function openPopup(item) {
   item.classList.add('popup_opened');
   document.addEventListener('keydown', closePopupEsc);
}
//функция закрытия попапа на esc
function closePopupEsc(evt) {
   if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
   }
}
const closeProfilePopup = function () {
   closePopup(profilePopup)
}
const openProfilePopup = function () {
   openPopup(profilePopup)
   nameInput.value = name.textContent;
   jobInput.value = job.textContent;
}
//открытие попапа ред
const openPopupAdded = function () {
   openPopup(popupAdded)
}

//закрытие попапа ред
const closePopupAdded = function () {
   closePopup(popupAdded)
}
//открытие картинки на весь экран
function zoom(element) {
   openPopup(popupImage);
   picture.src = element.link;
   imageTitle.textContent = element.name;
}

function closePopupOverlay(evt) {
   if (evt.target === evt.currentTarget) {
      closePopup(evt.target)
   }
}




// закртие попапа увеличенной картинки
const closePopupImage = function () {
   closePopup(popupImage);
}
openButton.addEventListener('click', openProfilePopup);
closeButton.addEventListener('click', closeProfilePopup);
popup.addEventListener('click', closePopupOverlay);


function handleFormSubmit(evt) {
   evt.preventDefault();
   name.textContent = nameInput.value;
   job.textContent = jobInput.value;
   closePopup(profilePopup);
}
formElement.addEventListener('submit', handleFormSubmit);
//4ая проектная

//отрисовка карточек
function render() {
   initialCards.forEach(renderItem);
}

function renderItem(item) {
   const userElement = createCard(item)
   list.append(userElement);
}
function createCard(item) {
   const userElement = userTemplate.cloneNode(true);
   const cardImage = userElement.querySelector('.card__image')
   userElement.querySelector('.card__title').textContent = item.name;
   userElement.querySelector('.card__delete-button').addEventListener('click', handleDelete);
   userElement.querySelector('.card__button').addEventListener('click', like);
   cardImage.src = item.link;
   cardImage.alt = item.name;
   cardImage.addEventListener('click', () => {
      zoom(item);
   });
   return userElement;
}

//добавление новой карточки с инфой из формы
function addition(evt) {
   const item = {
      name: cardNameInput.value,
      link: cardLinkInput.value
   }
   evt.preventDefault();
   list.prepend(createCard(item));
   closePopupAdded();
}
//реализация лайка
function like(evt) {
   evt.target.classList.toggle('card__button_active');
}


//удаление карточки

function handleDelete(evt) {
   evt.target.closest('.card').remove();
}
formAddedElement.addEventListener('submit', addition);
openButtonAdded.addEventListener('click', openPopupAdded);
closeButtonAdded.addEventListener('click', closePopupAdded);
popupAdded.addEventListener('click', closePopupOverlay);
imageCloseButton.addEventListener('click', closePopupImage);
popupImage.addEventListener('click', closePopupOverlay);


render()







