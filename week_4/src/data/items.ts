// ============================================
// DATOS MOCK - E-commerce de libros usados 
// ============================================
// Datos estaticos para desarrollo y prueba del catálogo

import { Book } from '../types';

// TODO: Renombrar y adaptar los datos según tu dominio
export const books: Book[] = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Realismo mágico',
    price: 45000,
    rating: 4.8,
    isAvailable: true,
    createdAt: '2025-01-15',
    publicationYear: 1967,           // ← ejemplo
    condition: 'Muy bueno',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'Distopía',
    price: 32000,
    rating: 4.7,
    isAvailable: true,
    createdAt: '2025-02-20',
    publicationYear: 1949,
    condition: 'Bueno',
  },
  {
    id: 3,
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    category: 'Infantil',
    price: 22000,
    rating: 4.9,
    isAvailable: false,
    createdAt: '2024-12-10',
    publicationYear: 1943,
    condition: 'Aceptable',
  },
  {
    id: 4,
    title: 'Hábitos atómicos',
    author: 'James Clear',
    category: 'Autoayuda',
    price: 65000,
    rating: 4.6,
    isAvailable: true,
    createdAt: '2025-03-05',
    publicationYear: 2018,
    condition: 'Como nuevo',
  },
  {
    id: 5,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Ciencia ficción',
    price: 48000,
    rating: 4.5,
    isAvailable: true,
    createdAt: '2025-02-15',
    publicationYear: 1965,
    condition: 'Muy bueno',
  },
  {
    id: 6,
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    category: 'Clásicos',
    price: 28000,
    rating: 4.4,
    isAvailable: false,
    createdAt: '2024-11-25',
    publicationYear: 1813,
    condition: 'Aceptable',
  },
  {
    id: 7,
    title: 'Sapiens: De animales a dioses',
    author: 'Yuval Noah Harari',
    category: 'No ficción',
    price: 59000,
    rating: 4.7,
    isAvailable: true,
    createdAt: '2025-03-10',
    publicationYear: 2011,
    condition: 'Bueno',
  },
  {
    id: 8,
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    category: 'Fantasía',
    price: 52000,
    rating: 4.8,
    isAvailable: true,
    createdAt: '2025-02-28',
    publicationYear: 2007,
    condition: 'Como nuevo',
  },
];

// Categorías con etiquetas (adaptadas a géneros literarios)
// TODO: Puedes agregar más géneros según necesites
export const categories = [
  { value: 'all', label: 'Todas las categorías' },
  { value: 'Realismo mágico', label: 'Realismo mágico' },
  { value: 'Distopía', label: 'Distopía' },
  { value: 'Infantil', label: 'Infantil' },
  { value: 'Autoayuda', label: 'Autoayuda' },
  { value: 'Ciencia ficción', label: 'Ciencia ficción' },
  { value: 'Clásicos', label: 'Clásicos' },
  { value: 'No ficción', label: 'No ficción' },
  { value: 'Fantasía', label: 'Fantasía' },
];

// Opciones de ordenamiento (adaptadas a propiedades de libros)
export const sortOptions = [
  { value: 'title-asc', label: 'Título (A-Z)' },
  { value: 'title-desc', label: 'Título (Z-A)' },
  { value: 'price-asc', label: 'Precio (menor a mayor)' },
  { value: 'price-desc', label: 'Precio (mayor a menor)' },
  { value: 'rating', label: 'Mejor valorados' },
  { value: 'newest', label: 'Más recientes primero' },
];