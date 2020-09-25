import { arrayChampions, filter, promediohp, promediomp, maxarmor, minarmor, maxspellblock, minspellblock, result1to4, result5to7, result8to10, newArrayChampions, ordenaAaZ, ordenaZaA } from '../src/data.js';

describe('arrayChampions', () => {
    it('debería ser un una objeto', () => {
        expect(typeof arrayChampions).toBe('object');
    });
});

const championsTest = [{
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
        stats: {
            hp: 537.8,
            mp: 105.6,
            armor: 24.384,
            spellblock: 32.1,
        }
    },
    {
        name: "Bard",
        tags: ["Support", "Mage"],
        stats: {
            hp: 535,
            mp: 350,
            armor: 25,
            spellblock: 30,
        }
    },
    {
        name: "Caitlyn",
        tags: ["Marksman"],
        stats: {
            hp: 524.4,
            mp: 313.7,
            armor: 22.88,
            spellblock: 30,
        }
    },
    {
        name: "Darius",
        tags: ["Fighter", "Tank"],
        stats: {
            hp: 582.24,
            mp: 263,
            armor: 30,
            spellblock: 32.1,
        }
    },
    {
        name: "Zilean",
        tags: ["Support", "Mage"],
        stats: {
            hp: 499.28,
            mp: 360.8,
            armor: 19.134,
            spellblock: 30,
        }
    },
];



describe('filter', () => {
    it('debería ser un objeto', () => {
        expect(typeof filter).toBe('object');
    });
    describe('filter.filtertype', () => {
        it('debería ser una función', () => {
            expect(typeof filter.filtertype).toBe('function');
        });

        it('debería retornar Tank', () => {
            const championsTestResult = [{
                    name: "Aatrox",
                    tags: ["Fighter", "Tank"],
                    stats: {
                        hp: 537.8,
                        mp: 105.6,
                        armor: 24.384,
                        spellblock: 32.1,
                    }
                },
                {
                    name: "Darius",
                    tags: ["Fighter", "Tank"],
                    stats: {
                        hp: 582.24,
                        mp: 263,
                        armor: 30,
                        spellblock: 32.1,
                    }
                },

            ]
            expect(filter.filtertype(championsTest, "Tank")).toEqual(championsTestResult);
        });

    });
});

describe('promediohp', () => {
    it('debería ser una función', () => {
        expect(typeof promediohp).toBe('function');
    });

    it('debería ser un promeio de hp', () => {
        expect(promediohp(championsTest)).toEqual("535.74");
    });
});

describe('promediomp', () => {
    it('debería ser una función', () => {
        expect(typeof promediomp).toBe('function');
    });
    it('debería ser promedio mp', () => {
        expect(promediomp(championsTest)).toBe('278.62');
    });


});

describe('maxarmor', () => {
    it('debería ser una función', () => {
        expect(typeof maxarmor).toBe('function');
    });
    it('debería ser max armor', () => {
        const resultMaxAmor = {
            name: "Darius",
            tags: ["Fighter", "Tank"],
            stats: {
                hp: 582.24,
                mp: 263,
                armor: 30,
                spellblock: 32.1,
            },
        }
        expect(maxarmor(championsTest)).toEqual(resultMaxAmor);

    });

});

describe('minarmor', () => {
    it('debería ser una función', () => {
        expect(typeof minarmor).toBe('function');
    });

    it('debería ser min armor', () => {
        const resultMinAmor = {
            name: "Zilean",
            tags: ["Support", "Mage"],
            stats: {
                hp: 499.28,
                mp: 360.8,
                armor: 19.134,
                spellblock: 30,
            },
        }
        expect(minarmor(championsTest)).toEqual(resultMinAmor);
    });
});

describe('maxspellblock', () => {
    it('debería ser una función', () => {
        expect(typeof maxspellblock).toBe('function');
    });

    it('debería ser max spell', () => {

        const resultMaxSpell = {
            name: "Aatrox",
            tags: ["Fighter", "Tank"],
            stats: {
                hp: 537.8,
                mp: 105.6,
                armor: 24.384,
                spellblock: 32.1,
            },
        }
        expect(maxspellblock(championsTest)).toEqual(resultMaxSpell);
    });

});

describe('minspellblock', () => {
    it('debería ser una función', () => {
        expect(typeof minspellblock).toBe('function');
    });
});

describe('result1to4', () => {
    it('debería ser un una objeto', () => {
        expect(typeof result1to4).toBe('object');
    });
});

describe('result5to7', () => {
    it('debería ser un una objeto', () => {
        expect(typeof result5to7).toBe('object');
    });
});

describe('result8to10', () => {
    it('debería ser un una objeto', () => {
        expect(typeof result8to10).toBe('object');
    });
});

describe('newArrayChampions', () => {
    it('debería ser un undefined', () => {
        expect(typeof newArrayChampions).toBe('undefined');
    });
});

describe('ordenaAaZ', () => {
    it('debería ser un una objeto', () => {
        expect(typeof ordenaAaZ).toBe('object');
    });
});


describe('ordenaZaA', () => {
    it('debería ser un una objeto', () => {
        expect(typeof ordenaZaA).toBe('object');
    });

    it('returns datos ordenados de la Z a la A', () => {
        const championsTestResult = [{
                name: "Zilean",
                tags: ["Support", "Mage"],
                stats: {
                    armor: 19.134,
                    spellblock: 30,
                }
            },

            {
                name: "Darius",
                tags: ["Fighter", "Tank"],
                stats: {
                    armor: 30,
                    spellblock: 32.1,
                }
            },

            {
                name: "Caitlyn",
                tags: ["Marksman"],
                stats: {
                    armor: 22.88,
                    spellblock: 30,
                }
            },

            {
                name: "Bard",
                tags: ["Support", "Mage"],
                stats: {
                    armor: 25,
                    spellblock: 30,
                }
            },

            {
                name: "Aatrox",
                tags: ["Fighter", "Tank"],
                stats: {
                    armor: 24.384,
                    spellblock: 32.1,
                }
            },
        ];

        expect(ordenaZaA("Aatrox", "Bard", "Caitlyn", "Darius", "Zilean")).toBeLessThanOrEqual(championsTestResult);
    });
});


// describe('promediohp', () => {
//     it('is a function', () => {
//         expect(typeof promediohp).toBe('function');
//     });

//     it('returns `anotherExample`', () => {
//         expect(anotherExample()).toBe('OMG');
//     });