import React from 'react';
// import java from "../../public/java.png";
import html from "../../public/html.png";
// import express from "../../public/express.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
// import reactjs from "../../public/reactjs.png";
// import node from "../../public/node.png";
import css from "../../public/css.jpg";
// import mongodb from "../../public/mongodb.jpg";
// import python from "../../public/python.jpg";

function Projects() {
    // const cardItem = [
    //         {
    //             id:1,
    //             logo:html,
    //             name:"html"
    //         },
    //         {
    //             id:2,
    //             logo:css,
    //             name:"CSS"
    //         },
    //         {
    //             id:3,
    //             logo:javascript,
    //             name:"javaScript"
    //         },
    //         {
    //             id:4,
    //             logo:oracle,
    //             name:"oracle"
    //         },
    //     ]
  return (
   
      <div  name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15">
<div>
    <h1 className="text-4xl text-pink-700 font-bold mb-5">Projects</h1>
    <h1 className ="text-2xl">1.CloudPoint - APIs based Weather Application (React.js).</h1>
    {/* <p>An apllication that track the exaxt weather condition.</p> */}
    <br />
    <h1 className="text-2xl ">2.VacaySpot - Find your perfect stay, anywhere in the world.(<a href="https://majorproject-1-5pw7.onrender.com/listings" className="text-red-600">view</a>)</h1>
   <p>An interactive platform for property listing , implemented user authentication , designed a robust
    database schema for managing users, listings and reviews functionality.</p>

    Technology Used : ( Node.js ,Express.js, MongoDB.)     
              
    </div>
</div>
      
    
  )
}

export default Projects;
