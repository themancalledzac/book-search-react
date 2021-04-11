import React, { Component } from "react";
import Search from "./pages/Search.js";
import Cart from "./pages/Cart.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
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
