// Hamburger menu:
// mostrare / nascondere il menu principale
// // (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// Click Menu
const burgerClick = document.querySelector('.header-right > a');
burgerClick.addEventListener('click',
    function() {
        document.querySelector('.hamburger-menu').classList.toggle('active');
    }
);

const closeMenu = document.querySelector('.hamburger-menu > a');
closeMenu.addEventListener('click',
    function() {
        document.querySelector('.hamburger-menu').classList.remove('active');
    }
);