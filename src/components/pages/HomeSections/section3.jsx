import React from 'react';
import { Button } from '../../Button';

function SectionThree(){
 return(
    
<section className="w-full mt-[10%] flex items-center justify-center">
        <div className="w-[1280px] p-[64px] bg-[#DDF0A7] border rounded-[48px] flex justify-center items-center flex-col relative">
          <img
            src="/images/hero_images/startUpShape.png"
            alt="startUpShape"
            className="absolute right-10 top-0"
          />

          <h1 className="text-[40px] font-normal w-[704px] text-center">
            Building your very own Startup has never been simpler
          </h1>

          <p className="font-normal text-[18px] leading-7 w-[744px] text-center mt-[12px]">
            Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
            Phasellus mauris sem, porta eu turpis vel, maximus condimentum
            turpis.
          </p>

          <ul
            className="flex 
                justify-center 
                items-center
                [&>li]:mx-[16px]
                mt-[32px]
                "
          >
            <li
              className="bg-[#162E3C] 
                    border 
                    rounded-[24px] w-full p-10 flex items-center justify-center flex-col"
            >
              <img src="/images/hero_images/shape(1).png" alt="shape(1)" />
              <div className="text-[20px] font-normal text-white font-fraunces text-center mb-4">
                Better result
              </div>
              <p className="font-fraunces text-white text-[15px] font-normal text-center w-[255px] font-space grotesk leading-6">
                Vestibulum posuere odio id purus maximus, vel condimentum nunc
                tincidunt. Duis sit amet vulputa.
              </p>
            </li>

            <li className="bg-[#162E3C] border rounded-[24px] w-full p-10 flex items-center justify-center flex-col">
              <img src="/images/hero_images/shape(2).png" alt="shape(2)" />
              <div className="text-[20px] font-normal text-white font-fraunces text-center mb-4">
                Better result
              </div>
              <p className="font-fraunces text-white text-[15px] font-normal text-center w-[255px] font-space grotesk leading-6">
                Vestibulum posuere odio id purus maximus, vel condimentum nunc
                tincidunt. Duis sit amet vulputa.
              </p>
            </li>

            <li className="bg-[#162E3C] border rounded-[24px] w-full p-10 flex items-center justify-center flex-col">
              <img
                src="/images/hero_images/shape(3).png"
                alt="shape(3)"
                className="p-5"
              />
              <div className="text-[20px] font-normal text-white font-fraunces text-center mt-2n mb-4">
                Better result
              </div>
              <p className="font-fraunces text-white text-[15px] font-normal text-center w-[255px] font-space grotesk leading-6">
                Vestibulum posuere odio id purus maximus, vel condimentum nunc
                tincidunt. Duis sit amet vulputa.
              </p>
            </li>
          </ul>

          <div className="[&>*]:mx-2 mt-6">
            <Button buttonStyle="" buttonSize="">
              Get started
            </Button>
            <button>
              Try for free
              <span className="mr-2"></span>
              <i className="fa-solid fa-chevron-right "></i>
            </button>
          </div>
        </div>
      </section>
 )
}

export default SectionThree;
