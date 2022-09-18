import Headeroptions from "./Headeroptions"
import Headernav from "./Headernav"
import "./index.css"

const index = () => {
    return (
        <>
            <div className="left-side">
                <Headernav />
                <div className='notife-left'>
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
                <div className='st'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>your</span>
                    </div>
                    <span>Ideal body</span>
                </div>

                <div className="header-detail">
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
                <div>
                    <Headeroptions />
                </div>
                <div className="button-leftside">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div></>
    )
}

export default index