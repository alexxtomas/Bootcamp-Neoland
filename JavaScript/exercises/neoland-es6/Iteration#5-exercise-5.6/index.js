/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputFilter = document.querySelector('input')
const streamersList = document.createElement('ul')

inputFilter.addEventListener('input', ({target}) => {
    streamersList.childNodes.forEach(child => child.remove())
    const {value: inputFilterValue} = target
    const filtredStremersList = streamers.filter(({name}) => name.toUpperCase().includes(inputFilterValue.toUpperCase()))
    let streamerListElements = []
    filtredStremersList.forEach(({name}) => {
         streamerListElements.push(`<li>${name}</li>`)
        
    })
    streamersList.innerHTML = streamerListElements.join(' ')
})

let streamerListElements = []

if (streamersList.childNodes.length === 0) {
    streamers.forEach(({name}) => {
        streamerListElements.push(`<li>${name}</li>`)
    })

    streamersList.innerHTML = streamerListElements.join(' ')
}

document.body.appendChild(streamersList)

