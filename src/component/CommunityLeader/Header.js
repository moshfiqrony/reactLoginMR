import React from 'react'
import {Link} from "react-router-dom";
import Sidebar from './Sidebar'
class Header extends React.Component{
    render() {
        return (
            <div>
                <div className='navbar-fixed'>
                    <nav>
                        <div class="nav-wrapper">
                        <Link to='/CommunityLeader' class="brand-logo"><img style={{paddingTop: 10, paddingLeft: 10}} src='http://getd2.com/img/logo-new.png' alt='logo'/></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><Link to='/'>Logout Me</Link></li>
                            
                        </ul>
                        </div>
                    </nav>
                </div>
                <Sidebar />
            </div>
            
        );
    }
}


export default Header;