import React from 'react'
import "./index.css"
import Logo from "../../assets/logo.png"
const index = () => {
    return (
        <div className='hero'>
            <div className="left-side">
                <div className="header-left">
                    <img src={Logo} alt="" className='logo' />
                    <ul>
                        <li>Home</li>
                        <li>Programs</li>
                        <li>Why us</li>
                        <li>Plans</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <span className='button-left'>The best fitness club in the town</span>
                <div className='st'>
                    <span className='stroke-text'>Shape</span>
                    <span>your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
            </div>
            <div className="right-side">right side</div>
        </div>
    )
}

export default index