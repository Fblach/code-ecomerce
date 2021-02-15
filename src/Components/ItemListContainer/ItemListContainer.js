import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemList from '../ItemList/ItemList'
import Items from '../Items/Items'

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
            <ItemCounter onAdd={handleAdd} stock={stock} inicial={1} />
        </div>
    )
}
export default ItemListContainer;