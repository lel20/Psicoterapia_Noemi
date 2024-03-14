import { Boton } from "../Botones/Boton";

import "./CardaStile/Card.css";
interface ServiCard {
  title: string;
  description: string;
  imagen: string;
  reverso: string;
}
export const ServiceCard = ({
  title,
  description,
  imagen,
  reverso,
}: ServiCard) => {
  return (
    <div className={`${reverso} service_card`}>
      <div className="service_card_1 md:flex-1 ">
        <div className="service_car_1_container md:px-8">
          <h2 className="service_card_1_title md:text-3xl ">{title}</h2>
          <p className="service_card_1_description">{description}</p>
        </div>
        
        <div className="service_car_1_boton">
          <Boton link="/" nombre="Más información" fondo="bg-black" />
        </div>
      </div>
      <div className=" service_card_2 flex-1">
        <img className="md:h-full" src={imagen} alt="imagen" />
      </div>
    </div>
  );
};
