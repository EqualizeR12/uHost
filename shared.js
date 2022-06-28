const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButton = document.querySelectorAll('.plan .button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style.backgroundImage);
// console.dir(backdrop.style['background-image']);
// console.dir(backdrop);
// console.log(selectPlanButton)

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open';//Это перезапишет полный список классов
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  //   backdrop.style.display = 'none';
  //   modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
  //   mobileNav.style.display = 'block';
  //   backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
