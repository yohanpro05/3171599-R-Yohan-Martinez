# E-commerce de Libros Usados – Proyecto Semanal

**Dominio**  
Plataforma simple para vender libros usados, con anuncios que incluyen título, autor, precio, fotos, estado y disponibilidad.

**Decisiones clave**  
- TypeScript para tipado fuerte  
- UUID (`crypto.randomUUID()`) para IDs únicos y seguros  
- Entidades: `Book` (principal) + `Author` (relacionada)  
- Tipos restringidos: `Condition` y `ListingStatus`  
- Simulación en memoria (array)  
- Funciones básicas: crear, listar y filtrar por disponibilidad  

**Ejecución**  
```bash
pnpm install
pnpm start