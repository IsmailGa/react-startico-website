import React from 'react'

function SectionFive(){
    return(
        <section className="h-100vh bg-[#162E3C] mt-[10%] relative flex flex-col justify-center items-center">
        <img
          src="/images/hero_images/cardShape(2).png"
          alt=""
          className="absolute top-0 right-0"
        />
        <div className="flex justify-center items-center flex-col relative pb-[15%]">
          <h1 className="text-white text-center font-normal text-[48px] mt-[7%] font-fraunces">
            A words from our customers
          </h1>
          <p className="mt-4 text-[] font-normal font-space grotesk text-white leading-7">
            Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.
          </p>

          <div className="flex justify-center items-center">
            {/* card list 1 */}
            <div className="flex flex-col [&>*]:mt-[10%]">
              <div className="bg-white p-[32px] border rounded-[32px]">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img src="/images/hero_images/DanaHale.png" alt="DanaHale" />
                  <div className="flex flex-col ml-4">
                    <h6>Dana Hale</h6>
                    <p>UI/UX Designer, Iniry</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-[32px] border rounded-[32px]">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img src="/images/hero_images/KyleCam.png" alt="KyleCamden" />
                  <div className="flex flex-col ml-4">
                    <h6>Kyle Camden</h6>
                    <p>Front-end Developer, Dontechi</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-[32px] border rounded-[32px] z-10">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img src="/images/hero_images/DanaHale.png" alt="DanaHale" />
                  <div className="flex flex-col ml-4">
                    <h6>Dana Hale</h6>
                    <p>UI/UX Designer, Iniry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* card list 2 */}

            <div className="flex flex-col [&>*]:mt-[10%] mt-[5%] ml-8">
              <div className="bg-white p-[32px] border rounded-[32px]">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img
                    src="/images/hero_images/MonicaScar.png"
                    alt="MonicaScar"
                  />
                  <div className="flex flex-col ml-4">
                    <h6>Monice Scarboro</h6>
                    <p>CEO, Sonron</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-[32px] border rounded-[32px]">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img src="/images/hero_images/DanaHale.png" alt="DanaHale" />
                  <div className="flex flex-col ml-4">
                    <h6>Dana Hale</h6>
                    <p>UI/UX Designer, Iniry</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-[32px] border rounded-[32px] z-10">
                <img src="/images/hero_images/stars.png" alt="" />
                <p className="text-[18px] font-normal font-space grotesk mt-6 leading-6 w-[542px]">
                  "Pellentesque sodales libero nulla, ac imperdiet ante
                  tincidunt vel. Fusce auctor augue sed massa finibus, et dictum
                  sem mollis. In luctus convallis elit."
                </p>
                <div className="flex mt-6">
                  <img src="/images/hero_images/DanaHale.png" alt="DanaHale" />
                  <div className="flex flex-col ml-4">
                    <h6>Dana Hale</h6>
                    <p>UI/UX Designer, Iniry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/hero_images/cardShape(1).png"
          alt=""
          className="absolute left-0 bottom-14"
        />
      </section>
    )
}

export default SectionFive;