// ============================================
// TIPOS E INTERFACES    E-commerce de Libros Usados
// ============================================
// Adapta estos tipos a tu dominio asignado

// TODO: Renombrar según tu dominio
// Ejemplos: Book, Medicine, GymClass, Dish, Doctor, Vehicle
export interface Book {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  category: string;
  publicationYear: number;
  price: number;
  condition: 
    | 'Como nuevo' 
    | 'Muy bueno' 
    | 'Bueno' 
    | 'Aceptable' 
    | 'Dañado';
  isAvailable: boolean;
  rating?: number;               // Calificación promedio (0–5) → opcional
  description?: string;          // Breve descripción del estado (ej: "subrayado leve", "sin forro")
  imageUrl?: string;             // URL de la foto del libro (placeholder si no hay)
  createdAt: string;
}
// QUÉ: Definimos todas las categorías literarias principales que vamos a permitir filtrar
// PARA: Poder hacer un select de categorías y filtrar por género literario
// IMPACTO: Facilita al usuario encontrar libros de su interés rápidamente y mejora UX

// Categorías de tu dominio
// TODO: Adaptar las categorías
export type Category = | 'all' 
  | 'Ficción' 
  | 'No ficción' 
  | 'Ciencia ficción' 
  | 'Fantasía' 
  | 'Novela histórica' 
  | 'Autoayuda' 
  | 'Poesía' 
  | 'Infantil' 
  | 'Misterio / Thriller' 
  | 'Biografía' 
  | 'Clásicos';
// Opciones de ordenamiento
// QUÉ: Opciones disponibles en el selector de ordenamiento
// PARA: Permitir que el usuario ordene la lista según sus preferencias
// IMPACTO: Mejora la experiencia al dejar que el usuario vea primero lo más barato, lo más nuevo, etc.

export type SortOption =
  | 'title-asc'          // Título A → Z
  | 'title-desc'         // Título Z → A
  | 'price-asc'          // Más barato primero
  | 'price-desc'         // Más caro primero
  | 'newest'             // Más recientes (por createdAt)
  | 'oldest'             // Más antiguos (por publicationYear)
  | 'rating-desc'       // Mejor calificados primero
  | 'rating';
  
// Estado de los filtros
// QUÉ: Representa TODOS los filtros activos en un solo objeto
// PARA: Poder pasar un solo estado a las funciones de filtrado y ordenamiento
// IMPACTO: Código mucho más limpio y fácil de mantener cuando agreguemos más filtros

export interface FilterState {
  searchTerm: string;            // Texto que el usuario escribió en la barra de búsqueda
  category: Category;            // Categoría seleccionada (o 'all')
  showOnlyAvailable: boolean;    // Checkbox: "¿Mostrar solo disponibles?"
  sortBy: SortOption;            // Criterio de orden seleccionado
  minPrice?: number;             // Precio mínimo (opcional)
  maxPrice?: number;             // Precio máximo (opcional)
}
