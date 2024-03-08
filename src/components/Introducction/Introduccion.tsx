import './Introduccion.css'; 
export const Introduccion = () => {
  return (
    <>
      <div className="text-black md:bg-white opacity-50 rounded-lg shadow-md p-2 md:p-8 h-min bg-opacity-50">
        <div className="text-center  mb-8">
          <p className="text-lg lg:text-xl">
            Descubre una forma cómoda y accesible de abordar tus desafíos
            emocionales y mejorar tu bienestar general.
          </p>
          <button>Pedir Cita</button>
        </div>
      </div>
     <div className="parent flex self-start items-center">
      <div className="px-6 magicpattern flex flex-col items-center justify-center"> 
        <h2 className='font-bold text-4xl text-white '> Tu salud mental es lo primero
        </h2>
        <p>Conecta con tu psicólogo y pide tu primera cita aquí</p>
        <button>Pide tu cita</button>
      </div>
     </div>
    </>
  );
};
