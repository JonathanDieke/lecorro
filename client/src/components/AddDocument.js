import Axios from 'axios';
import React from 'react'; 
import Navigation from './Navigation'
import Response from './Response'
import SubjectOption from './SubjectOption'

class AddDocument extends React.Component{

    constructor(props){
        super(props)
        this.initialState = {
            title : "",
            description : "",
            keywords : "",
            subject_id : "1",
            document : "", 
            subjects : []
        }
        this.state = {response : null, ...this.initialState}    
    }

    componentDidMount() {
        Axios.get("/get_subjects")
        .then( ( {data} ) => {
            this.setState({ 
                subjects : data.data.map( (value, index) => {
                    return value
                })
            })
        })
        .catch( error => {
            console.log("Impossible de charger les matières : ", error);
        })
    }
    
    handleInputsChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })  
    }

    handleInputDocument = (e) => {
            this.setState({
               document : e.target.files[0] 
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()        

        let config  = {
            headers : {
                'content-type' :  'multipart/form-data'
            }
        }
        let data = new FormData()

        Object.keys(this.state).forEach( key => {
            data.append(key, this.state[key])
        })

        Axios.post('/add_document', data, config)
        .then( ( { data } ) => { 
            this.setState({response : null})
            if(data.error){
                this.setState({response : data.error}) 
            }else{
                this.setState({
                    responseComponent : {
                        title : "Votre document est bien enregistré.", 
                        classname : 'success'
                    }
                }) 
            }
        })
        .catch(err => {
            this.setState({response : "Une erreur s'est produite, veuillez réessayer ultérieurement !"}) 
            console.log("Une erreur s'est produite lors de l'enregistrement du document : ", err)
        })
    }

    render(){ 

        return(
            <div>

                <Navigation />

                <div className='container col-6' style={{ paddingTop :' 80px' }}>

                    {this.state.responseComponent != null ? <Response data={this.state.responseComponent} /> : this.state.responseComponent}

                    <form onSubmit={this.handleSubmit} >
                        
                        <div className="mb-3 row">
                                <label htmlFor="document" className="col-sm-3 col-form-label text-left">Fichier : </label>
                                <div className="col-sm-9">
                                <input name="document" type="file" className="form-control" id="document" 
                                    onChange={this.handleInputDocument}/>
                                </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="subject_id" className="col-sm-3 col-form-label text-left">Matière : </label>
                            <div className="col-sm-9">
                                <select name='subject_id' className="form-control" id="subject_id" onChange={this.handleInputsChange} >
                                    {this.state.subjects.map( (value, index) => {
                                        return <SubjectOption value={value.id}  libel={value.libel} key={index}></SubjectOption>
                                    }) }
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="title" className="col-sm-3 col-form-label text-left">Titre : </label>
                            <div className="col-sm-9">
                            <input name="title" type="text" className="form-control" id="title" 
                                value={this.state.title}
                                placeholder="Ex. : Cours de Java"
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>
        
                        <div className="mb-3 row">
                            <label htmlFor="description" className="col-sm-3 col-form-label text-left">Description  : </label>
                            <div className="col-sm-9">
                            <input name="description" type="text" className="form-control" id="description" 
                                value={this.state.description}
                                placeholder="Ex. : Cours de Java SIGL2 2019-2020"
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="keywords" className="col-sm-3 col-form-label text-left">Mots clés : </label>
                            <div className="col-sm-9">
                            <input name="keywords" type="text" className="form-control" id="keywords" 
                                value={this.state.keywords}
                                placeholder="Ex. : Cours, java, sigl, licence2, 2019, 2020"
                                onChange={this.handleInputsChange}/>
                            </div>
                        </div>  
        
                        <button className="btn btn-success btn-block ">Ajouter le document</button>
                    </form>
                </div>
            </div>
        )
    } 
}

export default AddDocument;