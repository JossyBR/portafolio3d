import React from "react";
import { Button } from "@nextui-org/react";
import Nav from "../../Components/Nav/Nav";
import Acerca from "../../Components/Acerca/Acerca";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Components/Inicio/Inicio";
import Proyectos from "../../Components/Proyectos/Proyectos";

const Home = () => {
  return (
    <div>
      <div id="inicio">
        <div className="h-20 w-[100%] flex justify-center items-center z-50">
          <Nav />
        </div>
        <Inicio />
      </div>
      {/* <div>
        <Nav />
      </div> */}

      <div id="acerca">
        <Acerca />
      </div>

      <div id="proyectos">
        <Proyectos />
      </div>

      <div id="contactame">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
