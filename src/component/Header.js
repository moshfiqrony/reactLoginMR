import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component{
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                <Link to='/' class="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to='/' href="sass.html">Home</Link></li>
                    <li><Link to='/about' href="badges.html">About</Link></li>
                    <li><Link to='/contact' href="collapsible.html">Contact</Link></li>
                    <li><Link to='/login' href="collapsible.html">Login</Link></li>
                    <li><Link to='/register' href="collapsible.html">Register</Link></li>
                </ul>
                </div>
            </nav>
        );
    }
}


export default Header;