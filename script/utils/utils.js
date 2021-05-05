export { openPopup, closePopup, closePopupEsc, closePopupOverlay };
function openPopup(item) {
   item.classList.add('popup_opened');
   document.addEventListener('keydown', closePopupEsc);
}
function closePopup(item) {
   item.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupEsc);
}
function closePopupEsc(evt) {
   if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
   }
}
function closePopupOverlay(evt) {
   if (evt.target === evt.currentTarget) {
      closePopup(evt.target)
   }
}