const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ]

users.forEach(({name, years}) => {
    if(years < 18) console.log(`${name} is underage`)
    else if( years>= 18) console.log(`${name} is of legal age`)
})