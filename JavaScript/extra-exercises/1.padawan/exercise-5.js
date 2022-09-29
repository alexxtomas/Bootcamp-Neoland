const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ]

const howManyProducts = products.length
const averageSellCounts = products
                            .reduce((acc, {sellCount}) => acc + sellCount, 0)
                            / howManyProducts
console.log(averageSellCounts)