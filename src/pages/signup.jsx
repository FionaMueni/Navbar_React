import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import sign_up_icon from "./../assets/signup.svg"
import Footer from '../components/footer';


const Signup = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center items-center'>
            <form className='flex flex-col gap-2'>
                <div>
                <h1 className='flex text-[50px]'>Welcome</h1>
                <h3 className='flex text-[30px] gap-2'>Already have an account? <NavLink to="/login" className="text-blue-600">Login</NavLink></h3>
                </div>

            <label>Username</label>
            <input type="username" placeholder='enter your username' className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg'/>

            <label>Email</label>
            <input type="email" placeholder='enter your email' className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' />

            <label>Password</label>
            <input type="password" placeholder='enter your password' className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' />

            <label>Confirm password</label>
            <input type="confirm password" placeholder='confirm password'className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg'/>
            
            <button type="submit" className='bg-blue-600 text-white w-52 py-2 outline-none rounded-lg'>Sign Up</button>

            </form>
            <img src= {sign_up_icon} alt="" className='w-2/4'/>
            </div>
            <Footer/>

            
           
               
               
        
        </div>
    );
}

export default Signup;
