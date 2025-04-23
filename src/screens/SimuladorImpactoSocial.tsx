import React from 'react';
import { useNavigate } from 'react-router-dom';

function SimuladorImpactoSocial() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-6">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center space-y-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
          alt="Impacto positivo"
          className="mx-auto w-24 h-24"
        />
        <h1 className="text-2xl font-bold text-primary">Impacto generado 💡</h1>
        <p className="text-secondary">
          Gracias a tu participación, ayudaste a <span className="font-semibold text-primary">3 personas</span> esta semana 🙌
        </p>

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

export default SimuladorImpactoSocial;
