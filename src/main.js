import { ordenaZaA, ordenaAaZ } from './data.js';
import { result1to4, result5to7, result8to10 } from './data.js';
import { arrayChampions } from './data.js';
import { filter, minspellblock, maxspellblock, promediohp, promediomp, minarmor, maxarmor } from './data.js';
import data from './data/lol/lol.js';
console.log(data);

const containerChampions = document.getElementById('containerChampions');
const formulario = document.querySelector('#search1');
const boton = document.getElementById('buscarBoton');
const infoBuscador = document.getElementById('buscador');
const showChampions = document.getElementById("showChampions");
// formulario.innerHTML = '';
//Modal de bienvenida
let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let cerrar = document.getElementById('close');

cerrar.addEventListener('click', () => {
    modal.style.display = "none";
});


//MOSTRAR TODOS LOS CAMPEONES
for (const [key, value] of Object.entries(data.data)) {
    let id = value.id;
    let name = id.toUpperCase();
    let img = value.splash;
    let infoAttack = value.info.attack;
    let infoDefense = value.info.defense;
    //console.log(infoDefense);
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

//BUSCAR TODOS LOS CAMPEONES
boton.addEventListener("click", () => {
    containerChampions.classList.add("ocultar");
    infoBuscador.innerHTML = '';
    // console.log(formulario.value);
    const texto = formulario.value.toLowerCase();
    for (const [key, value] of Object.entries(data.data)) {
        let name = value.name.toLowerCase();
        let img = value.splash;
        let infoAttack = value.info.attack;
        let infoDefense = value.info.defense;
        //console.log(infoDefense);
        let infoMagic = value.info.magic;
        if (name.indexOf(texto) !== -1) {
            // const infoChampions = document.querySelector('#buscador');
            // infoBuscador.innerHTML += name
            const containerHero = document.createElement("div");
            containerHero.className = "containerHeroSearch";
            const nameHero = document.createElement("p");
            nameHero.innerHTML = name.toUpperCase();
            nameHero.className = "nameChampions";
            containerHero.appendChild(nameHero);

            const newDivImg = document.createElement("img");
            newDivImg.setAttribute("src", img);
            newDivImg.classList = "imgSearch"
            containerHero.appendChild(newDivImg)

            const containerInfo = document.createElement("div");
            containerInfo.className = "containerInfoSearch";

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
            infoBuscador.appendChild(containerHero);
        }
    };
    if (infoBuscador.innerHTML === '') {
        infoBuscador.innerHTML += "<span style = 'color:white;font-size:50px; font-weight: bolder;margin: 10px 40px 10px 430px;' > No results found 😖 </span>";
    }
    showChampions.classList.add("ocultar");
});
// formulario.addEventListener("keyup", filtrar)
const ordenar1 = document.getElementById("ordenar1");
const ordenar2 = document.getElementById("ordenar2");
const range1 = document.getElementById("rangeLow");
const range2 = document.getElementById("rangeModerate");
const range3 = document.getElementById("rangeHigh");
//Ordenar
//--DE LA A a Z
for (const [key, value] of Object.entries(ordenaAaZ)) {
    let id = value.id;
    //console.log(id);
    let name = id.toUpperCase();
    let img = value.splash;
    //console.log(img);
    let infoAttack = value.info.attack;
    //console.log(infoAttack);
    let infoDefense = value.info.defense;
    //console.log(infoDefense);
    let infoMagic = value.info.magic;
    //console.log(infoMagic);

    const infoOrder = document.getElementById("OrdenarAaZ");
    const containerOrder = document.createElement("div");
    containerOrder.className = "containerOrder";
    const nameOrder = document.createElement("p");
    nameOrder.innerHTML = name
    nameOrder.className = "namesChampions";
    containerOrder.appendChild(nameOrder);

    const ImgOrder = document.createElement("img");
    ImgOrder.setAttribute("src", img);
    ImgOrder.setAttribute("width", "200");
    ImgOrder.setAttribute("height", "150");
    containerOrder.appendChild(ImgOrder);

    const containerInfo = document.createElement("div");
    containerInfo.className = "containerInfo";

    const newDivAttackOrder = document.createElement("p");
    newDivAttackOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'>  Attack: </span>" + infoAttack;
    //newDivAttackOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivAttackOrder);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Defense: </span>" + infoDefense;
    //newDivDefenseOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivDefenseOrder);

    const newDivMagicOrder = document.createElement("p");
    newDivMagicOrder.innerHTML = "<span style = 'color:chocolate;font-weight: bolder;'> Magic: </span>" + infoMagic;
    //newDivMagicOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivMagicOrder);
    containerOrder.appendChild(containerInfo);

    infoOrder.appendChild(containerOrder);
};


const OrdenarAaZ = document.getElementById("AtoZ");
OrdenarAaZ.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    ordenar1.classList.add("ocultar");
    ordenar2.classList.remove("ocultar");
    range1.classList.add("ocultar");
    range2.classList.add("ocultar");
});
//--DE LA Z a A
for (const [key, value] of Object.entries(ordenaZaA)) {
    let id = value.id;
    //console.log(id);
    let name = id.toUpperCase();
    let img = value.splash;
    //console.log(img);
    let infoAttack = value.info.attack;
    //console.log(infoAttack);
    let infoDefense = value.info.defense;
    //console.log(infoDefense);
    let infoMagic = value.info.magic;
    //console.log(infoMagic);

    const infoOrder = document.getElementById("OrdenarZaA");
    const containerOrder = document.createElement("div");
    containerOrder.className = "containerOrder";
    const nameOrder = document.createElement("p");
    nameOrder.innerHTML = name
    nameOrder.className = "namesChampions";
    containerOrder.appendChild(nameOrder);

    const ImgOrder = document.createElement("img");
    ImgOrder.setAttribute("src", img);
    ImgOrder.setAttribute("width", "200");
    ImgOrder.setAttribute("height", "150");
    containerOrder.appendChild(ImgOrder);

    const containerInfo = document.createElement("div");
    containerInfo.className = "containerInfo";

    const newDivAttackOrder = document.createElement("p");
    newDivAttackOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'>  Attack: </span>" + infoAttack;
    //newDivAttackOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivAttackOrder);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Defense: </span>" + infoDefense;
    //newDivDefenseOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivDefenseOrder);

    const newDivMagicOrder = document.createElement("p");
    newDivMagicOrder.innerHTML = "<span style = 'color:chocolate;font-weight: bolder;'> Magic: </span>" + infoMagic;
    //newDivMagicOrder.className = "aboutInfo";
    containerInfo.appendChild(newDivMagicOrder);
    containerOrder.appendChild(containerInfo);
    infoOrder.appendChild(containerOrder);
};


