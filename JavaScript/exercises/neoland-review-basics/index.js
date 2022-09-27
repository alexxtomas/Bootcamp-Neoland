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