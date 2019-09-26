import React from "react";
import NavBar from "../common/nav";
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h3 className="text-teal text-center">Sign Up to Continue</h3>
            <form className="mt-3">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="confirmPassword"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-teal btn-block">
              REGISTER NOW
              </button>
              <div className="text-center mt-4">
                  <p>Already have an account? <Link className="text-danger" to="/signin">Sign in</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
