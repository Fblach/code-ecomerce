import React, {useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCounter from '../ItemCounter/ItemCounter'
import {Link} from 'react-router-dom'
import { cartContext } from '../../context/CartContext'

export default function ItemDetail ({product}){
    const [goToCart, setGoToCart] = React.useState(false)

    const { addToCart, item} = useContext(cartContext)

    const handleAdd = (counter) => {
        return () => {
            if (counter > 0) {
                setGoToCart(true)
                addToCart({product: product, quantity: counter})
            }
            else {
                alert('No items to add')
            }
        }
    }

    console.log([ item ])

    return (
        <Card style={{ width: '18rem', marginTop: 30}}>
            <Card.Img variant="top" src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <p>{product.desc}</p>
                    <p>$ {product.price}</p>
                    <p> Stock: {product.stock}</p>
                </Card.Text>
                {goToCart ? <Link to="/carrito"><Button>Finalizar compra</Button></Link> : <ItemCounter onAdd={handleAdd} stock={product.stock} inicial={1}/>}
            </Card.Body>
        </Card>
    )
}