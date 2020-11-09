import React from 'react'; 

class Response extends React.Component{

    render(){

        return(
            <div className="alert alert-warning text-center">
                {this.props.message}
            </div>
        )
    } 
}

export default Response;