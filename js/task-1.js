'use strict'
const catigories = document.querySelector('#categories');
console.log('Number of catigories:', catigories.children.length);

const item = document.querySelectorAll('.item');

item.forEach(function (item) {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length)
})