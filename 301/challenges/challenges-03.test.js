"use strict";

/* ------------------------------------------------------------------------------------------------

CC 03 - Array.filter()

/* ------------------------------------------------------------------------------------------------

DESAFÍO 1 - Revisión

Escribe una función llamada addTwo que tome un array y sume dos a cada valor usando un bucle for. Coloca el nuevo valor en un nuevo array. Devuelve el nuevo array.
------------------------------------------------------------------------------------------------ */

const addTwo = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 2

Escribe una función llamada typeNum que, dado un array como entrada, use filter para devolver un array que contenga solo los números.

Por ejemplo, typeNum([1, 'bob' ,3]) devuelve [1,3].
------------------------------------------------------------------------------------------------ */

const typeNum = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 3

Escribe una función llamada containsAnd que, dado un array de cadenas como entrada, use filter para devolver un array que contenga solo las cadenas que contienen 'and' dentro de la cadena.

Por ejemplo, containsAnd(['panda', 'ran', 'and']) devuelve ['panda', 'and'].
------------------------------------------------------------------------------------------------ */

const containsAnd = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 4

Escribe una función llamada oddValues que, dado un array de enteros como entrada, use filter para devolver un array que contenga solo los enteros impares.

Por ejemplo, oddValues([1,2,3]) devuelve [1,3].
------------------------------------------------------------------------------------------------ */

const oddValues = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 5

Escribe una función llamada notInFirstArray que, dado dos arrays como entrada, use filter para devolver un array de todos los elementos en el segundo array que no están incluidos en el primer array.

Por ejemplo, notInFirstArray([1,2,3], [1,2,3,4]) devuelve [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 6 - Objetivo de Extensión

Escribe una función llamada getBaseStatGreaterThan que, dado el snorlaxData (a continuación) y un entero como entrada, use filter para devolver un array que contenga todas las estadísticas con un baseStat mayor que el entero.

Por ejemplo, getBaseStatGreaterThan(snorlaxData.stats, 50) devolverá un array que contiene los objetos 'special-defense' y 'special-attack'.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 7 - Objetivo de Extensión

Escribe una función llamada getStatName que sea una extensión de tu función getBaseStatGreaterThan del desafío 6. Para esta función, extiende tu solución del desafío 6 para que solo devuelva el nombre de la estadística, en lugar de todo el objeto de la estadística.

Por ejemplo, getStatName(snorlaxData.stats, 50) devolverá ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

const getStatName = (arr, minBaseStat) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 8 - Objetivo de Extensión

Escribe una función llamada getCharactersWithoutChildren que, dado el array de personajes (a continuación), use filter para devolver un array de todos los personajes que no tienen hijos.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Sansa",
    spouse: "Tyrion",
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: null,
    house: "Snow",
  },
];

const getCharactersWithoutChildren = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 9 - Objetivo de Extensión

Escribe una función llamada evenOddNumericValues que, dado un array como entrada, use filter para eliminar cualquier valor no numérico y luego use map para generar un nuevo array que contenga la cadena 'even' o 'odd', según el valor original.

Por ejemplo: evenOddNumericValues(['Gregor', 2, 4, 1]) devuelve ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
PRUEBAS

Todo el código a continuación verificará que tus funciones están funcionando para resolver los desafíos.

NO CAMBIES nada del código a continuación.

Ejecuta tus pruebas desde la consola: jest challenges-08.test.js

------------------------------------------------------------------------------------------------ */

describe("Testing challenge 1", () => {
  test("Debería sumar dos a cada valor", () => {
    expect(addTwo([1, 2, 4])).toStrictEqual([3, 4, 6]);
  });
});

describe("Testing challenge 2", () => {
  test("Debería devolver un array que contenga solo números", () => {
    expect(typeNum([1, "bob", 3])).toStrictEqual([1, 3]);
    expect(typeNum([1, "bob", 3]).length).toStrictEqual(2);
    expect(typeNum(["banana", "apples", "cherry"])).toStrictEqual([]);
    expect(typeNum([2, 3, 5])).toStrictEqual([2, 3, 5]);
  });
});

