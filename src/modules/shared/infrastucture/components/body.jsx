import React from "react";
import AboutMe from "./about-me";
import Cards from "./cards";
import Galery from "./galery";
import Withme from "./withme";
import Wallpaper from "./wallpaper";
import Footer from "./footer";
import Map from "./map";

const Body = () => {
  return (
    <div className="grid justify-center overflow-hidden">
      <Wallpaper title={"COLEGIO"} subtitle={"PEDRO PAULET"} years={"14 AÑOS FORMANDO PROFESIONALES"}/>
      <AboutMe />
      <Cards />
      <Withme />
      <Footer/>
      <Galery />
    </div>
  );
};

export default Body;
