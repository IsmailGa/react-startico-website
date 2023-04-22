import React from 'react';

function SectionTwo(){
    return(
        <section className="w-full flex items-center justify-center flex-col">
        <div className="w-full relative flex items-center justify-center flex-col">
          <div className="w-full h-[60vh] bg-[#162E3C] absolute top-0 z-9"></div>
          <img
            src="/images/hero_images/girlOnPc.png"
            alt="girl on pc"
            className="z-10"
          />
          <button className="absolute top-[50%] bg-[#DDF0A7] border rounded-[64px] text-center text-[#162E3C] z-[500] px-[22px] py-[10px] text-[15px] font-bold">
            Watch introduction
          </button>
        </div>

        <div className="w-full mt-[10%] flex justify-center items-center">
          <div className="relative">
            <img
              src="/images/hero_images/peopleTalking.png"
              alt="peopletalking"
            />
            <div className="bg-[#DDF0A7] p-[24px] flex justify-between align-center rounded-[24px] w-[460px] absolute bottom-10 -right-[10%]">
              <div className="flex flex-col">
                <h1 className="font-bold text-[32px]">86%</h1>
                <p className="font-normal text-[20px]">Increased in sales</p>
              </div>
              <img src="/images/hero_images/increase.png" alt="increase" />
            </div>
          </div>
          <div className="ml-[80px]">
            <span className="bg-[#DDF0A7] border rounded-[64px] text-center p-1">
              Speed
            </span>
            <h2 className="font-normal text-[40px]">Faster than ever before</h2>
            <p className="w-[596px]">
              Morbi tristique cursus diam, at viverra felis malesuada eu. Duis
              iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi
              eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus
              aenean dui justro, tempus sed oido.
            </p>
            <div className="mt-[5%] [&>button]:mr-4">
              <button className="px-[26px] py-[14px] border-2 border-[#162E3C] rounded-[64px] ">
                Get started
              </button>
              <button>
                Try for free
                <span className="mr-2"></span>
                <i className="fa-solid fa-chevron-right "></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionTwo;