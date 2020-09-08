import { resultAllAssassin } from './data.js';
import { resultAllFighter } from './data.js';
import { resultAllMage } from './data.js';
import { resultAllMarksman } from './data.js';
import { resultAllTank } from './data.js';
import { resultAllSupport } from './data.js';
import { ordenaZaA } from './data.js';
import data from './data/lol/lol.js';
console.log(data);

const buttonAssassin = document.getElementById("assassin");
const buttonFighter = document.getElementById("fighter");
const showChampions = document.getElementById("showChampions");
const showAssassin = document.getElementById("showAssassin");
const showFighter = document.getElementById("showFighter");

//MOSTRAR TODOS LOS CAMPEONES
console.log("hola");
for (const [key, value] of Object.entries(data.data)) {
    let id = value.id;
    let name = id.toUpperCase();
    let img = value.splash;
    let infoAttack = value.info.attack;
    let infoDefense = value.info.defense;
    let infoMagic = value.info.magic;

    const infoChampions = document.getElementById("information");
    const containerHero = document.createElement("div");
    containerHero.className = "containerHero";
    const nameHero = document.createElement("p");
    nameHero.innerHTML = name
    nameHero.className = "nameChampions";
    containerHero.appendChild(nameHero);

    const newDivImg = document.createElement("img");
    newDivImg.setAttribute("src", img);
    newDivImg.setAttribute("width", "200");
    newDivImg.setAttribute("height", "150");
    containerHero.appendChild(newDivImg)

    const containerInfo = document.createElement("div");
    containerInfo.className = "containerInfo";

    const newDivAttack = document.createElement("p");
    newDivAttack.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Attack: </span>" + infoAttack;
    // newDivAttack.className = "aboutInfo";
    containerInfo.appendChild(newDivAttack);
    containerHero.appendChild(containerInfo);

    const newDivDefense = document.createElement("p");
    newDivDefense.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Defense: </span>" + infoDefense;
    //newDivAttack.className = "aboutInfo";
    containerInfo.appendChild(newDivDefense)
    containerHero.appendChild(containerInfo);

    const newDivMagic = document.createElement("p");
    newDivMagic.innerHTML = "<span style = 'color:white;font-weight: bolder;'> Magic: </span>" + infoMagic;
    //newDivAttack.className = "aboutInfo";
    containerInfo.appendChild(newDivMagic);
    containerHero.appendChild(containerInfo);
    infoChampions.appendChild(containerHero);
};


//MOSTRAR TODOS LOS ASSESINOS
//Type Assassin
for (const [key, value] of Object.entries(resultAllAssassin)) {
    let id = value.id;
    let name = id.toUpperCase()
    let img = value.splash;
    let infoAblurb = value.blurb;


    const infoAssassin = document.getElementById("filterAssassin");
    const containerAssassin = document.createElement("div");
    containerAssassin.className = "containerAssassin";
    const nameAssassins = document.createElement("p");
    nameAssassins.innerHTML = name;
    nameAssassins.className = "namesChampions";
    containerAssassin.appendChild(nameAssassins);

    const ImgAssassin = document.createElement("img");
    ImgAssassin.setAttribute("src", img);
    ImgAssassin.setAttribute("width", "200");
    ImgAssassin.setAttribute("height", "150");
    containerAssassin.appendChild(ImgAssassin);

    const newDivBlurb = document.createElement("p");
    newDivBlurb.innerHTML = infoAblurb;
    newDivBlurb.className = "aboutInfo";
    containerAssassin.appendChild(newDivBlurb);

    const containerButtons = document.createElement("div");
    containerButtons.className = "containerButtons";
    const buttonInfoGeneral = document.createElement("button");
    buttonInfoGeneral.innerHTML = "Information";
    buttonInfoGeneral.className = " buttonInfoGeneral";
    const buttonStats = document.createElement("button");
    buttonStats.innerHTML = "Stats";
    buttonStats.className = "buttonStats";
    containerButtons.appendChild(buttonInfoGeneral);
    containerButtons.appendChild(buttonStats);
    containerAssassin.appendChild(containerButtons);

    infoAssassin.appendChild(containerAssassin);
};

buttonAssassin.addEventListener("click", () => {
    showAssassin.classList.remove("ocultar");
    showChampions.classList.add("ocultar");
    showFighter.classList.add("ocultar");

});


