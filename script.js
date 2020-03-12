const NAVIGATION = document.getElementById('navigation');
const PORTFOLIO_NAVIGATION = document.getElementById('portfolio__navigation');
const PORTFOLIO_LAYOUT = document.getElementById('portfolio__layout');
const SLIDER = 

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