'use strict';
// Link scroll

const corpoItens = document.querySelectorAll('.corpo__itens');
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 190;

  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: 'smooth',
  });
}

//  Animation CSS
window.addEventListener('scroll', function () {
  corpoItens.forEach(item => {
    let itensTop = item.getBoundingClientRect().top;
    if (window.scrollY > itensTop - 120) {
      item.classList.add('animation__start');
      item.classList.remove('animation__end');
    } else {
      item.classList.add('animation__end');
      item.classList.remove('animation__start');
    }
  });
});

// Nav fixed
const menu = document.querySelector('.menu');
const navFixed = document.getElementById('home').getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > navFixed.top) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
});
