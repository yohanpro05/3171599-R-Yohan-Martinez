// ============================================
// COMPONENTE: ItemList
// ============================================
// Renderiza la lista de libros usados con estados condicionales 

import React from 'react';
import { Book } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';
import { LoadingSpinner } from './LoadingSpinner';
interface ItemListProps {
  books: Book[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  onClearFilters?: () => void;
}
/**
 * Muestra la lista de libros con todos los estados posibles:
 * - Cargando
 * - Error
 * - Vacío (sin resultados)
 * - Lista con tarjetas
 */

/**
 * Lista de elementos del catálogo
 */
export const ItemList: React.FC<ItemListProps> = ({
  books,
  isLoading = false,
  error = null,
  onDelete,
  onView,
  onClearFilters,
}) => {
  // TODO: Implementar renderizado condicional

 // QUÉ: Renderizado condicional según el estado actual
  // PARA: Cumplir con los requisitos de renderizado condicional del proyecto
  // IMPACTO: Mejora UX al informar al usuario exactamente qué está pasando
 
  // 1. Estado de carga (prioridad alta)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner /> 
        <p className="ml-3 text-gray-600">Cargando libros...</p>
      </div>
    );
  }

  // 2. Si hay error, mostrar mensaje de error
 if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto">
        <p className="text-red-600 text-lg font-medium mb-2">❌ Algo salió mal</p>
        <p className="text-red-700 mb-4">{error}</p>
        <button
          onClick={onClearFilters}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Intentar de nuevo
        </button>
      </div>
    );
  }

  // 3. Estado vacío (no hay libros después de filtros/búsqueda)
  if (books.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

 
  // 4. Lista con resultados (el caso feliz)
  return (
    <div className="item-list">
      {/* Contador de resultados - requisito del proyecto */}
      <div className="mb-6 text-gray-700">
        <span className="font-semibold text-indigo-700">{books.length}</span> libros encontrados
      </div>

      {/* Grid responsive de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <ItemCard
            key={book.id}           // ← Key única basada en id (¡nunca uses index!)
            book={book}
            onDelete={onDelete}
            onView={onView}
          />
        ))}
      </div>
    </div>
  );
};
