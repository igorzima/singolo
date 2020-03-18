const NAVIGATION = document.getElementById('navigation');
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

PORTFOLIO_LAYOUT.addEventListener('click', (event) => {
  if (event.target.classList.contains('portfolio__image')) {
    PORTFOLIO_LAYOUT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__image_bordered'));
    event.target.classList.add('portfolio__image_bordered');
  } else {
    PORTFOLIO_LAYOUT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__image_bordered'));
  }
})

LEFT_ARROW.addEventListener('click', (event) => {
  if(SLIDER.classList.contains('slider-next')) {
    SLIDER.classList.remove('slider-next')

    SLIDE1.classList.remove('slide-left');
    SLIDE1.classList.remove('slide-right');
    SLIDE1.classList.add('slide-center');
    SLIDE2.classList.remove('slide-center');
    SLIDE2.classList.add('slide-left');
    SLIDE2.classList.remove('slide-right');
  } else {
    SLIDER.classList.add('slider-next')

    SLIDE1.classList.add('slide-left');
    SLIDE1.classList.remove('slide-center');
    SLIDE1.classList.remove('slide-right');
    SLIDE2.classList.add('slide-center');
    SLIDE2.classList.remove('slide-left');
    SLIDE2.classList.remove('slide-right');
  }
})

RIGHT_ARROW.addEventListener('click', (event) => {
  if (SLIDER.classList.contains('slider-next')) {
    SLIDER.classList.remove('slider-next')

    SLIDE1.classList.remove('slide-right');
    SLIDE1.classList.remove('slide-left');
    SLIDE1.classList.add('slide-center');
    SLIDE2.classList.add('slide-right');
    SLIDE2.classList.remove('slide-center');
    SLIDE2.classList.remove('slide-left');
  } else {
    SLIDER.classList.add('slider-next')

    SLIDE1.classList.add('slide-right');
    SLIDE1.classList.remove('slide-center');
    SLIDE1.classList.remove('slide-left');
    SLIDE2.classList.add('slide-center');
    SLIDE2.classList.remove('slide-right');
    SLIDE2.classList.remove('slide-left');
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