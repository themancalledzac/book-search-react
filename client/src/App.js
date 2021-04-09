import React, { Component } from "react";
import Nav from "./components/Nav.js";
import NavNew from "./components/NavNew.js";
import Search from "./pages/Search.js";
import Cart from "./pages/Cart.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/cart' component={Cart} />
            {/* here lies the 'this route doesn't exist/not fount */}
            <Route exact path='*' component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
