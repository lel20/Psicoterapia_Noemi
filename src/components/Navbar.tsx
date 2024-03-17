import { useState } from "react";
import './Componenst.css'
export const Navbar=()=> {
  const whastsapp='https://wa.me/34610937223?text=Hola,%20me%20gustaría%20ponerme%20en%20contacto%20contigo.'
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo o título de la página */}
            <a  href="/" className="des-title md:text-3xl">Des.aprendiendo</a>
            <a className=" transition-all duration-500 hover:bg-blue-700 hover:text-white w-20 h-8 items-center justify-center rounded-sm" href=""></a>
          </div>
          <div className="menu-1 md:flex md:flex-wrap justify-center items-center ">
            {/* Enlaces de navegación para pantallas medianas y grandes */}
            <a href="/" className='opciones'>Inicio</a>
            <a href="/sobremi" className='opciones'>Sobre Mí</a>
            <a href="/servicios" className='opciones'>Servicios</a>
            <a href="/" className='opciones'>Contacto</a>
            <a href={whastsapp} target="_blank" className="opciones bg-purple-700 text-white hover:bg-black hover:text-white">610 937 223</a>
          </div>
          <div className="block md:hidden">
            {/* Icono del menú hamburguesa para pantallas pequeñas */}
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-slate-900 border-white hover:text-gray-300 hover:border-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        {/* Menú desplegable para pantallas pequeñas */}
        {isOpen && (
          <div className="bg-white  w-full m-0 h-screen md:hidden mt-2">
            <a href="/" className="opciones-m ">Inicio</a>
            <a href="/sobremi" className="opciones-m ">Sobre Mí</a>
            <a href="/servicios" className="opciones-m ">Servicios</a>
            <a href="/" className="opciones-m ">Contacto</a>
            <a href={whastsapp} className="opciones-m" target="_blank">610937223</a>
          </div>
        )}
      </div>
    </nav>
  );
}