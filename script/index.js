let openButton = document.querySelector('.person__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
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



function handleFormSubmit(evt) {
   evt.preventDefault();
   let nameInput = document.querySelector('.name');
   let jobInput = document.querySelector('.job');
   let name = document.querySelector('.person__name');
   let job = document.querySelector('.person__activity');
   name.textContent = nameInput.value;
   job.textContent = jobInput.value;
   popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);
