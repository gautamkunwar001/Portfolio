import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">About </h1> 
      <p>"I am a final-year MCA student with a strong foundation in programming,
         problem-solving, and software development.
        Proficient in Java, and web technologies, I am passionate about building impactful IT solutions. 
        My academic journey has equipped me with skills in 
        [specific technologies, e.g., React.js, Node.js, SQL ] 
        and I look forward to contributing to dynamic 
        teams in the tech industry."
        </p>
        <br />
        <br />
        <h1 className="text-pink-600 font-semibold text-xl">Skills</h1>
       <p>
         DSA(Intermediate),
         Java(Core),HTML,CSS,javaScript, 
        node.Js,express.js,mongoDB,React.js,SQL 
        OOP 
         </p>
         <br />
        <br />
        <h1 className="text-pink-600 font-semibold text-xl">Project</h1>
        <p>1.CloudPoint - APIs based Weather Application Using
           - (React.js)</p>
           <br />
           <p>2.VacaySpot - Find your perfect stay, anywhere in the world. <br/>
An interactive platform for property listing , implemented user authentication , designed a robust
 database schema for managing users, listings and reviews functionality using -( Node.js ,Express.js, MongoDB.) </p>
    </div>
  )
}

export default About;
