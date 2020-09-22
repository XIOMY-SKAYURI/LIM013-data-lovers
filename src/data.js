import lol from "./data/lol/lol.js";
const arrayChampions = Object.values(lol.data);
console.log(arrayChampions);

//FILTRAR POR TIPO
const filter = {
        filtertype: function(dataChampions, type) {
            const resultType = dataChampions.filter((objetoCampeon) => {
                return objetoCampeon.tags.includes(type);
            });
            return resultType
        },

    }
    //console.log(filter.filtertype(arrayChampions,"Assassin"))

//MOSTRAR PROMEDIO VIDA
const promediohp = (dataChampionsType) => {
        const promTotal = dataChampionsType.reduce((total, currentChampions, index, array) => {
            total += currentChampions.stats.hp
            if (index === array.length - 1) {
                return (total / array.length).toFixed(2)
            } else {
                return total
            }
        }, 0)
        return (promTotal);
    }
    // const filterAssassin = filter.filtertype(arrayChampions, "Tank")
    // console.log(promediohp(filterAssassin));

//MOSTRAR PROMEDIO MANÁ 
const promediomp = (dataChampionsType) => {
    const promTotal = dataChampionsType.reduce((total, currentChampions, index, array) => {
        total += currentChampions.stats.mp
        if (index === array.length - 1) {
            return (total / array.length).toFixed(2)
        } else {
            return total
        }
    }, 0)
    return (promTotal);
}
const filterAssassin = filter.filtertype(arrayChampions, "Tank")
console.log(promediomp(filterAssassin));

//MOSTRAR MÁXIMO ARMOR

const maxarmor = (dataChampions) => {
    //recorrer la data con el sort
    dataChampions.sort(function(a, b) {
        if (a.stats.armor < b.stats.armor) {
            return 1;
        }
        if (a.stats.armor > b.stats.armor) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    let primero = dataChampions[0]

    return primero
};


const typeChampion = filter.filtertype(arrayChampions, "Assassin")
console.log(maxarmor(typeChampion));

//MOSTRAR MÍNIMO ARMOR
const minarmor = (dataChampions) => {
    //recorrer la data con el sort

    dataChampions.sort(function(a, b) {
        if (a.stats.armor > b.stats.armor) {
            return 1;
        }
        if (a.stats.armor < b.stats.armor) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    let primero = dataChampions[0]

    return primero
};
// const typeChampions = filter.filtertype(arrayChampions, "Assassin")
// console.log(minarmor(typeChampions));
//MOSTRAR MÁXIMO HECHIZO
const maxspellblock = (dataChampions) => {
    //recorrer la data con el sort
    dataChampions.sort(function(a, b) {
        if (a.stats.spellblock < b.stats.spellblock) {
            return 1;
        }
        if (a.stats.spellblock > b.stats.spellblock) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    let primero = dataChampions[0]

    return primero
};

// const typeChampions = filter.filtertype(arrayChampions, "Assassin")
// console.log(maxspellblock(typeChampions));
//MOSTRAR MÍNIMO HECHIZO
const minspellblock = (dataChampions) => {
    //recorrer la data con el sort
    dataChampions.sort(function(a, b) {
        if (a.stats.spellblock > b.stats.spellblock) {
            return 1;
        }
        if (a.stats.spellblock < b.stats.spellblock) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    let primero = dataChampions[0]

    return primero
};
const typeChampions = filter.filtertype(arrayChampions, "Assassin")




// FILTRAR POR NIVEL DE DIFICULTAD

const result1to4 = arrayChampions.filter((objetoCampeon) => {
    return objetoCampeon.info.difficulty >= 1 && objetoCampeon.info.difficulty <= 4
});
// console.log(result1to4);

const result5to7 = arrayChampions.filter((objetoCampeon) => {
    return objetoCampeon.info.difficulty >= 5 && objetoCampeon.info.difficulty <= 7
});
// console.log(result5to7);

const result8to10 = arrayChampions.filter((objetoCampeon) => {
    return objetoCampeon.info.difficulty >= 8 && objetoCampeon.info.difficulty <= 10
});
// console.log(result8to10);

const result = (a, b) => {
        return arrayChampions.filter((objetoCampeon) => {
            return objetoCampeon.info.difficulty >= a && objetoCampeon.info.difficulty <= b
        });
    }
    // console.log(result(8, 10));

//ORDENAR DE LA A-Z Y DE Z-A
//destructuracion y me trae todos los elementos
const newArrayChampions = [...arrayChampions]
const ordenaAaZ = newArrayChampions.sort((a, b) => {
    if (a.name < b.name) {
        return 1;
    }
    if (a.name > b.name) {
        return -1;
    }
    return 0;
});

// console.log(ordenaAaZ);

const newArrayChampionsNew = [...arrayChampions]
const ordenaZaA = newArrayChampionsNew.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});


// console.log(ordenaZaA);

export {
    arrayChampions,
    filter,
    promediomp,
    promediohp,
    maxarmor,
    minarmor,
    maxspellblock,
    minspellblock,
    result1to4,
    result5to7,
    result8to10,
    ordenaZaA,
    ordenaAaZ
}