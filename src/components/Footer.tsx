import { Link } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="footer">
                <div className="first">
                        <div className="logo">Logo</div>

                <div className="company">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to={'about-us'}>About Us</Link></li>
                        <li><Link to={'faqs'}>FAQs</Link></li>
                    </ul>
                </div>

                <div className="legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to={''}>Terms and Condition</Link></li>
                        <li><Link to={''}>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="product">
                    <h4>Product</h4>
                    <ul>
                        <li><Link to={''}>Resume Builder</Link></li>
                        <li><Link to={''}>Resume Reviews</Link></li>
                        <li><Link to={''}>Courses</Link></li>
                        <li><Link to={''}>Mentoring</Link></li>
                    </ul>
                </div>

                <div className="resourse">
                    <h4>Resourse</h4>
                    <ul>
                        <li><Link to={''}>Blogs</Link></li>
                    </ul>
                </div>

                </div>

                <div className="second">

                    <div className="follow">
                        <h4>Follow Us</h4>
                        <i className="fa-brands fa-facebook-f"></i> 
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-weixin"></i> 
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <div className="subscribe">
                        <h4>Subscribe to our newsletter</h4>
                        <form action="">
                        <input type="email" name="" id="" placeholder='Enter Your Email' /><button>Subscribe</button>
                        </form>
                    </div>
                </div>


                </div>
                <div className="line"></div>

            <h5>2022 Rectpath.All rights reserved</h5>    
            </footer>
        </>
     );
}
 
export default Footer;