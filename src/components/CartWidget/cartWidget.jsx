import React from 'react'
import { Link } from 'react-router-dom'

const cartWidget = () => {
    return (
        <div>
            <div className="">
            <Link  to="/cart">
                <button className="btn btn-outline-light iconCart" type=""><i className="bi bi-cart "></i></button>
                </Link>
            </div> 
        </div>
    )
}

export default cartWidget