const OrdenarZaA = document.getElementById("ZtoA");
OrdenarZaA.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    ordenar2.classList.add("ocultar");
    ordenar1.classList.remove("ocultar");
    range1.classList.add("ocultar");
    range2.classList.add("ocultar");
    range3.classList.add("ocultar");
});
//Type LEVEL DIFFICULTY
//1to4
for (const [key, value] of Object.entries(result1to4)) {
    let id = value.id;
    //console.log(id);
    let name = id.toUpperCase();
    let img = value.splash;
    let infoDifficulty = value.info.difficulty;
    // console.log(infoAblurb);

    const filterD = document.getElementById("Ordenar1to4");
    const containerF = document.createElement("div");
    containerF.className = "containerD";

    const nameF = document.createElement("p");
    nameF.innerHTML = name;
    nameF.className = "namesChampions";
    containerF.appendChild(nameF);

    const ImgAF = document.createElement("img");
    ImgAF.className = "imgAF"
    ImgAF.setAttribute("src", img);
    // ImgAF.setAttribute("width", "200");
    // ImgAF.setAttribute("height", "150");
    containerF.appendChild(ImgAF);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Difficulty: </span>" + infoDifficulty;
    containerF.appendChild(newDivDefenseOrder);
    filterD.appendChild(containerF);
};


