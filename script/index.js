let openButton = document.querySelector('.person__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__form');


    let togglePopup = function () {
   popup.classList.toggle('popup_opened');
}
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

popup.addEventListener('click', function () {
   if (event.target === popup) {
      popup.classList.remove('popup_opened');
   }
})
formElement.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (evt) {
   evt.preventDefault();
   document.querySelector('p.person__name').textContent = document.querySelector('.popup__input-text.name').value;
   document.querySelector('p.person__activity').textContent = document.querySelector('.popup__input-text.title').value;
   popup.classList.remove('popup_opened')
}