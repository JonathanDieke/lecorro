import React from 'react' 
import Axios from 'axios'
import Navigation from './Navigation'

class Search extends React.Component{ 

    constructor(props){
        super(props)

        this.state = {
            q : 'query'
        }
    }

    handleInputsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()

        Axios.get('/search/')
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        
    } 
    
    render(){
        return(
            <div>

            <Navigation/>

            <div className="container"style={{ paddingTop :' 80px' }}>

                <p className="text-center " >
                    Barre De Recherche
                </p>

                <div className="d-flex justify-content-center ">
                    <form onSubmit={this.handleSubmit} >
                            <div className="input-group mb-3">
                                <input type="text" 
                                    className="form-control" 
                                    name="q" value={this.state.q} 
                                    onChange={this.handleInputsChange} />
                                <button className=" btn btn-outline-success" type='submit' id="basic-addon2">Corroter</button>
                            </div>
                    </form>
                </div>

            </div>
            </div>
        )
    }
}


export default Search;