/*//Type Fighter
for (const [key, value] of Object.entries(resultAllFighter)) {
    let id = value.id;
    let name = id.toUpperCase()
    let img = value.splash;
    let infoAblurb = value.blurb;

    const infoFighter = document.getElementById("filterFighter");
    const containerFighter = document.createElement("div");
    containerFighter.className = "containerFighter";
    const nameFighter = document.createElement("p");
    nameFighter.innerHTML = name;
    nameFighter.className = "namesChampions";
    containerFighter.appendChild(nameFighter);

    const ImgFighter = document.createElement("img");
    ImgFighter.setAttribute("src", img);
    ImgFighter.setAttribute("width", "200");
    ImgFighter.setAttribute("height", "150");
    containerFighter.appendChild(ImgFighter);

    const newDivBlurb = document.createElement("p");
    newDivBlurb.innerHTML = infoAblurb;
    newDivBlurb.className = "aboutInfo";
    containerFighter.appendChild(newDivBlurb);

    const containerButtons = document.createElement("div");
    containerButtons.className = "containerButtons";
    const buttonInfoGeneral = document.createElement("button");
    buttonInfoGeneral.innerHTML = "Information";
    buttonInfoGeneral.className = " buttonInfoGeneral";
    const buttonStats = document.createElement("button");
    buttonStats.innerHTML = "Stats";
    buttonStats.className = "buttonStats";
    containerButtons.appendChild(buttonInfoGeneral);
    containerButtons.appendChild(buttonStats);
    containerFighter.appendChild(containerButtons);
    infoFighter.appendChild(containerFighter);
};

buttonFighter.addEventListener("click", () => {
    showAssassin.classList.add("ocultar");
    showFighter.classList.remove("ocultar");
    showChampions.classList.add("ocultar");
});



for (const [key, value] of Object.entries(ordenaZaA)) {
    let id = value.id;
    //console.log(id);
    let img = value.splash;
    //console.log(img);
    let infoAttackOrder = value.info.attack;
    // console.log(infoAttack);
    let infoDefenseOrder = value.info.defense;
    //console.log(infoDefense);
    let infoMagicOrder = value.info.magic;
    // console.log(infoMagic);
    let infoDifficultyOrder = value.info.difficulty;
    // console.log(infoDifficulty);

    const infoOrder = document.getElementById("OrdenarZaZ");
    const containerOrder = document.createElement("div");
    containerOrder.className = "containerOrder";
    const nameOrder = document.createElement("p");
    nameOrder.innerHTML = id
    nameOrder.className = "namesChampions";
    containerOrder.appendChild(nameOrder);

    const ImgOrder = document.createElement("img");
    ImgOrder.setAttribute("src", img);
    ImgOrder.setAttribute("width", "200");
    ImgOrder.setAttribute("height", "150");
    containerOrder.appendChild(ImgOrder);

    const newDivAttackOrder = document.createElement("p");
    newDivAttackOrder.innerHTML = "<span style = 'color:chocolate; font-weight: bolder;'>  Attack: </span>" + infoAttackOrder;
    newDivAttackOrder.className = "aboutInfo";
    containerOrder.appendChild(newDivAttackOrder);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:chocolate; font-weight: bolder;'> Defense: </span>" + infoDefenseOrder;
    newDivDefenseOrder.className = "aboutInfo";
    containerOrder.appendChild(newDivDefenseOrder);

    const newDivMagicOrder = document.createElement("p");
    newDivMagicOrder.innerHTML = "<span style = 'color:chocolate;font-weight: bolder;'> Magic: </span>" + infoMagicOrder;
    newDivMagicOrder.className = "aboutInfo";
    containerOrder.appendChild(newDivMagicOrder);

    const newDivDifficultyOrder = document.createElement("p");
    newDivDifficultyOrder.innerHTML = "<span style = 'color:chocolate;font-weight: bolder;'> Difficulty: </span>" + infoDifficultyOrder;
    newDivDifficultyOrder.className = "aboutInfo";
    containerOrder.appendChild(newDivDifficultyOrder);

    infoOrder.appendChild(containerOrder);
};
const infoChampions = document.getElementById("information")
const infoOrder = document.getElementById("OrdenarZaZ")
const OrdenarZaA = document.getElementById("ZaA");
OrdenarZaA.addEventListener("click", () => {
    infoChampions.classList.add("ocultar");
    infoOrder.classList.remove("ocultar");
});*/