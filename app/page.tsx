"use client";
import { useTranslation } from 'react-i18next';
import { useHydration } from './hooks/useHydration';
import { Heart, Shield, Users, Star, ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import LineAnimation from './components/LineAnimation';

export default function Home() {
  const { t } = useTranslation();
  const hydrated = useHydration();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if features section is in view
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setFeaturesInView(true);
        }
      }

      // Check if stats section is in view
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/img/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center text-white px-6 max-w-5xl mx-auto transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300">
              <Heart className="w-16 h-16 text-amber-300 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent drop-shadow-2xl transform transition-all duration-1200 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {hydrated ? t('home.heroTitle') : '尋找你內心的平靜'}
          </h1>
          <p className={`text-xl md:text-2xl mb-12 text-amber-50 leading-relaxed max-w-3xl mx-auto font-light transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            {hydrated ? t('home.heroSubtitle') : '一個為你靈魂而設的庇護所，在你的健康之旅上提供指導和支持。'}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="group bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/40 relative overflow-hidden">
              <span className="relative z-10">{hydrated ? t('home.ctaButton') : '了解更多'}</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:border-white/80 hover:shadow-lg">
              觀看介紹影片
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
              <ChevronDown className="w-4 h-4 text-white mt-2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-float backdrop-blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-amber-300/30 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-amber-200/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${featuresInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 via-amber-600 to-gray-800 bg-clip-text text-transparent">
              {hydrated ? t('home.whyChooseUs') : '關於我們'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {hydrated ? t('home.whyChooseUsSubtitle') : '我們提供專業、溫暖且安全的環境，讓每個人都能找到屬於自己的平靜'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-amber-500" />,
                title: "用心關懷",
                description: "每一位來訪者都會得到我們最真誠的關懷和專業的指導",
                gradient: "from-red-50 to-pink-50",
                iconBg: "bg-red-50"
              },
              {
                icon: <Shield className="w-12 h-12 text-amber-500" />,
                title: "安全保密",
                description: "嚴格保護您的隱私，提供安全可靠的諮詢環境",
                gradient: "from-blue-50 to-indigo-50",
                iconBg: "bg-blue-50"
              },
              {
                icon: <Users className="w-12 h-12 text-amber-500" />,
                title: "專業團隊",
                description: "由經驗豐富的心理健康專家組成的專業團隊",
                gradient: "from-green-50 to-emerald-50",
                iconBg: "bg-green-50"
              },
              {
                icon: <Star className="w-12 h-12 text-amber-500" />,
                title: "個人化服務",
                description: "根據每個人的需求提供量身定制的解決方案",
                gradient: "from-amber-50 to-yellow-50",
                iconBg: "bg-amber-50"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-amber-100 hover:border-amber-300 cursor-pointer relative overflow-hidden ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`flex justify-center mb-6 p-4 ${feature.iconBg} rounded-full w-20 h-20 mx-auto items-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-amber-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full group-hover:via-amber-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <LineAnimation />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-gray-800 via-amber-600 to-gray-800 bg-clip-text text-transparent transform transition-all duration-1000 ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {hydrated ? t('home.welcomeTitle') : '歡迎來到溫暖的心靈家園'}
            </h2>
            <div className={`w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full transform transition-all duration-1000 delay-200 ${statsInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
            <p className={`text-xl text-gray-600 leading-relaxed mb-12 transform transition-all duration-1000 delay-400 ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              {hydrated ? t('home.welcomeDescription') : '在這裡，每一個故事都被傾聽，每一份情感都被理解。我們相信，每個人都值得擁有內心的平靜與快樂。讓我們陪伴您走過人生的每一個階段，找到屬於您的光明與希望。'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  number: "500+",
                  label: "幫助過的朋友",
                  color: "text-amber-500",
                  bgColor: "bg-amber-50",
                  borderColor: "border-amber-200",
                  hoverBg: "hover:bg-amber-100"
                },
                {
                  number: "5+",
                  label: "年專業經驗",
                  color: "text-green-500",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  hoverBg: "hover:bg-green-100"
                },
                {
                  number: "24/7",
                  label: "全天候支援",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  hoverBg: "hover:bg-blue-100"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group text-center p-8 rounded-2xl ${stat.bgColor} ${stat.hoverBg} border-2 ${stat.borderColor} hover:shadow-xl transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 cursor-pointer ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className={`text-6xl font-bold ${stat.color} mb-4 group-hover:scale-125 transition-all duration-500`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className={`mt-4 h-1 ${stat.color.replace('text-', 'bg-')} rounded-full mx-auto w-16 group-hover:w-24 transition-all duration-500`}></div>
                  <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('500', '100')} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            {hydrated ? t('home.ctaTitle') : '準備好開始您的療癒之旅了嗎？'}
          </h2>
          <div className="w-32 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {hydrated ? t('home.ctaSubtitle') : '不要讓困難獨自承受，讓我們成為您最堅實的後盾'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10">{hydrated ? t('home.bookConsultation') : '立即預約諮詢'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden">
              <span className="relative z-10">{hydrated ? t('home.learnMore') : '了解更多服務'}</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}