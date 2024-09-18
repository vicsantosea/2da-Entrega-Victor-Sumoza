import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img  className="logoStore" src={"./img/Preview.png"} alt="LogoStoreFuture" />
      </Link>

      <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">PlayStation</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/categoria/Xbox">Xbox</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/categoria/Nintendo">Nintendo</a>
  </li>
  
</ul>

        <CartWidget/>

    </header>
  )
}

export default NavBar



