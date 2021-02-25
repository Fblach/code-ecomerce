import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import Items from '../Items/Items'


function ItemDetailContainer() {

    const {id} = useParams();
    const [product, setProduct] = React.useState([]);


    React.useEffect(() => {
        let showProduct = Items.find(item => item.id === Number(id))
        setProduct(showProduct)
    }, [id]);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer;