import React from 'react';
import { useNavigate } from 'react-router-dom';

function AsistenteIA() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-6">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712032.png"
          alt="Asistente IA"
          className="w-24 h-24 mx-auto animate-bounce"
        />
        <h1 className="text-2xl font-bold text-primary">Asistente IA por Voz</h1>
        <p className="text-secondary">
          Esta funcionalidad estará disponible muy pronto gracias a una integración con Eleven Labs. 🎤🤖
        </p>
        <p className="text-text">
          Mientras tanto, piensa en qué te gustaría preguntarle:
        </p>
        <ul className="text-left list-disc list-inside text-sm text-secondary space-y-1">
          <li>¿Cómo puedo usar mis TimeCoins?</li>
          <li>¿Con quién puedo conectarme esta semana?</li>
          <li>¿Qué impacto he generado?</li>
        </ul>

        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}

export default AsistenteIA;
