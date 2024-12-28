import React from "react";
// import Contact from "./Contact";
// import { Link } from "react-scroll";
//  import logo from "../images/Logo.jpg"
import userImg from "../images/userImg.png"
const Navbar = () => {


    return (
        <>
            <div className="Navbar">

                <h1 className="introName2">Krishna Sharma</h1>

                < div className="desktop-menu">
                    < a activeClass="active" href="/intro" spy={true} smooth={true} offset={-100} duration={500} className="items">Home </a>
                    <a activeClass="active" href="/skills" spy={true} smooth={true} offset={-50} duration={500} className="items">Skills</a>
                    <a activeClass="active" href="/project" spy={true} smooth={true} offset={-50} duration={500} className="items">Projects</a>
                    <a activeClass="active" href="/clients" spy={true} smooth={true} offset={-50} duration={500} className="items">Clients</a>
                    <img src={userImg} className="userImg" />
                </div>

            </div>
        </>
    )
}

export default Navbar;