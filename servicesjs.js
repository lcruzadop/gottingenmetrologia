let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
var cerrado = true;

//codigo
function menus() {

        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '0.5s';
        menu.style.top = '100px';
        abrir.style.color = '#000'
    
}
function apertura() {
    if (cerrado) {
        menu.style.width = '40vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
window.addEventListener('resize', function () {
    if (screen.width >= 960) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');

    }
});
window.addEventListener('scroll', function () {
    menus();
});
window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
abrir.addEventListener('click', function () {
    apertura();
});

window.addEventListener('click', function (e) {
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            apertura();
        }
    }
});