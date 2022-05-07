import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

import { GoogleLogin } from "react-google-login";

import { refreshTokenSetup } from "./utils/Token";

const clientId =
  "87737707561-uicggcqd9q2r0kmt72dd988mr3me8jvc.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Successful: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name} `);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  return (
    <>
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>User Login</h3>
        </div>
        <div className="card-body">
          <form encType="multipart/form-data" autoComplete="off">
            <div className="form-group">
              <label className="mb-0">
                Email<span className="text-danger">*</span>
              </label>
              <input
                name="username"
                type="email"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="form-group">
              <label className="mb-0 mt-2">
                Password<span className="text-danger">*</span>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <p className="text-center mb-0 mt-3">
              <input
                type="submit"
                className="btn btn-primary btn-lg w-100 text-uppercase"
                value="Login"
              />
            </p>
          </form>
        </div>
      </div>
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Google Sign In"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
      </div>
    </>
  );
}

export default Login;
