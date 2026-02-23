# 📚 Dashboard: Tienda de Libros Usados

Este proyecto consiste en un panel de administración interactivo desarrollado con **React** y **TypeScript**. La aplicación permite gestionar y visualizar el inventario de una librería mediante la sincronización constante de datos.

## 🚀 Funcionalidades

- **Sincronización Automática (Polling):** El stock disponible se actualiza cada 5 segundos sin intervención del usuario.
- **Lista de Inventario Detallada:** Visualización estructurada de libros incluyendo autor, ISBN, precio formateado y estado físico.
- **Panel de Estadísticas:** Resumen dinámico de las métricas clave de la tienda.
- **Manejo de Estados:** Implementación de pantallas de carga y gestión de errores para una mejor experiencia de usuario.

## 🛠️ Stack Tecnológico

- **Frontend:** React 18 con TypeScript.
- **Estilos:** CSS3 enfocado en layouts limpios y legibilidad de texto.
- **Lógica de Efectos:** `useEffect` para fetch de datos y ciclos de vida.
- **Gestión Asíncrona:** Uso de `AbortController` para la cancelación de procesos pendientes.

## 💡 Conceptos Técnicos Implementados

1. **Eficiencia en Peticiones:** Limpieza de efectos secundarios para prevenir fugas de memoria al navegar.
2. **Formateo Regional:** Precios adaptados a la moneda local (`es-CO`) para facilitar la lectura de valores.
3. **Indicadores en Vivo:** Uso de `setInterval` y `clearInterval` para mantener la información siempre fresca.
4. **Renderizado Condicional:** Mensajes personalizados según el estado de la conexión con la API (Loading/Error/Data).

---
**Proyecto de clase - Week 03 - Bootcamp React.**
