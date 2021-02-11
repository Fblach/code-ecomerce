import React from 'react'
import Image from './Remera.jpg'
import {Card, Button} from 'react-bootstrap'

export default function ItemDetail ({product}){

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image} />
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