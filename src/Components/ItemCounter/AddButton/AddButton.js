import React from 'react'
import Button from 'react-bootstrap/Button'

export default function AddButton({onAdd, counter}){
    return(
        <Button onClick = {onAdd(counter)}>Add</Button>
    )
}