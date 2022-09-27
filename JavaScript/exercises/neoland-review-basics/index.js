// Iteración #1: Mix for e includes
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let movieCategories = []

for (let movie of movies) {
    const {categories} = movie
    for(let category of categories) {
        if(!movieCategories.includes(category)) movieCategories.push(category)
    }
}

console.log(movieCategories)

// Iteración #2: Mix Fors
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let allVolumes = []

for (let user of users) {
    const {favoritesSounds} = user
    const favoriteSoundsArray = Object.entries(favoritesSounds)
    for(let favoriteSound of favoriteSoundsArray ) {
         allVolumes.push(favoriteSound[1].volume)
    }
}

const volumesAverage = allVolumes.reduce((prev,curr) => prev + curr, 0)
                       / allVolumes.length
console.log(volumesAverage)


// Iteración #3: Mix Fors

let allUsersFavoriteSounds = []

for (let user of users) {
    allUsersFavoriteSounds.push(Object.keys(user.favoritesSounds))
}

allUsersFavoriteSounds = allUsersFavoriteSounds.flat()
let usersFavoriteSoundsCounter = {}

for (let sound of allUsersFavoriteSounds) {
    usersFavoriteSoundsCounter[sound] = 0
}

for (let i in allUsersFavoriteSounds) {
    if(allUsersFavoriteSounds[i] in usersFavoriteSoundsCounter) {
        usersFavoriteSoundsCounter[allUsersFavoriteSounds[i]] += 1
    }
}

console.log(usersFavoriteSoundsCounter)

// Iteración #4: Métodos findArrayIndex

const exampleArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const findArrayIndex = (array, text) => {
    let index = array.findIndex(s => s === text)
    if(index === -1) return new Error(`The array does not have "${text}" text`)
}

console.log(findArrayIndex(exampleArray, 'Caracol'))

// Iteración #5: Función rollDice
const rollDice = (faces) => {
    return parseInt(Math.random() * (faces + 1))
}

console.log(rollDice(10))