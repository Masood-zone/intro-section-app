import React from "react";
import { BUSINESS_ICONS } from "../data/data";
import imageDesktop from "../assets/images/image-hero-desktop.png";
import imageMobile from "../assets/images/image-hero-mobile.png";

function Content() {
  return (
    <div className="flex justify-center items-center gap-5 max-lg:flex-col-reverse max-lg:">
      <section className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:w-full max-lg:px-3">
        <h1 className="text-7xl font-bold max-lg:text-3xl max-lg:text-center max-sm:text-2xl lg:w-[440px]">
          Make remote work
        </h1>
        <span className="block py-8 max-lg:py-2 max-lg:text-center lg:w-80">
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and watch productivity
          soar.
        </span>
        <button className="bg-[#000] text-white font-medium mt-8 px-3 py-3 rounded-md max-lg:mt-0">
          Learn more
        </button>
        <div className="flex pt-12">
          {BUSINESS_ICONS.map((icons) => {
            return (
              <div className="px-5" key={icons.id}>
                <img
                  src={icons.icon}
                  key={icons.id}
                  alt="Buisiness Icons"
                  className=""
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-[450px] max-lg:min-w-full max-md:w-[350px] max-sm:w-[280px]">
        <img
          src={imageDesktop}
          alt="Desktop"
          className="w-full max-lg:hidden"
        />
        <img
          src={imageMobile}
          alt="Mobile"
          className="w-full hidden max-lg:block"
        />
      </section>
    </div>
  );
}

export default Content;
