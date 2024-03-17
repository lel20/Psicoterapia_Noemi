import "./Introduccion.css";
import { Boton } from "../Botones/Boton";

export const Introduccion = () => {
  return (
    <>
      <div className="contenedor">
        <div className="capa-adicional"></div>
        <div className="contenedor-title container">
          <h1 className="contenedor-title-h1 md:text-5xl lg:text-7xl">
            Terapia online!
          </h1>
          <h3 className="contenedor-title-h3 md:text-4xl lg:text-4xl">
            Libera tu mente de emociones negativas
          </h3>
          <p className="contenedor-description  md:w-9/12 md:text-2xl lg:w-3/5 ">
            Descubre la forma más cómoda y accesible de abordar tus desafíos
            emocionales y mejorar tu bienestar general.
          </p>
        </div>
        <div className="absolute w-full bottom-14 flex justify-center">
           <Boton nombre={"Reserva tu cita"} link={"/sobremi"} fondo={"bg-purple-700 hover:bg-purple-700"}  />
        </div>
       
      </div>
    </>
  );
};
