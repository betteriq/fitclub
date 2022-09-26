import "./index.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"





const index = () => {
    return (
        <div className='about-club'>

            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>SOME REASONS</span>
                <div className="right-r-first-div">
                    <span className="stroke-text">WHY</span>
                    <span>CHOOSE US?</span>
                    <ul>
                        <li>OVER 140+ EXPERT COACHS</li>
                        <li>TRAIN SMARTER AND FASTER THAN BEFORE</li>
                        <li>1 FREE PROGRAM FOR NEW MEMBER</li>
                        <li>RELIABLE PARTNERS</li>
                    </ul>
                    <span></span>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default index