import Logo from "../../../../assets/logo.png"
import "./index.css"


const index = () => {
    return (
        <>
            <div className="header-nav">
                <img src={Logo} alt="" className='logo' />
                <ul>
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                </ul>
            </div>

        </>
    )
}

export default index