import React, { useEffect, useRef } from 'react';
import { Network, Settings, Users, BarChart3, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Network className="w-12 h-12 text-blue-500" />,
    title: "OLT Yönetimi",
    description: "Huawei OLT cihazlarını tek noktadan yönetin"
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-500" />,
    title: "ONT Konfigürasyonu",
    description: "ONT cihazlarını otomatik yapılandırın"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Abone Yönetimi",
    description: "Aboneleri kolayca ekleyin ve yönetin"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
    title: "Performans İzleme",
    description: "Ağ performansını gerçek zamanlı takip edin"
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Güvenlik",
    description: "Gelişmiş güvenlik özellikleriyle ağınızı koruyun"
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    title: "Hızlı Kurulum",
    description: "Dakikalar içinde sisteminizi hazır hale getirin"
  }
];

export default function OtoponFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    let currentScroll = 0;
    let direction = 1;

    const scroll = () => {
      if (!isScrolling || !scrollContainer) return;

      currentScroll += direction;
      if (currentScroll >= maxScroll) {
        direction = -1;
      } else if (currentScroll <= 0) {
        direction = 1;
      }

      scrollContainer.scrollLeft = currentScroll;
      requestAnimationFrame(scroll);
    };

    const startScroll = () => {
      isScrolling = true;
      scroll();
    };

    const stopScroll = () => {
      isScrolling = false;
    };

    scrollContainer.addEventListener('mouseenter', stopScroll);
    scrollContainer.addEventListener('mouseleave', startScroll);
    startScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopScroll);
        scrollContainer.removeEventListener('mouseleave', startScroll);
      }
      isScrolling = false;
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            OTOPON Özellikleri
          </h2>
          <p className="text-xl text-blue-200">
            Huawei OLT cihazları için gelişmiş yönetim çözümü
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-hidden relative"
        >
          <div className="flex gap-8 py-4 animate-scroll">
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}