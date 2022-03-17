const shareBtnListener = () => {
  const shareBtnPerson = document.querySelector('.card-person-share-btn');
  const shareBtn = document.querySelector('.card-share-btn');
  const sharePopup = document.querySelector('.wrapper');

  shareBtnPerson.addEventListener('click', () => {
    sharePopup.classList.toggle('show-box');
  });

  shareBtn.addEventListener('click', () => {
    sharePopup.classList.remove('show-box');
  });
};
const init = () => {
  shareBtnListener();
};
init();
