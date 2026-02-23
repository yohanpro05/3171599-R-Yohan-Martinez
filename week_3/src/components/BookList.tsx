import React, { useState, useEffect } from 'react';
import type { Book } from '../types';
import { fetchBooks } from '../utils/api';

// ============================================
// COMPONENTE: BookList
// Muestra la lista principal de elementos del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Este componente debe:
// 1. Cargar datos al montar usando useEffect
// 2. Manejar estados: loading, error, data
// 3. Usar AbortController para cancelación
// 4. Mostrar los items en una lista
// 5. Renderizado condicional según el estado

// QUÉ: Un componente de visualización de datos que consume servicios asíncronos.
// PARA: Listar el inventario de libros usando renderizado condicional para manejar estados de carga y error.
//IMPACTO: Mejora la eficiencia del desarrollo al implementar AbortController, lo que evita fugas de memoria y errores en la consola si el usuario navega fuera de la página.

export const BookList: React.FC = () => {
  // TODO: 1. Definir estados para data, loading, error
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: 2. Implementar useEffect para fetch de datos
  useEffect(() => {
    // 2.1. Crear AbortController
    const controller = new AbortController();

    // 2.2. Función async para fetch
    const loadBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBooks();
        setBooks(data);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return; // Cancelado intencionalmente
        }
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    // 2.3. Llamar función de fetch
    loadBooks();

    // 2.4. Cleanup: cancelar petición al desmontar
    return () => {
      controller.abort();
    };
  }, []); // Array vacío: solo al montar

  // TODO: 3. Renderizado condicional para loading
  if (loading) {
    return (
      <div className="book-list">
        <h2>Cargando libros...</h2>
      </div>
    );
  }

  // TODO: 4. Renderizado condicional para error
  if (error) {
    return (
      <div className="book-list error">
        <h2>Error al cargar libros</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  // TODO: 5. Renderizado principal: lista de items
  return (
    <div className="book-list">
      <h2>Libros Usados en Venta</h2>
      {/* TODO: Cambiar título según tu dominio */}
      {/* Ejemplos: "Lista de Libros", "Inventario", "Miembros", "Menú" */}

      <p className="book-count">
        {/* TODO: Mostrar cantidad de items */}
        Total: {books.length} libros
      </p>

      <ul className="books">
        {/* TODO: Mapear items y renderizar cada uno */}
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Precio: ${book.price.toLocaleString('es-CO')}</p>
            <p>Estado: {book.condition}</p>
            <p>{book.available ? 'Disponible' : 'No disponible'}</p>
            {book.isbn && <p>ISBN: {book.isbn}</p>}
            {/* TODO: Mostrar propiedades específicas de tu dominio */}
          </li>
        ))}
      </ul>

      {/* TODO: (Opcional) Agregar búsqueda/filtrado */}
      {/* <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleSearch(e.target.value)}
      /> */}
    </div>
  );
};

// ============================================
// ESTILOS SUGERIDOS (CSS inline o archivo separado)
// ============================================

// .book-list {
//   padding: 20px;
//   background: #f5f5f5;
//   border-radius: 8px;
// }
//
// .books {
//   list-style: none;
//   padding: 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 16px;
// }
//
// .book-card {
//   background: white;
//   padding: 16px;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }
//
// .error {
//   background: #fee;
//   border: 1px solid #fcc;
// }