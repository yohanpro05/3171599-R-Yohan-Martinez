import React, { useState, useEffect } from 'react';
import './StatsCards.css'
import type { Stats } from '../types';
import { fetchStats } from '../utils/api';

// ============================================
// COMPONENTE: StatsCard
// Muestra estadísticas clave del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Este componente debe:
// 1. Tener múltiples useEffect para diferentes stats
// 2. Cada stat se carga de forma independiente
// 3. Manejar loading de cada stat individualmente
// 4. Mostrar las métricas de forma clara y visual

// QUÉ: Un panel de métricas agregadas.
// PARA: Calcular y mostrar el total de libros, unidades disponibles y el valor total de ventas del día.
// IMPACTO: Transforma datos crudos en información estratégica para la toma de decisiones, formateando valores monetarios de forma profesional.
export const StatsCard: React.FC = () => {
  // TODO: 1. Definir estados para diferentes stats
  // Puedes tener un estado Stats o estados separados por métrica
  // Ejemplo opción 1 (un solo estado):
  // const [stats, setStats] = useState<Stats | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  //
  // Ejemplo opción 2 (estados separados):
 const [totalBooks, setTotalBooks] = useState<number>(0);
  const [availableBooks, setAvailableBooks] = useState<number>(0);
  const [averagePrice, setAveragePrice] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  // TODO: 2. Implementar useEffect para cargar stats
  useEffect(() => {
    const loadStats = async () => {
      try {
       setLoading(true);
        const data: Stats = await fetchStats();

        setTotalBooks(data.totalBooks);
        setAvailableBooks(data.availableBooks);
        setAveragePrice(data.averagePrice);
      } catch (err) {
        console.error('Error loading stats:', err);
      } finally {
        setLoading(false);
      }
    };
  
    loadStats();
  }, []);

  // TODO: 3. (Avanzado) Implementar múltiples efectos independientes
  // Si tienes 3 stats diferentes, cada uno puede tener su propio useEffect:
  //
  // useEffect(() => {
  //   const loadTotalItems = async () => {
  //     // Fetch stat 1
  //   };
  //   loadTotalItems();
  // }, []);
  //
  // useEffect(() => {
  //   const loadActiveItems = async () => {
  //     // Fetch stat 2
  //   };
  //   loadActiveItems();
  // }, []);
  //
  // useEffect(() => {
  //   const loadPercentage = async () => {
  //     // Fetch stat 3
  //   };
  //   loadPercentage();
  // }, []);

  // TODO: 4. Renderizado condicional para loading
  if (loading) {
    return (
      <div className="stats-card">
        <h2>Cargando estadísticas...</h2>
      </div>
    );
  }

  // TODO: 5. Renderizado principal: mostrar stats
  return (
    <div className="stats-card">
      <h2>Estadísticas de la tienda</h2>
      {/* TODO: Cambiar título según tu dominio */}

      <div className="stats-grid">
        {/* TODO: Stat 1 - Total de libros */}
        <div className="stat">
          <div className="stat-value">{totalBooks}</div>
          <div className="stat-label">Total de libros</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Total de Libros", "Productos", "Miembros" */}
        </div>

        {/* TODO: Stat 2 - Elementos activos/disponibles */}
        <div className="stat">
          <div className="stat-value">{availableBooks}</div>
          <div className="stat-label">Disponibles</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Disponibles", "En Stock", "Activos Hoy" */}
        </div>

        {/* TODO: Stat 3 -Vendidos hoy(simulado) */}
        <div className="stat">
          <div className="stat-value">${averagePrice.toLocaleString('es-CO', {style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,})}
          </div>
          <div className="stat-label">Vendidos hoy</div>
          {/* TODO: Cambiar label según tu dominio */}
          {/* Ejemplos: "Disponibilidad", "Ocupación", "Tasa de Ventas" */}
        </div>

        {/* TODO: (Opcional) Agregar más stats específicos de tu dominio */}
        {/* Ejemplos adicionales:
        - Biblioteca: "Préstamos Hoy", "Salas Disponibles"
        - Farmacia: "Ventas del Día", "Stock Bajo"
        - Gimnasio: "Asistencias Hoy", "Clases Activas"
        - Restaurante: "Pedidos Activos", "Promedio de Calificación"
        */}
      </div>
    </div>
  );
};

// ============================================
// ESTILOS SUGERIDOS
// ============================================

// .stats-card {
//   padding: 20px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.1);
// }
//
// .stats-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 16px;
//   margin-top: 16px;
// }
//
// .stat {
//   text-align: center;
//   padding: 16px;
//   background: #f8f9fa;
//   border-radius: 8px;
// }
//
// .stat-value {
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: #2c3e50;
// }
//
// .stat-label {
//   font-size: 0.9rem;
//   color: #7f8c8d;
//   margin-top: 8px;
//   text-transform: uppercase;
// }
