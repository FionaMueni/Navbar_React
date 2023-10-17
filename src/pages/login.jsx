import React from 'react';
import login from "./../assets/login.svg.svg"
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import login_svg from './../assets/login.svg.svg'
import Footer from '../components/footer';




const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center items-center gap-10'>
                <form className='flex flex-col gap-4'>
                    <div>
                    <h1 className='flex text-[50px]'>Welcome Back</h1>
                    <h3 className='flex text-[30px] gap-2'>Dont have an account? <NavLink className='text-blue-600' to="/signup">Sign up</NavLink></h3>
                    </div>

                    <label>Email:</label>
                    <input type="email" className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='enter your email address'/>
                    

                    <label>Password</label>
                    <input type="password"  className='border-2 outline-none border-black w-52 px-4 py-2 rounded-lg' placeholder='enter your password'/>

                    <button type="submit" className='bg-blue-600 text-white w-52 py-2 outline-none rounded-lg mt-8'>Login</button>
                   
                </form>
                <img src={login_svg} alt="" className='w-2/4' />
            </div>

            <Footer/>
        </div>

       
        
    );
}

export default Login;
