import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white rounded-xl shadow-xl p-10 text-center w-full max-w-md space-y-6 relative z-10 animate-fade-in">
        {/* ✅ Nuevo logo en vez del ícono genérico */}
        <img
          src="/logo.png"
          alt="TimeCoin Logo"
          className="w-24 h-24 mx-auto object-contain drop-shadow-sm"
        />
        <h1 className="text-2xl font-bold text-primary">Bienvenido a TimeCoin Connect</h1>
        <p className="text-secondary leading-relaxed">
          Convierte tu tiempo en valor. Conecta con personas que necesitan lo que tú sabes hacer.
        </p>
        <div>
          <button
            onClick={() => navigate('/registro')}
            className="bg-primary text-white font-semibold py-3 px-6 rounded-xl w-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;