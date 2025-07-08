import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Products() {

    let [products,changeProducts] = useState()

    useEffect(()=>{fetchAllProducts()},[])

    async function fetchAllProducts(){

        let response = await fetch('https://fakestoreapi.com/products')

        let data = await response.json()

        changeProducts(data)

    }

  return (
    <div>
        <h1>Products</h1>
        {products?.map(product=>(
            <p>{product.title}</p>
        ))}
    </div>
  )
}

export default Products