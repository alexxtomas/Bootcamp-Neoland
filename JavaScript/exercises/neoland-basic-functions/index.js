//Iteración #1: Buscar el máximo**
// Completa la función que tomando dos números como argumento devuelva el más alto.
const sum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) console.log(numberOne)
    else if (numberTwo > numberOne) console.log(numberTwo)
    else console.log('Both numbers are equal')
}
sum(10, 10)