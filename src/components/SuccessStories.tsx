import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    position: "Teknik Direktör",
    company: "NetTR ISP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "MEGNOC sayesinde ağ yönetim süreçlerimizi %60 daha verimli hale getirdik. Müşteri memnuniyetimiz son 6 ayda %40 arttı."
  },
  {
    name: "Ayşe Kaya",
    position: "CEO",
    company: "Fiber Net",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Dijital dönüşüm sürecimizde MEGNOC'un sunduğu çözümler sayesinde operasyonel maliyetlerimizi %30 azalttık."
  },
  {
    name: "Mehmet Demir",
    position: "CTO",
    company: "Hızlı Net",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "MEGNOC'un sağladığı analitik araçlar ile müşteri davranışlarını daha iyi analiz ediyor, proaktif çözümler sunabiliyoruz."
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Başarı Hikayeleri</h2>
          <p className="text-xl text-blue-100">
            Müşterilerimizin deneyimleri ve başarı hikayeleri
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-200">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}