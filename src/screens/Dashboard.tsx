import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState({
    nombre: '',
    ubicacion: '',
    categoria: '',
    timecoins: 1
  });

  useEffect(() => {
    setPerfil({
      nombre: localStorage.getItem('nombre') || '',
      ubicacion: localStorage.getItem('ubicacion') || '',
      categoria: localStorage.getItem('categoria') || '',
      timecoins: 1 // Simulado
    });
  }, []);

  const resetearTodo = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-6">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-6 text-left">
        <h1 className="text-2xl font-bold text-primary">Mi Espacio</h1>
        <p className="text-secondary">Aquí verás tu progreso y tu impacto.</p>

        <div className="bg-background p-4 rounded-md shadow-sm space-y-2">
          <p><strong>👤 Nombre:</strong> {perfil.nombre}</p>
          <p><strong>📍 Ubicación:</strong> {perfil.ubicacion}</p>
          <p><strong>🧭 Categoría:</strong> {perfil.categoria}</p>
          <p><strong>💰 TimeCoins acumulados:</strong> {perfil.timecoins}</p>
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={() => navigate('/impacto')}
            className="w-full bg-accent text-white py-3 rounded-md font-semibold hover:bg-emerald-600 transition duration-300"
          >
            Ver mi impacto
          </button>
          <button
            onClick={() => navigate('/asistente')}
            className="w-full border border-primary text-primary py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition duration-300"
          >
            Hablar con el Asistente IA
          </button>
          <button
            onClick={resetearTodo}
            className="w-full text-red-600 underline hover:text-red-800 transition pt-2"
          >
            Empezar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
