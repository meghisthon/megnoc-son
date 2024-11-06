import React, { useRef, useEffect } from 'react';

const partners = [
  {
    logo: "https://megnoc.com/img/is-ortagi-faralya.png",
    name: "Faralya"
  },
  {
    logo: "https://megnoc.com/img/is-ortagi-wiradius.png",
    name: "WiRadius"
  },
  {
    logo: "https://megnoc.com/img/is-ortagi-ispradius-1.png",
    name: "ISP Radius"
  },
  {
    logo: "https://megnoc.com/img/is-ortagi-issmanager.png",
    name: "ISS Manager"
  },
  {
    logo: "https://megnoc.com/img/is-ortagi-isskontrol.png",
    name: "ISS Kontrol"
  }
];

export default function SolutionPartners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number>();
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleAutoScroll = () => {
      if (!isDragging.current && container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(handleAutoScroll);
    };

    autoScrollRef.current = requestAnimationFrame(handleAutoScroll);
    
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    isDragging.current = true;
    scrollContainerRef.current.style.cursor = 'grabbing';
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Çözüm Ortaklarımız
          </h2>
        </div>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-hidden cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-16 py-4 items-center">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-none w-48 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
                onDragStart={(e) => e.preventDefault()}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}