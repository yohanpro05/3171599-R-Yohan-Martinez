// ============================================
// FUNCIONES DE API Y DATOS MOCK
// ============================================
// Implementa funciones para obtener datos de tu dominio

import type { Book, Stats, RealTimeData } from '../types';

// ============================================
// CONFIGURACIÓN
// ============================================

// TODO: Configura la URL base de tu API o usa datos mock
//const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Cambiar si usas API real(NO USADO)

// Helper para simular latencia de red (útil con datos mock)
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ============================================
// DATOS MOCK (EJEMPLO)
// ============================================

// TODO: Reemplaza estos datos mock con datos de tu dominio
// Ejemplos por dominio:
// - Biblioteca: MOCK_BOOKS
// - Farmacia: MOCK_MEDICINES
// - Gimnasio: MOCK_MEMBERS
// - Restaurante: MOCK_DISHES

const MOCK_BOOKS: Book[] = [
  {
    id: 1,
     title: 'Cien años de soledad',
  author: 'Gabriel Garcia Marquez',
  isbn: '978-8497592208',
  available: true,
  price: 125000,
  condition: 'Nuevo',
    // TODO: Agregar propiedades específicas
  },
  {
   id: 2,
    title: '1984',
    author: 'George Orwell',
    isbn: '978-8499890951',
    available: true,
    price: 85000,
    condition: 'Como nuevo',
    // TODO: Agregar propiedades específicas
  },
  {
    id: 3,
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    isbn: '978-8498381498',
    available: false,
    price: 45000,
    condition: 'Bueno',
    // TODO: Agregar propiedades específicas
  },
  // TODO: Agregar más items mock (al menos 5-10)
  {
    id: 4,
    title: 'Rayuela',
    author: 'Julio Cortázar',
    isbn: '978-8466357142',
    available: true,
    price: 98000,
    condition: 'Muy bueno',
  },
  {
    id: 5,
    title: 'La casa de los espíritus',
    author: 'Isabel Allende',
    isbn: '978-8466357143',
    available: true,
    price: 110000,
    condition: 'Aceptable',
  },
];


// ============================================
// FUNCIONES DE FETCH
// ============================================

/**
 * Obtiene la lista principal de libros usados en la tienda
 * TODO: Implementar fetch real o retornar datos mock adaptados a tu dominio
 *
 * @param signal - AbortSignal para cancelar la petición
 * @returns Promise con array de Book
 *
 * Ejemplos por dominio:
 * - fetchBooks: retorna libros de la biblioteca
 * - fetchMedicines: retorna medicamentos de la farmacia
 * - fetchMembers: retorna miembros del gimnasio
 * - fetchDishes: retorna platillos del restaurante
 */
export const fetchBooks = async (): Promise<Book[]> => {
  // TODO: Implementar fetch real o usar mock data

  // Opción 1: Usar API real
  // const response = await fetch(`${API_BASE_URL}/items`, { signal });
  // if (!response.ok) throw new Error('Error fetching items');
  // return response.json();

  // Opción 2: Datos mock con delay simulado
  await delay(1000); // Simula latencia de red
  return MOCK_BOOKS;

  // Opción 3: Usar JSONPlaceholder como API de prueba
  // const response = await fetch(`${API_BASE_URL}/posts`, { signal });
  // const posts = await response.json();
  // return posts.slice(0, 10).map(post => ({
  //   id: post.id,
  //   name: post.title,
  //   description: post.body,
  // }));
};

/**
 * Obtiene las estadísticas del dashboard
 * TODO: Implementar lógica para calcular/obtener stats de tu dominio
 * Calcula todo a partir de los libros mockeados
 * @returns Promise con objeto Stats
 *
 * Ejemplos por dominio:
 * - Biblioteca: totalBooks, borrowedToday, availablePercentage
 * - Farmacia: totalProducts, salesCount, lowStockPercentage
 * - Gimnasio: totalMembers, todayAttendance, occupancyPercentage
 */
export const fetchStats = async (): Promise<Stats> => {
  // TODO: Implementar fetch o cálculo de estadísticas

  await delay(800);

  const totalBooks = MOCK_BOOKS.length;
  const availableBooks = MOCK_BOOKS.filter(b => b.available).length;
  const pricesAvailable = MOCK_BOOKS.filter(b => b.available).map(b => b.price);
  const averagePrice = pricesAvailable.length > 0
    ? Math.round(pricesAvailable.reduce((sum, p) => sum + p, 0) / pricesAvailable.length)
    : 0;
    // TODO: Agregar más métricas específicas
    return {
    totalBooks,
    availableBooks,
    averagePrice,
  };
};

/**
 * Obtiene datos en tiempo real (ej: libros disponibles ahora)
 * TODO: Implementar fetch de dato que cambia frecuentemente
 * Simula cambios (como si alguien comprara/vendiera)
 * @returns Promise con RealTimeData
 *
 * Ejemplos por dominio:
 * - Biblioteca: roomOccupancy (cuántas personas en salas de lectura)
 * - Farmacia: pendingOrders (pedidos sin procesar)
 * - Gimnasio: currentOccupancy (personas actualmente en el gimnasio)
 * - Restaurante: occupiedTables (mesas ocupadas ahora)
 */
export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  // TODO: Implementar fetch de dato en tiempo real

  await delay(500);

  // Simula que a veces se vende un libro (disminuye el número)
  const currentAvailable = MOCK_BOOKS.filter(b => b.available).length;
  const simulatedAvailable = Math.max(0, currentAvailable - Math.floor(Math.random() * 2));

  return {
    value: simulatedAvailable,
    label: 'Libros disponibles ahora',
    unit: 'libros',
    lastUpdated: new Date().toISOString().split('.')[0],
    }
  };


/**
 * Busca libros por título (opcional, para búsqueda/filtrado)
 * TODO: Implementar si tu dashboard incluye búsqueda/filtrado
 *
 * @param query - Término de búsqueda
 * @returns Promise con array filtrado de Books
 */
export const searchItems = async (query: string): Promise<Book[]> => {
  // TODO: Implementar búsqueda

  await delay(600);

  if (!query.trim()) {
    return MOCK_BOOKS;
  }

  // Filtrado simple por tutulo y autor
  return MOCK_BOOKS.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );
};

// ============================================
// EJEMPLO DE USO DE JSONPlaceholder API
// ============================================

/**
 * Ejemplo de cómo adaptar JSONPlaceholder a tu dominio
 * Descomenta y modifica según necesites
 */

// export const fetchItemsFromAPI = async (
//   signal?: AbortSignal,
// ): Promise<Item[]> => {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/users',
//     { signal },
//   );
//
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//
//   const users = await response.json();
//
//   // Transforma datos de API a tu interfaz Item
//   return users.map((user: any) => ({
//     id: user.id,
//     name: user.name,
//     description: user.email,
//     // Agrega más propiedades según tu dominio
//   }));
// };