const Ordenar1to4 = document.getElementById("range1to4");
Ordenar1to4.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    range1.classList.remove("ocultar");
    range3.classList.add("ocultar");
    range2.classList.add("ocultar");
    ordenar2.classList.add("ocultar");
    ordenar1.classList.add("ocultar");
});

//5to7
for (const [key, value] of Object.entries(result5to7)) {
    let id = value.id;
    //console.log(id);
    let name = id.toUpperCase();
    let img = value.splash;
    let infoDifficulty = value.info.difficulty;
    // console.log(infoAblurb);

    const filterD = document.getElementById("Ordenar5to7");
    const containerF = document.createElement("div");
    containerF.className = "containerD";

    const nameF = document.createElement("p");
    nameF.innerHTML = name;
    nameF.className = "namesChampions";
    containerF.appendChild(nameF);

    const ImgAF = document.createElement("img");
    ImgAF.setAttribute("src", img);
    ImgAF.className = "imgAF"
    containerF.appendChild(ImgAF);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Difficulty: </span>" + infoDifficulty;
    containerF.appendChild(newDivDefenseOrder);
    filterD.appendChild(containerF);
};


const Ordenar5to7 = document.getElementById("range5to7");
Ordenar5to7.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    range1.classList.add("ocultar");
    range2.classList.remove("ocultar");
    range3.classList.add("ocultar");
    ordenar2.classList.add("ocultar");
    ordenar1.classList.add("ocultar");
});

//8to10
for (const [key, value] of Object.entries(result8to10)) {
    let id = value.id;
    //console.log(id);
    let name = id.toUpperCase();
    let img = value.splash;
    let infoDifficulty = value.info.difficulty;
    // console.log(infoAblurb);

    const filterD = document.getElementById("Ordenar8to10");
    const containerF = document.createElement("div");
    containerF.className = "containerD";

    const nameF = document.createElement("p");
    nameF.innerHTML = name;
    nameF.className = "namesChampions";
    containerF.appendChild(nameF);

    const ImgAF = document.createElement("img");
    ImgAF.setAttribute("src", img);
    ImgAF.className = "imgAF"
    containerF.appendChild(ImgAF);

    const newDivDefenseOrder = document.createElement("p");
    newDivDefenseOrder.innerHTML = "<span style = 'color:white; font-weight: bolder;'> Difficulty: </span>" + infoDifficulty;
    containerF.appendChild(newDivDefenseOrder);

    filterD.appendChild(containerF);
};

const Ordenar8to10 = document.getElementById("range8to10");
Ordenar8to10.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    range3.classList.remove("ocultar");
    range1.classList.add("ocultar");
    range2.classList.add("ocultar");
    ordenar2.classList.add("ocultar");
    ordenar1.classList.add("ocultar");
});
//MOSTRAR TIPO DE CAMPEONES

