import React from "react";
import "./service.css"
import { Link } from "react-router-dom";
const Service = () =>{
return(

    <div className="container">
    
        <div className="txt"><h1>Book taxi online</h1></div>
        <div className="cov">
        <input type="text" placeholder="Enter Name"/>
        <input type="text" placeholder="Phone number"/>
        <input type="text" placeholder="Pick-up location"/>
        <input type="text" placeholder="Drop-off location"/>
        <input type="text" placeholder="Date"/>
        <input type="text" placeholder="Time"className="tm"/>
        <button className="btn"><Link to="/driver">Book my taxi</Link></button>
        </div>
       

</div>


)
}
export default Service;