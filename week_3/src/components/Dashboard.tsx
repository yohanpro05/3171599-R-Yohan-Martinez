import React from 'react';
import './Dashboard.css';
import { BookList } from './BookList';
import { StatsCard } from './StatsCard';
import { RealTimeIndicator } from './RealTimeIndicator';

// ============================================
// COMPONENTE: Dashboard (Principal)
// Contenedor principal que integra todos los componentes
// ============================================

// NOTA PARA EL APRENDIZ:
// Este componente debe:
// 1. Renderizar los 3 componentes principales
// 2. Crear un layout responsivo
// 3. Personalizar título según tu dominio
// 4. (Opcional) Agregar navegación o controles globales

// QUÉ: Es el componente contenedor (Layout) principal que orquestra la estructura de la aplicación.
// PARA: Organizar los componentes de estadísticas, indicadores en tiempo real y la lista de inventario en una cuadrícula (grid) responsiva.
// IMPACTO: Proporciona una experiencia de usuario (UX) centralizada, permitiendo que el dueño de la tienda vea la salud de su negocio de un solo vistazo.
export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Header personalizado según tu dominio */}
      <header className="dashboard-header">
        <h1>Dashboard - Tienda de Libros Usados</h1>
        <button onClick={() => window.location.reload()}>
    Refrescar todo
  </button>
      </header>

      {/* Layout principal con componentes */}
      <main className="dashboard-main">
        {/* Sección de datos en tiempo real (arriba para destacar) */}
        <section className="dashboard-section realtime-section">
          <RealTimeIndicator />
        </section>

        {/* Sección de estadísticas */}
        <section className="dashboard-section stats-section">
          <StatsCard />
        </section>

        {/* Sección de lista principal */}
        <section className="dashboard-section list-section">
          <BookList />
        </section>
      </main>

      {/* Footer opcional */}
      <footer className="dashboard-footer">
        <p>Dashboard Week 03 - Tienda de Libros Usados © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

// ============================================
// ESTILOS SUGERIDOS
// ============================================

// .dashboard {
//   min-height: 100vh;
//   background: #f0f2f5;
// }
//
// .dashboard-header {
//   background: white;
//   padding: 20px 40px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
//
// .dashboard-header h1 {
//   margin: 0;
//   color: #2c3e50;
// }
//
// .dashboard-main {
//   padding: 24px;
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   gap: 24px;
//   max-width: 1400px;
//   margin: 0 auto;
// }
//
// .dashboard-section {
//   background: white;
//   border-radius: 8px;
//   padding: 20px;
// }
//
// /* Layout responsivo */
// @media (min-width: 1024px) {
//   .dashboard-section:nth-child(1) {
//     grid-column: 1 / 9; /* StatsCard: 8 columnas */
//   }
//
//   .dashboard-section:nth-child(2) {
//     grid-column: 9 / 13; /* RealTimeIndicator: 4 columnas */
//   }
//
//   .dashboard-section.dashboard-list {
//     grid-column: 1 / 13; /* ItemList: 12 columnas (ancho completo) */
//   }
// }
//
// @media (max-width: 1023px) {
//   .dashboard-section {
//     grid-column: 1 / 13; /* Mobile: todas a ancho completo */
//   }
// }
//
// .dashboard-footer {
//   background: #2c3e50;
//   color: white;
//   text-align: center;
//   padding: 20px;
//   margin-top: 40px;
// }
