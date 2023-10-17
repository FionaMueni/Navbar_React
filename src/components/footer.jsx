import React from 'react';
import appleIcon from "./../assets/apple.png";
import googlePlay from "./../assets/playstore.png"

const Footer = () => {
    return (
        <div className='flex justify-between px-12 py-8'> 
          <div className='flex flex-col gap-2'>
            <h2>B-Cop</h2>
            <div className='flex flex-col'>
                <span>Today's gossip is tomorrow's news</span>
                <span>Copyright @2023</span>
            </div>
          </div>
          <div  className='flex flex-col gap-2'>
            <h2>Get App</h2>
            <div className='flex'>
                <img src={googlePlay} alt="" className='w-12' />
                <img src={appleIcon} alt="" className='w-12' />

            </div>
          </div>
        </div>
    );
}

export default Footer;
