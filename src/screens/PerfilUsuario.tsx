import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PerfilUsuario() {
  const navigate = useNavigate();
  const [modo, setModo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const storedNombre = localStorage.getItem('nombre');
    if (storedNombre) setNombre(storedNombre);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modo && categoria && descripcion) {
      localStorage.setItem('modo', modo);
      localStorage.setItem('categoria', categoria);
      localStorage.setItem('descripcion', descripcion);
      navigate('/crear-publicacion');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-8 text-left w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-primary">Hola, {nombre} 👋</h1>
        <p className="text-secondary">Cuéntanos un poco más sobre lo que deseas hacer.</p>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">
            ¿Qué deseas hacer? <span className="text-danger">*</span>
          </label>
          <select
            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={modo}
            onChange={(e) => setModo(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Ofrecer algo">Ofrecer algo</option>
            <option value="Buscar algo">Buscar algo</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">
            ¿En qué categoría? <span className="text-danger">*</span>
          </label>
          <select
            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Educación">Educación</option>
            <option value="Arte y Cultura">Arte y Cultura</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Cuidado Personal">Cuidado Personal</option>
            <option value="Hogar">Hogar</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">
            Descripción breve <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Ej. Enseñar a programar desde cero"
            className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Publicar mi oferta/necesidad
        </button>
      </form>
    </div>
  );
}

export default PerfilUsuario;
