import '../scss/main.scss';

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

const navButton = document.querySelector(".navigation__button--js");

navButton.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js') ;
    console.log(navigationList);
    navigationList.classList.toggle('navigation__list--visible');
});
