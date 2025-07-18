"use strict";

/* ------------------------------------------------------------------------------------------------
CC 01 - Array.forEach()

/* ------------------------------------------------------------------------------------------------
DESAFÍO 1

Escribe una función llamada `addOne` que tome un array de números y devuelva un nuevo array de los números, incrementados en 1.

Usa `forEach` para recorrer el array de entrada y trabajar con cada valor. Agrega el nuevo valor en un array local. Devuelve el array local;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
    const nuevoArray = [];
    arr.forEach((e) => nuevoArray.push(e + 1));
    return nuevoArray;
};


/* ------------------------------------------------------------------------------------------------
DESAFÍO 2

Escribe una función llamada `addExclamation` que tome un array de strings y devuelva un nuevo array de las mismas cadenas con un "!" añadido al final.

Usa `forEach` para recorrer el array de entrada. Modifica cada cadena y agrega el valor actualizado en un array local. Devuelve el array local;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
	const nuevoArray=[];
	arr.forEach(e=>nuevoArray.push(e.concat("!")));
	return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 3

Escribe una función llamada `allUpperCase` que tome un array de cadenas y devuelva un nuevo array de las cadenas convertidas a mayúsculas.

Usa `forEach` para recorrer el array de entrada. Las cadenas modificadas deben añadirse a un array local. Devuelve ese array local.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
	const nuevoArray=[];
	arr.forEach(e=>nuevoArray.push(e.toUpperCase()));
	return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 4

Escribe una función llamada `greeting` que tome una sola cadena y devuelva la cadena en mayúsculas y seguida de un "!" 

Luego, escribe una función llamada `speaker` que tome un array de cadenas y una función de callback.

Usa `forEach` para construir un nuevo array de cadenas, cada cadena modificada por el callback. Devuelve el nuevo array.
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
	return word.toUpperCase().concat("!")
};

const speaker = (words, callback) => {
	const nuevoArray=[]
	words.forEach(e=>nuevoArray.push(callback(e)));
	return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
DESAFÍO 5

Escribe una función llamada addValues que tome un array y un valor y agregue el valor al array. Esta función no necesita una declaración de retorno.

Luego, escribe una función llamada addNumbers que tome cuatro argumentos:
  - Un número para agregar a un array
  - Un array en el cual se debe agregar el número
  - El número de veces que el número debe ser agregado
  - Una función de callback a usar para agregar los números al array (Consejo: ya la definiste)

Dentro de la función addNumbers, invoca la función de callback tantas veces como sea necesario, según el tercer argumento de la función addNumbers.

Devuelve el array modificado.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
	arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
	for(let i=1;i<=times;i++){
		callback(arr,num);
	}
	return arr;	
};

/* ------------------------------------------------------------------------------------------------

DESAFÍO 6

Escribe una función llamada createList que tome un array del inventario actual de la tienda.

El inventario está formateado de esta manera:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

Esta función debe usar forEach para llenar tu lista de comestibles en función del inventario de la tienda. Si el artículo está disponible, agrégalo a tu lista. Devuelve la lista final.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
	const arrayDisponibles=[];
	availableItems.forEach(item=> {
		if(item.available) arrayDisponibles.push(item.name);
	});
	return arrayDisponibles;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - DESAFÍO 7

Escribe una función llamada fizzbuzz que tome un array de números.

Recorre el array usando forEach para determinar la salida basada en varias reglas:
  - Si un número es divisible por 3, agrega la palabra "Fizz" al array de salida.
  - Si el número es divisible por 5, agrega la palabra "Buzz" al array de salida.
  - Si el número es divisible por ambos 3 y 5, agrega la frase "Fizz Buzz" al array de salida.
  - De lo contrario, agrega el número al array de salida.

Devuelve el array de salida resultante.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
    const nuevoArray = [];
    arr.forEach(numero => {
        if (numero % 3 === 0) {
            if (numero % 5 === 0) {
                nuevoArray.push("Fizz Buzz");
            } else {
                nuevoArray.push("Fizz");
            }
        } else if (numero % 5 === 0) {
            nuevoArray.push("Buzz");
        } else {
            nuevoArray.push(numero);
        }
    });
    return nuevoArray;
};

/* ------------------------------------------------------------------------------------------------
PRUEBAS

Todo el código a continuación verificará que tus funciones están funcionando para resolver los desafíos.

NO CAMBIES nada del código a continuación.

Ejecuta tus pruebas desde la consola: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe("Testing challenge 1", () => {
	test("Debería devolver un array con 1 añadido a cada valor del array original", () => {
		expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
	});
});

describe("Testing challenge 2", () => {
	test("Debería devolver un array con un signo de exclamación añadido a cada valor del array original", () => {
		expect(addExclamation(["hi", "how", "are", "you"])).toStrictEqual(["hi!", "how!", "are!", "you!"]);
	});
});

describe("Testing challenge 3", () => {
	test("Debería devolver un array de cadenas en mayúsculas", () => {
		expect(allUpperCase(["hi", "how", "are", "you"])).toStrictEqual(["HI", "HOW", "ARE", "YOU"]);
	});
});

describe("Testing challenge 4", () => {
	test('Debería proporcionar un array de cadenas, que se ponen en mayúsculas, y un "!" al final', () => {
		expect(speaker(["hello", "301", "students"], greeting)).toStrictEqual(["HELLO!", "301!", "STUDENTS!"]);
	});
});

describe("Testing challenge 5", () => {
	test("Debería agregar el número 8 al array cinco veces", () => {
		expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
		expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
	});
});

describe("Testing challenge 6", () => {
	const inventory = [
		{ name: "apples", available: true },
		{ name: "pears", available: true },
		{ name: "oranges", available: false },
		{ name: "bananas", available: true },
		{ name: "blueberries", available: false },
	];

	test("Debería agregar solo los artículos disponibles a la lista", () => {
		expect(createList(inventory)).toStrictEqual(["apples", "pears", "bananas"]);
		expect(createList(inventory).length).toStrictEqual(3);
	});
});

describe("Testing challenge 7", () => {
	const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	test("Debería imprimir mensajes o números", () => {
		expect(fizzbuzz(inputs)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "Fizz Buzz", 16]);
		expect(fizzbuzz(inputs).length).toStrictEqual(16);
	});
});
