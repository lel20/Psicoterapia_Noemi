import { useEffect, useRef } from "react";

interface ServiCard{
  title:string
  description:string
  icon:string
}
export const  ServiceCard = ({ title, description, icon }:ServiCard) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parallaxRef} className="service-card">
      <span className="service-icon">{icon}</span>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="/" className="btn">Más información</a>
    </div>
  );
}
