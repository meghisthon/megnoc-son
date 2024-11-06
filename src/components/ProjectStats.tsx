import React from 'react';
import { Lightbulb, Code2, CheckCircle, Settings, Rocket, MessageSquare } from 'lucide-react';

const processSteps = [
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-300/90" />,
    title: "Analiz ve Planlama",
    description: "İhtiyaçlarınızı detaylı analiz eder, en uygun çözümü planlarız"
  },
  {
    icon: <Code2 className="w-12 h-12 text-indigo-300/90" />,
    title: "Geliştirme",
    description: "Modern teknolojilerle özel yazılım çözümünüzü geliştiririz"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-violet-300/90" />,
    title: "Test ve Kalite",
    description: "Kapsamlı testlerle yazılımın kalitesini garanti ederiz"
  },
  {
    icon: <Settings className="w-12 h-12 text-purple-300/90" />,
    title: "Entegrasyon",
    description: "Yazılımı mevcut sistemlerinizle sorunsuz entegre ederiz"
  },
  {
    icon: <Rocket className="w-12 h-12 text-cyan-300/90" />,
    title: "Devreye Alma",
    description: "Sistemi canlıya alır ve kullanıma hazır hale getiririz"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-sky-300/90" />,
    title: "Sürekli Destek",
    description: "7/24 teknik destek ve bakım hizmeti sağlarız"
  }
];

export default function ProjectStats() {
  return (
    <section className="section-blue py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-xl text-blue-200/90">
            Projelerinizi hayata geçirirken izlediğimiz süreç
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="icon-gradient mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gradient mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-transition" />
    </section>
  );
}