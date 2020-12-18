import React from 'react' 
import Axios from 'axios'

class Search extends React.Component{ 

    handleSubmit = (e) => {
        e.preventDefault()

        Axios.post('/search', {})
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        
    } 
    
    render(){
        return(
            <div className="container">
                <p className="text-center " >
                    LeCorro Search Page 
                </p>

                <div>
                    <form onSubmit={this.handleSubmit} encType='multipart/form-data' className="row">
                            <div className="col-sm-7">
                                <input name="file" type="file" className="form-control" id="file" />
                            </div>
                            <div className="col-sm-3"></div>
                            <button type="submit" className="btn btn-success">Corroter</button>
                        </form>
                </div>

            </div>
        )
    }
}


export default Search;