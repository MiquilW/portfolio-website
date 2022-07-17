const text1 = document.getElementById('one');
const text2 = document.getElementById('two');
const text3 = document.getElementById('three');
const div2 = document.getElementById('div-two');
const div2Before = window.getComputedStyle(document.querySelector('.front-two'), '::before').top;

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    text1.style.top = value * 0.4 + 'px';
    text2.style.top = value * 0.4 + 'px';
});


