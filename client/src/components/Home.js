import React from 'react' 
import {connect} from 'react-redux'
import Navigation from './Navigation'

class Home extends React.Component{ 
    
    render(){
        return(
            <div>
                <Navigation />

                <div className='container col-6' style={{ paddingTop :' 80px' }} >

                    <div className="alert alert-success display-2">
                        Bienvenue sur votre compte, 
                        <span className="text-capitalize">{this.props.pseudo}</span>  !
                    </div>  
                    
                </div>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return state
    // return {
    //     isAuthenticated : state.isAuthenticated,
    //     userID : state.userID,
    //     token : state.token,
    //     pseudo : state.pseudo,
    //     email : state.email,
    //     name : state.name,
    //     lastname : state.lastname,
    // }
}

export default connect(mapGlobalStateToProps)(Home);