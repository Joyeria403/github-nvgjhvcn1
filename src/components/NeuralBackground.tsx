import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const NeuralBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,           // Líneas blancas
        backgroundColor: 0xeaf2f8, // Fondo azul claro elegante
        showDots: false,           // Oculta nodos
        points: 3.0,               // 🔽 Muy pocos nodos
        spacing: 35.0,             // 🔁 Muy separados
        maxDistance: 40.0,         // 🔗 Solo líneas cortas, sin saturar
        animationDuration: 20000,  // ⏱️ Controla velocidad de animación general (más rápido)
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
};

export default NeuralBackground;