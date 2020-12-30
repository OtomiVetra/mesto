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


openButton.addEventListener('click', function () {
   popup.classList.add('popup_opened')
   nameInput.value = name.textContent;
   jobInput.value = job.textContent;
})
closeButton.addEventListener('click', function () {
   closePopup();
})




function handleFormSubmit(evt) {
   evt.preventDefault();
   name.textContent = nameInput.value;
   job.textContent = jobInput.value;
   closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);
