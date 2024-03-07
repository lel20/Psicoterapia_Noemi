
export const Footer=()=> {
  return (
    <footer className="bg-gray-800  text-white py-4 mt-8">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-lg">© {new Date().getFullYear()} Nombre del Terapeuta | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};