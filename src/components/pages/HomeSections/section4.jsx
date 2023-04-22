import React from 'react';
import { Button } from '../../Button';


function SectionFour(){
    return(
       <section className="w-full mt-[10%] flex flex-col justify-center items-center">
    <div className="w-full m-auto flex justify-center items-center [&>*]:mx-10">
      <div className="">
        <ul className="">
          <li className="">
            <span className="bg-[#DDF0A7] border rounded-[64px] text-center px-2 py-1">
              Efficient
            </span>
            <h1 className="font-normal text-[40px]">
              Straight to the point
            </h1>
            <p className="w-[574px]">
              Vivamus ante dolor, condimentum eget dignissim vitae,
              malesuada sed urna. Aenean consequat risus tortor, quis porta.
            </p>
          </li>
          <div className="w-full flex items-center mt-10">
            <li className="w-[288px] [&>*]:mt-4">
              <img src="/images/hero_images/stop.png" alt="ban" />
              <h1 className="font-normal text-[20px]">No meetings</h1>
              <p className="text-[16px] font-normal font-space grotesk leading-[24px] w-[250px]">
                Porta non eros. Ut finibus viverra neque, sed vestibulum
                tellus volutpat ac cras at massa.
              </p>
            </li>
            <li className="[&>*]:mt-4 ml-[5%]">
              <img src="/images/hero_images/clock.png" alt="clock" />
              <h1 className="font-normal text-[20px]">
                24/7 customer support
              </h1>
              <p className="text-[16px] w-[267px] font-normal font-space grotesk leading-[24px]">
                Praesent consequat erat in orci lobortis, in accumsan orci
                vestibulum nam et dictum.
              </p>
            </li>
          </div>
        </ul>

        <div className="flex mt-[38px]">
          <Button buttonStyle="btn__outline" buttonSize="">
            Get started
          </Button>
          <Button buttonStyle="btn__none" buttonSize="">
            Try for free
            <span className="mr-2"></span>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>

      <div className="relative">
        <img src="/images/hero_images/boyOnPc.png" alt="boyOnPc" />
        <div className="bg-[#DDF0A7] p-[24px] flex justify-between align-center rounded-[24px] w-[460px] absolute bottom-10 -left-[10%]">
          <div className="flex flex-col">
            <h1 className="font-bold text-[32px]">86%</h1>
            <p className="font-normal text-[20px]">Increased in sales</p>
          </div>
          <img src="/images/hero_images/increase.png" alt="increase" />
        </div>
      </div>
    </div>
  </section> 
    )
    
}

export default SectionFour;