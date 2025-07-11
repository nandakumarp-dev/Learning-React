import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Recipes() {

  let [recipes,changeRecipes] = useState()

  let [query,changeQuery] = useState('')

  useEffect(()=>{fetchAllRecipes()},[])

  async function fetchAllRecipes(event){


    event.preventDefault()


    let headers = {}

    let response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${query}`,{headers})

    changeRecipes(response.data)
  }

  return (

    <div>
        <h1>Recipes</h1>
        <div class="container mt-5">

          <div class="d-flex mb-5">

            <form class="d-flex" action="" onSubmit={(event)=>{fetchAllRecipes(event)}}>
              <input value={query} onChange={(event)=>changeQuery(event.target.value)} type="text" class='form-control' />
              <button class='btn btn-primary' type='submit'>search</button>
            </form>

          </div>

        <div class="row">

        {recipes?.map(recipe=>(

          <div class="col">
            <div class="card" style={{width: "18rem"}}>
              
              <div class="card-body">
                <h5 class="card-title">{recipe.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Ingredients : {recipe.ingredients}</h6>
                <p class="card-text">Servings : {recipe.servings}</p>
                <p class="card-text fw-bold">Instructions : {recipe.instructions}</p>
              </div>

            </div>
          </div>

        ))}

        </div>
        </div>
    </div>
  )
}

export default Recipes