import React from 'react';
import { MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Yazılımlarının kurulum süreci ne kadar sürer?",
    answer:
      'Kurulum süresi, projenin büyüklüğüne bağlı olarak değişiklik göstermektedir. En hızlı şekilde kurulum tamamlanır ve sistemleriniz çalışır duruma gelir.',
  },
  {
    question: 'Teknik destek hizmeti sunuyor musunuz?',
    answer:
      'Evet, teknik destek ekibimiz, oluşabilecek sorunlara karşı her zaman hazır bulunmaktadır.',
  },
  {
    question: 'Mevcut sistemlerle entegrasyon sağlanabiliyor mu?',
    answer:
      'Evet, MEGNOC çözümleri mevcut sistemlerinizle tam uyumlu çalışacak şekilde entegre edilebilmektedir.',
  },
];

export default function Support() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destek ve İletişim
          </h2>
          <p className="text-xl text-gray-600">
            Size yardımcı olmak için buradayız
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Sık Sorulan Sorular</h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Bize Ulaşın</h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-gray-600">+90 (546) 764 4667</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">E-posta</h4>
                    <p className="text-gray-600">destek@megnoc.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">Hızlı Destek</h4>
                    <a
                      href="https://wa.me/905467644667"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="h-5 w-5 mr-1"
                      />
                      <p className="text-gray-600">WhatsApp</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
