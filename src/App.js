import React from 'react';
import './Pages/style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Wishlist from './Pages/Wishlist Page';
import Cart from './Pages/Cart Page';

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="body-container">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/account" component={Login}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
