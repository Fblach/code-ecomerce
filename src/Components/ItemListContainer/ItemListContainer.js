import React from 'react'
import gif from './oprah.gif'

function ItemListContainer(){
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
         <img src={gif} alt="ERROR" ></img>
        </div>
    )
}
export default ItemListContainer;