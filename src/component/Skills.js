import React from "react"
import skill1 from "../images/skill 1.png"
import skill2 from "../images/skill 2.png"
import skill3 from "../images/skill 3.png"
import skill4 from "../images/skill4.png"
import skill5 from "../images/skill5.png"
import skill6 from "../images/skill6.png"
import skill7 from "../images/skill7.png"
import skill8 from "../images/skill8.png"
import skill9 from "../images/skill9.png"
import skill10 from "../images/skill10.png"
import skill11 from "../images/skill11.png"
import skill12 from "../images/skill12.png"
import skill13 from "../images/skill13.png"
import skill14 from "../images/skill14.png"
import skill15 from "../images/skill15.png"
// import skill16 from "../images/skill 8.png"

const Skills = () => {
    return (

        <>

            <section className="skills">
                <h1><span className="skillTitle" >IT Skills</span></h1>
                
                <div className="skillImgages">
                    <img src={skill1} alt="skills" className=" skillImg" />
                    <img src={skill2} className=" skillImg" />
                    <img src={skill3} className=" skillImg" />
                    <img src={skill4} className=" skillImg" />
                    <img src={skill5} className=" skillImg" />
                    <img src={skill6} className=" skillImg" />
                    <img src={skill7} className=" skillImg" />
                    <img src={skill8} className=" skillImg" /> <br></br>
                    <img src={skill9} className=" skillImg" />
                    <img src={skill10} className=" skillImg" />
                    <img src={skill11} className=" skillImg" />
                    <img src={skill12} className=" skillImg" />
                    <img src={skill13} className=" skillImg" />
                    <img src={skill14} className=" skillImg" />
                    <img src={skill15} className=" skillImg" />
                    {/* <img src={skill16} className=" skillImg"/> */}

                </div>

            </section>
        </>
    )
}

export default Skills;