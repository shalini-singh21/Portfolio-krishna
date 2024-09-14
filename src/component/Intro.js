import React from "react";

//  import  krishna from "../images/krishna.png"
const Intro = () => {

    return (

        <>
            
                {/* <img src={shalu} alt="shalu" className="shalu"/> */}
                <section id="intro">
                    <div className="introContent">
                        <span className="hello"> Hello,</span> <br></br>
                        <span className="introText"> I'm<span className="introName"> Krishna Sharma</span> <br></br>Software Engineer</span>
                        <p className="introParagh">  Developed proficiency in <strong> Full-Stack Development</strong> by implementing solutions in <strong>ReactJS, React Native, and NodeJS</strong>
                         <br></br>  to enhance user experiences. Targeting roles as a <strong> Full-Stack Developer.</strong>  </p>
                        <a><button className="btn"><img src="" alt="" />Hire me</button></a>
                    </div>
                     
                    {/* <img src={krishna}  className="krishna" />   */}
                </section>

              
            
        </>
    )
}
export default Intro;