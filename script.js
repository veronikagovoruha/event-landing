const burgerBtn = document.querySelector(".header__burger");
const headerBtn = document.querySelector('.header');

function openMenu(){
    burgerBtn.classList.toggle('active');
    headerBtn.classList.toggle('open')
}

burgerBtn.addEventListener('click', openMenu);