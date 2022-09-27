//Iteración #1: Usa includes

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for(let product of products) {
    if(product.includes('Camiseta')) console.log(product)
}

//Iteración #2: Condicionales avanzados

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.map((alumn, i) => {
    const {T1, T2, T3} = alumn
    if((T1 && T2) || (T2 && T3) || (T1 && T3)) alumns[i].isApproved = true
    else alumns[i].isApproved = false

    
})

console.log(alumns)

