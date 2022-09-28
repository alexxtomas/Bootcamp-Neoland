/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const handleClick = evt => console.log(evt)
let button = document.createElement('button')
button.innerHTML = 'Click Me!'
document.body.appendChild(button)

button.addEventListener('click', handleClick)


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const handleFocus = (evt) => console.log(evt.target.value)
let input = document.querySelector('input[class="focus"]')

input.addEventListener('focus', handleFocus)


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const handleInput = evt => console.log(evt.target.value)
let valueInput = document.querySelector('input[class="value"]')
valueInput.addEventListener('input', handleInput)