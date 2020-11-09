import Axios from 'axios'


class Authentication {
    constructor(){
        this.authenticated = false 
    }

    login(data, callback){ 
        Axios.post("users/login", { data })
        .then(({data}) => {
            this.authenticated = true
            callback(data)
        })
        .catch(err => {
            callback(err)
            console.log("Erreur interne du serveur", err)
        })
    }

    logout(callback){
        this.authenticated = false
        callback()
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Authentication() ;