const mostrarData = (array) => {
    //const array = Object.values();
    const containerGeneral = document.getElementById("containerChampions");
    containerGeneral.innerHTML = "";

    array.forEach(item => {
        let name = item.name;
        let nameChampions = name.toUpperCase();
        //console.log(nameChampions)
        let id = item.id;
        let idChampions = id.toUpperCase();
        // console.log(name)
        let img = item.splash;
        //console.log(img)
        let imgModal = item.img;
        let blurb = item.blurb;
        let attack = item.info.attack;
        let defense = item.info.defense;
        let magic = item.info.magic;
        let difficulty = item.info.difficulty;

        //CONTAINER GENERAL 
        const containerGeneral = document.getElementById("containerChampions");
        const container = document.createElement("div");

        container.setAttribute("id", "container")
        const names = document.createElement("p");
        names.innerHTML = nameChampions;
        names.className = "namesChampions";
        container.appendChild(names);

        const ImgChampions = document.createElement("img");
        ImgChampions.setAttribute("src", img);
        ImgChampions.setAttribute("width", "200");
        ImgChampions.setAttribute("height", "150");
        container.appendChild(ImgChampions);

        //CONTAINER MODAL CHAMPIONS
        const containerGeneralModal = document.createElement("div");
        containerGeneralModal.className = ("ocultar")
        containerGeneralModal.setAttribute("id", "containerModal")
        const containerModal = document.createElement("div");
        containerModal.className = ("miModales")
        const exis = document.createElement("a");
        exis.innerHTML = "x";
        exis.setAttribute("id", "closeModal");
        exis.addEventListener("click", () => {
            containerGeneralModal.classList.add("ocultar");
        });
        containerModal.appendChild(exis);
        const idModal = document.createElement("p");
        idModal.innerHTML = idChampions
        containerModal.appendChild(idModal);

        const containerPart1 = document.createElement("div");
        containerPart1.setAttribute("id", "containerPart1")
        const imgModalChampions = document.createElement("img");
        imgModalChampions.setAttribute("src", imgModal);
        imgModalChampions.setAttribute("width", "100");
        imgModalChampions.setAttribute("height", "100");
        imgModalChampions.className = "imgModalChampions"
        containerPart1.appendChild(imgModalChampions);

        const blurbModal = document.createElement("p")
        blurbModal.innerHTML = blurb;
        containerPart1.appendChild(blurbModal);
        containerModal.appendChild(containerPart1);

        const infoGeneral = document.createElement("div")
        const tablainfo = document.createElement("table");
        tablainfo.className = ("tableModel")
        const tableHead = document.createElement("thead");
        const trModal = document.createElement("tr")
        tableHead.appendChild(trModal);

        const thModal1 = document.createElement("th")
        thModal1.innerHTML = "Attack"
        const thModal2 = document.createElement("th")
        thModal2.innerHTML = "Defense"
        const thModal3 = document.createElement("th")
        thModal3.innerHTML = "Magic"
        const thModal4 = document.createElement("th")
        thModal4.innerHTML = "Difficulty"

        trModal.appendChild(thModal1);
        trModal.appendChild(thModal2);
        trModal.appendChild(thModal3);
        trModal.appendChild(thModal4);

        const tablebody = document.createElement("tbody");
        const trModals = document.createElement("tr")
        tablebody.appendChild(trModals);
        const tdModal1 = document.createElement("td")
        tdModal1.innerHTML = attack
        const tdModal2 = document.createElement("td")
        tdModal2.innerHTML = defense
        const tdModal3 = document.createElement("td")
        tdModal3.innerHTML = magic
        const tdModal4 = document.createElement("td")
        tdModal4.innerHTML = difficulty
        trModals.appendChild(tdModal1);
        trModals.appendChild(tdModal2);
        trModals.appendChild(tdModal3);
        trModals.appendChild(tdModal4);
        tablainfo.appendChild(tablebody);
        tablainfo.appendChild(tableHead);
        infoGeneral.appendChild(tablainfo);
        containerModal.appendChild(infoGeneral);

        containerGeneralModal.appendChild(containerModal);
        containerGeneral.appendChild(containerGeneralModal);

        const containerButtons = document.createElement("div");
        containerButtons.className = "containerButtons";
        const buttonInfoGeneral = document.createElement("a");
        buttonInfoGeneral.innerHTML = "Information";
        buttonInfoGeneral.className = " buttonInfoGeneral";
        buttonInfoGeneral.setAttribute("href", "#show");
        buttonInfoGeneral.setAttribute("id", "show");
        buttonInfoGeneral.addEventListener("click", () => {

            //Mostrar modal de informacion por tipo de campeon
            containerGeneralModal.classList.remove("ocultar");

            // document.getElementById("containerChampion").classList.remove("ocultar");

        })

        // const buttonStats = document.createElement("button");
        // buttonStats.innerHTML = "Stats";
        // buttonStats.className = "buttonStats";
        containerButtons.appendChild(buttonInfoGeneral);


        container.appendChild(containerButtons);

        containerGeneral.appendChild(container);
    });
    return
};
//console.log(mostrarData)
//mostrarData(filter.filtertype(lol.data, "Assassin"));

