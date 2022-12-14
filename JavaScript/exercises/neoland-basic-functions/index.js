/* Debería comprobar en todas las funciones el tipo de dato sque me pasan por parametro y si es un array,
  comprobar el tipo de datos dentro del Array, no lo he hecho por agilizar. */

// Iteración #1: Buscar el máximo**
// Completa la función que tomando dos números como argumento devuelva el más alto.
const sum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) return numberOne 
    else if (numberTwo > numberOne) return numberTwo 
     return'Both numbers are equal' 
}
const a = sum(10, 10)
console.log(a)

// Iteración #2: Buscar la palabra más larga**
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord = (param) => {
    if (!Array.isArray(param)) return 'You must set an array as a parameter'
    let wordsLength = []
    for(word of param) {
        wordsLength.push(word.length)
    }
    const longestWords = param.filter(w => w.length === Math.max(...wordsLength))
    
    return longestWords[0]
    
  
}
const b = findLongestWord('a')
console.log(b)

//Iteración #3: Calcular la suma**

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = param => {
    if (!Array.isArray(param)) return 'You must set an array as a parameter'
    return param.reduce((prev, curr) => prev + curr, 0)
}
const c = sumAll(numbers)
console.log(c)

//Iteración #4: Calcular el promedio**
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numberss = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  const addedNumbers = sumAll(numberss)
  return addedNumbers / numberss.length
}

const d = average(numberss)
console.log(d)

// Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let strings = param.filter(s => typeof s === 'string')
  let numbers = param.filter(n => typeof n === 'number')
  
  let addedStrings = strings
                .map(s => s.length)
                .reduce((prev, curr) => prev +curr, 0)
  let addedNumbers = sumAll(numbers)

 return addedStrings + addedNumbers

  
}
 const e = averageWord(mixedElements)
 console.log(e)

 // Iteración #6: Valores únicos
 //Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
 const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
  'pizza'
];
function removeDuplicates(param) {
   let result = param
   let duplicateStrings = []
   param.forEach(element => {
    if(param.indexOf(element) !== param.lastIndexOf(element)) {
      duplicateStrings.push(element)
      
    }
    duplicateStrings.forEach(element => {
      if(param.includes(element)) {
        let index = param.indexOf(element)
        result.splice(index, 1)
      }
    })
   })

  return result
   
   
   
}

const f = removeDuplicates(duplicates)
console.log(f)

// Iteración #7: Buscador de nombres

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
  'Steve'
];
function finderName(array, nameToFind) {
  let result = {
  }
  array.forEach(n => {
    if(n === nameToFind) {
      result.index = array.indexOf(n)
    }
  })

  if (!result?.index) return false

  return [result, true]
}

const j = finderName(nameFinder, 'Tony')
console.log(j)


// Iteration #8: Contador de repeticiones

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  const uniqueStrings = [...new Set(counterWords)]
  const repeated =  {}
  for (let k of uniqueStrings) {
    repeated[k] = 0
  }
  param.forEach(s => {
    uniqueStrings.forEach(e => {
      if(e === s) repeated[e] += 1
    })
  })

  return repeated
}

 const k = repeatCounter(counterWords)
console.log(k)