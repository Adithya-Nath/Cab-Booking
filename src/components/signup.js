import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    axios
      .post("http://localhost/api/post", user)
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.error(error);

      });
  };

  return (
    <div className="pag">
      <div className="cove">
        <div className="tx">
          <h1>Signup</h1>
        </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder=" Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btun" type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        </form>
        <h3>
          Already have an account?
          <Link to="/login">Login</Link>
        </h3>
      </div>
    </div>
  );
};

export default Signup;
