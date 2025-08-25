import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Target, Award, Phone, Mail, MapPin, ArrowRight, CheckCircle, Briefcase } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Basit iyileştirme */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-slate-800">
                  Homi<span className="text-blue-600">num</span>
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Ana Sayfa' },
                  { id: 'about', label: 'Hakkımızda' },
                  { id: 'services', label: 'Hizmetlerimiz' },
                  { id: 'contact', label: 'İletişim' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Ana Sayfa' },
                { id: 'about', label: 'Hakkımızda' },
                { id: 'services', label: 'Hizmetlerimiz' },
                { id: 'contact', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
            {/* Hero Section - İyileştirildi */}
      <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-start">
              Terzi İşi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                İnsan Kaynakları
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed text-start">
              Büyümeyi destekleyen, kültürü geliştiren ve organizasyonunuzun tüm potansiyelini ortaya çıkaran 
              <span className="text-blue-300 font-medium"> stratejik dijital insan kaynakları çözümleri.</span>
            </p>
            
          
           
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-blue-900/25"
              >
                <Briefcase className="mr-2" size={20} />
                Hemen Başlayın
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300 backdrop-blur-sm"
              >
                Hizmetlerimizi Keşfedin
              </button>
            </div>
          </div>
        </div>
      </section>
            {/* About Section - Geliştirildi */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
              Hominum <span className="text-blue-600">Hakkında</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Büyük organizasyonların güçlendirilmiş insanlar tarafından inşa edildiğine inanıyoruz. 
              Misyonumuz, insan potansiyeli ile organizasyonel başarı arasındaki köprüyü kurmaktır.
            </p>
            
            {/* Additional HR Motto - Daha güzel tasarım */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 max-w-2xl mx-auto border border-blue-100">
              <p className="text-lg font-semibold text-slate-700 italic">
                "İnsana yatırım, geleceğe yatırımdır. Çünkü her başarılı organizasyonun kalbinde, değerli insanlar vardır."
              </p>
              <p className="text-sm text-blue-600 mt-2 font-medium">- Hominum Felsefesi</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "İnsan Odaklı Yaklaşım",
                description: "Her çözüm, insanlarınızı ve onların benzersiz ihtiyaçlarını anlamakla başlar, yankı uyandıran ve sonuç getiren stratejiler yaratır.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Stratejik Mükemmellik",
                description: "İK stratejilerini iş hedefleriyle uyumlu hale getiriyor, insan girişimlerinin ölçülebilir organizasyonel büyüme sağlamasını garanti ediyoruz.",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: Award,
                title: "Kanıtlanmış Sonuçlar",
                description: "Sicilimiz kendisi için konuşuyor – gelişmiş katılım, azaltılmış devir oranı ve daha güçlü organizasyonel performans.",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${item.color} text-white rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Services Section - İyileştirildi (devamı) */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
              <span className="text-blue-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizasyonunuzun benzersiz zorluklarına ve fırsatlarına özel kapsamlı İK çözümleri.
            </p>
            
            {/* Service Section Motto */}
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-blue-600 italic">
                "Her hizmetimiz, insanın değerini artırmak ve organizasyonel başarıyı desteklemek için tasarlanmıştır."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Yetenek Kazanımı",
                description: "Organizasyonel kültürünüz ve hedeflerinizle uyumlu en iyi yetenekleri çeken ve güvence altına alan stratejik işe alım ve seçim süreçleri."
              },
              {
                title: "Performans Yönetimi",
                description: "Tüm seviyelerde hesap verebilirlik, gelişim ve sürekli iyileştirmeyi destekleyen performans sistemleri tasarlama ve uygulama."
              },
              {
                title: "Kapsamlı Dijital Çözüm",
                description: "İnsan kaynakları süreçlerini dijitalleştirerek hem zaman, hem de maliyetten kazanç sağlayın"
              },
              {
                title: "Çalışan Katılımı",
                description: "Anlamlı katılım girişimleri aracılığıyla en iyi insanlarınızı ilhama, motive etmeye ve elde tutmaya yönelik işyeri kültürleri yaratma."
              },
              {
                title: "İK Uyumluluğu",
                description: "Kapsamlı uyumluluk stratejileri ve sürekli destek aracılığıyla karmaşık istihdam düzenlemelerinde güvenle ilerleme."
              },
              {
                title: "Organizasyonel Tasarım",
                description: "Verimlilik, iletişim ve genel etkinliği artırmak için organizasyonel yapınızı ve süreçlerinizi optimize etme."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-green-500 mt-1 mr-3 group-hover:text-green-600 transition-colors duration-200" size={20} />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Contact Section - İyileştirildi */}
     <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Tek kolon: mobilde ortalı, lg'de sola hizalı ve daraltılmış satır uzunluğu */}
    <div className="max-w-2xl lg:max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
        Organizasyonunuzu
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
          Dönüştürmeye Hazır mısınız?
        </span>
      </h2>

      <p className="text-xl text-slate-200 mb-8 leading-relaxed">
        Hominum'un ekibinizin potansiyelini nasıl açığa çıkarabileceğini ve sürdürülebilir büyümeyi nasıl destekleyebileceğini konuşalım.
      </p>

      {/* Motto kutusu: tam genişlik, hafif vurgulu */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-8 border border-white/15 shadow-sm">
        <p className="text-slate-200 italic font-medium">
          "Başarılı bir gelecek, doğru ortaklıkla başlar. Birlikte, insanlarınızın potansiyelini maksimuma çıkaralım."
        </p>
      </div>

      {/* İletişim satırları: dikey */}
      <div className="space-y-4">
       
        <div className="flex items-center text-slate-200">
          <Mail className="mr-4 text-blue-300" size={20} />
          <a href="mailto:info@hominum.info" className="text-lg">info@hominum.info</a>
        </div>
        
      </div>

      {/* İsteğe bağlı CTA */}
     
    </div>
  </div>
</section>

            {/* Footer - İyileştirildi */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-2">
              Homi<span className="text-blue-400">num</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 font-medium">İnsanı Güçlendiriyoruz, Organizasyonları Dönüştürüyoruz</p>
            
           
           
            
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-500">
                © 2025 Hominum İnsan Kaynakları. Tüm hakları saklıdır.
              </p>
              <div className="flex justify-center space-x-6 mt-4 text-sm">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Gizlilik Politikası</a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Hizmet Şartları</a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Çerez Politikası</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;