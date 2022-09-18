let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let map = document.querySelector('.map');
let sedonaMap = document.querySelector('.sedona-map');

navMain.classList.remove('main-nav--nojs');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

map.classList.remove('map--nojs');
sedonaMap.classList.remove('sedona-map--nojs');
