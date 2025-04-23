 import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CargandoIA() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/recomendaciones');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/201/201614.png"
        alt="IA Icon"
        className="w-24 h-24 mb-6 animate-pulse"
      />
      <h1 className="text-xl font-bold text-primary mb-2">Buscando coincidencias...</h1>
      <p className="text-secondary">Estamos analizando tu perfil con nuestra IA ✨</p>
    </div>
  );
}

export default CargandoIA;
