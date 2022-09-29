const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ]



let allUsersFavoriteSounds = []

for (let user of users) {
    allUsersFavoriteSounds.push(Object.keys(user.favoritesSounds))
}

allUsersFavoriteSounds = allUsersFavoriteSounds.flat()
let usersFavoriteSoundsCounter = {}

for (let sound of allUsersFavoriteSounds) {
    usersFavoriteSoundsCounter[sound] = 0
}

for (let i in allUsersFavoriteSounds) {
    if(allUsersFavoriteSounds[i] in usersFavoriteSoundsCounter) {
        usersFavoriteSoundsCounter[allUsersFavoriteSounds[i]] += 1
    }
}
