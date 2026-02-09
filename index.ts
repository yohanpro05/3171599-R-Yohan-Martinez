// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================

console.log('️ PROYECTO SEMANAL: E-commerce de libros usados\n');

// INSTRUCCIONES:
// Adapta este archivo a tu dominio asignado (ej: biblioteca, farmacia, gimnasio, restaurante, etc.)
// Implementa las entidades, tipos y funciones siguiendo los TODOs y comentarios.
// Usa interfaces, types, type unions y literales. Comenta el código con qué/para/impacto.

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// TODO: Define una interface para la entidad principal (ej: Book, Medicine, Member, Dish)

// QUÉ: Define la estructura principal de un libro usado en venta
// PARA: Representar cada anuncio de libro con toda la información esencial para compradores y vendedores
// IMPACTO: Permite un manejo consistente de los datos, facilita validaciones y mejora la experiencia de búsqueda/compra en la plataforma
interface Book {
  id: string;               
  title: string;           
  author: string;           
  isbn?: string;            
  year?: number;            
  price: number;            
  currency?: string;        
  description?: string;     
  images: string[];         
  available: boolean;       
  sellerId: string;         
  createdAt: Date;          
  updatedAt?: Date; 
}

// TODO: Define al menos otra interface relacionada (ej: Author, Sale, Routine, Table)

// QUÉ: Define la entidad de autor como apoyo a los libros
// PARA: Permitir en el futuro mostrar biografías, filtrar por autor o enriquecer la información de cada libro
// IMPACTO: Mejora la calidad de la información y prepara la plataforma para funcionalidades avanzadas como páginas de autor o recomendaciones
interface Author {
id: string;               
  fullName: string;                   
  birthYear?: number;       
  deathYear?: number;       
  nationality?: string;     
  biography?: string;       
  createdAt: Date;
}

// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

// TODO: Define un type union para un estado, categoría o rol relevante

// QUÉ: Define los posibles estados de conservación del libro (usado)
// PARA: Limitar los valores válidos y evitar errores de tipeo o datos inconsistentes
// IMPACTO: Aumenta la confiabilidad de los anuncios y ayuda a los compradores a filtrar libros según su estado real
type Condition = 'Like new' | 'Very good' | 'Good' | 'Acceptable' | 'Bad';

// TODO: Usa un type literal para limitar valores permitidos
// QUÉ: Define los estados posibles del anuncio en la plataforma
// PARA: Controlar el ciclo de vida del listado (visible, vendido, pausado, etc.)
// IMPACTO: Permite ocultar/vender libros automáticamente, mejorar la moderación y mostrar solo contenido relevante a los usuarios
type ListingStatus =  'Active' | 'Sold' | 'Reserved'| 'Inactive' | 'Draft'

// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

// TODO: Implementa una función que cree una entidad

// QUÉ: Crea un nuevo libro en la lista en memoria
// PARA: Simular la acción de un vendedor publicando un anuncio
// IMPACTO: Permite poblar la "base de datos" de forma controlada y tipada durante el desarrollo y pruebas
let books: Book[] = [];
let nextId = 0;

function createBook(
  title: string,
  author: string,
  price: number,
  sellerId: string
): Book {
  const book: Book = {
// QUÉ: Crea un nuevo objeto Book con ID único generado por UUID
// PARA: Garantizar que cada libro tenga un identificador único y seguro
// IMPACTO: Evita colisiones de IDs, mejora seguridad y facilita migración a bases de datos distribuida
    id: crypto.randomUUID(),
    title,
    author,
    price,
    sellerId,
    images: [],
    available: true,
    createdAt: new Date(),
    currency: 'COP',
  };
  books.push(book);
  return book;
}

// TODO: Implementa una función que liste entidades

// QUÉ: Devuelve todos los libros registrados
// PARA: Mostrar el catálogo completo (por ejemplo en la página principal)
// IMPACTO: Base para cualquier vista de listado, búsqueda o paginación futura
function listBooks(): Book[] {
  return books;
}

// TODO: Implementa una función que filtre entidades por status/categoría

// QUÉ: Filtra los libros según su disponibilidad
// PARA: Mostrar solo los libros que todavía se pueden comprar
// IMPACTO: Reduce la frustración del usuario al evitar mostrar productos ya vendidos y mejora la tasa de conversión
function filterByAvailable(onlyAvailable: boolean): Book[] {
  return books.filter(b => b.available === onlyAvailable);
}

// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

// TODO: Crea algunos objetos de ejemplo y prueba las funciones
console.log("Creating sample books...");

createBook("Cien años de soledad", "Gabriel García Márquez", 48000, "usr-001");
createBook("1984", "George Orwell", 35000, "usr-002");
createBook("El principito", "Antoine de Saint-Exupéry", 28000, "usr-001");
createBook("Rayuela", "Julio Cortázar", 42000, "usr-003");
// console.log(listEntities(...));
console.log("All the books: ");
console.log(listBooks());
// console.log(filterByStatus(...));
console.log("\nBooks available:");
console.log(filterByAvailable(true));


// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: ...
// PARA: ...
// IMPACTO: ...

console.log('\n🚦 Recuerda: Adapta TODO a tu dominio y comenta tu código.');
