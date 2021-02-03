import React, { useState } from 'react';
import Display from './Display/Display'
import AddButton from './AddButton/AddButton'
import Buttons from './Buttons/Buttons';

export default function ItemCounter({ onAdd, stock, inicial }) {

    let [counter, setCounter] = useState(inicial)
    const handleClick = (amount) => {
        return (
            () => {
                let total = (amount < 0) ? 0 : amount;
                let limit = (amount > stock) ? stock : total;
                setCounter(limit);
            }
        )
    };

    let prop = { counter, setCounter }
    return (
        <div className="itemCount" style={{ alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                <Buttons plus={false} onClick={handleClick} {...prop} />
                <Display value={counter} />
                <Buttons plus={true} onClick={handleClick} {...prop} asd={false} />
            </div>
            <div style={{ marginTop: "10px" }}>
                <AddButton onAdd={onAdd} counter={counter} />
            </div>
        </div>
    )

}