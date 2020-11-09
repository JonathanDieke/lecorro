const initialState = {
    isAuthenticated : false,
    userId : "",
    token : "",
    pseudo : "",
    email : "",
    name : "", 
    lastname : "",
}

function AuthenticationReducer(state = initialState, action){
    let nextState; 
    switch (action.type) {
        case 'CONNECTED_USER':
            nextState = {
                isAuthenticated : true,
                userId : action.value.userId,
                token : action.value.token,
                pseudo : action.value.pseudo,
                email : action.value.email,
                name : action.value.name,
                lastname : action.value.lastname,
            }; 
            return nextState || state ; 

        case 'DECONNECTED_USER':
            if(state.isAuthenticated){ 
                nextState = initialState;
                return nextState || state; 
            }
            break;

        default:
            return state;
    }
}

export default AuthenticationReducer;