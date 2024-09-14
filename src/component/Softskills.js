import React from "react"
import punctual from "../images/punctual.jpg"
import soft1 from "../images/soft1.png"
// import soft2 from "../images/soft2.png"
import soft3 from "../images/soft3.png"
import soft4 from "../images/soft4.png"
const Softskills = () => {
    return (

        <>

            <section className="Soft-skills">
                <h1><span className="soft-Title" >Soft Skills</span></h1>
                <div className="soft-items">
                    <img src={punctual} className="soft-img" />
                    {/* <h2 className="soft-head">Time-Management</h2> */}

                    <img src={soft1} className="soft-img" /> <br></br>
                    {/* <h2 className="soft-head">Time-Management</h2> */}

                    {/* <img src={soft2} className="soft-img" /> */}
                    {/* <h2 className="soft-head">Time-Management</h2> */}


                    <img src={soft3} className="soft-img" /> 
                 <h2 className="soft-head"> </h2>

                    <img src={soft4} className="soft-img" />
                    
                </div>

            </section>

        </>
    )
}
export default Softskills;