const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ]

const ul = document.createElement('ul')
albums.forEach(album => {
    let li = `<li>${album}</li>`
    ul.innerHTML += li
})

document.body.appendChild(ul)