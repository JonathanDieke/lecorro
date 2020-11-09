import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthenticationReducer from './Reducers/reducerAuthentication'

const persistConfig = {
    key: 'root',
    storage, 
}

const persistedReducer = persistReducer(persistConfig, AuthenticationReducer)

let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)
let persistor = persistStore(store) 

export {store, persistor}
