import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from "react-router-dom" 

const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route
            {...rest}
            
            render = {props => { 
                if(localStorage.getItem('token')){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to ={{
                            pathname : '/login',
                            state : {
                               from : props.location
                            }
                        }}/>
                }
            }}
        />  
    )
}

const mapGlobalStateToProps = (state) => { 
    return state
}

export default  connect(mapGlobalStateToProps)(ProtectedRoute);