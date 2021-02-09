import React from 'react'
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

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Items)
            }, 2000);
    });

    myPromise.then((result) => setItems(result));
    }, []);
    

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <ItemList items={items}/>
            <ItemCounter onAdd={handleAdd} stock={stock} inicial={1} />
        </div>
    )
}
export default ItemListContainer;