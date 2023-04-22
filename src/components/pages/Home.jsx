import React, { useState } from "react";
import { Button } from "../Button";
import MainSection from "./HomeSections/section1";
import SectionTwo from "./HomeSections/section2";
import SectionThree from "./HomeSections/section3";
import SectionFour from "./HomeSections/section4";
import SectionFive from "./HomeSections/section5";
import SectionSix from "./HomeSections/section6";
import SectionSeven from "./HomeSections/section7";



export function Home() {

  return (
    <>
      
        <MainSection/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>

    </>
  );
}