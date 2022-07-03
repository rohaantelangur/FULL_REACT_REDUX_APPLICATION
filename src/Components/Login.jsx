import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login, loginSuccess } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const Auth = useSelector((store) => store.Authreducer);
  const navigate = useNavigate()
  const despatch = useDispatch();
  const location = useLocation();
  console.log(location);
  
  console.log(Auth);
  const handleLogin = () => {
    despatch(
      login({
        email,
        password,
      })
    );
  };

  if(Auth.isAuth){
    navigate(location.state.pathname)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor="">Email: </label>
      <input
        type="text"
        name="email"
        value="eve.holt@reqres.in"
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <label htmlFor="">Password: </label>
      <input
        type="text"
        name="password"
        value="cityslicka"
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
