import axios from "axios";
import React from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

 

function Contact() {
    const { register,
        handleSubmit,
         formState: 
         { errors } } = useForm();
         const onSubmit = 
        async(data) => {
            const userInfo= {
                name:data.name,
                email:data.email,
                message:data.message
            }
            try {
                await axios.post("https://getform.io/f/bdrnyqnb", userInfo);
                toast.success("your message has been sent");
            }  catch(error) {
                toast.error("something went wrong");
            }
         };
  return (
    <>
    <div name="Contact" className = "max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-semibold mb-4">Contact me</h1>
        <span>Please fill the form to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bdrnyqnb"  method="POST" 
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className = "text-xl font-semibold mb-3">Send your message</h1>
                <div>
                    <label
                    className="block text-gray-700 "
                     >FullName</label>
                     <input
                      {...register("name", { required: true })}
                     className="shadow rounded-lg appearence-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                     id="name"
                     name="name"
                     type="text" 
                     placeholder="Enter your fullName" />
                      {errors.name && <span>This field is required</span>}
                </div>
                <div>
                    <label
                    className="block text-gray-700 "
                     >Email Address</label>
                     <input
                      {...register("email", { required: true })}
                     className="shadow rounded-lg appearence-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                     id="email"
                     name="email"
                     type="email" 
                     placeholder="Enter Email Address" />
                       {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label
                    className="block text-gray-700 "
                     >Message:</label>
                     <textarea
                       {...register("message", { required: true })}
                     className="shadow rounded-lg appearence-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                     id="message"
                     name="message"
                     type="text"
                     placeholder="enter your message"
                     />
                      {errors.message && <span>This field is required</span>}
                </div>
                <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
