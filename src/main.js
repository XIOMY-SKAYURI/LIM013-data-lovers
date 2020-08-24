import { lol } from './data.js';
import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(lol, data);
const logo = document.getElementById("logo");
const userName = document.getElementById("userName");
const screen2 = document.getElementById("screen2");
const play = document.getElementById("play");
//Para ocultar la primera pantalla
play.addEventListener("click", () => {
    logo.classList.add("ocultar");
    play.classList.add("ocultar");
    userName.classList.add("ocultar");
    screen2.classList.remove("ocultar");
})

let letsPlay = document.getElementById("play");
letsPlay.addEventListener("click", () => {
    let names = document.getElementById("userName").value;
    let userNames = names;
    document.getElementById("showName").innerHTML = userNames;
    return userNames
})