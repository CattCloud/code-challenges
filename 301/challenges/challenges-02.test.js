'use strict';

/* ------------------------------------------------------------------------------------------------

CC 02 - Array.map()

/* ------------------------------------------------------------------------------------------------

DESAFÍO 1 - Revisión

Escribe una función llamada raisedToTheThird que tome un array de números y devuelva un nuevo array de cada uno de esos números elevados a la 3ª potencia (consejo: busca Math.pow()). Usa forEach para resolver este problema.

------------------------------------------------------------------------------------------------ */

const raisedToTheThird = (arr) => {
    const nuevoArray=[];
    arr.forEach(e=>nuevoArray.push(Math.pow(e,3)));
    return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 2

Escribe una función llamada addOne que, dado un array de números, use map para devolver un nuevo array con cada valor simplemente incrementado en 1.
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
    return arr.map(e=>e+=1);  
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 3

Escribe una función llamada addQuestion que, dado un array de cadenas, use map para devolver un nuevo array que contenga cada cadena seguida de un signo de interrogación.
------------------------------------------------------------------------------------------------ */

const addQuestion = (arr) => {
    return arr.map(cadena=>cadena.concat("?"));
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 4

Escribe una función llamada forLoopTwoToThe que, dado un array de enteros como entrada, recorra el array y devuelva un nuevo array. El array devuelto debe contener el resultado de elevar 2 a la potencia del elemento de entrada original.

Puedes optar por completar este desafío usando un bucle for, la sintaxis for...in o for...of.

Por ejemplo, twoToThe([1,2,3]) devuelve [2,4,8] porque 2 ^ 1 = 2, 2 ^ 2 = 4, y 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

const forLoopTwoToThe = (arr) => {
    const nuevoArray=[];
    for(let numero of arr){
   nuevoArray.push(Math.pow(2,numero));
  }
  return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 5

Escribe una función llamada forEachTwoToThe que produzca la misma salida que tu función forLoopTwoToThe del desafío 4, pero usa forEach en lugar de un bucle for.
------------------------------------------------------------------------------------------------ */

const forEachTwoToThe = (arr) => {
    const nuevoArray=[];
    arr.forEach(numero=>nuevoArray.push(Math.pow(2,numero)));
    return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 6

Escribe una función llamada mapTwoToThe que produzca la misma salida que tu función forLoopTwoToThe del desafío 4 y tu función forEachTwoToThe del desafío 5, pero usa map en lugar de un bucle for o forEach.
------------------------------------------------------------------------------------------------ */

const mapTwoToThe = (arr) => {
  return arr.map(numero=>Math.pow(2,numero));
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 7 - Objetivo de Extensión

Escribe una función llamada charCode que, dado un array de letras como entrada, use map para devolver un nuevo array donde cada elemento es el resultado del método `charCodeAt` en el elemento original del array.

Lee la documentación de MDN sobre String.charCodeAt() si es necesario.

Por ejemplo: charCode(['h','i']) devuelve [104, 105].
------------------------------------------------------------------------------------------------ */

const charCode = (arr) => {
    return arr.map(letra=>letra.charCodeAt(0));
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 8 - Objetivo de Extensión

Escribe una función que, dado un array de números como entrada, use map para devolver un nuevo array donde cada elemento es ya sea la cadena "even" o la cadena "odd", según cada valor.

Si algún elemento en el array no es un número, el array resultante debe tener la cadena "N/A" en su lugar.

Por ejemplo: evenOdd([1,2,3]) devuelve ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

const evenOdd = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 9 - Objetivo de Extensión

Usa los datos de snorlaxAbilities a continuación, para este desafío.

Escribe una función llamada extractAbilities que, dado el array de habilidades, use map para crear un array que contenga solo el nombre de la habilidad.

Nota: Debido a que esta función espera el array de habilidades, se invocará como:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 10 - Objetivo de Extensión

Usa los datos de snorlaxStats a continuación, para este desafío.

Escribe una función llamada extractStats que, dado un array de estadísticas, use map para devolver un array de objetos que contengan el nombre de la estadística y el total.

El total debe ser la suma del esfuerzo y baseStat.

Aquí tienes un ejemplo de un solo elemento del array: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = (arr) => {
  // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
PRUEBAS

Todo el código a continuación verificará que tus funciones están funcionando para resolver los desafíos.

NO CAMBIES nada del código a continuación.

Ejecuta tus pruebas desde la consola: jest challenges-07.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('Debería devolver un nuevo array de números elevados a la tercera potencia', () => {
    expect(raisedToTheThird([2, 4, 5, -7, 0])).toStrictEqual([8, 64, 125, -343, 0]);
  });
});

describe('Testing challenge 2', () => {
  test('Debería añadir uno a todos los números en el array', () => {
    expect(addOne([2, 3, 5, 11])).toStrictEqual([3, 4, 6, 12]);
  });
});

describe('Testing challenge 3', () => {
  test('Debería añadir un signo de interrogación al final de cada cadena', () => {
    expect(addQuestion(['hello', '301', 'students'])).toStrictEqual(['hello?', '301?', 'students?']);
  });
});

describe('Testing challenge 4', () => {
  test('Debería devolver dos elevado a la potencia del entero', () => {
    expect(forLoopTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forLoopTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Debería devolver decimales si el entero es negativo', () => {
    expect(forLoopTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 5', () => {
  test('Debería devolver dos elevado a la potencia del entero', () => {
    expect(forEachTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forEachTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Debería devolver decimales si el entero es negativo', () => {
    expect(forEachTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 6', () => {
  test('Debería devolver dos elevado a la potencia del entero', () => {
    expect(mapTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Debería devolver decimales si el entero es negativo', () => {
    expect(mapTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 7', () => {
  test('Debería devolver un array que contenga el código de carácter para cada letra', () => {
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1'])).toStrictEqual([67, 111, 100, 101, 51, 48, 49]);
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1']).length).toStrictEqual(7);
  });
});

xdescribe('Testing challenge 8', () => {
  test('Debería devolver un array que contenga "even" o "odd" según el número', () => {
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541])).toStrictEqual(['odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd']);
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541]).length).toStrictEqual(8);
  });

  test('Debería funcionar con todos los números impares', () => {
    expect(evenOdd([1, 3, 5, 7, 9])).toStrictEqual(['odd', 'odd', 'odd', 'odd', 'odd']);
    expect(evenOdd([1, 3, 5, 7, 9]).length).toStrictEqual(5);
  });

  test('Debería funcionar con todos los números pares', () => {
    expect(evenOdd([2, 4, 6, 8, 10])).toStrictEqual(['even', 'even', 'even', 'even', 'even']);
    expect(evenOdd([2, 4, 6, 8, 10]).length).toStrictEqual(5);
  });

  test('Debería devolver la cadena "N/A" si hay un elemento que no sea un número', () => {
    expect(evenOdd([5, 8, 2, 'hola'])).toStrictEqual(['odd', 'even', 'even', 'N/A']);
    expect(evenOdd([5, 8, 2, 'hola']).length).toStrictEqual(4);
  });
});

xdescribe('Testing challenge 9', () => {
  test('Debería devolver un array que contenga solo los nombres de las habilidades', () => {
    expect(extractAbilities(snorlaxAbilities.abilities)).toStrictEqual(['gluttony', 'cute charm', 'immunity']);
    expect(extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 10', () => {
  test('Debería devolver un array que contenga objetos con los valores de nombre y total', () => {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35 },
      { name: 'special-defense', total: 112 },
      { name: 'special-attack', total: 74 },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});
