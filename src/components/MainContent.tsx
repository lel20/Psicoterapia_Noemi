import { Card } from "./articles/Card"
import woman from '../assets/woman.png'

export const MainContent = () => {
  return (
    <div className="py-20 md:py-32 flex flex-col items-center w-full">
      <h1 className="text-white w-[80%] text-4xl md:text-7xl font-bold text-center ">
        ¡Bienvenido a la Terapia Online!
      </h1>
      <article className="max-w-[100%]  mx-auto flex">
        <div className="bg-slate-600 md:bg-white opacity-50 rounded-lg shadow-md p-6 md:p-8 h-min bg-opacity-50">
          <div className="text-center text-gray-800 mb-8">
            <p className="text-lg lg:text-xl">
              En nuestra plataforma de terapia online, brindamos ayuda
              profesional y confidencial desde la comodidad de tu hogar.
            </p>
            <p className="text-lg lg:text-xl">
              Nuestros terapeutas especializados están aquí para acompañarte en
              tu viaje hacia una mejor salud emocional y mental.
            </p>
            <p className="text-lg lg:text-xl">
              Descubre una forma cómoda y accesible de abordar tus desafíos
              emocionales y mejorar tu bienestar general.
            </p>
          </div>
        </div>
        <img  className="w-[50%] p-0" src={woman} alt="" />
      </article>

      <section className="flex flex-col justify-center items-center  mb-12 bg-white w-full">
        <div className="flex flex-col md:flex-row w-full text-center justify-center gap-x-10">
          <Card title={'Terapia invidual'} />
          <Card title="Terapia Grupal"/>
          <Card title="Terapia Familiar"/>
        </div>
        
        <div className="w-full lg:w-2/3 p-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            Explora tus sentimientos
          </h2>
          <p className="text-lg lg:text-xl">
            Nos enfocamos en proporcionar un espacio seguro y confidencial donde
            puedas explorar tus pensamientos y sentimientos libremente. No
            importa dónde te encuentres, estamos aquí para brindarte el apoyo
            que necesitas para mejorar tu bienestar emocional y vivir una vida
            más plena y satisfactoria.
          </p>
        </div>
      </section>

      <div className="text-center bg-white w-full">
        <p className="text-lg lg:text-xl">
          ¡Contáctanos hoy mismo para comenzar tu viaje hacia una mejor salud
          emocional!
        </p>
        <p className="text-lg lg:text-xl mt-4">
          <strong>Teléfono:</strong> 123-456-7890
        </p>
        <p className="text-lg lg:text-xl">
          <strong>Correo Electrónico:</strong> info@terapiaonline.com
        </p>
      </div>

      <div className=" mx-auto py-8 bg-white max-w-full">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a mi página de psicoterapia
        </h1>
        <p className="text-lg mb-4">
          Ofrezco servicios de psicoterapia para ayudarte a mejorar tu bienestar
          mental y emocional.
        </p>
        <p className="text-lg mb-4">
          Mi enfoque terapéutico se centra en el desarrollo personal, la
          resolución de conflictos y el bienestar emocional.
        </p>

        <h2 className="text-2xl font-bold mb-2">Servicios</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Terapia individual para adultos</li>
          <li>Asesoramiento emocional</li>
          <li>Manejo del estrés y la ansiedad</li>
          <li>Apoyo en la toma de decisiones</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Sobre Mí</h2>
        <p className="text-lg mb-4">
          Soy una terapeuta comprometida a brindar un espacio seguro y
          confidencial para explorar tus preocupaciones y desafíos emocionales.
          Mi objetivo es ayudarte a encontrar el equilibrio y la claridad que
          necesitas para vivir una vida plena y significativa.
        </p>

        <h2 className="text-2xl font-bold mb-2">Testimonios</h2>
        <div className="mb-4">
          <p className="text-lg">
            <em>
              "La terapia con [nombre del terapeuta] ha sido una experiencia
              transformadora para mí. Me ha ayudado a comprender mejor mis
              emociones y a desarrollar herramientas para afrontar los desafíos
              de la vida."
            </em>{" "}
            - Cliente Satisfecho
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-2">Contacto</h2>
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

        <h2 className="text-2xl font-bold mb-2">Recursos</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Artículos sobre bienestar emocional</li>
          <li>Libros recomendados sobre crecimiento personal</li>
          <li>Enlaces a recursos de salud mental</li>
        </ul>
      </div>
    </div>
  );
};
