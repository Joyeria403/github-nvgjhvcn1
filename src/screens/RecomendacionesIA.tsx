import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecomendacionesIA() {
  const navigate = useNavigate();
  const [descripcion, setDescripcion] = useState('');
  const [perfilIA, setPerfilIA] = useState<any[]>([]);

  useEffect(() => {
    const desc = (localStorage.getItem('descripcion') || '').toLowerCase();
    setDescripcion(desc);

    const perfiles = [
      {
        nombre: 'Andrea (Barcelona)',
        descripcion: 'Diseña experiencias artísticas inclusivas en comunidades vulnerables',
        imagen: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
        keywords: ['arte', 'inclusivo', 'creativo', 'cultura']
      },
      {
        nombre: 'Luis (Valencia)',
        descripcion: 'Ofrece clases de inglés para jóvenes que quieren desarrollarse profesionalmente',
        imagen: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
        keywords: ['inglés', 'idioma', 'educación', 'enseñar']
      },
      {
        nombre: 'Carla (Madrid)',
        descripcion: 'Comparte recetas saludables y hábitos de bienestar integral',
        imagen: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
        keywords: ['recetas', 'cocina', 'nutrición', 'salud']
      },
      {
        nombre: 'Álvaro (Bilbao)',
        descripcion: 'Desarrolla soluciones con inteligencia artificial aplicada a lo social',
        imagen: 'https://cdn-icons-png.flaticon.com/512/236/236832.png',
        keywords: ['ia', 'inteligencia artificial', 'tecnología', 'machine learning']
      },
      {
        nombre: 'Marta (Sevilla)',
        descripcion: 'Mentora en desarrollo web y programación orientada a impacto social',
        imagen: 'https://cdn-icons-png.flaticon.com/512/168/168882.png',
        keywords: ['programación', 'frontend', 'web', 'tecnología']
      },
      {
        nombre: 'Jorge (CDMX)',
        descripcion: 'Explora modelos sostenibles de arquitectura comunitaria y diseño ecológico',
        imagen: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
        keywords: ['sostenible', 'arquitectura', 'comunidad', 'medioambiente']
      }
    ];

    const matchDirecto = perfiles.filter(p =>
      p.keywords.some(k => desc.includes(k))
    );

    const matchGeneral = perfiles.find(p =>
      ['educación', 'salud', 'tecnología', 'comunidad'].some(k =>
        desc.includes(k)
      )
    );

    if (matchDirecto.length > 0) {
      setPerfilIA(matchDirecto.slice(0, 2));
    } else if (matchGeneral) {
      setPerfilIA([matchGeneral]);
    } else {
      const perfilGenerado = {
        nombre: 'Conexión personalizada',
        descripcion: `Creamos esta coincidencia a partir de lo que escribiste: “${desc}”. Estamos explorando nuevas oportunidades con personas afines.`,
        imagen: 'https://cdn-icons-png.flaticon.com/512/4712/4712032.png'
      };
      setPerfilIA([perfilGenerado]);
    }
  }, []);

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-2xl mx-auto space-y-10">
        <h1 className="text-2xl font-bold text-primary text-center">Conexiones sugeridas por IA 🤖</h1>
        <p className="text-secondary text-center">
          Encontramos personas con intereses que encajan contigo.
        </p>

        {perfilIA.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 transition-transform transform hover:scale-[1.02] hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 blur-sm"></span>

            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-16 h-16 rounded-full z-10"
            />
            <div className="flex-1 z-10">
              <h2 className="text-lg font-semibold text-text">{item.nombre}</h2>
              <p className="text-secondary">{item.descripcion}</p>
            </div>
            <button
              onClick={() => {
                localStorage.setItem('perfilMatch', JSON.stringify(item));
                navigate('/detalle-match');
              }}
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 z-10"
            >
              Ver más
            </button>
          </div>
        ))}

        <div className="text-center pt-6 space-y-3">
          <button
            onClick={() => navigate('/perfil')}
            className="text-primary underline hover:text-blue-700 transition"
          >
            Cambiar lo que escribí
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-primary hover:underline"
          >
            Omitir y ver dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecomendacionesIA;
