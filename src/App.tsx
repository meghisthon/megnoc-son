import React, { useRef } from 'react';
import { Network, Users, BarChart3, Truck, Car, ClipboardList } from 'lucide-react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import WhyMegnoc from './components/WhyMegnoc';
import ProjectStats from './components/ProjectStats';
import Support from './components/Support';
import References from './components/References';
import SolutionPartners from './components/SolutionPartners';

const features = [
  {
    icon: <Network className="w-12 h-12 text-blue-500" />,
    title: 'OTOPON',
    description:
      'Huawei marka OLT cihazlarını yönetmek için geliştirilmiş kapsamlı bir yazılımdır. Bu yazılım sayesinde, ONT cihazlarını yönetebilir, takibini yapabilir ve çeşitli işlemler gerçekleştirebilirsiniz. OTOPON, ağ yönetimini kolaylaştırarak kullanıcıların verimliliğini artırmayı hedefler.',
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: 'RATINGS',
    description:
      'Müşterilere anket SMS göndererek geri bildirim toplar ve istatistikler oluşturur. Yazılım, danışma kasa, kargo ve cihaz iade işlemleri gibi işlemleri yönetmenin yanı sıra, arıza takip sistemi ve duyuru sistemi gibi ek özellikler de sunar. Müşteri memnuniyetini artırmaya yönelik kapsamlı bir çözüm sağlar.',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
    title: 'ONLINE TAKİP',
    description:
      'İnternet servis sağlayıcıları (ISS) için anlık olarak kaç abonenin internete eriştiğini izleme ve rekor takibi yapma imkanı sunar. Gerçek zamanlı verileri işleyerek canlı gösterim sağlar ve bu bilgileri grafiklerle görselleştirir. Böylece, ağ performansını etkili bir şekilde takip edebilir ve anlık durumu kolayca analiz edebilirsiniz.',
  },
  {
    icon: <Car className="w-12 h-12 text-blue-500" />,
    title: 'OTO SERVİS',
    description:
      'Servise gelen araçların takibini kolaylaştırır. Alacak ve verecek işlemlerinin yönetimini sağlar. Servis formu çıktısı sunarak işletmenizin verimliliğini artırır. Tüm bu özellikler, araç yönetimini daha sistematik ve etkili bir hale getirir.',
  },
  {
    icon: <Truck className="w-12 h-12 text-blue-500" />,
    title: 'LOJİSTİK TAKİP',
    description:
      'lojistik süreçlerinizi etkili bir şekilde izlemek ve yönetmek için tasarlanmış kapsamlı bir yazılımdır. İthalat ve ihracat işlemlerini takip etmenize, hak edişleri yönetmenize ve projeleri paylaşmanıza olanak tanır. Alacak ve verecek işlemlerini sistematik bir şekilde takip eder. Uyumsoft ile entegrasyonu mevcuttur. E-arşiv faturalarınızı da kolayca yönetebilirsiniz.',
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-500" />,
    title: 'DENEBUNU PANEL',
    description:
      'Denebunu üzerinden toplanan müşteri geri bildirimlerini panelde görüntülemenize ve analiz etmenize olanak tanır. Panel üzerinden, müşteri yorumlarını e-ticaret sitenize gönderip yayınlayabilir, böylece müşteri deneyimlerini iyileştirmeye yönelik önemli geri bildirimleri etkili bir şekilde yönetebilirsiniz. Kullanıcı dostu arayüzü sayesinde, yorumları kolayca inceleyebilirsiniz.',
  },
];

const SolutionsSection = React.forwardRef((props, ref) => (
  <section ref={ref} className="py-24 bg-gradient-to-b from-blue-900 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Çözümlerimiz
        </h2>
        <p className="text-xl text-blue-100">
          İşletmeniz için özel olarak tasarlanmış yazılım çözümleri
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm"
          >
            <div className="flex justify-center mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

function App() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero3D onButtonClick={scrollToSection} />
      <SolutionPartners />
      <SolutionsSection ref={sectionRef} />
      <WhyMegnoc />
      <References />
      <ProjectStats />
      <Support />
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <img
                src="https://megnoc.com/img/logo2.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="ml-3 text-2xl font-bold text-white">MEGNOC</span>
            </div>
            <p>© 2022 MEGNOC. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;