const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];


const shortMovies = movies.filter(movie => movie.durationInMinutes < 100)
console.log(shortMovies)

const averageMovie = movies.filter(({durationInMinutes}) => durationInMinutes > 100 && durationInMinutes <  200)
console.log(averageMovie)

const longMovies = movies.filter(({durationInMinutes}) => durationInMinutes > 200)
console.log(longMovies)