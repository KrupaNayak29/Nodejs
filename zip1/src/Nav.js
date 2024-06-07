import React, { useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import logo1 from './img/logo1.jpg';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/Signup');
    }
    return(
        <div>
            <img
            alt="logo"
            className="logo"
            src={logo1}/>
            {auth?
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/Sub">Subscription</Link></li>
                <li><Link to="/Add">Add Products</Link></li>
                <li><Link to="/Addsub">Add Subscription</Link></li>
                <li><Link to="/Update">UpdateProducts</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link onClick ={logout}to="/Signup">logout</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/Signup">Sign Up</Link></li>
                <li> <Link to="/Login">Login</Link></li>
            </ul>
            }
        </div>
    )
}
export default Nav;