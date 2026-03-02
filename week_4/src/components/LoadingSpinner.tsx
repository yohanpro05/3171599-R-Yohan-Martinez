// src/components/LoadingSpinner.tsx

import React from 'react';
//QUE: Un spinner giratorio clasico mas texto 
//PARA: cumplir con el requisito "Mostrar estado de carga (loading)"
//IMPACTO: Da feadback nmediato al usuario, evita que piense que la pagina se colgó

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600 border-t-4 border-transparent"></div>
      <p className="mt-4 text-gray-600 font-medium">Cargando libros...</p>
    </div>
  );
};