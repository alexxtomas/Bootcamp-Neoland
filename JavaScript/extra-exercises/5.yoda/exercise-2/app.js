const data = fetch('http://localhost:3000/diary')
                    .then(res => res.json())
                    .then(json => json)
const container = document.createElement('div')
document.body.appendChild(container)
data.then(notes => {
   const sortedNotesByDate = notes.sort((a,b) => b.date - a.date)
   sortedNotesByDate.map(({title, date, description}) => {
    const htmlElement = `
        <div class="diary-note">
            <h3>${title}</h3>
            <h5>${date}</h5>
            <p>${description}</p>
            <button>Remove</button>
        </div>
    `
    container.innerHTML += htmlElement
    
   })
    const buttonsToRemove = document.querySelectorAll('button')
    buttonsToRemove.forEach(button => {
        button.addEventListener('click', evt => {
            const elementsToRemovwe = evt.path[1]
            
            elementsToRemovwe.remove()
        })
       
    })


})
