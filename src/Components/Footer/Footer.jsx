import React from "react";
import { Formulario } from "../Formulario/Formulario";
import { Link } from "react-router-dom";
import { Input, Button, Textarea } from "@nextui-org/react";

const Footer = () => {
  const border = "border-b-2 border-transparent text-sm hover:border-[#9333ea]";

  return (
    <div className="bg-black min-h-screen">
      <div className="h-16"></div>
      <h2 className="text-3xl mt-[25px] font-bold lg:text-5xl lg:mb-7 ml-2">
        Contacto
      </h2>
      <div className="flex flex-col items-center">
        <div className="gap-14 flex flex-col lg:flex lg:flex-row justify-center items-center lg:gap-28 lg:mb-8">
          <div className="mt-10 flex flex-col">
            <Formulario />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 sm:flex sm:flex-row sm:gap-20 sm:items-center">
            <div>
              <h5 className="text-4xl">JB</h5>
            </div>
            <div className="flex flex-col leading-loose ">
              <h4 className="text-base md:text-2xl text-center text-[#9333ea] font-bold ">
                Inicio
              </h4>

              <a href="#acerca" className={`${border} text-white`}>
                Acerca de Mi
              </a>
              <a href="#proyectos" className={`${border} text-white`}>
                Proyectos
              </a>
            </div>
            <div className="flex flex-col leading-loose">
              <h4 className="text-base text-center md:text-2xl text-[#9333ea] font-bold">
                Social
              </h4>
              <div className="flex flex-row gap-6 {`${border} text-white`}">
                <a
                  href="https://www.linkedin.com/in/joselin-benitez-rivas-ab2575189"
                  target="_blank"
                >
                  <i className="text-white fa-brands fa-linkedin text-2xl hover:scale-110 hover:shadow-2xl"></i>{" "}
                </a>
                <a href="https://github.com/JossyBR" target="_blank">
                  <i className=" text-white fa-brands fa-github text-2xl hover:scale-110 hover:shadow-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/jossybnitez/"
                  target="_blank"
                >
                  <i className=" text-white fa-brands fa-instagram text-2xl hover:scale-110 hover:shadow-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#9333ea] mt-10 flex justify-center border-t-2 lg:w-[650px] lg:mb-0 lg:mt-32">
          <h4 className="mt-1 mb-1 lg:mt-4 font-bold text-2xl text-white">
            &#169; 2024 Jossy Benitez
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
