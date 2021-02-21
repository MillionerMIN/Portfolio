'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const procent = document.querySelectorAll(".work__progress-procent"),
        lines = document.querySelectorAll(".work__progress-line span");

    procent.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

});







