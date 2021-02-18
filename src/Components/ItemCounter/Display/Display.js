import React from 'react'

export default function Display({ value }) {

    const style = {
        backgroundColor: 'white',
        marginLeft: '10px',
        textAlign: 'center',
        marginRight: '10px',
        marginTop: '2px'
    }

    return (
        <div className="display" {...{ style }}>{value}</div>
    )
}