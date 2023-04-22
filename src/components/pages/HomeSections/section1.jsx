import React from 'react';
import { Button } from '../../Button';

function MainSection(){
    return(
            <section className=" bg-[#162E3C] h-[100vh] flex justify-center items-center relative">
        <img
          src="/images/header_images/headerShape.svg"
          alt=""
          className="absolute left-0 top-[14%]"
        />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white font-fraunces text-[56px] w-[695px]  text-center">
            Head start your business today!
          </h1>
          <p className="text-[20px] font-space grotesk leading-[30px] w-[713px] text-center text-white mt-[26px]">
            Consectetur adipiscing elit. Integer sagittis quam magna, quis
            sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
          </p>
          <div className="flex mt-[38px]">
            <Button buttonStyle="btn__full__light" buttonSize="btn__medium">
              Get started
            </Button>
            <span className="mx-[8px]"></span>
            <Button buttonStyle="btn__full__dark" buttonSize="btn__small">
              Try for free
              <span className="mr-2"></span>
              <i className="fa-solid fa-chevron-right text-white"></i>
            </Button>
          </div>

          <div className="flex justify-center items-center mt-[28px] [&>*]:mr-[15px]">
            <img src="/images/header_images/headerLogo.png" alt="headerLogo" />
            <img
              src="/images/header_images/headerLogo(2).png"
              alt="headerLogo"
            />
            <img
              src="/images/header_images/headerLogo(3).png"
              alt="headerLogo"
            />
            <img
              src="/images/header_images/headerLogo(4).png"
              alt="headerLogo"
            />
          </div>
        </div>
        <img
          src="/images/header_images/headerShape(2).png"
          alt=""
          className="absolute right-0 bottom-[15%]"
        />
        <img
          src="/images/header_images/headerShape(3).png"
          alt=""
          className="absolute left-0 -bottom-[24%]"
        />
      </section>
        
    )
}


export default MainSection;