import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div>
            <div>
                <p className="fw-italic">{props.greeting}</p>
            </div>
            <br />
            <div>
                <p className="fw-bold">
                Bienvenido usuario {props.usuario}
                </p>
            </div>
        </div>
        
    )
}

export default ItemListContainer