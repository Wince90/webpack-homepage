import '../scss/main.scss';
import moment from 'moment';
/* place your code below */


const name = 'Bartek Świder';
const age = 29;

console.log(`Witaj w consoli na tej stronie ja nazywam się ${name} i mam ${age} lat. Miło cię poznać`);

function welcome(name, lastName) {
    let name1 = name;
    let lastName1 = lastName;

    console.log (`Witaj ${name1} ${lastName1} na mojej stronie`);
}

console.log(welcome());

//nav button 

const navButton = document.querySelector(".navigation__button--js");

navButton.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js') ;
    console.log("ok");
    navigationList.classList.toggle('navigation__list--visible');
});


//moment script of actual time//
let acualTime = moment();

document.querySelector('.topHeader__timer-js').innerHTML = moment();

//Change theme script//

let isDark = false;
let button = document.querySelector('.changeTheme__button--js');

const switchThemeOfSite = () =>
{
  if(isDark) {
    isDark = false;
    console.log('hello');
    document.documentElement.style.setProperty('--changeTheme-background-color', '#fefefe')
    document.documentElement.style.setProperty('--button-background-color', 'gray')
    document.documentElement.style.setProperty('--button-color', 'white')
    button.innerHTML = "Dark"
  } else {
    isDark = true;
    console.log('Jest true')
    document.documentElement.style.setProperty('--changeTheme-background-color', 'gray')
    document.documentElement.style.setProperty('--button-background-color', 'white')
    document.documentElement.style.setProperty('--button-color', 'black')
    button.innerHTML = "White";
  }
}


button.addEventListener('click', switchThemeOfSite);
