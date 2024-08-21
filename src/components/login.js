import React,{useState} from "react";
import "./login.css"
import { Link } from "react-router-dom";
const Login = () => {
    const [popupStyle,showPopup] = useState("hide")
    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
return (
    <div className="page">
    <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="Email id"/>
        <input type="password" placeholder="Password"/>
        <div className="login-btn" onClick={popup}><Link to="/service">Login</Link></div>
    </div>
    </div>
)
}
export default Login;