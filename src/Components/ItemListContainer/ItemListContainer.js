import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Items from '../Items/Items'

function ItemListContainer(){


    const {id} = useParams();
    const [items, setItems] = React.useState([]);
    console.log(id)


    React.useEffect(() => {
        if(id !== undefined){
            let showProducts = Items.filter((item) =>{
                return item.categoria === id
            });
            setItems(showProducts)
        }else {
            setItems(Items) 
        }
    },[id])

    return(
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer;