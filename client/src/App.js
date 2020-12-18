import React from 'react';  
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ProtectedRoute from './helpers/ProtectedRoute'
import PageNotFound from './components/404'
// import Navigation from './components/Navigation';
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profil from './components/Profil'
import 'semantic-ui-css/semantic.min.css'
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={Welcome}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/home" exact component={Home}></ProtectedRoute>
          <ProtectedRoute path="/users/me" exact component={Profil}></ProtectedRoute> 
          <Route path="/search" exact component={Search} />
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