const showBuscador = document.getElementById("showBuscador")
const aside1 = document.getElementById("boxesSort")
const aside2 = document.getElementById("containerStats")
const search1 = document.getElementById("search1")
const searchBtn = document.getElementById("search-btn")
const search2 = document.getElementById("search2")
const searchBtn1 = document.getElementById("search-btn1")
const buttonType = document.querySelectorAll(".btnFilter");
for (let button of buttonType) {
    button.addEventListener("click", () => {
        range3.classList.add("ocultar");
        range1.classList.add("ocultar");
        range2.classList.add("ocultar");
        ordenar2.classList.add("ocultar");
        ordenar1.classList.add("ocultar");
        showBuscador.classList.add("ocultar");
        boton.classList.add("ocultar");
        search1.classList.add("ocultar");
        searchBtn.classList.add("ocultar");
        search2.classList.remove("ocultar");
        searchBtn1.classList.remove("ocultar");
        aside2.classList.remove("ocultar");
        aside1.classList.add("ocultar");
        const buttonId = button.getAttribute('id');
        const newArray = Object.values(data.data);
        const dataFilter = filter.filtertype(newArray, buttonId);
        mostrarData(dataFilter);

        // BUSCAR POT TIPO DE CAMPEON
        // const formularios = document.querySelector('#search2');
        // formularios.addEventListener("keyup", searchType)

        // function searchType(array, type) {
        //     const formularioSearch = array.filter((item) => {
        //         return item.name.includes(type)
        //     });
        //     console.log(formularioSearch);
        // }
        // searchType(dataFilter, formularios.value);

        const containerGeneral = document.getElementById("showstats");
        containerGeneral.innerHTML = "";
        containerGeneral.className = "styleshowstats"
            //Promedio HP
        let hp = promediohp(dataFilter);
        // console.log(hp);
        const container = document.createElement("div")
        container.className = "containerstats"
        const valorhp = document.createElement("p")
        valorhp.innerHTML = "<span> General Average HP: </span>" + hp;
        valorhp.className = "styleStats"

        container.appendChild(valorhp)
        containerGeneral.appendChild(container)

        //Promedio MP
        let mp = promediomp(dataFilter);
        // console.log(mp);
        const containers = document.createElement("div")
        containers.className = "containerstats"
        const valormp = document.createElement("p")
        valormp.innerHTML = "<span> General Average MP: </span>" + mp;
        valormp.className = "styleStats"
        containers.appendChild(valormp)
        containerGeneral.appendChild(containers)

        //Max Armor
        const maxArmor = (element) => {
            let maa = element.stats.armor;
            let name = element.name;
            let img = element.splash
                // console.log(maa);
            const container = document.createElement("div")
            container.className = "containerstats"
            const valormaa = document.createElement("p")
            valormaa.innerHTML = "<span> Max Armor: </span>" + maa;
            valormaa.className = "styleStats"
            container.appendChild(valormaa)

            const containerresult = document.createElement("div");
            containerresult.className = "containerResult"
            const names = document.createElement("p");
            names.innerHTML = "*" + name;
            names.className = "namesResult";
            containerresult.appendChild(names);

            const ImgChampions = document.createElement("img");
            ImgChampions.setAttribute("src", img);
            ImgChampions.className = "imgStats"

            containerresult.appendChild(ImgChampions);
            container.appendChild(containerresult)
            containerGeneral.appendChild(container)

            return
        };
        maxArmor(maxarmor(dataFilter));

        //Min Armor
        const minArmor = (element) => {
            let mia = element.stats.armor;
            let name = element.name;
            let img = element.splash
                // console.log(mia);
            const container = document.createElement("div")
            container.className = "containerstats"
            const valormia = document.createElement("p")
            valormia.innerHTML = "<span> Min Armor: </span>" + mia;
            valormia.className = "styleStats"
            container.appendChild(valormia)

            const containerresult = document.createElement("div");
            containerresult.className = "containerResult"
            const names = document.createElement("p");
            names.innerHTML = "*" + name;
            names.className = "namesResult";
            containerresult.appendChild(names);

            const ImgChampions = document.createElement("img");
            ImgChampions.setAttribute("src", img);
            ImgChampions.className = "imgStats"
            containerresult.appendChild(ImgChampions);
            container.appendChild(containerresult)
            containerGeneral.appendChild(container)
            return
        };
        minArmor(minarmor(dataFilter));

        //Max Spell
        const maxSpell = (element) => {
            let mas = element.stats.spellblock;
            let name = element.name;
            let img = element.splash
                // console.log(mas);
            const container = document.createElement("div")
            container.className = "containerstats"
            const valormas = document.createElement("p")
            valormas.innerHTML = "<span> Max Spell Block: </span>" + mas;
            valormas.className = "styleStats"
            container.appendChild(valormas)

            const containerresult = document.createElement("div");
            containerresult.className = "containerResult"
            const names = document.createElement("p");
            names.innerHTML = "*" + name;
            names.className = "namesResult";
            containerresult.appendChild(names);

            const ImgChampions = document.createElement("img");
            ImgChampions.setAttribute("src", img);
            ImgChampions.className = "imgStats"
            containerresult.appendChild(ImgChampions);
            container.appendChild(containerresult);
            containerGeneral.appendChild(container);
            return
        };
        maxSpell(maxspellblock(dataFilter));

        //Min Spell
        const minSpell = (element) => {
            let mis = element.stats.spellblock;
            let name = element.name;
            let img = element.splash
                // console.log(mis);
            const container = document.createElement("div")
            container.className = "containerstats"
            const valormis = document.createElement("p")
            valormis.innerHTML = "<span > Min Spell Block: </span>" + mis;
            valormis.className = "styleStats"
            container.appendChild(valormis)

            const containerresult = document.createElement("div");
            containerresult.className = "containerResult"
            const names = document.createElement("p");
            names.innerHTML = "*" + name;
            names.className = "namesResult";
            containerresult.appendChild(names);

            const ImgChampions = document.createElement("img");
            ImgChampions.setAttribute("src", img);
            ImgChampions.className = "imgStats"
            containerresult.appendChild(ImgChampions);
            container.appendChild(containerresult);
            containerGeneral.appendChild(container)
            return
        };
        minSpell(minspellblock(dataFilter));

    });
};

