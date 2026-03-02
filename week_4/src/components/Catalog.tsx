// ============================================
// COMPONENTE: Catalog (Principal)
// ============================================
// Orquesta todos los componentes del catálogo

import React, { useState, useMemo, useEffect } from 'react';
import { Book, Category, SortOption } from '../types';
import { books as initialBooks } from '../data/items';
import { useDebounce } from '../hooks/useDebounce';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';
import { ItemList } from './ItemList';

/**
 * Componente principal del catálogo de libroa usados 
 */
export const Catalog: React.FC = () => {
  // ============================================
  // ESTADOS
  // ============================================

  // Datos
  const [books, setBooks] = useState<Book[]>(initialBooks);

  // Estados de UI
  const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('title-asc');

  // Debounce para búsqueda
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  // Simulación de carga inicial (para cumplir con el README)
  useEffect(() => {
  setIsLoading(true);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return () => clearTimeout(timer);
}, []);

  // ============================================
  // PROCESAMIENTO DE DATOS
  // ============================================

  // TODO: Implementar filtrado, búsqueda y ordenamiento con useMemo
  const processedBooks = useMemo(() => {
    let result = [...books];

    // TODO: 1. Filtrar por búsqueda
     if (debouncedSearchTerm) {
       const term = debouncedSearchTerm.toLowerCase();
       result = result.filter((book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
       );
     }

    // TODO: 2. Filtrar por categoría
    if (selectedCategory !== 'all') {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // TODO: 3. Filtrar por disponibilidad
    if (showOnlyAvailable) {
     result = result.filter((book) => book.isAvailable);
    }

    // TODO: 4. Ordenar (sin mutar)
    switch (sortBy) {
      case 'title-asc':
       result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;

      case 'newest':
        result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }

    return result;
  }, [books, debouncedSearchTerm, selectedCategory, showOnlyAvailable, sortBy]);

  // ============================================
  // HANDLERS
  // ============================================

  const handleDelete = (id: number): void => {
    if (window.confirm('¿Estás seguro de eliminar este libro?')) {
      setBooks((prev) => prev.filter((book) => book.id !== id));
    }
  };

  const handleView = (id: number): void => {
    const book = books.find((b) => b.id === id);
    if (book) {
      alert(`Detalles de: ${book.title} - ${book.author}`);
    }
  };

  const clearFilters = (): void => {
    setSearchTerm('');
    setSelectedCategory('all');
    setShowOnlyAvailable(false);
    setSortBy('title-asc');
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="catalog max-w-7xl mx-auto px-4 py-8">
      <header className="catalog-header mb-8">
        <h1 className="text-3xl font-bold text-gray-900">📚 Catálogo de Libros Usados</h1>
      </header>

      {/* Barra de búsqueda */}
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar por titulo o autor..."
      />

      {/* Filtros y ordenamiento */}
      <div className="controls flex flex-col md:flex-row justify-between items-start md:items-center gap-6 my-6">
        <FilterPanel
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showOnlyAvailable={showOnlyAvailable}
          onAvailableChange={setShowOnlyAvailable}
          onClearFilters={clearFilters}
        />

        <SortSelector
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      {/* Contador de resultados */}
      <p className="results-count text-gray-700 mb-6">
        Mostrando {processedBooks.length} de {books.length} libros
        {debouncedSearchTerm && ` para "${debouncedSearchTerm}"`}
      </p>

      {/* Lista de elementos */}
      <ItemList
        books={processedBooks}
        isLoading={isLoading}
        error={error}
        onDelete={handleDelete}
        onView={handleView}
        onClearFilters={clearFilters}
      />
    </div>
  );
};

export default Catalog;
