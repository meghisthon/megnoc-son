import React, { useState } from 'react';

const references = [
  {
    logo: "https://megnoc.com/img/atlantis.png",
    isDark: false
  },
  {
    logo: "https://megnoc.com/img/finet.png",
    isDark: true
  },
  {
    logo: "https://megnoc.com/img/veganet.jpeg",
    isDark: false
  },
  {
    logo: "https://megnoc.com/img/efsane.png",
    isDark: true
  },
  {
    logo: "https://megnoc.com/img/level.jpeg",
    isDark: false
  },
  {
    logo: "https://megnoc.com/img/linyit.png",
    isDark: true
  },
    {
    logo: "https://megnoc.com/img/pastel.png",
    isDark: false
  },

  {
    logo: "https://megnoc.com/img/nokta.png",
    isDark: true
  },


  {
    logo: "https://megnoc.com/img/mercan.png",
    isDark: true
  },

  
  {
    logo: "https://megnoc.com/img/adresoto.png",
    isDark: false
  }
];

export default function References() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Referanslarımız
          </h2>
          <p className="text-xl text-gray-600">
            Türkiye'nin önde gelen şirketleri MEGNOC'u tercih ediyor
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {references.map((reference, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-100 to-white 
                       p-6 rounded-xl shadow-lg hover:shadow-xl 
                       transition-all duration-500 border border-gray-100
                       hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`aspect-video mb-4 overflow-hidden rounded-lg 
                            flex items-center justify-center p-4
                            transition-colors duration-500
                            ${reference.isDark ? 
                              'bg-gradient-to-br from-slate-800 to-slate-900' : 
                              'bg-gradient-to-br from-slate-100 to-white'
                            }
                            ${hoveredIndex === index ? 
                              (reference.isDark ? 'from-slate-700 to-slate-800' : 'from-white to-slate-50') : 
                              ''
                            }`}>
                <img
                  src={reference.logo}
                  alt="Referans Logo"
                  className={`w-full h-full object-contain
                             transition-all duration-500
                             ${reference.isDark ? 'brightness-[1.15]' : 'brightness-90'}
                             ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                             ${reference.isDark ? 'hover:brightness-[1.3]' : 'hover:brightness-100'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-transition" />
    </section>
  );
}