const container = document.createElement('div')
const h1 = `<h1>Breaking Bad Gallery</h1>`
container.className = 'container'
document.body.innerHTML = h1
document.body.appendChild(container)
const allCharacters = fetch('https://breakingbadapi.com/api/characters')
                            .then(res => res.json())
                            .then(characters => characters)

allCharacters.then(characters => {
    characters.map(({img, name}) => {
        const htmlElement = `
            <figure class="character-container">
                <img src="${img}" alt="${name} image">
                <figcaption>${name}</figcaption>
            </figure>
        `


        

        container.innerHTML += htmlElement
    })
})