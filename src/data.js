 //estas funciones son de ejemplo


 import lol from "./data/lol/lol.js";
 const arrayChampions = Object.values(lol.data);
 console.log(arrayChampions);

 const resultAllAssassin = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Assassin");
 });
 console.log(resultAllAssassin);

 const resultAllFighter = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Fighter");
 });
 console.log(resultAllFighter);

 const resultAllMage = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Mage");
 });
 //console.log(resultAllMage);

 const resultAllMarksman = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Marksman");
 });
 //console.log(resultAllMarksman);

 const resultAllTank = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Tank");
 });
 //console.log(resultAllTank);

 const resultAllSupport = arrayChampions.filter((objetoCampeon) => {
     return objetoCampeon.tags.includes("Support");
 });
 //console.log(resultAllSupport);

 const ordenaZaA = arrayChampions.sort((a, b) => {
     if (a.name < b.name) {
         return 1;
     }
     if (a.name > b.name) {
         return -1;
     }
     return 0;
 });
 console.log(ordenaZaA);

 export { lol, resultAllAssassin, resultAllFighter, resultAllMage, resultAllMarksman, resultAllTank, resultAllSupport, ordenaZaA }

 /*
  
  for (let i in resultAllTank) {
      console.log(` ${resultAllTank [i].name}`);
      //console.log(resultLol[i].name);
      console.log(` ${resultAllTank [i].splash}`);
      //console.log(resultLol[i].name);
      console.log(` Attack: ${resultAllTank [i].info.attack}`);
      console.log(` Defense: ${resultAllTank [i].info.defense}`);
      console.log(` Magic: ${resultAllTank [i].info.magic}`);
      console.log(` Difficulty: ${resultAllTank [i].info.difficulty}`);


      const resultAllMage = arrayChampions.filter((objetoCampeon) => {
          return objetoCampeon.tags.includes("Mage");
      });
      console.log(resultAllMage);
      for (let i in resultAllMage) {
          console.log(` ${resultAllMage[i].name}`);
          //console.log(resultLol[i].name);
          console.log(` ${resultAllMage[i].splash}`);
          //console.log(resultLol[i].name);
          console.log(` Attack: ${resultAllMage[i].info.attack}`);
          console.log(` Defense: ${resultAllMage[i].info.defense}`);
          console.log(` Magic: ${resultAllMage[i].info.magic}`);
          console.log(` Difficulty: ${resultAllMage[i].info.difficulty}`);

          const resultAllFighter = arrayChampions.filter((objetoCampeon) => {
              return objetoCampeon.tags.includes("Fighter");
          });
          console.log(resultAllFighter);
          for (let i in resultAllFighter) {
              console.log(` ${resultAllFighter[i].name}`);
              //console.log(resultLol[i].name);
              console.log(` ${resultAllFighter[i].splash}`);
              //console.log(resultLol[i].name);
              console.log(` Attack: ${resultAllFighter[i].info.attack}`);
              console.log(` Defense: ${resultAllFighter[i].info.defense}`);
              console.log(` Magic: ${resultAllFighter[i].info.magic}`);
              console.log(` Difficulty: ${resultAllFighter[i].info.difficulty}`);

              const resultAllMarksman = arrayChampions.filter((objetoCampeon) => {
                  return objetoCampeon.tags.includes("Marksman");
              });
              console.log(resultAllMarksman);
              for (let i in resultAllMarksman) {
                  console.log(` ${resultAllMarksman[i].name}`);
                  //console.log(resultLol[i].name);
                  console.log(` ${resultAllMarksman[i].splash}`);
                  //console.log(resultLol[i].name);
                  console.log(` Attack: ${resultAllMarksman[i].info.attack}`);
                  console.log(` Defense: ${resultAllMarksman[i].info.defense}`);
                  console.log(` Magic: ${resultAllMarksman[i].info.magic}`);
                  console.log(` Difficulty: ${resultAllMarksman[i].info.difficulty}`);

                  const resultAllSupport = arrayChampions.filter((objetoCampeon) => {
                      return objetoCampeon.tags.includes("Support");
                  });
                  console.log(resultAllSupport);
                  for (let i in resultAllSupport) {
                      console.log(` ${resultAllSupport[i].name}`);
                      //console.log(resultLol[i].name);
                      console.log(` ${resultAllSupport[i].splash}`);
                      //console.log(resultLol[i].name);
                      console.log(` Attack: ${resultAllSupport[i].info.attack}`);
                      console.log(` Defense: ${resultAllSupport[i].info.defense}`);
                      console.log(` Magic: ${resultAllSupport[i].info.magic}`);
                      console.log(` Difficulty: ${resultAllSupport[i].info.difficulty}`);










                      export const filter = {

                      type: function() {

                      }
                  };


                  //console.log(filterAssassin);





                  export const anotherExample = () => {
                      return 'OMG';
                  };*/