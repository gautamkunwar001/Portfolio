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

function Experience() {
    const cardItem = [
            {
                id:1,
                logo:html,
                name:"html"
            },
            {
                id:2,
                logo:css,
                name:"CSS"
            },
            {
                id:3,
                logo:javascript,
                name:"javaScript"
            },
            {
                id:4,
                logo:oracle,
                name:"oracle"
            },
        ]
  return (
   
      <div  name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15">
<div>
    <h1 className="text-3xl font-bold mb-5">Experience</h1>
    {/* <span className="underline font-semibold">Featured Projects</span> */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                {
            cardItem.map(({id,logo,name }) => (
                <div  className="flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[300px] cursor-pointer hover:scale-105 duration-200" key={id}>
                    <img src={logo}
                     className="w-[150px]  rounded-full " alt="" />
                    <div>
                        <div >{name}</div>
                        </div>
                        <div>
                        {/* <button>Video</button>
                        <button>Source code</button> */}
                        </div>
                     </div>
            ))  }
    </div>
</div>
      
    </div>
    
  )
}

export default Experience
