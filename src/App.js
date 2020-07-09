import React from 'react';
import './Pages/style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="body-container">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/account" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
