import React from 'react'
import gif from './oprah.gif'
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemListContainer(){

    let stock = 10;

    const handleAdd = (counter) => {
        return () => {
            if (counter > 0) {
                alert(counter + ' items added')
            }
            else {
                alert('No items to add')
            }
        }
    }
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={gif} alt="ERROR" ></img>
            <ItemCounter onAdd={handleAdd} stock={stock} inicial={1} />
        </div>
    )
}
export default ItemListContainer;