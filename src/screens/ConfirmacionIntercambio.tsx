import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmacionIntercambio() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState<string | null>(null);

  useEffect(() => {
    const match = localStorage.getItem('perfilMatch');
    if (match) {
      const parsed = JSON.parse(match);
      setNombre(parsed.nombre);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-6">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
          alt="match success"
          className="mx-auto w-24 h-24"
        />
        <h1 className="text-2xl font-bold text-primary">¡Intercambio realizado! 🎉</h1>
        <p className="text-secondary">
          {nombre
            ? `Has conectado exitosamente con ${nombre} y ganado 1 TimeCoin 🕒`
            : 'Has conectado exitosamente con un candidato seleccionado y ganado 1 TimeCoin 🕒'}
        </p>

        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Ir a mi Dashboard
        </button>
      </div>
    </div>
  );
}

export default ConfirmacionIntercambio;
