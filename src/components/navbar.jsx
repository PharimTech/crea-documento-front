import React, { useState } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="bg-blue-500 p-4 rounded-b-lg text-white mb-5 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl">Generador de Documentos</div>
        <div className="hidden md:block">
          <button
            onClick={toggleMenu}
            className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Menú
          </button>
        </div>
      </div>
      {isVisible && (
        <div className=" mt-2">
          <a href="#" className="block px-4 py-2 text-sm rounded-lg bg-blue-700 hover:bg-blue-800">Inicio</a>
          <a href="#" className="block px-4 py-2 mt-1 text-sm rounded-lg bg-blue-700 hover:bg-blue-800">Instrucciones de Uso</a>
          <a href="#" className="block px-4 py-2 mt-1 text-sm rounded-lg bg-blue-700 hover:bg-blue-800">Sobre Nosotros</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
