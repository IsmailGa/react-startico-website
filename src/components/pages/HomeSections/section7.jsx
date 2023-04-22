import React from 'react'

function SectionSeven(){
    return(
        <section className="relative w-full mt-[10%] flex flex-col justify-center items-center" id='contact'>
          <div className="absolute bottom-0 w-full h-[40vh] z-9 bg-dark"></div>
          <form className="relative bg-light py-[96px] px-[250px] w-[1280px] flex flex-col justify-center items-center [&>input]:flex-row border rounded-[48px]">
            <img src="/images/hero_images/footerShape.png" alt="footerShape" className="absolute top-0 right-[5%]"/>
            <h1 className="font-fraunces font-normal text-[40px] text-center leading-12 mb-[25px]">Stay up to date with the latest news from the Startup world!</h1>
            <p className="font-space grotesk font-normal text-[18px] leading-7 text-center mb-[32px]">Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p>
            <div className="flex justify-center items-center mb-[20px]">
            <input type="text" name="email" className="py-[12px] px-[42px] outline-none placeholder:text-dark placeholder:text-[18px] placeholder:font-semibold border rounded-[24px] mr-4" placeholder="Enter your email"/>
            <input type="submit" value='Subscribe' name="submit" className="text-white py-[12px] px-[24px] bg-dark border rounded-[24px] text-[18px] font-space grotesk font-semibold"/>
            </div>
            <div className="text-[11px] leading-[18px] font-space grotesk text-center">By clicking Subscribe you're confirming that you agree with our Terms and Conditions.</div>
          </form>
      </section>
    )
}

export default SectionSeven;