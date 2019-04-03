import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
//import './App.css';

import LandingPage from './components/LandingPage';
import Blogs from './containers/Blogs';
import NotFound from "./components/NotFound";
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route path="*" component={NotFound} />
        </Switch>
        
        <Link to="./Blogs">Click Here for Blogs</Link>
          
        </main>
      </div>
    );
  }
}

export default App;
