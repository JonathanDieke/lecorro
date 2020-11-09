import React from 'react'
import Navigation from  './Navigation'

class Welcome extends React.Component{

    render(){
        return (
            <div>
                <Navigation></Navigation>

                <div className='container' style={{ paddingTop :' 80px' }}>
                    Welcome Page
                </div>

            </div>
        )
    }
}

export default Welcome