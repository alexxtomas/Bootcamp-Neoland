/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul')

for(let country of countries) {
    let li = document.createElement('li')
    li.innerHTML = country
    ul.appendChild(li)
}
document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const element = document.querySelector('.fn-remove-me')
element.remove()
/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divElement = document.querySelector('div[data-function="printHere"]')
const ul2 = document.createElement('ul')
for(let car of cars) {
    let li = document.createElement('li')
    li.innerHTML = car
    ul2.appendChild(li)
}
divElement.appendChild(ul2)

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [ 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let country of countries2) {
    let div = document.createElement('div')
    div.className = 'list-element'
    let h4 = document.createElement('h4')
    let img = document.createElement('img')
    h4.innerHTML = country.title
    img.src = country.imgUrl
    div.appendChild(h4)
    div.appendChild(img)
    document.body.appendChild(div)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const button = document.createElement('button')
button.innerHTML = 'Delete Last One'
button.className = 'delete-last-one'
document.body.appendChild(button)
button.addEventListener('click', evt => {
    // const bodyChildren = Array.from(evt.target.parentElement)
    // bodyChildren.filter(child => console.log('child'))
    // console.log(Array.from(evt.target))
    const bodyChildren = Array.from(evt.path[1].childNodes)
    console.log(bodyChildren)
    const buttonIndex = bodyChildren.indexOf(button)
    if(bodyChildren[buttonIndex - 1] === ul) window.location.reload()
    bodyChildren[buttonIndex - 1].remove()
    
   
    
})

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */


const divElements = document.querySelectorAll('.list-element')


divElements.forEach(e => {
    const button2 = document.createElement('button')
    button2.innerHTML = 'Remove This'
    button2.className = 'remove-this'
    e.appendChild(button2)
})

const getButton2 = document.querySelectorAll('.remove-this')
getButton2.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const element = evt.path[1]
        element.remove()
    })
})