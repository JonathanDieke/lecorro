import React from 'react' 
import {connect} from 'react-redux'
import Axios from 'axios'
import Navigation from './Navigation' 


class Profil extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            register : '',
            email : '',
            name : '',
            lastname : '',
            pseudo : '',
        } 
    }

    componentDidMount(){ 
        Axios.get("/api/users/me/"+this.props.token)
        .then(({data}) => {
            this.setState({
                register : data.register,
                email : data.email,
                name : data.name,
                lastname : data.lastname,
                pseudo : data.pseudo,
            }) 
        })
        .catch(error => console.log("Erreur axios : ",error))
    }

    handleSubmit = (e) => {
        e.preventDefault()  
        console.log(this.state);
        let props = this.props

        Axios.patch("/api/users/me/" + this.props.token, this.state)
        .then(response => {
            props.history.push('/home')
        })
        .catch(error => {
            console.log("Erreur lors de l'update du user");
        })
        
    }
    
    handleInputsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    render(){ 
        return(
            <div>
                <Navigation/>
                
                <div className='container' style={{ paddingTop :' 80px' }}>
                    <form onSubmit={this.handleSubmit} className='col-sm-7'>
                        <div className="row mb-3">
                            <label htmlFor="register" className="col-sm-2 col-form-label col-form-label-sm">Matricule : </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="register" disabled
                                    value={this.state.register}
                                    onChange={this.handleInputsChange} placeholder=""/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Adresse email : </label>
                            <div className="col-sm-10">
                                <input name="email" type="email" className="form-control form-control-sm" id="email" 
                                    value={this.state.email}
                                    onChange={this.handleInputsChange} placeholder=""/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Nom : </label>
                            <div className="col-sm-10">
                                <input name="name" type="text" className="form-control form-control-sm" id="name" 
                                    value={this.state.name}
                                    onChange={this.handleInputsChange} placeholder=""/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="lastname" className="col-sm-2 col-form-label col-form-label-sm">Prénom : </label>
                            <div className="col-sm-10">
                                <input name="lastname" type="text" className="form-control form-control-sm" id="lastname" 
                                    value={this.state.lastname}
                                    onChange={this.handleInputsChange} placeholder=""/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="pseudo" className="col-sm-2 col-form-label col-form-label-sm">Pseudo : </label>
                            <div className="col-sm-10">
                                <input name="pseudo" type="text" className="form-control form-control-sm" id="pseudo" 
                                    value={this.state.pseudo}
                                    onChange={this.handleInputsChange} placeholder=""/>
                            </div>
                        </div>

                        <button className="btn btn-success btn-sm btn-block" type="submit">Mettre à jour</button>

                    </form>
                        
                </div>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return state
}
export default connect(mapGlobalStateToProps)(Profil);