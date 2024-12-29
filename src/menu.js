import krabbyPattyImg from './assets/Krabby_Patty_Transparent.png';
import ultiMeatum from './assets/Ulti-Meatum.png';
import JakeMostDeliciousSandwich from './assets/Jake_Most_Delicious_Sandwich.png';

import Ribwich from './assets/the_ribwich.png';

import SentientSandwich from './assets/Sentient_Sandwich.png';
import bobburger from './assets/bobsburgers.png';
import quickrevive from './assets/quickrevie.png';
import juggernog from './assets/Juggernog.png';


export const menupage = (content) => {
    content.className = ''; 
    content.classList.add('menu-content');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to the Menu Page';
    title.classList.add('menu-title');

    const description = document.createElement('p');
    description.textContent = 'Explore our variety of delicious burgers!';
    description.classList.add('menu-description');

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('menu-grid');

    const burgerItems = [
        {
            name: 'Krabby Patty',
            image: krabbyPattyImg,
            price: '$7.99',
            combo: '$12.99 meal combo'
        },
        {
            name: 'The Ulti-Meatum',
            image: ultiMeatum,
            price: '$8.99',
            combo: '$13.99 meal combo'
        },
        {
            name: 'Jakes Perfect Sandwich',
            image: JakeMostDeliciousSandwich,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
        {
            name: 'Ribwich',
            image: Ribwich,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
        {
            name: 'Special Sentient Sandwich',
            image: SentientSandwich,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
        {
            name: 'bobs burgers',
            image: bobburger,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
        {
            name: 'Quick revive',
            image: quickrevive,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
        {
            name: 'juggernog',
            image: juggernog,
            price: '$9.99',
            combo: '$14.99 meal combo'
        },
    ];

    burgerItems.forEach(item => {
        const burgerContainer = document.createElement('div');
        burgerContainer.classList.add('burger-container');

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const burgerImg = document.createElement('img');
        burgerImg.classList.add('menu-burger-img');
        burgerImg.src = item.image; 
        burgerImg.alt = item.name;

        const burgerTitle = document.createElement('h3');
        burgerTitle.textContent = item.name;

        const burgerPrice = document.createElement('div');
        burgerPrice.classList.add('price');
        burgerPrice.textContent = item.price;

        const burgerCombo = document.createElement('div');
        burgerCombo.classList.add('meal-combo');
        burgerCombo.textContent = item.combo;

        menuItem.appendChild(burgerImg);
        burgerContainer.appendChild(menuItem);
        burgerContainer.appendChild(burgerTitle);
        burgerContainer.appendChild(burgerPrice);
        burgerContainer.appendChild(burgerCombo);

        gridContainer.appendChild(burgerContainer);
    });

    //content.appendChild(title);
    //content.appendChild(description);
    content.appendChild(gridContainer);
};
