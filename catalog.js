'use strict';

let leftPopup = document.querySelector('.left-popup');
let filtersTxt = document.querySelector('.filters__txt');
let filtersImg = document.querySelector('.filters__img');
let filtersButton = document.querySelector('.filters__button');

filtersButton.addEventListener('click', function () {
    leftPopup.classList.toggle('hidden');
    filtersTxt.classList.toggle('filters__txt--pink');
    filtersImg.classList.toggle('filters__img--pink');
});

let leftHeading = document.querySelectorAll('.left-popup__heading');
leftHeading.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let sizeList = document.querySelector('.size__list');
let sizeBtn = document.querySelector('.size_button');
sizeBtn.addEventListener('click', function () {
    sizeList.classList.toggle('hidden');
});