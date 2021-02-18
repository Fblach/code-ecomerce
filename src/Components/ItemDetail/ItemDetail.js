import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemCounter from '../ItemCounter/ItemCounter'
import {Link} from 'react-router-dom'

export default function ItemDetail ({product}){
    const [goToCart, setGoToCart] = React.useState(false)

    const handleAdd = (counter) => {
        return () => {
            if (counter > 0) {
                alert(counter + ' items added')
                setGoToCart(true)
            }
            else {
                alert('No items to add')
            }
        }
    }

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