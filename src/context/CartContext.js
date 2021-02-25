import React, { createContext, useState } from 'react'

export const cartContext = createContext()



function CartContext({children}){
    const [item, setItem] = useState([])

    const addToCart = (product) => {
        if (idCheck(product.product.id) === -1){
            setItem(product)
            console.log("llegue")
        }else{
            console.log("no llegue")
        }

    } 

    const idCheck = (id) => {
        return item.findIndex(prod => prod.id === id)
    }

    return(
        <cartContext.Provider value={{
            item,
            addToCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext