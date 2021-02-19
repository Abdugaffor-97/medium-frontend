import React from "react";
import  "./style.scss";

const Login = () => {
  return (

    <div className='login-wrapper'>
      <div className='login'>
        <a
          href={process.env.REACT_APP_API_URL + "/users/google-redirect"}
          className="btn"
        >
          Login With Google
        </a>
      </div>
    </div>
  );
};

export default Login;
