import React, {useContext} from 'react'
import { cartContext } from '../../context/CartContext'

export default function Cart (){

    const UseCartContext = useContext(cartContext)

    return <h1>Soy el carrito</h1>
}