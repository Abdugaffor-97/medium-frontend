import React from "react";

const Login = () => {
  return (
    <div>
      <a
        href={process.env.REACT_APP_API_URL + "/users/google-redirect"}
        className="btn"
      >
        Login With Google
      </a>
    </div>
  );
};

export default Login;
