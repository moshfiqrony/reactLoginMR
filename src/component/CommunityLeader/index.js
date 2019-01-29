import React from 'react'
import './style.css';
import Header from './Header'
import Dashboard from './pages/Dashboard'


class CommunityLeaderHome extends React.Component{
    render(){
        return( 
            <div>
                <Header/>
                <Dashboard/>
            </div>  
        )
    }
}

export default CommunityLeaderHome;