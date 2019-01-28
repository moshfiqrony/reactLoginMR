import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import {BrowserRouter, Route} from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class MyApp extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <Route path='/about' component={About}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default MyApp;