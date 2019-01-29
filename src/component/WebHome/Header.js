import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component{
    render() {
        return (
            <div className='navbar-fixed'>
                <nav>
                    <div class="nav-wrapper">
                    <Link to='/' class="brand-logo"><img style={{paddingTop: 10, paddingLeft: 10}} src='http://getd2.com/img/logo-new.png' alt='logo'/></Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
            
        );
    }
}


export default Header;