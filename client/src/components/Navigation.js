import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'; 
import auth from "../helpers/auth"
import logo from "../logo.svg" 

class Navigation extends React.Component {

    logout = () => { 
        const props = this.props 
        auth.logout(() =>{ 
            const action = {
                type : "DECONNECTED_USER",  
            }
            localStorage.removeItem("token") 
            props.dispatch(action)
        })
    }

    render(){
        const liStyle = {
            margin : 7,
            // color : "black"
        }   

        let navbarLinks 

        if(localStorage.getItem('token')){
            navbarLinks = (
                <ul className="navbar-nav ml-auto" style={liStyle}> 
                    <li className="nav-item dropdown" >
                        <a href="profil" className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            {this.props.pseudo ? this.props.pseudo : 'Profil'}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark"> 
                            <NavLink to='/home'>
                                <li style={liStyle}>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to='/users/me'>
                                <li style={liStyle}>
                                    Profil
                                </li>
                            </NavLink>
                            <NavLink to="/login">
                                <li className="nav-item" style={liStyle} onClick={this.logout}>
                                    Se Déconnecter 
                                </li>
                            </NavLink> 
                        </ul>
                    </li>
                </ul>
            )
        }else{
            navbarLinks = (
                <ul className="navbar-nav ml-auto"> 
                    <NavLink to="/login" style={liStyle}>
                        <li style={liStyle}>
                            Se Connecter
                        </li>
                    </NavLink>
                    <NavLink to="/register" style={liStyle}>
                        <li style={liStyle}>
                            S'enregistrer
                        </li>
                    </NavLink> 
                </ul>
            )
        }


        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <NavLink to="/">
                        <img style={{height : "30px", width : "40px"}} src={logo} alt='logo'></img>
                        LeCorro 
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {navbarLinks}
                    </div>
                </nav>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => { 
    return {
        isAuthenticated : state.isAuthenticated, 
        pseudo : state.pseudo
    }
}
export default connect(mapGlobalStateToProps)(Navigation);
