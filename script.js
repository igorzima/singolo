const NAVIGATION = document.getElementById('navigation');
const HEADER_NAVIGATION = document.getElementById('header__navigation');
const PORTFOLIO_NAVIGATION = document.getElementById('portfolio__navigation');
const PORTFOLIO_LAYOUT = document.getElementById('portfolio__layout');
const LEFT_ARROW = document.getElementById('left-arrow');
const RIGHT_ARROW = document.getElementById('right-arrow');
const SLIDER = document.getElementById('slider');
const SLIDE1 = document.getElementById('slide1');
const SLIDE2 = document.getElementById('slide2');
const VERTICAL_PHONE = document.getElementById('vertical-phone__area');
const HORIZONTAL_PHONE = document.getElementById('horizontal-phone__area');
const DARK_VERTICAL = document.getElementById('dark-vertical');
const DARK_HORIZONTAL = document.getElementById('dark-horizontal');
const SUBMIT = document.getElementById('submit');
const CLOSE_BTN = document.getElementById('close-btn');
const MAIL = document.getElementById('mail');
const FNAME = document.getElementById('fname');
const HAMBURGER = document.getElementById('burger__container');

let items = document.querySelectorAll('.slides .slides__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slide-active', direction);
  })
}

function showItem(direction) {
  items[currentItem].classList.add('slide-next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('slide-next', direction);
		this.classList.add('slide-active');
		isEnabled = true;
  })
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPos = window.scrollY;
  const section = document.querySelectorAll('body>section');
  const links = document.querySelectorAll('.header__navigation a');

  section.forEach((el) => {
    if (el.offsetTop <= curPos + 2 && (el.offsetTop + el.offsetHeight) > curPos + 2) {
      links.forEach((a) => {
        a.classList.remove('navigation_active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('navigation_active');    
        } else if (el.getAttribute('id') === 'slider') {
          let home = document.getElementById('home-link');
          home.classList.add('navigation_active');
        }
      })
    }
  })
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

HAMBURGER.addEventListener('click', () => {
  if (HEADER_NAVIGATION.classList.contains('header__navigation')) {
    HEADER_NAVIGATION.classList.remove('header__navigation');
    HEADER_NAVIGATION.classList.add('mobile__navigation');
    HAMBURGER.classList.add('burger_rotate');
    document.querySelector('.header-layout').style = 'margin-right: 50%;';
    document.querySelector('.blur').style = 'display: block';
  } else {
    HEADER_NAVIGATION.classList.remove('mobile__navigation');
    HEADER_NAVIGATION.classList.add('header__navigation');
    HAMBURGER.classList.remove('burger_rotate');
    document.querySelector('.header-layout').style = 'margin-right: 0';
    document.querySelector('.blur').style = 'display: none';
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

LEFT_ARROW.addEventListener('click', () => {
  if(SLIDER.classList.contains('slider-next')) {
    SLIDER.classList.remove('slider-next')
  } else {
    SLIDER.classList.add('slider-next')
  }
  if (isEnabled) {
    previousItem(currentItem);
	}
})

RIGHT_ARROW.addEventListener('click', () => {
  if (SLIDER.classList.contains('slider-next')) {
    SLIDER.classList.remove('slider-next')
  } else {
    SLIDER.classList.add('slider-next')
  }
  if (isEnabled) {
    nextItem(currentItem);
	}
})

VERTICAL_PHONE.addEventListener('click', (event) => {
  if(DARK_VERTICAL.classList.contains('hidden')) {
    DARK_VERTICAL.classList.remove('hidden');
  } else {
    DARK_VERTICAL.classList.add('hidden');
  }
})

HORIZONTAL_PHONE.addEventListener('click', (event) => {
  if(DARK_HORIZONTAL.classList.contains('hidden')) {
    DARK_HORIZONTAL.classList.remove('hidden');
  } else {
    DARK_HORIZONTAL.classList.add('hidden');
  }
})

SUBMIT.addEventListener('click', (event) => {
  const subject = document.getElementById('subject').value.toString();
  const describe = document.getElementById('describe').value.toString();

  if (MAIL.validity.valid && FNAME.validity.valid) {
    event.preventDefault();

    if (subject === 'Singolo') {
      document.getElementById('topic').innerText = 'Тема: Singolo';
    } else if (subject) {
      document.getElementById('topic').innerText = subject;
    } else {
      document.getElementById('topic').innerText = 'Без описания';
    }

    if (describe === 'Portfolio project') {
      document.getElementById('description').innerText = 'Описание: Portfolio project';
    } else if (describe) {
      document.getElementById('description').innerText = describe;
    } else {
      document.getElementById('description').innerText = 'Без описания';
    }

    document.getElementById('message-block').classList.remove('hidden');
  }
})

CLOSE_BTN.addEventListener('click', (event) => {
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('form').reset();
})


HEADER_NAVIGATION.querySelectorAll('.navigation__item').forEach(el => el.addEventListener('click', () => {
  HEADER_NAVIGATION.classList.remove('mobile__navigation');
  HAMBURGER.classList.remove('burger_rotate');
  HEADER_NAVIGATION.classList.add('header__navigation');
  document.querySelector('.header-layout').style = 'margin-right: 0';
  document.querySelector('.blur').style = 'display: none';
}))