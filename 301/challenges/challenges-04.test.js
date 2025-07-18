'use strict';

/* ------------------------------------------------------------------------------------------------
Estos objetos y arrays son globales y se usarán para cada asignación. NO LOS ALTERES
------------------------------------------------------------------------------------------------ */

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toys: 57,
    toothbrush: 'frayed',
    cars: ['Toyota', 'Mazda']
}

/* ------------------------------------------------------------------------------------------------
DESAFÍO 1

En la función addPeople, usa spread operator para:
  - Crear un nuevo array como copia del array people
  - Agregar una persona llamada 'Odie' al inicio del array
  - Agregar otra llamada 'Garfield' al final del array
  - Retornar el nuevo array

Demuestra que el array original people no cambia

------------------------------------------------------------------------------------------------ */

const addPeople = (arr) => {
    // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 2

En la función setState, usa spread y destructuring assignments para:
  - Crear y retornar un objeto state con 2 llaves:
    people, que contendrá una copia del array people
    stuff, que contendrá una copia del objeto stuff
  - Retornar el objeto state que has creado

Asegúrate de que el array people original y el objeto stuff no cambien

------------------------------------------------------------------------------------------------ */

const setState = (arr, obj) => {
    // Código de solución aquí...
};


/* ------------------------------------------------------------------------------------------------
DESAFÍO 3

En la función newState, usa solamente spread y destructuring assignments para:
  - Crear y retornar un objeto state con 2 llaves:
    people, que contendrá una copia del array people
    stuff, que contendrá una copia del objeto stuff
    Agregar un nuevo auto ("Ford") a la lista de autos
    Cambiar el toothbrush de "frayed" a "brand new"
    Sumar 1 al número de toys
  - Retornar el nuevo objeto que has creado

Asegúrate de que el array people original y el objeto stuff no cambien

------------------------------------------------------------------------------------------------ */

const newState = (arr, obj) => {
    // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 4

En la función combineAndExtract, usa spread y destructuring assignments para:
  - Combinar el array people con un array de mascotas: ['Perro', 'Gato', 'Pez']
  - Usar destructuring para extraer los primeros 2 elementos del array combinado
  - Usar rest operator (...) para capturar el resto de elementos
  - Retornar un objeto con las llaves: first, second, remaining

Ejemplo de retorno: { first: 'Kookla', second: 'Fran', remaining: ['Ollie', 'Perro', 'Gato', 'Pez'] }

------------------------------------------------------------------------------------------------ */

const combineAndExtract = (arr) => {
    // Código de solución aquí...
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 5

En la función reorganizeStuff, usa spread y destructuring assignments para:
  - Extraer tv y radio del objeto stuff usando destructuring
  - Crear un nuevo objeto que contenga:
    - Todas las propiedades restantes del objeto original (usando rest operator)
    - Una nueva propiedad electronics que contenga tv y radio en un objeto
    - Una nueva propiedad total_items que sume toys + cars.length

Ejemplo: { electronics: {tv: 'huge', radio: 'old'}, toys: 57, toothbrush: 'frayed', cars: [...], total_items: 59 }

------------------------------------------------------------------------------------------------ */

const reorganizeStuff = (obj) => {
    // Código de solución aquí...
};


/* ------------------------------------------------------------------------------------------------
PRUEBAS

Todo el código a continuación verificará que tus funciones están funcionando para resolver los desafíos.

NO CAMBIES nada del código a continuación.

Ejecuta tus pruebas desde la consola: jest challenges-04.test.js
------------------------------------------------------------------------------------------------ */


describe('Testing challenge 1', () => {
    test('Debería retornar una copia del array people con 2 nuevos valores', () => {
        const orig = ['Kookla', 'Fran', 'Ollie'];
        const expected = ['Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield'];
        const copy = addPeople(orig);
        expect(copy).toStrictEqual(expected);
        expect(orig).toStrictEqual(people);
    });
});

describe('Testing challenge 2', () => {
    test('Debería retornar un objeto state con 2 llaves', () => {
        const originalPeople = ['Kookla', 'Fran', 'Ollie'];
        const originalStuff = {
            tv: 'huge',
            radio: 'old',
            toys: 57,
            toothbrush: 'frayed',
            cars: ['Toyota', 'Mazda']
        }
        const expected = { people: originalPeople, stuff: originalStuff };
        const copy = setState(originalPeople, originalStuff);
        expect(copy).toStrictEqual(expected);
        expect(originalPeople).toStrictEqual(people);
        expect(originalStuff).toStrictEqual(stuff);
    });
});

describe('Testing challenge 3', () => {
    test('Debería retornar un objeto state con 2 llaves y nuevos valores', () => {
        const originalPeople = ['Kookla', 'Fran', 'Ollie'];
        const originalStuff = {
            tv: 'huge',
            radio: 'old',
            toys: 57,
            toothbrush: 'frayed',
            cars: ['Toyota', 'Mazda']
        }
        const expected = {
            people: ['Kookla', 'Fran', 'Ollie'],
            stuff: {
                tv: 'huge',
                radio: 'old',
                toys: 58,
                toothbrush: 'brand new',
                cars: ['Toyota', 'Mazda', 'Ford']
            }
        }
        const copy = newState(originalPeople, originalStuff);
        expect(copy).toStrictEqual(expected);
        expect(originalPeople).toStrictEqual(people);
        expect(originalStuff).toStrictEqual(stuff);
    });
});

describe('Testing challenge 4', () => {
    test('Debería combinar arrays y extraer elementos usando destructuring', () => {
        const orig = ['Kookla', 'Fran', 'Ollie'];
        const expected = {
            first: 'Kookla',
            second: 'Fran',
            remaining: ['Ollie', 'Perro', 'Gato', 'Pez']
        };
        const result = combineAndExtract(orig);
        expect(result).toStrictEqual(expected);
        expect(orig).toStrictEqual(people);
    });
});

describe('Testing challenge 5', () => {
    test('Debería reorganizar objeto extrayendo y creando nuevas propiedades', () => {
        const originalStuff = {
            tv: 'huge',
            radio: 'old',
            toys: 57,
            toothbrush: 'frayed',
            cars: ['Toyota', 'Mazda']
        };
        const expected = {
            electronics: { tv: 'huge', radio: 'old' },
            toys: 57,
            toothbrush: 'frayed',
            cars: ['Toyota', 'Mazda'],
            total_items: 59
        };
        const result = reorganizeStuff(originalStuff);
        expect(result).toStrictEqual(expected);
        expect(originalStuff).toStrictEqual(stuff);
    });
});

