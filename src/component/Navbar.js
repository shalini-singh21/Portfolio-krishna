import React from "react";
// import Contact from "./Contact";
import { Link } from "react-scroll";
//  import logo from "../images/Logo.jpg"
import userImg from "../images/userImg.png"
const Navbar = () => {


    return (
        <>
            <div className="Navbar">

                <h1 className="introName2">Krishna Sharma</h1>
                
                < div className="desktop-menu">
                    <Link activeClass="active" href="/intro" spy={true} smooth={true} offset={-100} duration={500} className="items">Home </Link>
                    <Link activeClass="active" href="/skills" spy={true} smooth={true} offset={-50} duration={500} className="items">About</Link>
                    <Link activeClass="active" href="/projects" spy={true} smooth={true} offset={-50} duration={500} className="items">Projects</Link>
                    <Link activeClass="active" href="/clients" spy={true} smooth={true} offset={-50} duration={500} className="items">Clients</Link>
                    <img src={userImg} className="userImg"/>
                </div> 

            </div>
        </>
    )
}

export default Navbar;