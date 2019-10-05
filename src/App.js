import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import Header from "./views/template/Header.jsx";

import UserLanding from "./views/Onboard/landing/Landing.jsx";
import SignIn from "./views/Signin/signin.jsx";
import SignUp from "./views/Signup/Signup.jsx";
import Developer from "./views/Developer/Developer.jsx";
import NotFound from "./views/common/NotFound.jsx";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/developer" exact component={Developer} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route exact path="/" component={UserLanding} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
