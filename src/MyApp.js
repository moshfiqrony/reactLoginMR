import React from 'react'
import Header from './component/WebHome/Header'
import About from './component/WebHome/About'
import Contact from './component/WebHome/Contact'
import Home from './component/WebHome/Home'
import Login from './component/WebHome/Login'
import Register from './component/WebHome/Register'
import CommunityLeader from './component/CommunityLeader'
import Agent from './component/CommunityLeader/pages/Agent'
import CLList from './component/CommunityLeader/pages/CLList'
import Recruit from './component/CommunityLeader/pages/Recruit'
import {BrowserRouter, Route} from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class MyApp extends React.Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/about' component={About}/>
                        <Route exact path='/' component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route exact path='/CommunityLeader' component={CommunityLeader} />
                        <Route path='/CommunityLeader/CLList' component={CLList} />
                        <Route path='/CommunityLeader/AgentList' component={Agent} />
                        <Route path='/CommunityLeader/Recruit' component={Recruit} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default MyApp;