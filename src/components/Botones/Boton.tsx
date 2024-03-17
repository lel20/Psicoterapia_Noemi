import { Link } from "react-router-dom"
import './BotonEstilos.css'
interface Elementos{
  nombre:string,
  link:string
  fondo:string
}
export const Boton=({nombre,link,fondo}:Elementos)=>{
  return(
     <Link to={link} className={ `boton_estilo  ${fondo} `}>
            {nombre}
      </Link>
  )
}