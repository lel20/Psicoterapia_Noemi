import { Link } from "react-router-dom"

interface Elementos{
  nombre:string,
  link:string
  fondo:string
}
export const Boton=({nombre,link,fondo}:Elementos)=>{
  return(
     <Link to={link} className={ `${fondo}  w-[50%] h-12 rounded-md justify-center items-center flex text-white`}>
            {nombre}
      </Link>
  )
}