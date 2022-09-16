import Logo from "../../../assets/logo.png"
import "./index.css"
const index = () => {
    return (
        <>
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
                <div>
                    <span>im here twe will help you to shape and build your ideal body and live up your life to fullest.</span>
                </div>
                <div>
                    <div>
                        <div>
                            <span>+140</span>
                            <span>Expert coach</span>
                        </div>
                        <div>
                            <span>+978</span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>+50</span>
                            <span>fitness program</span>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default index