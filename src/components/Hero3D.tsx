import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Hero3DProps {
  onButtonClick: () => void; // Prop tanımı
  onClose: () => void; // Modal kapatma fonksiyonu
  isOpen: boolean; // Modal açık mı kontrolü
}

const Hero3D: React.FC<Hero3DProps> = ({ onButtonClick, onClose, isOpen }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !titleRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      heroRef.current.style.setProperty('--x-offset', `${xPos * 20}px`);
      heroRef.current.style.setProperty('--y-offset', `${yPos * 20}px`);

      titleRef.current.style.transform = `
        translate(${xPos * 10}px, ${yPos * 10}px)
        rotateX(${yPos * 5}deg)
        rotateY(${xPos * 5}deg)
      `;
    };

    const throttledMouseMove = throttle(handleMouseMove, 100); // Throttle uygulandı
    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-circuit-pattern animate-circuit"></div>
        <div className="absolute inset-0 bg-gradient-radial-dots animate-pulse-slow"></div>
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-cube"
            style={
              {
                '--delay': `${i * 0.5}s`,
                '--x-pos': `${Math.random() * 100}%`,
                '--y-pos': `${Math.random() * 100}%`,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center perspective-1000">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold text-white mb-8 transition-transform duration-300 ease-out text-glow"
            >
              Şirketinizdeki Dijital Dönüşümü
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                MEGNOC
              </span>
              ile Yaşayın
            </h1>
            <p className="text-xl text-blue-100 mb-12 animate-fade-in block md:hidden">
              İhtiyaçlarınızı yeni nesil yönetim araçları ve yapay zeka destekli
              çözümlerle dönüştürün.
            </p>

            <div className="flex justify-center gap-6">
              <button className="btn btn-primary group" onClick={onButtonClick}>
                Çözümlerimizi Keşfedin
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="btn btn-secondary-light group d-flex align-items-center"
                onClick={() =>
                  window.open('https://wa.me/905467644667', '_blank')
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  style={{ width: '25px', height: '25px', marginRight: '5px' }}
                />
                Bize Yazın
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Kapat"
              onClick={onClose}
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Demo Talebi
            </h2>

            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={40} // Karakter sınırı 40
                  autoComplete="off" // Otomatik öneriyi engelle
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                  placeholder="Adınız ve Soyadınız"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phone"
                >
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  maxLength={15} // Karakter sınırı 15
                  autoComplete="off" // Otomatik öneriyi engelle
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                  placeholder="Telefon Numaranız"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

// Throttle function
function throttle(func: Function, limit: number) {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (...args: any[]) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export default Hero3D;
