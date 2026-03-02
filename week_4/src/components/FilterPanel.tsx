// ============================================
// COMPONENTE: FilterPanel
// ============================================
// Panel con todos los filtros

import React from 'react';
import { Category } from '../types';
import { categories } from '../data/items';

interface FilterPanelProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  showOnlyAvailable: boolean;
  onAvailableChange: (value: boolean) => void;
  onClearFilters: () => void;
}

/**
 * Panel de filtros del catálogo
 */
export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  onCategoryChange,
  showOnlyAvailable,
  onAvailableChange,
  onClearFilters,
}) => {
  // TODO: Implementar los filtros

  return (
    <div className="filter-panel flex flex-col sm:flex-row sm:items-end gap-6 p-4 bg-gray-50 rounded-lg shadow-sm">
      {/* TODO: Selector de categoría */}
      <div className="filter-group flex flex-col">
        <label htmlFor="category" className="mb-1 font-medium text-gray-700">
          Categoría:
        </label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* TODO: Checkbox de disponibilidad */}
      <div className="filter-group flex items-center pt-6 sm:pt-0">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="only-available"       
            name="only-available"
            checked={showOnlyAvailable}
            onChange={(e) => onAvailableChange(e.target.checked)}
            className="mr-2 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          Solo disponibles
        </label>
      </div>

      {/* TODO: Botón limpiar filtros */}
      <button
        onClick={onClearFilters}
        className="btn-clear px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition mt-4 sm:mt-0"
      >
        🔄 Limpiar filtros
      </button>
    </div>
  );
};