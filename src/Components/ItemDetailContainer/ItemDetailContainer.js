import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import Items from '../Items/Items'


function ItemDetailContainer() {

    const {id} = useParams();
    const [product, setProduct] = React.useState([]);
    console.log(id)


    React.useEffect(() => {
        let showProduct = Items.find(item => item.id === Number(id))
        setProduct(showProduct)
    }, [id]);
    console.log(product)
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer;