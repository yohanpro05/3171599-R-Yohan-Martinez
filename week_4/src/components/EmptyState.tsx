// ============================================
// COMPONENTE: EmptyState
// ============================================
// Muestra mensaje cuando no hay libros que coincidan con los fitros o búsqueda

import React from 'react';

interface EmptyStateProps {
  message?: string;
  onClearFilters?: () => void;
}

/**
 * Pantalla de estado vacío cuando no hay resultados en el catálogo de libros usados 
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No encontramos libros que coincidan con tu busqueda',
  onClearFilters,
}) => {

  // QUÉ: Componente simple pero visualmente atractivo para indicar ausencia de resultados
  // PARA: Cumplir con el requisito "Mostrar estado vacío si no hay datos" + mejorar UX
  // IMPACTO: Evita que el usuario se frustre al ver una lista en blanco; le da una acción clara (limpiar)
  
  return (
    <div className="empty-state flex flex-col items-center justify-center py-16 px-4 text-center min-h-[400px]">
     {/* Icono grande y temático */}
      <div className="text-8xl mb-6 opacity-70">
        📚❓ {/* Libro + signo de interrogación  */}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        No hay libros por aquí...
      </h3>

      <p className="text-gray-600 text-lg mb-8 max-w-md">
        {message}
        <br />
        Prueba con otros términos, géneros o quita algunos filtros.
      </p>

      {/* Botón condicional para limpiar filtros y búsqueda */}
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Limpiar filtros y búsqueda
        </button>
      )}
    </div>
  );
};
