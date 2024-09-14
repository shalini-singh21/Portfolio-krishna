import React from "react";
import skill7 from "../images/skill7.png"
const Contact = () => {

    return (
        <div className="Contact">
            <h1 className="contactTitle">Contact</h1>

            <div className="ContactDetails" > <strong>phone:</strong> 9310262865 </div>
            <div className="ContactDetails"> <strong>Address:</strong>New Delhi, Delhi,India-110043</div> 

            <a className="ContactDetails" href="#">mr.krishnas1998@gmail.com</a>
            <br>
            </br>
            <a href="#github"> <img src={skill7} className="git-img" /> github</a>

        </div>

    )
}

export default Contact;