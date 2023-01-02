'use strict';

// inputs and buttons
const inputDay = document.querySelector('.input__day');
const inputMonth = document.querySelector('.input__month');
const inputYear = document.querySelector('.input__year');
const labelResult = document.querySelector('.label__result');
const btnCheck = document.querySelector('.button__check');

// QUICK BIRTHDAY PROJECT
const date = new Date();
const curYear = date.getFullYear();
const curMonth = date.getMonth() + 1;
const curDay = date.getDate();

btnCheck.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('button has been clicked');
})
