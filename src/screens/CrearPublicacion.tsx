import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CrearPublicacion() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState({
    nombre: '',
    ubicacion: '',
    modo: '',
    categoria: '',
    descripcion: '',
  });

  useEffect(() => {
    setPerfil({
      nombre: localStorage.getItem('nombre') || '',
      ubicacion: localStorage.getItem('ubicacion') || '',
      modo: localStorage.getItem('modo') || '',
      categoria: localStorage.getItem('categoria') || '',
      descripcion: localStorage.getItem('descripcion') || '',
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-6 text-left">
        <h1 className="text-2xl font-bold text-primary">Tu publicación está casi lista ✅</h1>
        <p className="text-secondary">Así se verá lo que compartiste:</p>

        <div className="bg-background p-4 rounded-md shadow-sm space-y-2">
          <p><strong>👤 Nombre:</strong> {perfil.nombre}</p>
          <p><strong>📍 Ubicación:</strong> {perfil.ubicacion}</p>
          <p><strong>🧭 Modo:</strong> {perfil.modo}</p>
          <p><strong>📚 Categoría:</strong> {perfil.categoria}</p>
          <p><strong>📝 Descripción:</strong> {perfil.descripcion}</p>
        </div>

        <button
          onClick={() => navigate('/cargando')}
          className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Buscar coincidencias
        </button>
      </div>
    </div>
  );
}

export default CrearPublicacion;
