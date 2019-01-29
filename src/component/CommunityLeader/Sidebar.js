import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div class="sidenav2">
                    <Link to='/CommunityLeader/'>Dashboard</Link>
                    <Link to='/CommunityLeader/CLList'>Comunity Leader</Link>
                    <Link to='/CommunityLeader/AgentList'>Agent</Link>
                    <Link to='/CommunityLeader/Recruit'>Recruit Agent</Link>
                </div>
            </div>
        )
    }
}


export default Sidebar