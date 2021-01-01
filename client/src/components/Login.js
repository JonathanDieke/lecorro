import React from 'react' 
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Response from "./Response"
import auth from "../helpers/auth"

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email : 'louloulexus@gmail.com',
            password : '1234',
            responseComponent : null,
        } 
    }

    handleInputsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.setState({responseComponent : null}) 
        let props = this.props

        auth.login(this.state, (data) => { 
            if(data.error){ //Mot de passe incorrect
                this.setState({
                    responseComponent : {
                        title : data.error, 
                        classname : "danger"
                    }, 
                    password:""
                }) 
            }else if(data.id && data.token && data.email && data.pseudo && data.name && data.lastname){ // identifiants corrects 
                const action = {
                    type : "CONNECTED_USER", 
                    value : {...data}
                }
                props.dispatch(action)
                localStorage.setItem('token', data.token)
                props.history.push("/home")
            }else{ // Erreur interne du serveur 
                this.setState({
                    responseComponent  : {
                        title : "Erreur de connexion, veuillez réessayer ultérieurement !", 
                        classname : "danger"
                    }
                })   
            }
        })
    } 

    render(){
        return(
            <div>
                <Navigation />

                <div className='container col-6' style={{ paddingTop :' 80px' }}>
                    {this.state.responseComponent ? <Response data={this.state.responseComponent} /> : this.state.responseComponent}

                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-3 col-form-label text-left">Adresse email : </label>
                            <div className="col-sm-9">
                            <input name="email" type="text" className="form-control" id="email" 
                                value={this.state.email}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
                        
                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-3 col-form-label text-left">Mot de passe : </label>
                            <div className="col-sm-9">
                            <input name="password" type="password" className="form-control" id="password" 
                                value={this.state.password}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
                        <button className="btn btn-success btn-block ">Connexion</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapGlobalStateToProps = (state) => {
    return {
        isAuthenticated : state.isAuthenticated, 
    }
}
export default connect(mapGlobalStateToProps)(Login);