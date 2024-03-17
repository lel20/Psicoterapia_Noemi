//Estilos
import "./EstilosPage/SobreMi.css";
// Imagenes
import MujerFondo from "../assets/Imagenes/mujerfondo.png";

export const SobreMi = () => {
  return (
    <>
      <section className="section_sobre_mi md:flex-row">
        <div className="mt-16 flex flex-col h-[550px] justify-center items-center md:flex-1">
          <img src={MujerFondo} className=" h-[70%] " alt="" />
          <h1 className=" h-20 rounded-md bg-blue-400 w-[90%] md:w-[350px] flex flex-col justify-center items-center">
            <p className="text-white text-2xl font-bold">Maria Paredes </p>
            <p className="text-white">Psicóloga Clínica</p>
          </h1>
        </div>
        <div className="md:flex-1  flex flex-col  md:justify-center items-center p-10 md:mt-16 ">
          <div className="w-full flex justify-start">
            <p className="w-14 h-4 border-t-2 border-x-black "></p>
          </div>

          <h1 className="text-3xl w-full font-extrabold text-black/60 pb-6 uppercase">
            Sobre mí
          </h1>
          <p className="pb-2">
            {" "}
            Soy una apasionada psicóloga dedicada a ayudar a las personas a
            superar sus desafíos emocionales y mentales. Mi enfoque terapéutico
            se centra en la empatía, la comprensión y la colaboración con mis
            clientes para alcanzar soluciones duraderas y significativas.
          </p>
          <p className="py-4">
            Me especializo en proporcionar apoyo a personas de todas las edades,
            desde niños hasta adultos mayores, y estoy comprometida a crear un
            espacio seguro y de confianza donde puedan explorar y crecer como
            personas.
          </p>
        </div>
      </section>
      <section className="section mb-8">
        <h2 className="text-green-500 mb-4">Formación Académica</h2>
        <p>Graduada en Psicología por la Universidad Nacional de Loja.</p>
        <p>Maestría en Psicología Clínica por la Universidad de Valencia.</p>
      </section>
      <section className="section mb-8">
            <h2 className="text-green-500 mb-4">Experiencia Profesional</h2>
            <ul>
                <li>Psicoterapia individual y de grupo.</li>
                <li>Atención a personas con problemas de alcohol y otras drogas.</li>
                <li>Prevención en drogodependencias.</li>
                <li>Estimulación cognitiva y acompañamiento al adulto mayor.</li>
            </ul>
        </section>
        <section>
          <p className="text-lg mb-4">
          Si estás interesado en comenzar el proceso de terapia o si tienes
          alguna pregunta, no dudes en ponerte en contacto conmigo.
        </p>
        <p className="text-lg mb-4">
          <strong>Teléfono:</strong> 123-456-7890
        </p>
        <p className="text-lg mb-4">
          <strong>Correo Electrónico:</strong> info@miempresa.com
        </p>
        <p className="text-lg mb-4">
          <strong>Dirección:</strong> [Dirección del consultorio]
        </p>
        </section>
    </>
  );
};
