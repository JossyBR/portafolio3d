import { div } from "framer-motion/client";
import React from "react";
import { vector } from "../../assets";
import { Image } from "@nextui-org/image";
import {
  ciudad,
  dona,
  nave,
  personaje,
  pistola,
  silla,
  tennis,
} from "../../assets";

const Proyectos = () => {
  return (
    <div className="relative">
      <div className="h-16 "></div>
      {/* <div className="absolute left-0 top-0 lg:w-[550px] z-0">
        <img src={vector} alt="" />
      </div> */}
      <h2 className="border border-black m-auto text-center text-xl md:text-3xl ml-2 font-bold md:mt-5 lg:mt-[25px] lg:text-5xl">
        Proyecto Audiovisual: Exodo Galactico!
      </h2>
      <section>
        <div className="mt-10 flex flex-row flex-wrap justify-center items-center p-2 gap-6  lg:gap-4">
          <iframe
            className="md:w-[874] md:h-[491]"
            width="300"
            height="169"
            src="https://www.youtube.com/embed/N0I5acBGtkc?si=kurFj3Hr1Ar9gVGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section className="mt-20 flex flex-col">
        {/* <h2 className="text-3xl ml-2 font-bold mb-10 md:mt-5 lg:mt-[25px] lg:text-5xl">
          De la Idea a la Realidad: Conoce como fue el proceso
        </h2> */}
        <h2 className="mb-6 mt-6 font-bold text-lg text-center mx-1 md:text-2xl lg:text-4xl 2xl:mb-[32px]">
          De la Idea a la Realidad: Conoce como fue el proceso
        </h2>
        <div className="flex flex-col">
          {/* <h3 className="mb-6 mt-6 text-2xl text-center mx-1 lg:text-4xl 2xl:mb-[32px]">
            Del Concepto al 3D: Esculpido Digital y Arte Conceptual
          </h3> */}
          <div className="m-auto mb-4 md:grid md:grid-cols-2 md:justify-center md:items-center">
            <div className="p-4 mb-3 text-center w-full max-w-md break-words">
              <p className="text-[#9333ea] font-bold mb-3 text-base mx-1 md:text-2xl">
                Del Concepto al 3D: Esculpido Digital y Arte Conceptual
              </p>
              <p>
                Transformación del arte conceptual en esculturas digitales
                detalladas. Desde el dibujo inicial hasta la escultura final,
                explorando el proceso creativo paso a paso
              </p>
            </div>
            <div>
              <iframe
                className="w-[560] h-[315]"
                width="300"
                height="169"
                src="https://www.youtube.com/embed/UGlY2nn_JOA?si=5_544WVjbxnNFy5i"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          {/* <h3 className="mb-6 mt-6 text-2xl text-center mx-1 lg:text-4xl 2xl:mb-[32px]">
            El Arte del Modelado 3D: Creación de Objetos Detallados
          </h3> */}
          <div className="m-auto mb-4 md:grid md:grid-cols-2 justify-center items-center">
            <div className="p-4 text-center w-full max-w-md break-words">
              <p className="text-[#9333ea] font-bold mb-3 text-base mx-1 md:text-2xl">
                El Arte del Modelado 3D: Creación de Objetos Detallados
              </p>
              <p>
                Modelo una pistola alienígena, mostrando el proceso. Además, te
                presento el resultado final de otros elementos modelados en 3D.
                Dando vida a otros elementos en el mundo del 3D!
              </p>
            </div>
            <div>
              <iframe
                className="w-[560] h-[315]"
                width="300"
                height="169"
                src="https://www.youtube.com/embed/jWzsWOz4gnA?si=8PKwVyqJpLAUgnr3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* <h3 className="mb-6 mt-6 text-2xl text-center mx-1 lg:text-4xl 2xl:mb-[32px]">
            Rigging y Deformación de Personaje
          </h3> */}
          <div className="m-auto mb-4 md:grid md:grid-cols-2 justify-center items-center">
            <div className="p-4 text-center w-full max-w-md break-words">
              <p className="text-[#9333ea] font-bold mb-3 text-base mx-1 md:text-2xl">
                Rigging y Deformación de Personaje
              </p>
              <p>
                Te muestro cómo el rigging aplicado a este personaje permite
                alcanzar una pose dinámica de carrera, logrando que la malla se
                deforme correctamente con cada movimiento.
              </p>
            </div>
            <div>
              <iframe
                className="w-[560] h-[315]"
                width="300"
                height="169"
                src="https://www.youtube.com/embed/SR528jsi3Hs?si=D7nEF5hJZGzosHpE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* <h3 className="mb-6 mt-6 text-2xl text-center mx-1 lg:text-4xl 2xl:mb-[32px]">
            Presentando los Planos: Diseño y Estructura de mi Proyecto
            Audiovisual
          </h3> */}
          <div className="m-auto mb-4 md:grid md:grid-cols-2 justify-center items-center">
            <div className="p-4 text-center w-full max-w-md break-words">
              <p className="text-[#9333ea] font-bold mb-3 text-base mx-1 md:text-2xl">
                Presentando los Planos: Diseño y Estructura de mi Proyecto
                Audiovisual
              </p>
              <p>
                Aquí te presento los planos completos de mi proyecto
                audiovisual, mostrando el proceso de planificación y diseño
                detrás de cada toma y escena clave del proyecto
              </p>
            </div>
            <div>
              <iframe
                className="w-[560] h-[315]"
                width="300"
                height="169"
                src="https://www.youtube.com/embed/zmVW8daYXCE?si=sPieppzBMYqzngyY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mt-10 mb-10">
        <h3 className="mb-6 mt-6 font-bold text-center mx-1 text-base md:text-2xl  lg:text-4xl 2xl:mb-[32px]">
          Creaciones en 3D: Modelos Texturizados
        </h3>
        <div className=" m-auto gap-4 grid grid-cols-2 md:gap-8 justify-center">
          <div>
            <Image
              src={dona}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
          <div>
            <Image
              src={nave}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
          <div>
            <Image
              src={personaje}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
          <div>
            <Image
              src={pistola}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
          <div>
            <Image
              src={silla}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
          <div>
            <Image
              src={tennis}
              className="h-40 w-40 md:w-72 md:h-60 lg:w-[450px] lg:h-[350px] opacity-75 hover:opacity-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
