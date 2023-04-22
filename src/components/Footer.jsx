import  React from 'react';
import { Link } from 'react-router-dom';

export function Footer(){



    
    return(
       <>
        <footer className='bg-dark h-[100%] pt-[10%] w-full flex items-center flex-col'>
            <div className="flex items-start justify-around mb-[10%]">

                <div className="flex flex-col justify-center items-start [&>div]:mt-[20px]">
                <Link to='/'>
                    <img src="/images/logo-light.png" alt="logo-light" />
                </Link>
                    <div className="flex justify-center items-start flex-col [&>*]:text-white">
                        <div className="">Adress:</div>
                        <div className="">Level 1, 12 Nikola Tesla street, Niš, Serbia</div>
                    </div>

                    <div className="flex justify-center items-start flex-col [&>*]:text-white">
                        <div className="">Contact</div>
                        <div className="">1800 123 4567</div>
                        <div className="">info@startico.io</div>
                    </div>
                </div>
                
                <div className="flex justify-center items-start [&>*]:ml-[230px]">
                    <div className="[&>*]:text-white [&>*]:mt-2 flex flex-col justify-center">
                        <div className="">Pages</div>
                        
                        <a href='#' className="">Home v1</a>
                        <a href='#' className="">Home v2</a>
                        <a href='#' className="">Home v3</a>
                        <a href='#' className="">About v1</a>
                        <a href='#' className="">About v2</a>
                        <a href='#' className="">About v3</a>
                        <a href='#' className="">Contacts v1</a>
                        <a href='#' className="">Contacts v2</a>
                        <a href='#' className="">Contacts v3</a>
                        <a href='#' className="">Blog</a>
                        <a href='#pricing' className="">Pricing</a>
                        <a href='#' className="">Log in</a>
                        <a href='#' className="">Sign up</a>
                    </div>
                    
                    
                    <div className="[&>*]:text-white [&>*]:mt-2">
                        <div className="">CSM pages</div>
                        <div className="">Blog categories</div>
                        <div className="">Blog post</div>
                    </div>

                    <div className="[&>*]:text-white [&>*]:mt-2">
                        <div className="">Utility pages</div>
                        <div className="">Style guide</div>
                        <div className="">License</div>
                        <div className="">Changelog</div>
                        <div className="">404</div>
                        <div className="">Password</div>
                    </div>
                </div>

            </div>

            <span className='w-[90%] h-[1px] bg-white block'></span>

            <div className='w-[90%] flex justify-between items-center mt-[32px] mb-[5%]'>
                <div className="text-white font-space grotesk font-normal text-[14px] ">@Startico by Minima Square. Powered by Webflow.</div>

                <div className='[&>*]:ml-2 flex'>
                <img src="/images/hero_images/linkedin.png" alt="linkedin" />
                <img src="/images/hero_images/twitter.png" alt="twitter" />
                <img src="/images/hero_images/facebook.png" alt="facebook" />
                </div>
            </div>
        </footer>
        </>
    )
    
}