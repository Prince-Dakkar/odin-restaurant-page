console.log("Index reached ig.");

import load_home from './home';
import load_contact from './contact';
import load_menu from './menu';
import './style.css';

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
    load_home();
});
menu.addEventListener("click", () => {
    load_menu();
});
contact.addEventListener("click", () => {
    load_contact();
});

/** Load home initially */
load_home();
