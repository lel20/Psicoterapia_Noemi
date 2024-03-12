import "./Introduccion.css";
import { MdOutlineComputer } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";

export const Introduccion = () => {
  return (
    <>
      <div className=" text-blue-900 rounded-lg px-4 md:py-14 h-min  w-full  flex flex-col justify-center items-center z-20">
        <div className="pb-10 flex flex-col justify-center items-center w-full">
          <p className="text-black sm:text-3xl">¡Bienvenido a tu</p>
          <h1 className="text-blue-900 w-[80%] text-4xl md:text-7xl font-bold text-center ">
            Terapia online!
          </h1>
        </div>

        <div className="text-center  mb-8 w-[80%]">
          <p className="text-lg lg:text-3xl">
            Descubre la forma más cómoda y accesible de abordar tus desafíos
            emocionales y mejorar tu bienestar general.
          </p>
          <p className="text-lg lg:text-3xl py-6">
            Conecta con tu psicólogo y pide tu primera cita aquí
          </p>
        </div>
        <div className="flex w-full gap-x-4 justify-center">
          <p className="flex items-center justify-center gap-x-2">
            <MdOutlineComputer className="text-yellow-400" />
            <span className="w-[50%] ">Sesiones Online</span>
          </p>
          <p className="flex justify-center items-center gap-x-2">
            <FaHeartCirclePlus className="text-yellow-400" />
            <span className="w-[50%]">Bienestar agradable</span>
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-cyan-700  sm:text-2xl md:text-3xl font-sans rounded-md  mt-10 text-white h-10 w-32 md:h-16 md:w-60">
          Pide tu cita
        </button>
      </div>
    </>
  );
};
