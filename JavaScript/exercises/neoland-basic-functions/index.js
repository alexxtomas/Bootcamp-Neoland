// Iteración #1: Buscar el máximo**
// Completa la función que tomando dos números como argumento devuelva el más alto.
const sum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) console.log(numberOne)
    else if (numberTwo > numberOne) console.log(numberTwo)
    else console.log('Both numbers are equal')
}
sum(10, 10)

// Iteración #2: Buscar la palabra más larga**
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord = (param) => {
    if (!Array.isArray(param)) console.log('You must set an array as a parameter')
    let wordsLength = []
    for(word of param) {
        wordsLength.push(word.length)
    }
    const longestWords = param.filter(w => w.length === Math.max(...wordsLength))
    
    console.log(longestWords[0])
}
findLongestWord(avengers)