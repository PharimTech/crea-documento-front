import React from 'react';

const GridComponent = () => {
  // Simulando datos para la grilla, reemplaza esto con tus propios datos
  const items = [
    { id: 1, title: 'Tarjeta 1' },
    { id: 2, title: 'Tarjeta 2' },
    { id: 3, title: 'Tarjeta 3' },
    { id: 4, title: 'Tarjeta 4' },
    // Agrega más objetos según sea necesario
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
