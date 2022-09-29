
const findArrayIndex = (array,text) => {
    const match = array.find(word => word === text)
    if(typeof match === 'undefined') throw new Error(`${text} does not match with any word of the array`)
    return array.indexOf(match)

}


const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];


console.log(findArrayIndex(mainCharacters, 'Leia'))