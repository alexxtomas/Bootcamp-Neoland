const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  const moviesCategories = []

for(let movie of movies) {
    const {categories} = movie
    for(let category of categories) {
        if(!moviesCategories.includes(category)) moviesCategories.push(category)
    }
}

console.log(moviesCategories)