/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputFilter = document.querySelector('input')
const buttonToFilter = document.querySelector('button')
const streamersList = document.createElement('ul')
let streamerListElements = []


inputFilter.addEventListener('input', () => {
    if(inputFilter.value === '') {
        streamersList.childNodes.forEach(child => child.remove())
        streamerListElements = []
    }
})

inputFilter.addEventListener('change', ({target}) => {
    const {value: inputFilterValue} = target
    const filtredStremersList = streamers.filter(({name}) => name.toUpperCase().includes(inputFilterValue.toUpperCase()))
    filtredStremersList.forEach(({name}) => {
         streamerListElements.push(`<li>${name}</li>`)
        
    })
    streamersList.innerHTML = streamerListElements.join(' ')


})

buttonToFilter.addEventListener('click', () => {
    if(streamerListElements.length === 0) alert('Our filter does not find any streamer with this parameters')
    document.body.appendChild(streamersList)

})



