// ============================================
// COMPONENTE: SortSelector
// ============================================
// Selector de criterio de ordenamiento

import React from 'react';
import { SortOption } from '../types';
import { sortOptions } from '../data/items';

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

/**
 * Selector de ordenamiento
 */
export const SortSelector: React.FC<SortSelectorProps> = ({
  value,
  onChange,
}) => {
  // TODO: Implementar el selector

  return (
    <div className="sort-selector flex items-center gap-3">
      {/* TODO: Label y select */}
      <label htmlFor="sort" className="font-medium text-gray-700">
        Ordenar por:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};