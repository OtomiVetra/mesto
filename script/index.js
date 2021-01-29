let openButton = document.querySelector('.person__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');
let name = document.querySelector('.person__name');
let job = document.querySelector('.person__activity');
let closePopup = function () {
   popup.classList.remove('popup_opened');
}
let openPopup = function () {
   popup.classList.add('popup_opened')
   nameInput.value = name.textContent;
   jobInput.value = job.textContent;
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


function handleFormSubmit(evt) {
   evt.preventDefault();
   name.textContent = nameInput.value;
   job.textContent = jobInput.value;
   closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);
//4ая проектная

const popupAdded = document.querySelector('.popup-added');
const openButtonAdded = document.querySelector('.profile__button');
const closeButtonAdded = document.querySelector('.popup-added__close-button');
const openPopupAdded = function () {
   popupAdded.classList.add('popup-added_opened');
}
const closePopupAdded = function () {
   popupAdded.classList.remove('popup-added_opened');
}
openButtonAdded.addEventListener('click', openPopupAdded);
closeButtonAdded.addEventListener('click', closePopupAdded);


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
const formAddedElement = document.querySelector('.popup-added__form')// форма добавления


//отрисовка карточек
function render() {
   initialCards.forEach(renderItem);
}

function renderItem(item) {
   const userElement = userTemplate.cloneNode(true);
   userElement.querySelector('.card__title').textContent = item.name;
   userElement.querySelector('.card__image').src = item.link;
   userElement.querySelector('.card__delete-button').addEventListener('click', handleDelete);
   userElement.querySelector('.card__button').addEventListener('click', like);
   userElement.querySelector('.card__image').addEventListener('click', () => {
      zoom(item);
   });
   list.append(userElement);
}



function zoom(element) {
   popupImage.classList.add('popup-image_opened');
   picture.src = element.link;
   imageTitle.textContent = element.name;
   /* console.log('zoom'); */
}

//добавление новой карточки с инфой из формы
function addition(evt) {
   let item = {
      name: document.querySelector('.popup-added__input-text_type_name').value,
      link: document.querySelector('.popup-added__input-text_type_link').value
   }
   evt.preventDefault();
   renderItem(item);

   closePopupAdded();
}

formAddedElement.addEventListener('submit', addition);
//реализация лайка
function like(evt) {
   evt.target.classList.toggle('card__button_active');
}

//переменные для открытия картинки на весь экран

const popupImage = document.querySelector('.popup-image');
const picture = document.querySelector('.popup-image__image');
const imageTitle = document.querySelector('.popup-image__text');
const imageCloseButton = document.querySelector('.popup-image__close-button');


// закртие попапа увеличенной картинки
function closePopupImage() {
   popupImage.classList.remove('popup-image_opened');
}
imageCloseButton.addEventListener('click', closePopupImage);

//удаление карточки

function handleDelete(evt) {
   evt.target.closest('.card').remove();
}

render()







