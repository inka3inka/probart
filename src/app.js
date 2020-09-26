import "../styles/main.scss";

const advertise = document.querySelector('.header__advertise');
const advertiseUrl = '../assets/wooden_floor.jpg';
const realizationsTile1 = document.querySelector('.realizations__container div:first-of-type');
const realizationsTile1Url = '../assets/wooden1.jpeg';
const realizationsTile2 = document.querySelector('.realizations__container div:last-of-type');
const realizationsTile2Url = '../assets/wooden2.jpeg';


// Set background-image for header__advertise - doest't work in css because of webpack configuration
advertise.setAttribute("style", "background-image: url('"+advertiseUrl+"')")
realizationsTile1.setAttribute("style", "background-image: url('"+realizationsTile1Url+"')")
realizationsTile2.setAttribute("style", "background-image: url('"+realizationsTile2Url+"')")