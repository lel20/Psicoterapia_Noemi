import { Introduccion } from "../components/Introducction/Introduccion";
import "./EstilosPage/Homepage.css";
import { Card } from "../components/articles/Card";
import { ServiceCard } from "../components/articles/ServiCard";
import { Parallax } from "react-parallax";
import Mountain from "../assets/Imagenes/space.jpg";
function HomePage() {
  return (
    <div className="principal bg-gradient-to-r from-blue-100 to-white">
      <section
        className="section_1  
               md:rounded-b-[50%]"
      >
        <Introduccion />
      </section>

      <section className="section_2">
        <Parallax
          className="min-h-screen w-screen "
          bgImage={Mountain}
          strength={400}
          bgImageStyle={{
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.5",
          }}
        >
          <p className="section_2_service md:text-lg">Nuestros</p>
          <h2 className="section_2_service_title md:text-[8rem] md:h-[8rem]">
            Servicios
          </h2>
          <div className="services-grid  bg-white mt-80">
            <div className="container">
              <ServiceCard
                title="Psicoterapia"
                description="Si te sientes abrumado por el estrés, la ansiedad o la tristeza emocional. ¿No te peocupes! Nuestro servicio de psicoterapia individual, en pareja o grupal está diseñado para ofrecerte un espacio seguro donde puedas explorar tus emociones, superar tus desafíos y encontrar el equilibrio emocional que tanto deseas"
                icon="🧠"
              />
            
            </div>
        <div className="container">
              <ServiceCard
                title="Psicoterapia"
                description="Si te sientes abrumado por el estrés, la ansiedad o la tristeza emocional. ¿No te peocupes! Nuestro servicio de psicoterapia individual, en pareja o grupal está diseñado para ofrecerte un espacio seguro donde puedas explorar tus emociones, superar tus desafíos y encontrar el equilibrio emocional que tanto deseas"
                icon="🧠"
              />
            </div>

            {/* <ServiceCard
              title="Evaluación Psicológica"
              description="Obtén una comprensión más profunda de tus necesidades y preocupaciones emocionales."
              icon="📋"
            />
            <ServiceCard
              title="Asesoramiento"
              description="Recibe orientación y apoyo personalizado para enfrentar tus desafíos emocionales."
              icon="🤝"
            />
            <ServiceCard
              title="Psicoeducación"
              description="Participa en talleres grupales diseñados para promover el crecimiento personal y el bienestar emocional."
              icon="📚"
            />
            <ServiceCard
              title="Psicoeducación"
              description="Participa en talleres grupales diseñados para promover el crecimiento personal y el bienestar emocional."
              icon="📚"
            /> */}
          </div>
        </Parallax>
      </section>
      <section className="section_3 md:flex-row md:py-10 md:px-[5rem]">
        <Card
          title={"Terapia invidual"}
          precio={15}
          personas="1 persona"
          sesion={"60 min"}
          online="100% online"
          plataforma="Skipe, Google Meet"
        />
        <Card
          title="Terapia En Pareja"
          precio={25}
          personas="2 personas"
          sesion="60 min"
          online="100% online"
          plataforma="Skipe, Google Meet"
        />
        <Card
          title="Terapia Grupal"
          precio={40}
          personas="más de 2 personas"
          sesion="60 min"
          online="100% online"
          plataforma="Skipe, Google Meet"
        />
      </section>
      <div className="w-full lg:w-2/3 p-4">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">
          Explora tus sentimientos
        </h2>
        <p className="text-lg lg:text-xl">
          Nos enfocamos en proporcionar un espacio seguro y confidencial donde
          puedas explorar tus pensamientos y sentimientos libremente. No importa
          dónde te encuentres, estamos aquí para brindarte el apoyo que
          necesitas para mejorar tu bienestar emocional y vivir una vida más
          plena y satisfactoria.
        </p>
      </div>

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
}
export default HomePage;
