import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetalleUsuarioMatch() {
  const navigate = useNavigate();
  const [match, setMatch] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('perfilMatch');
    if (data) {
      setMatch(JSON.parse(data));
    }
  }, []);

  if (!match) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-primary font-semibold">Cargando coincidencia...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-6">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-6 text-left">
        <h1 className="text-2xl font-bold text-primary">Perfil del Usuario</h1>

        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <img
              src={match.imagen}
              alt={match.nombre}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-text">{match.nombre}</h2>
              {match.ubicacion && (
                <p className="text-secondary text-sm">{match.ubicacion}</p>
              )}
            </div>
          </div>

          <p>
            <strong className="text-text">Intercambio:</strong>{' '}
            {match.descripcion}
          </p>

          {match.categoria && (
            <p>
              <strong className="text-text">Categoría:</strong>{' '}
              {match.categoria}
            </p>
          )}
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={() => navigate('/confirmacion')}
            className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Conectar e intercambiar
          </button>

          <button
            onClick={() => navigate('/recomendaciones')}
            className="w-full border border-primary text-primary py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition duration-300"
          >
            Ver otras coincidencias
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleUsuarioMatch;
