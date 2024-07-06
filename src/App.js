import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                Key="general"
                PageSize={3}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/general">
              <News
                Key="general"
                PageSize={3}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                Key="business"
                PageSize={3}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                Key="entertainment"
                PageSize={3}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News Key="health" PageSize={3} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                Key="science"
                PageSize={3}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/ports">
              <News Key="ports" PageSize={3} country="in" category="ports" />
            </Route>
            <Route exact path="/technology">
              <News
                Key="technology"
                PageSize={3}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
