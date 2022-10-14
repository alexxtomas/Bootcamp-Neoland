const baseURL = 'http://localhost:3000'

const mainHtml = `
   <header>
   <h1>List Of Orders</h1>
   </header>
   <main>
   <h2>
      Orders By Date
   </h2> 
   <p><span class="date">Date</span><span class="quantity">Quantity</span><span class="product">Product</span></p>
   <ul>
   </ul>
   </main>
`

document.body.innerHTML += mainHtml


const data = fetch(`${baseURL}/orders`)
                    .then(res => res.json())
                    .then(json => json)

data.then(orders => {
   const sortedOrders = orders.sort((a, b) => new Date(b.date) - new Date(a.date))
   sortedOrders.map(({products, date}) => {
      const product = fetch(`${baseURL}/products/${products[0].productId}`)
                              .then(res => res.json())
                              .then(json => json)
      product.then(({name}) => {
         const htmlElement = `
         <li><span class="date-value">${date}</span> <span class="quantity-value">${products[0].quantity}</span> <span class="product-value">${name}</span></li>
      `  
         const ul = document.querySelector('ul')
         ul.innerHTML += htmlElement
      })
     

      
   })
   
})