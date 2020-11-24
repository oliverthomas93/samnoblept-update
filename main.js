const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const lineOne = document.querySelector('.one');
const lineTwo = document.querySelector('.two');
const lineThree = document.querySelector('.three');

burger.addEventListener('click', addNavActive);

function addNavActive() {
  lineOne.classList.toggle('line-drop-left');
  if (lineTwo.style.opacity === '0') {
    lineTwo.style.opacity = '1';
  } else {
    lineTwo.style.opacity = '0';
  }
  lineThree.classList.toggle('line-drop-right');
  nav.classList.toggle('nav-active');
  navLinks.classList.toggle('nav-active');
}