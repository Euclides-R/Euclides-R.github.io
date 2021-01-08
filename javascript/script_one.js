//IDENTIFICAR O CLIQUE DO MENU
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 100;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

//IDENTIFICAR QUANDO O USUÁRIO UTILIZA O SCROLL
//CALCULAR A DISTÂNCIA TOPO DA PÁGINA E O SCROLL
//CALCULAR A DISTÂNCIA ENTRE O TOPO DA PÁGINA E O ELEMENTO QUE DESEJA ANIMAR
//COMPARAR AS DUAS DISTÂNCIAS ANTERIORES
//ADICIONAR UMA CLASSE COM CSS ANIMATION OU TRANSITION AO ELEMENTO ANIMADO
// Debounce do Lodash


debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function() {
    var $target = $('.animation'),
        animationClass = 'animation__start',
        offSet = $(window).height() * 3 / 4;

    function animationScroll() {
        var distanciaTop = $(document).scrollTop();
        $target.each(function() {
            var itemTop = $(this).offset().top;

            if (distanciaTop > itemTop - offSet) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animationScroll();

    $(document).scroll(debounce(function() {
        animationScroll();
    }, 200));
})();