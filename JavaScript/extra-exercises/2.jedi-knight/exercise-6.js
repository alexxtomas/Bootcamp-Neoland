

const swap = (arry, index1, index2) => {
    const element1 = arry[index1]
    const element2 = arry[index2]
    arry[index1] = element2
    arry[index2] = element1
    return arry
}

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ]

console.log(swap(fantasticFour, 0, 2))