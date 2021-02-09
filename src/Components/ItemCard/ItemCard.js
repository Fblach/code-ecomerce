import {Card} from 'react-bootstrap' 

export default function ItemCard({ item }){
    return (
        <Card style={{ width: '8rem' }}>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>Precio: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}