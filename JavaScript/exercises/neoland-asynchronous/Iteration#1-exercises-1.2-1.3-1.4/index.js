/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */
/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.
 */
/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */
const baseUrl = 'https://api.nationalize.io/?name=';
const consultButton = document.querySelector('button')
const input = document.querySelector('input')
const div = document.createElement('div')
const button = document.createElement('button')

consultButton.addEventListener('click', () => {
    fetch(`${baseUrl}${input.value}`)
            .then(res => res.json())
            .then(({country: countries, name}) => {
                let parraf = `<p>${name} has a ${countries[0].probability} percent chance of being from ${countries[0].country_id} and a ${countries[1].probability} percent chance of being from ${countries[1].country_id} </p>`
                button.className = 'delete-parraf'
                button.innerHTML = 'X'
                document.body.appendChild(div)
                div.innerHTML = parraf
                div.appendChild(button)
                input.value = ''
            })
} )

button.addEventListener('click', (evt) => {
    div.remove()
})




