import ItemCard from '../ItemCard/ItemCard'
import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = ({items}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
           {items.map((item) => {
                return (
                    <Link to={`/item/${item.id}`}>                   
                        <ItemCard key={item.id} item={item} />
                    </Link>      
                )
    })}           
        </div> 
    );
};

export default ItemList