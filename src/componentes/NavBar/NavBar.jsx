import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img  className='logoMarolio' src={"./img/logo.png"} alt="Logo Marolio" />
      </Link>

      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">PlayStation</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/categoria/almacen">Xbox</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/categoria/lacteos">Nintendo</a>
  </li>
  
</ul>

        <CartWidget/>

    </header>
  )
}

export default NavBar



