import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Items from '../Items/Items'


function ItemDetailContainer() {

    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        const anotherPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Items.find(item => item.id === 1))
            }, 2000);
        });

        anotherPromise.then((result) => setProduct(result));
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer;