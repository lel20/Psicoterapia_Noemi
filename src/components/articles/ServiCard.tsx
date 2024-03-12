import Abstract from "../../assets/Imagenes/abstract1.jpg";
import { Boton } from "../Botones/Boton";
import "./Card.css";
interface ServiCard {
  title: string;
  description: string;
  icon: string;
}
export const ServiceCard = ({ title, description, icon }: ServiCard) => {
  return (
    <div className="service-card  flex flex-col md:flex-row text-start w-full justify-center items-center ">
      <div className="  w-[80%] flex flex-col justify-center items-center p-4 ">
        <span className="service-icon">{icon}</span>
        <h2 className="service-title w-full text-2xl md:text-4xl py-4">{title}</h2>
        <p className="service-description">{description}</p>
        <div className="flex w-full flex-col md:flex-row gap-6 justify-around items-center mt-6">
          <Boton link="/" nombre="Más información" fondo='bg-black' />
          
        </div>
      </div>
      <div className="abstract">
        <div className="hola">holas</div>
        </div>
    </div>
  );
};
