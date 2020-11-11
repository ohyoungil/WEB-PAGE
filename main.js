const navbarMenu = document.querySelector('.navbar__menu');
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('act');
})