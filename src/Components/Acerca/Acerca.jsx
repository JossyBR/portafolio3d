import React, { useState } from "react";
// import { Card, Button } from "@material-tailwind/react";
import prueba from "../../assets/Foto2.jpg";
// import CV from "../../../public/CV_Joselin Benitez.pdf";
import { Button } from "@nextui-org/react";
import styles from "./acerca.module.css";
import { vector } from "../../assets";

const Acerca = () => {
  const [isHovered, setIsHovered] = useState(false);

  //Visualizar en otra ventana
  // const abrirPdf = () => {
  //   window.open(CV, "_blank");
  // };

  const toggleEye = () => {
    setIsEyeOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="absolute left-0 top-0 lg:w-[700px] lg:h-[700px] z-0">
        <img src={vector} alt="" />
      </div>
      <div
        className={`${styles.content} border-2 w-80 h-auto p-2 flex flex-col items-center text-black gap-8 rounded-lg z-10 sm:w-[550px] lg:gap-4 lg:flex-row lg:w-[800px] lg:h-[500px] 2xl:w-[967px] 2xl:h-[700px]`}
      >
        <div className=" w-40 h-52 mt-3 rounded-lg sm:w-52 sm:h-64 lg:ml-2 lg:w-64 lg:h-72 2xl:ml-6 2xl:w-[326px] 2xl:h-[410px] ">
          <img
            src={prueba}
            alt="Acerca de"
            className="w-40 h-52 rounded-lg sm:w-52 sm:h-64 lg:w-64 lg:h-72 2xl:w-[326px] 2xl:h-[405px]"
          />
        </div>
        <div className="w-auto h-auto mx-1 flex flex-col justify-center sm:h-auto lg:w-[550px] 2xl:w-[560px] 2xl:h-auto 2xl:mr-6">
          <h3 className="text-2xl text-center mb-2 mx-1 lg:text-4xl 2xl:mb-[32px]">
            Acerca de Mi
          </h3>
          <p className="text-xs text-justify mx-1 sm:text-sm 2xl:text-base ">
            ¡Hola! Soy Jossy Benitez, FullStack Web Developer con habilidades en
            HTML, CSS, JavaScript, PHP, React, Redux, Express, Node.js, Figma y
            Blender, disfruto del diseño y la animación 3D, fusionando estas
            habilidades con una formación en administración en seguridad y salud
            en el trabajo. <br />
            <br /> He trabajado en diversos proyectos, desde el desarrollo de
            sitios informativos, aplicaciones con conexión a APIs, Sistemas de
            Gestión académicos, hasta la creación de marketplaces y eCommerce.
            Busco crear experiencias visuales combinando programación y
            animación. <br />
            <br /> Me agrada la idea de diseñar piezas gráficas dinámicas que
            transmitan conceptos de manera clara, contribuyendo
            significativamente a mejorar la retención de información en diversos
            contextos. <br />
            <br /> Todo lo anterior con el propósito de aportar mediante la
            programación y la animación 3D, generando impacto en cualquier
            entorno donde pueda presentar alternativas de manera innovadora y
            efectiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acerca;

// import React, { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import prueba from "../../assets/Foto2.jpg";

// const Acerca = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const abrirPdf = () => {
//     // ... tu lógica para abrir el PDF
//   };

//   return (
//     <div id="#acerca" className="flex justify-center items-center min-h-screen">
//       <div className="flex flex-row w-[967px] h-[700px] bg-[#1C1E22] text-white gap-8 rounded-lg">
//         <div className="ml-6 mt-32 mb-6 w-[326px] h-[410px] rounded-lg">
//           <img src={prueba} alt="Acerca de" className="w-[326px] h-[405px] rounded-lg" />
//         </div>
//         <div className="w-[560px] mt-32 mr-6">
//           <h3 className="text-5xl mb-[32px]">Acerca de Mi</h3>
//           <p className="text-base leading-10">
//             {/* ... tu texto ... */}
//           </p>

//           <div className="ml-40 mt-10">
//             <Button
//               onClick={abrirPdf}
//               className="w-52 bg-[#FF9143] border border-[#FF9143] text-white font-semibold hover:scale-105"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <p className="text-base">
//                 Ver CV{" "}
//                 {isHovered ? (
//                   <i className="far fa-face-laugh-beam ml-2"></i>
//                 ) : (
//                   <i className="far fa-face-meh ml-2"></i>
//                 )}
//               </p>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Acerca;
