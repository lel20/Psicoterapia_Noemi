import { useState } from "react";
export const Navbar=()=> {
  const efecto_text=' hover:text-black transform hover:rotate-3 transition-all duration-300'
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 bg-opacity-80 fixed w-full text-white md:px-0 px-2 py-4 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo o título de la página */}
            <a href="/" className="text-xs sm:text-3xl font-bold">Des.aprendiendo</a>
          </div>
          <div className="hidden md:flex ">
            {/* Enlaces de navegación para pantallas medianas y grandes */}
            <a href="/" className={`${efecto_text} mx-2`}>Inicio</a>
            <a href="/" className={`${efecto_text} mx-2`}>Sobre Mí</a>
            <a href="/" className={`${efecto_text} mx-2`}>Servicios</a>
            <a href="/" className={`${efecto_text} mx-2`}>Contacto</a>
          </div>
          <div className="block md:hidden">
            {/* Icono del menú hamburguesa para pantallas pequeñas */}
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        {/* Menú desplegable para pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="/" className="block px-4 py-2">Inicio</a>
            <a href="/" className="block px-4 py-2">Sobre Mí</a>
            <a href="/" className="block px-4 py-2">Servicios</a>
            <a href="/" className="block px-4 py-2">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
}