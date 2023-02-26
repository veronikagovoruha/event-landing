const burgerBtn = document.querySelector(".header__burger");

function openMenu(){
    burgerBtn.classList.toggle('active');
    console.log('11');
}

burgerBtn.addEventListener('click', openMenu);