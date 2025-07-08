import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#c8b6ff'}}>
    <div class="container-fluid">
        <a class="navbar-brand"> <Link class="navbar-brand" to={"/"}>Applications</Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" aria-current="page"> <Link class="nav-link" to={"/"}>Home</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" > <Link class="nav-link" to={"/counter/"}>Counter</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link"><Link class="nav-link" to={"/bmi/"}>BMI</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page"> <Link class="nav-link" to={"/products"}>Products</Link></a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default Header