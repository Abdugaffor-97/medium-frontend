import React, { useState } from "react";

const Login = () => {
  const [username, setUsrname] = useState("");
  return (
    <div>
      <form>
        <label>
          Username
          <input type="text" />
        </label>
        <label>
          Surname
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          password
          <input type="password" />
        </label>
        <label>
          Confirm password
          <input type="password" />
        </label>
      </form>
    </div>
  );
};

export default Login;
