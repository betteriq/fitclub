import React from 'react'
import "./index.css"
import Headerleft from "./Headrleft"
import Headerright from "./Headerright"
const index = () => {
    return (
        <div className='hero'>
            <Headerleft />
            <Headerright />
        </div>
    )
}

export default index