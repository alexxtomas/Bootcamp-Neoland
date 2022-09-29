/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */
const baseURL = 'https://api.agify.io?name=michael'


fetch(baseURL)
    .then((res) => res.json())
    .then(({name, count, age}) => {
        const element = `
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Count: ${count}</p>
        `
        document.body.innerHTML = element
    })
    .catch(e => new Error(e))
