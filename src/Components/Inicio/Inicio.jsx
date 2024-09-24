import React, { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";
import styles from "./inicio.module.css";
import {
  css,
  html,
  javascript,
  react,
  node,
  redux,
  php,
  figma,
  vector,
} from "../../assets";

const Inicio = () => {
  const tamano = "w-16 h-16 absolute transition duration-300 md:w-24 md:h-24";
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const animationDuration = 3000;

    const loopAnimation = () => {
      setCurrentImage((prev) => (prev % 8) + 1);
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
              <span className="text-[#FF9143] leading-loose">
                Jossy Benitez
              </span>
            </span>
            <br /> y soy Animadora 3D{" "}
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-48 md:h-48">
            {" "}
            {/* Ajusta el tamaño del contenedor del vector */}
            <img src={vector} alt="Imagen" className="w-full h-full" />{" "}
            {/* Ajusta el tamaño del vector */}
          </div>
        </div>
        <div
          className={`${styles.targetParentElement}relative w-16 h-16 md:w-24 md:h-24`}
        >
          {/* Imágenes de habilidades */}
          <img
            src={css}
            className={`${styles.yourAnimation} ${tamano} ${
              // Si currentImage es 1, no se aplica la clase hideImage, de lo contrario, se aplica
              currentImage === 1 ? "" : styles.hideImage
            }`}
            alt="Imagen 1"
          />
          <img
            src={html}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 2 ? "" : styles.hideImage
            }`}
            alt="Imagen 2"
          />
          <img
            src={javascript}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 3 ? "" : styles.hideImage
            }`}
            alt="Imagen 3"
          />
          <img
            src={react}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 4 ? "" : styles.hideImage
            }`}
            alt="Imagen 4"
          />
          <img
            src={node}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 5 ? "" : styles.hideImage
            }`}
            alt="Imagen 5"
          />
          <img
            src={redux}
            className={`${styles.yourAnimation} ${tamano} ${
              currentImage === 6 ? "" : styles.hideImage
            }`}
            alt="Imagen 6"
          />
          <img
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
            alt="Imagen 8"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
