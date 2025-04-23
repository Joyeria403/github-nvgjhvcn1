import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !ubicacion.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('ubicacion', ubicacion);
    navigate('/perfil');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-primary">Regístrate</h1>
        <p className="text-secondary">
          Queremos conocerte un poco más para conectarte con personas afines.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-text">
              ¿Cómo te llamas? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="ubicacion" className="block text-sm font-medium text-text">
              ¿Dónde te encuentras? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="ubicacion"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              placeholder="Ej. México, CDMX, Narvarte"
              required
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
