const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


const printHereDiv = document.querySelector('div[data-function="printHere"]')
const ul = document.createElement('ul')


places.forEach(place => {
    let li = `<li>${place}</li>`
    ul.innerHTML += li
})

printHereDiv.appendChild(ul)