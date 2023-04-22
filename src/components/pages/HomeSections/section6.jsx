import React, { useState } from 'react';



function SectionSix(){

    const [cards, setCards] = useState(false);


    return(
        <section className="relative mt-[10%] flex justify-center items-center flex-col" id='pricing'>
        <img
          src="/images/hero_images/waves.png"
          alt="waves"
          className="absolute right-0 top-0"
        />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="py-2 px-4 bg-light border rounded-[64px] outline-none text-center">
            Pricing
          </div>
          <h1 className="text-[48px] font-fraunces text-center mt-[2%]">
            Pricing plans
          </h1>
          <p className="text-[#49616E] text-[17px] leading-6 mt-[2%]">
            Suspendisse mattis porttitor gravida et malesuada fames.
          </p>
        </div>

        {/* pricing cards */}

        <div className="flex justify-center items-end mt-[5%] [&>*]:ml-8 w-full">
          {/* Pricing dark card */}

          <div className="bg-dark p-[32px] w-[405px] border rounded-[32px] flex flex-col items-start justify-center">
            <img
              src="/images/hero_images/card-arrow-down.png"
              alt="card-arrow"
              className="self-end"
            />
            <div className="text-[20px] font-normal font-fraunces leading-7 text-white mt-[32px]">
              Basic plan
            </div>
            <h1 className="text-[56px] font-fraunces font-normal text-white">
              $19{" "}
              <span className="text-[32px] text-white font-fraunces font-normal">
                /mo
              </span>
            </h1>
            <h2 className="text-[16px] font-fraunces font-normal leading-5 text-white">
              or $199 yearly
            </h2>
            <span className="w-full border-[1px] outline-none border-[#223E4E] block my-8"></span>
            <div className="text-[15px] font-normal font-space grotesk text-white">
              Includes:
            </div>
            <ul
              className="
            [&>*]:text-white 
            [&>*]:text-[15px] 
            mt-6
            [&>*]:before:content-[' ']
            [&>*]:before:py-[.5px]
            [&>*]:before:px-[11px]
            [&>*]:before:mr-[15px]
            [&>*]:before:bg-light
            [&>*]:before:border
            [&>*]:before:rounded-[50%]
            [&>*]:mt-[5%]
            "
            >
              <li>Vestibulum posuere odio</li>
              <li>Id purus maximus condimentum</li>
              <li>Vel convallis nibh duis</li>
            </ul>

            <button className="mt-[30%] w-full h-[50px] bg-light border rounded-[64px] outline-none text-dark font-bold">
              Get started
            </button>
          </div>

          {/* Pricing light card */}

          <div className="bg-light p-[32px] w-[405px] border rounded-[32px] flex flex-col items-start justify-center h-[732px]">
            <img
              src="/images/hero_images/card-arrow-down-dark.png"
              alt="card-arrow"
              className="self-end"
            />
            <div className="text-[20px] font-normal font-fraunces leading-7 text-dark mt-[32px]">
              Basic plan
            </div>
            <h1 className="text-[56px] font-fraunces font-normal text-dark">
              $19{" "}
              <span className="text-[32px] text-dark font-fraunces font-normal">
                /mo
              </span>
            </h1>
            <h2 className="text-[16px] font-fraunces font-normal leading-5 text-dark">
              or $199 yearly
            </h2>
            <span className="w-full border-[1px] outline-none border-[#223E4E] block my-8"></span>
            <div className="text-[15px] font-normal font-space grotesk text-dark">
              Includes:
            </div>
            <ul
              className="
            [&>*]:text-dark
            [&>*]:text-[15px] 
            mt-6
            [&>*]:before:content-[' ']
            [&>*]:before:py-[.5px]
            [&>*]:before:px-[11px]
            [&>*]:before:mr-[15px]
            [&>*]:before:bg-dark
            [&>*]:before:border
            [&>*]:before:rounded-[50%]
            [&>*]:mt-[5%]
            "
            >
              <li>Vestibulum posuere odio</li>
              <li>Id purus maximus condimentum</li>
              <li>Vel convallis nibh duis</li>
              <li>Purus in convallis pharetra</li>
            </ul>

            <button className="mt-[20%] w-full h-[50px] bg-dark border rounded-[64px] outline-none text-white font-bold">
              Get started
            </button>
          </div>

          {/* Pricing second dark card */}

          <div className="bg-dark p-[32px] w-[405px] border rounded-[32px] flex flex-col items-start justify-center">
            <img
              src="/images/hero_images/card-arrow-down.png"
              alt="card-arrow"
              className="self-end"
            />
            <div className="text-[20px] font-normal font-fraunces leading-7 text-white mt-[32px]">
              Basic plan
            </div>
            <h1 className="text-[56px] font-fraunces font-normal text-white">
              $19{" "}
              <span className="text-[32px] text-white font-fraunces font-normal">
                /mo
              </span>
            </h1>
            <h2 className="text-[16px] font-fraunces font-normal leading-5 text-white">
              or $199 yearly
            </h2>
            <span className="w-full border-[1px] outline-none border-[#223E4E] block my-8"></span>
            <div className="text-[15px] font-normal font-space grotesk text-white">
              Includes:
            </div>
            <ul
              className="
            [&>*]:text-white 
            [&>*]:text-[15px] 
            mt-6
            [&>*]:before:content-[' ']
            [&>*]:before:py-[.5px]
            [&>*]:before:px-[11px]
            [&>*]:before:mr-[15px]
            [&>*]:before:bg-light
            [&>*]:before:border
            [&>*]:before:rounded-[50%]
            [&>*]:mt-[5%]
            "
            >
              <li>Phasellus finibus lectus</li>
              <li>At blandit mollis maecenas</li>
              <li>Nec ultrices lectus eune</li>
              <li>Mattis facilisis lacus aliquet</li>
              <li>Am condimentum cursus</li>
            </ul>

            <button className="mt-[13%] w-full h-[50px] bg-light border rounded-[64px] outline-none text-dark font-bold">
              Get started
            </button>
          </div>
        </div>

        <div className="py-2 px-4 bg-light border rounded-[64px] outline-none mt-[10%]">
          Blog
        </div>
        <h1 className="text-[48px] font-fraunces text-center mt-[2%]">
          Our latest blogs
        </h1>
        <p className="text-[#49616E] text-[17px] leading-6 mt-[2%]">
          Suspendisse mattis porttitor gravida et malesuada fames.
        </p>

      

        <div className="flex justify-center items-center flex-col">  
        {/* Blog cards */}
            <div className="flex justify-center items-center mt-[10%] [&>*]:ml-4">
              
              {/* First card */}
              <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
                <img src="/images/hero_images/blogImg(1).png" alt="blogimg" />
                <div className="flex justify-evenly items-center mt-3">
                  <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                    Business
                  </div>
                  <div className="ml-5">7 min read</div>
                </div>
                <div className="flex justify-center items-center flex-col px-3">
                  <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                    Top 10 mistakes startaps in 2022 make and how to avoid them
                  </h1>
                  <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                    Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                    officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                    nesciunt delectus sequi harum d
                  </p>

                  
                  <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                  <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                      Read more              
                  </div>
                </div>

              </div>

              {/* Second card */}

              <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
                <img src="/images/hero_images/blogImg(2).png" alt="blogimg" />
                <div className="flex justify-evenly items-center mt-3">
                  <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                    Business
                  </div>
                  <div className="ml-5">7 min read</div>
                </div>
                <div className="flex justify-center items-center flex-col px-3">
                  <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                    Top 10 mistakes startaps in 2022 make and how to avoid them
                  </h1>
                  <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                    Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                    officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                    nesciunt delectus sequi harum d
                  </p>

                  
                  <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                  <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                      Read more              
                  </div>
                </div>

              </div>

              
              {/* Third card */}
              <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
                <img src="/images/hero_images/blogImg(3).png" alt="blogimg" />
                <div className="flex justify-evenly items-center mt-3">
                  <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                    Business
                  </div>
                  <div className="ml-5">7 min read</div>
                </div>
                <div className="flex justify-center items-center flex-col px-3">
                  <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                    Top 10 mistakes startaps in 2022 make and how to avoid them
                  </h1>
                  <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                    Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                    officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                    nesciunt delectus sequi harum d
                  </p>

                  
                  <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                  <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                      Read more              
                  </div>
                </div>

              </div>

              
            </div>

             {cards && 
             <div className="flex justify-center items-center mt-[10%] [&>*]:ml-4">
              
             {/* First card */}
             <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
               <img src="/images/hero_images/blogImg(2).png" alt="blogimg" />
               <div className="flex justify-evenly items-center mt-3">
                 <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                   Business
                 </div>
                 <div className="ml-5">7 min read</div>
               </div>
               <div className="flex justify-center items-center flex-col px-3">
                 <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                   Top 10 mistakes startaps in 2022 make and how to avoid them
                 </h1>
                 <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                   Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                   officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                   nesciunt delectus sequi harum d
                 </p>

                 
                 <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                 <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                     Read more              
                 </div>
               </div>

             </div>

             {/* Second card */}

             <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
               <img src="/images/hero_images/blogImg(3).png" alt="blogimg" />
               <div className="flex justify-evenly items-center mt-3">
                 <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                   Business
                 </div>
                 <div className="ml-5">7 min read</div>
               </div>
               <div className="flex justify-center items-center flex-col px-3">
                 <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                   Top 10 mistakes startaps in 2022 make and how to avoid them
                 </h1>
                 <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                   Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                   officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                   nesciunt delectus sequi harum d
                 </p>

                 
                 <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                 <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                     Read more              
                 </div>
               </div>

             </div>

             
             {/* Third card */}
             <div className="w-[403px] border border-[#E5E7EB] rounded-[32px] flex justify-center items-center flex-col">
               <img src="/images/hero_images/blogImg(1).png" alt="blogimg" />
               <div className="flex justify-evenly items-center mt-3">
                 <div className="border-[#E5E7EB] border-2 rounded-[32px] px-5 py-2">
                   Business
                 </div>
                 <div className="ml-5">7 min read</div>
               </div>
               <div className="flex justify-center items-center flex-col px-3">
                 <h1 className="w-[341px] text-center text-[24px] font-fraunces font-bold mt-[5%]">
                   Top 10 mistakes startaps in 2022 make and how to avoid them
                 </h1>
                 <p className="w-[] text-[16px] text-[#49616E] font-space grotesk leading-6 text-center">
                   Ipsum nostrum nihil. Veniam sit eius sed non accusamus ut
                   officiis. Eligendi impedit rerum et beatae itaque corrupti. Sed
                   nesciunt delectus sequi harum d
                 </p>

                 
                 <div className='text-[15px] font-space grotesk font-semibold mt-[5%]'>
                 <i className="fa-sharp fa-regular fa-circle-arrow-up-right"></i>
                     Read more              
                 </div>
               </div>

             </div>

             
           </div>
             } 

            <button className="px-[26px] py-[14px] border-2 border-dark rounded-[64px] mt-[5%]"
            onClick={() => setCards(prev => !prev)}
            >
            {cards ? 'Hide All' : 'View All'}
          </button>
        </div>

        
      </section>
    )
}

export default SectionSix;