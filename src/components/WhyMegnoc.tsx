import React from 'react';
import { Shield, Cpu, Users, Clock, Code2, LineChart } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-8 h-8 text-blue-300/90" />,
    title: "Güvenilir Altyapı",
    description: "7/24 kesintisiz hizmet ve %99.9 uptime garantisi ile işletmenizin sürekliliğini sağlıyoruz."
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-300/90" />,
    title: "Dijital Dönüşüm Uzmanlığı",
    description: "15+ yıllık sektör deneyimi ile işletmenizi geleceğe hazırlıyoruz."
  },
  {
    icon: <Users className="w-8 h-8 text-violet-300/90" />,
    title: "İhtiyaç Odaklı Çözümler",
    description: "Özel ihtiyaçlarınıza yönelik özelleştirilmiş yazılım çözümleri."
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-300/90" />,
    title: "Hızlı Entegrasyon",
    description: "Mevcut sistemlerinize sorunsuz entegrasyon sağlıyoruz."
  },
  {
    icon: <Code2 className="w-8 h-8 text-cyan-300/90" />,
    title: "Modern Teknolojiler",
    description: "En son teknolojileri kullanarak geliştirdiğimiz çözümlerle rekabet avantajı sağlıyoruz."
  },
  {
    icon: <LineChart className="w-8 h-8 text-sky-300/90" />,
    title: "Ölçeklenebilir Sistemler",
    description: "İşletmenizin büyümesine paralel olarak ölçeklenebilen esnek altyapı çözümleri."
  }
];

export default function WhyMegnoc() {
  return (
    <section className="section-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Neden MEGNOC?
          </h2>
          <p className="text-xl text-blue-200/90">
            Dijital dönüşüm yolculuğunuzda yanınızdayız
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-8"
            >
              <div className="icon-gradient mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gradient mb-4">
                {reason.title}
              </h3>
              <p className="text-blue-200/80">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-transition" />
    </section>
  );
}