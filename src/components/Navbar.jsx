import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Button.css'
import Sticky from 'react-stickynode';

export function Navbar(){

  const [info, setInfoClose] = useState(true);

    return(
      <>
      { info &&  <div 
        className="
        bg-[#DDF0A7]
        w-full
        p-5
        flex
        justify-center
        text-center
        relative
        text-[#162E3C]
        ">
          <div className="">
          Explore all our services.
          </div>
          
          <Link 
          to='/'
          onClick={() => setInfoClose(false)}
          className='text-2xl'
          >
            <i className="fa-solid fa-xmark absolute right-5"></i>
          </Link>
          
        
        </div> }

        <Sticky enabled={true} innerZ={9999}>
        <nav 
    className="bg-white w-full flex justify-between py-5 items-center border-b-2 border-dark"
        
    >
      <Link to='/'>
      <img 
        src='/images/logo.png' 
        alt="logo" 
        className='mx-20'
        />
      </Link>

       <span className='text-black mx-20'>
        
            <Link 
          to="/ourStory" 
          className="mr-4"
          >
          Our Story
          </Link>
          <Link to="/blog"
          className="mr-4"
          >Blog</Link>
          <Link to='/contact'
          className="mr-4"
          >Contact</Link>
          <Link to="/about"
          className="mr-4"
          >Pricing</Link>

        
        <Button buttonStyle='btn__outline' buttonSize='btn__small'>Log in</Button>
        <span className='mr-2'></span>
        <Button buttonStyle='btn__full__dark' buttonSize=''>Try for free</Button>
      </span>
    </nav>
        </Sticky>
       
      </>
       
    )
    
    
}