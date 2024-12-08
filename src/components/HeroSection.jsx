import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import GenericHeroSection from "./GenericHeroSection";

export default function HeroSection(props) {

  if(props.page === "home") return <HomeHeroSection {...props}/>
  else return <GenericHeroSection {...props}/>
}
