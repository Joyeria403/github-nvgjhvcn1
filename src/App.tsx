import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Registro from './screens/Registro';
import PerfilUsuario from './screens/PerfilUsuario';
import CrearPublicacion from './screens/CrearPublicacion';
import CargandoIA from './screens/CargandoIA';
import RecomendacionesIA from './screens/RecomendacionesIA';
import DetalleUsuarioMatch from './screens/DetalleUsuarioMatch';
import ConfirmacionIntercambio from './screens/ConfirmacionIntercambio';
import Dashboard from './screens/Dashboard';
import SimuladorImpactoSocial from './screens/SimuladorImpactoSocial';
import AsistenteIA from './screens/AsistenteIA';

import NeuralBackground from './components/NeuralBackground';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-text">
      {/* 🔁 Fondo neuronal animado en 3D */}
      <NeuralBackground />

      {/* 🔷 Logo fijo en la esquina superior izquierda */}
      <div className="fixed top-4 left-4 z-20">
        <img
          src="/logo.png"
          alt="TimeCoin Logo"
          className="h-10 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 🌐 Router principal con contenido */}
      <Router>
        <main className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/perfil" element={<PerfilUsuario />} />
              <Route path="/crear-publicacion" element={<CrearPublicacion />} />
              <Route path="/cargando" element={<CargandoIA />} />
              <Route path="/recomendaciones" element={<RecomendacionesIA />} />
              <Route path="/detalle-match" element={<DetalleUsuarioMatch />} />
              <Route path="/confirmacion" element={<ConfirmacionIntercambio />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/impacto" element={<SimuladorImpactoSocial />} />
              <Route path="/asistente" element={<AsistenteIA />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;