"use client";
import NavBar from "./components/NavBar";
import GreenButton from "./components/GreenButton";
import bear_vector from "./imgs/bear_vector.svg";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="bg-boc_lightbrown w-screen h-screen ">

      {/* Top Bar of nav options and bear logo*/}
      <div className=" w-screen flex justify-between px-8 py-4">
        <img src={bear_vector.src} alt="Bear Vector" />
        <NavBar></NavBar>
      </div>

      {/* Main Body */}
      <div className="ml-20 pl-9 mt-20">
         <h1 className="text-boc_logo_size text-boc_darkgreen font-montserrat font-bold mb-4 leading-tight">
            BROWN OUTING <br /> CLUB
          </h1>
      </div>
      <div className="pl-9 w-5/12 ml-20">
        <section className="flex-auto justify-end mb-8">
          <p className="mb-2 text-black font-montserrat pb-8">
            The Brown Outing Club facilitates getting students together and into
            the outdoors. The club runs trips throughout the school year in New
            England and along the east coast. The BOC is entirely student
            organized and operated, with new students joining the leadership
            every year. If you are looking to explore the mountains, woods,
            rivers, and bays of the east during college, the BOC will help you
            get there!
          </p>
          <GreenButton
            onClick={handleExploreClick}
            text="EXPLORE!"
          ></GreenButton>
        </section>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
}

const handleExploreClick = () => {
  alert("Redirect to Trips Page");
};
