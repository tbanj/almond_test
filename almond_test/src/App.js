import React, { Component } from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./views/template/Header.jsx";

import UserLanding from "./views/Onboard/landing/Landing.jsx";
import SignIn from "./views/Signin/signin.jsx";
import SignUp from "./views/Signup/Signup.jsx";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" component={UserLanding} />
      </Switch>
    );
  }
}

export default App;
