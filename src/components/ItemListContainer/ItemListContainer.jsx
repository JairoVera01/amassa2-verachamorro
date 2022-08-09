import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div>
            <div>
                <p>{props.greeting}</p>
            </div>
            <br />
            <div>
                <p>
                Bienvenido usuario {props.usuario}
                </p>
            </div>
        </div>
        
    )
}

export default ItemListContainer