describe("Testing challenge 3", () => {
  test("Debería devolver un array de cadenas que contengan la palabra and", () => {
    expect(containsAnd(["panda", "ran", "and"])).toStrictEqual([
      "panda",
      "and",
    ]);
    expect(containsAnd(["banana", "bob", "xyz"])).toStrictEqual([]);
    expect(containsAnd([])).toStrictEqual([]);
    expect(containsAnd(["and", "sand"])).toStrictEqual(["and", "sand"]);
  });
});

describe("Testing challenge 4", () => {
  test("Debería devolver un array que contenga solo enteros impares", () => {
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
      1, 3, 5, 7, 9,
    ]);
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
    expect(oddValues([2, 3, 4, 179])).toStrictEqual([3, 179]);
    expect(oddValues([2, 4, 6, 8])).toStrictEqual([]);
  });
});

describe("Testing challenge 5", () => {
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ["Demi", "Gregor", "Hound"];
  const secondStrings = ["Gary", "Charlotte", "Demi", "Gregor", "Hound"];

  test("Debería devolver un array que incluya cualquier elemento que no esté en el primer array", () => {
    expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test("También debería funcionar con un array de cadenas", () => {
    expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual([
      "Gary",
      "Charlotte",
    ]);
    expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(
      2
    );
  });

  test("Debería funcionar con arrays vacíos", () => {
    expect(notInFirstArray([], [])).toStrictEqual([]);
    expect(notInFirstArray([], [1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(notInFirstArray([1, 2, 3, 4, 5], [])).toStrictEqual([]);
  });
});

xdescribe("Testing challenge 6", () => {
  test("Debería devolver un array que contenga las estadísticas que son mayores que la entrada", () => {
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([
      {
        stat: {
          url: "https://pokeapi.co/api/v2/stat/5/",
          name: "special-defense",
        },
        effort: 2,
        baseStat: 110,
      },
    ]);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(
      1
    );
    expect(getBaseStatGreaterThan(snorlaxData.stats, 110)).toStrictEqual([]);
  });
  test("Debería funcionar para datos que no sean de Snorlax", () => {
    expect(
      getBaseStatGreaterThan(
        [
          { baseStat: 10 },
          { baseStat: -85 },
          { baseStat: 0 },
          { baseStat: -50 },
        ],
        -60
      )
    ).toStrictEqual([{ baseStat: 10 }, { baseStat: 0 }, { baseStat: -50 }]);
  });
});

xdescribe("Testing challenge 7", () => {
  test("Debería devolver el nombre de las estadísticas que exceden ese máximo", () => {
    expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([
      "special-defense",
      "special-attack",
    ]);
    expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test("Debería devolver el nombre de las estadísticas que exceden ese máximo", () => {
    expect(getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });

  test("Debería funcionar para datos que no sean de Snorlax", () => {
    expect(
      getStatName(
        [
          { baseStat: 10, stat: { name: "one" } },
          { baseStat: -85, stat: { name: "two" } },
          { baseStat: 0, stat: { name: "three" } },
          { baseStat: -50, stat: { name: "four" } },
        ],
        -60
      )
    ).toStrictEqual(["one", "three", "four"]);
  });
});

xdescribe("Testing challenge 8", () => {
  test("Debería devolver un array que contenga personajes que no tienen hijos", () => {
    expect(getCharactersWithoutChildren(characters)).toStrictEqual([
      { name: "Sansa", spouse: "Tyrion", house: "Stark" },
      { name: "Jon", spouse: null, house: "Snow" },
    ]);
    expect(getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

xdescribe("Testing challenge 9", () => {
  test('Debería eliminar valores no enteros y devolver "even" o "odd', () => {
    expect(evenOddNumericValues(["Gregor", 2, 4, 1])).toStrictEqual([
      "even",
      "even",
      "odd",
    ]);
    expect(evenOddNumericValues(["Gregor", 2, 4, 1]).length).toStrictEqual(3);
    expect(evenOddNumericValues(["a", "b", "c"])).toStrictEqual([]);
  });
  test("No debería aceptar cadenas que parecen números", () => {
    expect(evenOddNumericValues(["1", 2, 3, "4", 5, "6"])).toStrictEqual([
      "even",
      "odd",
      "odd",
    ]);
  });
});
