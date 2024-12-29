import './styles/style.css'; 
import './styles/general.css'; 
import './styles/home.css'; 
import './styles/menu.css';
import './styles/about.css'


import { homepage } from "./home";
import { menupage } from './menu';
import {aboutpage} from './about'
//home button menu and about
const homeBTN = document.querySelector(".home-btn");
const menuBTN = document.querySelector(".menu-btn");
const aboutBTN = document.querySelector(".about-btn");

//content
const content = document.querySelector("#content");



homepage(content);


homeBTN.addEventListener('click', function () {
    content.innerHTML = '';
    homepage(content);
});



menuBTN.addEventListener('click', function () {
    content.innerHTML = '';
    menupage(content)

});


aboutBTN.addEventListener('click', function () {
    content.innerHTML = '';
    aboutpage(content)
});


