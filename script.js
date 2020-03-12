const NAVIGATION = document.getElementById('navigation');
const PORTFOLIO_NAVIGATION = document.getElementById('portfolio__navigation');
const PORTFOLIO_LAYOUT = document.getElementById('portfolio__layout');
const LEFT_ARROW = document.getElementById('left-arrow');
const RIGHT_ARROW = document.getElementById('right-arrow');
const SLIDER = document.getElementById('slider');
const SLIDE1 = document.getElementById('slide1');
const SLIDE2 = document.getElementById('slide2');
const VERTICAL_PHONE = document.getElementById('vertical-phone');
const HORIZONTAL_PHONE = document.getElementById('horizontal-phone');
const DARK_VERTICAL = document.getElementById('dark-vertical');
const DARK_HORIZONTAL = document.getElementById('dark-horizontal');

let slide = 0;
let dark = 0;

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('navigation_active'));
  event.target.classList.add('navigation_active');
})

PORTFOLIO_NAVIGATION.addEventListener('click', (event) => {
  PORTFOLIO_NAVIGATION.querySelectorAll('li').forEach(el => el.classList.remove('portfolio__item_active'));
  event.target.classList.add('portfolio__item_active');
})

PORTFOLIO_LAYOUT.addEventListener('click', (event) => {
  PORTFOLIO_LAYOUT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__image_bordered'));
  event.target.classList.add('portfolio__image_bordered');
})

LEFT_ARROW.addEventListener('click', (event) => {
  if(slide === 0) {
    SLIDER.classList.add('slider-next')
    SLIDE1.classList.add('hidden');
    SLIDE2.classList.remove('hidden');
    slide++
  } else if(slide === 1) {
    let a = SLIDER.classList.remove('slider-next')
    let b = SLIDE1.classList.remove('hidden');
    let с = SLIDE2.classList.add('hidden');
    slide--
  }
})

RIGHT_ARROW.addEventListener('click', (event) => {
  if (slide === 0) {
    SLIDER.classList.add('slider-next')
    SLIDE1.classList.add('hidden');
    SLIDE2.classList.remove('hidden');
    slide++
  } else if (slide === 1) {
    let a = SLIDER.classList.remove('slider-next')
    let b = SLIDE1.classList.remove('hidden');
    let с = SLIDE2.classList.add('hidden');
    slide--
  }
})

VERTICAL_PHONE.addEventListener('click', (event) => {
  if(dark === 1) {
    DARK_VERTICAL.classList.remove('hidden');
    dark--
  } else if (dark === 0) {
    DARK_VERTICAL.classList.add('hidden');
    dark++
  }
})

HORIZONTAL_PHONE.addEventListener('click', (event) => {
  if(dark === 1) {
    DARK_HORIZONTAL.classList.remove('hidden');
    dark--
  } else if (dark === 0) {
    DARK_HORIZONTAL.classList.add('hidden');
    dark++
  }
})