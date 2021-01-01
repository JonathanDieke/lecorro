import React from 'react' 

class Card extends React.Component{ 

    
    render(){
        return(
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.data.title}</h2>
                        <div className="card-text">
                            <p className="card-text">{this.props.data.description}</p>
                            <span className='text-muted'>{this.props.data.keywords}</span>

                        </div>
                        <a href={this.props.data.path} download className="btn btn-outline-primary btn-sm">Télécharger</a>

                    </div>
                </div>
            </div>
        )
    }
}


export default Card;