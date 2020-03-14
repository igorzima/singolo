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
let phoneOff = 0;
let phone2Off = 0;

NAVIGATION.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('navigation_active'));
    event.target.classList.add('navigation_active');
  }
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

PORTFOLIO_NAVIGATION.addEventListener('click', (event) => {
  if (event.target.classList.contains('portfolio__item')) {
    PORTFOLIO_NAVIGATION.querySelectorAll('li').forEach(el => el.classList.remove('portfolio__item_active'));
    event.target.classList.add('portfolio__item_active');

    let a = PORTFOLIO_LAYOUT.querySelectorAll('img');

    function putToCache(elem, cache){
      if(cache.indexOf(elem) !== -1){
        return;
      }
      var i = Math.floor(Math.random()*(cache.length + 1));
      cache.splice(i, 0, elem);
    }

    function madness(){
      var cache = [];
      return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
      }
    }

    function shuffle(arr){
      var compare = madness();
      return arr.sort(compare);
    }

    let b = Array.from(a);
    let shuffleB = shuffle(b);
    PORTFOLIO_LAYOUT.innerHTML = "";
    shuffleB.forEach(item => PORTFOLIO_LAYOUT.append(item));
  }
})

PORTFOLIO_LAYOUT.addEventListener('click', (event) => {
  if (event.target.classList.contains('portfolio__image')) {
    PORTFOLIO_LAYOUT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__image_bordered'));
    event.target.classList.add('portfolio__image_bordered');
  } else {
    PORTFOLIO_LAYOUT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__image_bordered'));
  }
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
  if(phoneOff === 1) {
    DARK_VERTICAL.classList.remove('hidden');
    phoneOff--
  } else if (phoneOff === 0) {
    DARK_VERTICAL.classList.add('hidden');
    phoneOff++
  }
  console.log(phoneoff)
})

HORIZONTAL_PHONE.addEventListener('click', (event) => {
  if(phone2Off === 1) {
    DARK_HORIZONTAL.classList.remove('hidden');
    phone2Off--
  } else if (phone2Off === 0) {
    DARK_HORIZONTAL.classList.add('hidden');
    phone2Off++
  }
  console.log(phone2off)
})