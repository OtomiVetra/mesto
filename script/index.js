let openButton = document.querySelector('.person__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.popup__submit-button');



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
submitButton.addEventListener('click', function () {
   popup.classList.remove('popup_opened')
})


