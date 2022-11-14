import "../styles/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <>
            <nav>
                <div onClick={() => navigate('/')} className="logo">
                    Logo
                </div>

                <div className="nav-pages">
                    <ul>
                        <li className="no-margin"><Link to={'/about-us'}>About Us</Link></li>
                        <li><button className="dropdown-btn">Product <i className="fa-solid fa-chevron-down"></i></button></li>
                        <div className="dropdown-menu">
                            <ul>
                                <li><Link to={'resume-builder'}>Resume Builder</Link></li>
                                <li><Link to={'resume-review'}>Resume Review</Link></li>
                                <li><Link to={'career-path'}>Career Paths</Link></li>
                                <li><Link to={'mentoring'}>Mentoring</Link></li>
                            </ul>
                        </div>
                        <li id="no-left-margin"><Link to={'resources'}>Resources</Link></li>
                        <li className="no-margin"><Link to={'community'}>Community</Link></li>
                    </ul>
                </div>

                <div className="nav-btns">
                    <button className="login" onClick={() => navigate('/login')}>Login</button>
                    <button className="get-started" onClick={() => navigate('/')}>Get Started</button>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;