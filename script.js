'use strict';

let headerDark = document.querySelector('.headerDark');
let menu_bars = document.querySelector('.menu_bars');
let cross = document.querySelector('.cross');

function toggleMenu() {
    headerDark.classList.toggle('hidden');
}

menu_bars.addEventListener('click', toggleMenu);
cross.addEventListener('click', toggleMenu);