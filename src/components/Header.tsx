import React, { useState } from 'react';
import { Globe2 } from 'lucide-react';
import Hero3D from './Hero3D'; // Modal bileşenini import edin

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal görünürlüğünü kontrol eden state

  const handleDemoRequest = () => {
    setIsModalOpen(true); // Butona tıklandığında modalı aç
  };

  return (
    <>
      <header className="fixed w-full bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => (window.location.href = 'https://megnoc.com')}
            >
              <img
                src="https://megnoc.com/img/logo2.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="ml-3 text-2xl font-bold text-white">MEGNOC</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <p className="text-blue-100 hover:text-white transition-colors">
                İhtiyaçlarınızı yeni nesil yönetim araçları ve yapay zeka
                destekli çözümlerimizle dönüştürün.
              </p>
            </nav>
            <button
              className="bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleDemoRequest} // Butona tıklandığında handleDemoRequest fonksiyonunu çağır
            >
              Demo İsteyin
            </button>
          </div>
        </div>
      </header>

      {/* Hero3D bileşeni burada yalnızca bir kez çağrılmalı */}
      {isModalOpen && (
        <Hero3D isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
