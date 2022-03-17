const shareBtnListener = () => {
  const shareBtnPerson = document.querySelector('.card-person-share-btn');
  const shareBtn = document.querySelector('.card-share-btn');
  const sharePopup = document.querySelector('.wrapper');

  shareBtnPerson.addEventListener('click', () => {
    sharePopup.classList.toggle('show-box');
    shareBtnPerson.classList.toggle('active');
  });

  shareBtn.addEventListener('click', () => {
    sharePopup.classList.remove('show-box');
    shareBtnPerson.classList.remove('active');
  });
};
const init = () => {
  shareBtnListener();
};
init();
