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