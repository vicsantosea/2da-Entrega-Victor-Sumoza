import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src="./img/logocarrito.png" alt="Carrito de compras" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget