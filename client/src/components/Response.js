import React from 'react'; 

class Response extends React.Component{

    render(){
        let baseClass = `alert text-center alert-${this.props.data.classname }`

        return(
            <div className={baseClass} >
                {this.props.data.title}
            </div>
        )
    } 
}

export default Response;