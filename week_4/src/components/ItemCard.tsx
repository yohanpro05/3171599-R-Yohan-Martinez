// ============================================
// COMPONENTE: ItemCard
// ============================================
// Muestra una tarjeta con la información de un elemento
// TODO: Adaptar a tu dominio

import React from 'react';
import { Book } from '../types';

interface ItemCardProps {
  book: Book;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

/**
 * Tarjeta que muestra un libro usado con su información principal
 * TODO: Personalizar según tu dominio
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  book,
  onDelete,
  onView,
}) => {
  // TODO: Implementar el componente
// QUÉ: Función auxiliar para definir color del badge según condición
  // PARA: Dar feedback visual rápido sobre el estado físico del libro
  // IMPACTO: El usuario entiende inmediatamente si el libro está en buen estado sin leer todo

 const getConditionClass = (condition: Book['condition']) => {
    switch (condition) {
      case 'Como nuevo':   return 'condition-like-new';
      case 'Muy bueno':    return 'condition-very-good';
      case 'Bueno':        return 'condition-good';
      case 'Aceptable':    return 'condition-acceptable';
      case 'Dañado':       return 'condition-damaged';
      default:             return 'condition-default';
    }
  }; 
// QUÉ: Formateamos el precio en formato colombiano (ej: $ 45.000)
  // PARA: Mejor legibilidad y sensación local (Bogotá, COP)
  // IMPACTO: Hace que el catálogo se sienta más profesional y adaptado al usuario colombiano

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div className="item-card ">
      {/* Imagen del libro */}
     <div className="item-image-container">
        {book.imageUrl ? (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="item-image"
            onError={(e) => {
              // Fallback si la imagen falla
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Libro+Sin+Foto';
            }}
          />
        ) : (
          <div className="no-image">
            Sin foto
          </div>
        )}

        {/* Badge de disponibilidad (esquina superior derecha) */}
        <span
          className={`availability-badge ${
            book.isAvailable
              ? 'available'
              : 'sold'
          }`}
        >
          {book.isAvailable ? 'Disponible' : 'Vendido'}
        </span>
      </div>

      {/* Contenido */}
      <div className="item-content">
        {/* Título */}
        <h3 className="titem-title">
          {book.title}
        </h3>

        {/* Autor */}
        <p className="item-author">
          {book.author}
        </p>

        {/* Badge de condición */}
        <span
          className={`condition-badge ${getConditionClass(
            book.condition

          )}`}
        >
          {book.condition}
        </span>

        {/* Precio */}
        <p className="item-price">
          {formatPrice(book.price)}
        </p>

        {/* Año + Categoría */}
        <div className="item-meta">
          <span>{book.publicationYear}</span>
          <span className="item-category">{book.category}</span>
        </div>

        {/* Rating (si existe) */}
        {book.rating !== undefined && (
          <p className="item-rating">
            {'⭐'.repeat(Math.round(book.rating))} ({book.rating})
          </p>
        )}

        {/* Botones de acción */}
        <div className="item-actions">
          {onView && (
            <button
              onClick={() => onView(book.id)}
              className="btn btn-view"
            >
              Ver detalles
            </button>
          )}

          {onDelete && (
            <button
              onClick={() => onDelete(book.id)}
              className="btn btn-delete"
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};