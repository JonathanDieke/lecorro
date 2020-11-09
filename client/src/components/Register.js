import Axios from 'axios';
import React from 'react'; 
import Navigation from './Navigation'
import Response from './Response'

class Register extends React.Component{

    constructor(props){
        super(props)
        this.initialState = {
            register : "",
            email : "",
            name : "",
            lastname : "",
            pseudo : "",
            password : "",
            cpassword : "",
        }
        this.state = {response : null, ...this.initialState}
        this.api = Axios.create({
            baseURL : "http://localhost:8080/"
        })
    }

    handleInputsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data  = this.state

        this.api.post('api/users/register', { data })
        .then(({data}) => { 
            if(data.error){
                this.setState({response : data.error}) 
            }else if(data.userId){
                this.setState({response : "Vous êtes bien enregistrés !"}) 
                this.setState(this.initialState) 
                setTimeout(() => {
                    this.props.history.push("/home")
                }, 2000);
            }
        })
        .catch(err => {
            this.setState({response : "Une erreur s'est produite, veuillez réessayer plutard !"}) 
            console.log("Une erreur s'est produite lors de l'enregistrement front-end", err)
        })
    }

    render(){ 

        return(
            <div>

                <Navigation />

                <div className='container col-6' style={{ paddingTop :' 80px' }}>

                    {this.state.response != null ? <Response message={this.state.response}/> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="register" className="col-sm-3 col-form-label text-left">Matricule étudiant : </label>
                            <div className="col-sm-9">
                            <input name="register" type="text" className="form-control" id="register" 
                                value={this.state.register}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-3 col-form-label text-left">Adresse email : </label>
                            <div className="col-sm-9">
                            <input name="email" type="email" className="form-control" id="email" 
                                value={this.state.email}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label text-left">Nom  : </label>
                            <div className="col-sm-9">
                            <input name="name" type="text" className="form-control" id="name" 
                                value={this.state.name}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="lastname" className="col-sm-3 col-form-label text-left">Prénom : </label>
                            <div className="col-sm-9">
                            <input name="lastname" type="text" className="form-control" id="lastname" 
                                value={this.state.lastname}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="pseudo" className="col-sm-3 col-form-label text-left">Pseudo: </label>
                            <div className="col-sm-9">
                            <input name="pseudo" type="text" className="form-control" id="pseudo" 
                                value={this.state.pseudo}
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
                        
                        <div className="mb-3 row">
                            <label htmlFor="cpassword" className="col-sm-3 col-form-label text-left">Confirmer mot de passe : </label>
                            <div className="col-sm-9">
                            <input name="cpassword" type="password" className="form-control" id="cpassword" 
                                value={this.state.cpassword}
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
                        
                        <button className="btn btn-success btn-block ">Creer un compte</button>
                    </form>
                </div>
            </div>
        )
    } 
}

export default Register;