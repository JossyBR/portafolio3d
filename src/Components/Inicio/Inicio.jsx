import React, { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";
import styles from "./inicio.module.css";
// import { Image } from "@nextui-org/image";
import {
  dona,
  nave,
  personaje,
  pistola,
  silla,
  tennis,
  // css,
  // html,
  // javascript,
  // react,
  // node,
  // redux,
  // php,
  // figma,
  vector,
} from "../../assets";

const Inicio = () => {
  const tamano = "w-16 h-16 absolute transition duration-300 md:w-24 md:h-24";
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const animationDuration = 3000;

    const loopAnimation = () => {
      setCurrentImage((prev) => (prev % 6) + 1);
    };

    const intervalId = setInterval(loopAnimation, animationDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen gap-8 flex flex-row items-center justify-center">
      <div className="flex flex-col justify-between items-center gap-10 md:gap-40 md:flex-row">
        <div className="w-auto relative">
          <h1 className="text-xl text-center md:text-left leading-loose animate__animated animate__slideInLeft sm:text-2xl lg:text-3xl ">
            Hola <br />{" "}
            <span className="text-3xl leading-loose font-bold sm:text-4xl lg:text-5xl">
              Soy{" "}
              <span className="text-[#9333ea] leading-loose">
                Jossy Benitez
              </span>
            </span>
            <br /> y soy Animadora{" "}
            <span className="text-[#9333ea] font-bold leading-loose">3D</span>{" "}
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-48 md:h-48">
            {" "}
            <img src={vector} alt="Imagen" className="w-full h-full" />{" "}
          </div>
        </div>
        <div
          className={`${styles.targetParentElement}relative w-60 h-60 md:w-96 md:h-80`}
        >
          <Image
            src={personaje}
            className="w-60 h-60 md:w-96 md:h-80 rotate-3 shadow-lg shadow-indigo-500/50"
          />
          {/* <img src={personaje} /> */}
          {/* Imágenes de habilidades */}
          {/* <img
            src={dona}
            className={`${styles.yourAnimation} ${tamano} ${
              // Si currentImage es 1, no se aplica la clase hideImage, de lo contrario, se aplica
              currentImage === 1 ? "" : styles.hideImage
            }`}
            alt="Imagen 1"
          />
          <img
            src={nave}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 2 ? "" : styles.hideImage
            }`}
            alt="Imagen 2"
          />
          <img
            src={personaje}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 3 ? "" : styles.hideImage
            }`}
            alt="Imagen 3"
          />
          <img
            src={pistola}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 4 ? "" : styles.hideImage
            }`}
            alt="Imagen 4"
          />
          <img
            src={tennis}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 5 ? "" : styles.hideImage
            }`}
            alt="Imagen 5"
          />
          <img
            src={silla}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 6 ? "" : styles.hideImage
            }`}
            alt="Imagen 6"
          /> */}
          {/* <img
            src={php}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 7 ? "" : styles.hideImage
            }`}
            alt="Imagen 7"
          />
          <img
            src={figma}
            className={`${
              styles.yourAnimation
            } w-16 h-16 md:w-24 md:h-24 top-0 ${
              currentImage === 8 ? "" : styles.hideImage
            }`}
            alt="Imagen 8" */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
