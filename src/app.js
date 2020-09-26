import "../styles/main.scss";

const advertise = document.querySelector('.header__advertise');
const advertiseUrl = '../assets/wooden_floor.jpg'


// Set background-image for header__advertise - doest't work in css because of webpack configuration
advertise.setAttribute("style", "background-image: url('"+advertiseUrl+"')")