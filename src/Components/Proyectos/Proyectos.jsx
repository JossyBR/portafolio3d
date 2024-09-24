import { div } from "framer-motion/client";
import React from "react";
import { vector } from "../../assets";

const Proyectos = () => {
  return (
    <div className="relative">
      <div className="h-16 "></div>
      <div className="absolute left-0 top-0 lg:w-[550px] z-0">
        <img src={vector} alt="" />
      </div>
      <h2 className="text-3xl ml-2 font-bold md:mt-5 lg:mt-[25px] lg:text-5xl">
        Proyecto Audiovisual
      </h2>
      <section className="border border-black">
        <div className="mt-10 flex flex-row flex-wrap justify-center items-center p-2 gap-6  lg:gap-4">
          <iframe
            className=""
            width="672"
            height="378"
            src="https://www.youtube.com/embed/N0I5acBGtkc?si=kurFj3Hr1Ar9gVGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>aqui el otro video los reels</div>
      </section>

      <section>
        <div className="flex flex-row justify-center">
          <div className="border-2">descripcion del reel 1</div>
          <div className="border-2">video reel</div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="border-2">descripcion del reel 2</div>
          <div className="border-2">video reel</div>
        </div>
      </section>

      <section>seccion de imagenes</section>
    </div>
  );
};

export default Proyectos;
