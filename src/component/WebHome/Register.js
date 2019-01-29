import React from 'react'
import Header from './Header'   

class Registe extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onSubmit(e){
        e.preventDefault();
        return(this.props.history.push('/CommunityLeader'))
    }



    render(){
        return(
            <div>
                <Header/>   
                <div>
                    <div className='center'>
                        <form onSubmit={this.onSubmit} style={{width: 300, margin: '0 auto', border: '1px solid #ffe57f  ', padding: 50, marginTop: 30}}>
                            <div class="input-field">
                                <input id="email" type="email" class="validate"/>
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <input id="password" type="password" class="validate"/>
                                <label for="password">Password</label>
                            </div>
                            <div class="input-field">
                                <input id="confirm_password" type="text" class="validate"/>
                                <label for="confirm_password">Confirm Password</label>
                            </div>
                            <div class="input-field">
                                <input type="submit"  class="btn lime darken-1"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default Registe;