import React from 'react'; 

class SubjectOption extends React.Component{

    render(){

        return(
            <option value={this.props.value}>
                {this.props.libel}
            </option>
        )
    } 
}

export default SubjectOption;