import React from 'react'
import {Card, Button} from 'react-bootstrap'

export default function ItemDetail ({product}){
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
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}