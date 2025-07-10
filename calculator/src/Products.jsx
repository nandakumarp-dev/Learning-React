import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Products() {

    let [products,changeProducts] = useState()

    useEffect(()=>{fetchAllProducts()},[])

    async function fetchAllProducts(){

        // let response = await fetch('https://fakestoreapi.com/products')

        // let data = await response.json()

        // changeProducts(data)

        let response = await axios.get('https://fakestoreapi.com/products')

        changeProducts(response.data)

    }

  return (
    <div>
        <h1>Products</h1>
        <div class="container mt-5">
        <div className="row">

        {products?.map(product=>(

          <div className="col">
            <div class="card" style={{width: "18rem"}}>
              <img src={product.image} class="card-img-top" alt="Product Image"/>
              <div class="card-body">
                <h5 class="card-title">{product.titl}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                <p class="card-text">{product.description}</p>
                <p class="card-text fw-bold">${product.price}</p>
              </div>
            </div>
          </div>

        ))}

        </div>
        </div>
    </div>
  )
}

export default Products