'use strict';
// Declaration DOM
const menu = document.querySelector('.menu');
const corpoItens = document.querySelectorAll('.corpo__itens');

// Link scroll
document.querySelectorAll('.menu__superior--itens a').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

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
