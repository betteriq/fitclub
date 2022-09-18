import React from 'react'
import hero_image from "../../../assets/hero_image.png"
import hero_image_back from "../../../assets/hero_image_back.png"
import heart from "../../../assets/heart.png"
import calories from "../../../assets/calories.png"
import "./index.css"
const index = () => {
    return (
        <>
            <div className="right-side">
                <button className='btn'>Join Now</button>
                <div className="heart">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span><span> 112 bpm</span>
                </div>
            </div>
        </>
    )
}

export default index