//Mostrar Título  por tipo de campeón

const assassin = document.getElementById("assassin")
const fighter = document.getElementById("fighter")
const mage = document.getElementById("mage")
const marksman = document.getElementById("marksman")
const tank = document.getElementById("tank")
const support = document.getElementById("support")
const buttonA = document.getElementById("Assassin")
const buttonF = document.getElementById("Fighter")
const buttonMg = document.getElementById("Mage")
const buttonMa = document.getElementById("Marksman")
const buttonT = document.getElementById("Tank")
const buttonS = document.getElementById("Support")
buttonA.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.remove("ocultar");
    fighter.classList.add("ocultar");
    mage.classList.add("ocultar");
    marksman.classList.add("ocultar");
    tank.classList.add("ocultar");
    support.classList.add("ocultar");
});

buttonF.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.add("ocultar");
    fighter.classList.remove("ocultar");
    mage.classList.add("ocultar");
    marksman.classList.add("ocultar");
    tank.classList.add("ocultar");
    support.classList.add("ocultar");
});
buttonMg.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.add("ocultar");
    fighter.classList.add("ocultar");
    mage.classList.remove("ocultar");
    marksman.classList.add("ocultar");
    tank.classList.add("ocultar");
    support.classList.add("ocultar");
});
buttonMa.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.add("ocultar");
    fighter.classList.add("ocultar");
    mage.classList.add("ocultar");
    marksman.classList.remove("ocultar");
    tank.classList.add("ocultar");
    support.classList.add("ocultar");
});
buttonT.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.add("ocultar");
    fighter.classList.add("ocultar");
    mage.classList.add("ocultar");
    marksman.classList.add("ocultar");
    tank.classList.remove("ocultar");
    support.classList.add("ocultar");
});
buttonS.addEventListener("click", () => {
    showChampions.classList.add("ocultar");
    assassin.classList.add("ocultar");
    fighter.classList.add("ocultar");
    mage.classList.add("ocultar");
    marksman.classList.add("ocultar");
    tank.classList.add("ocultar");
    support.classList.remove("ocultar");
})