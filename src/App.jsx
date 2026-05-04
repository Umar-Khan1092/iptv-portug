import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Tv, 
  Laptop, 
  Monitor, 
  PlayCircle, 
  Settings, 
  Headphones, 
  CreditCard, 
  Globe, 
  Menu, 
  X,
  MessageCircle,
  Plus,
  Minus,
  ChevronRight,
  Flame,
  Film,
  Trophy,
  Star,
  ZapOff,
  Clock,
  Layout,
  HardDrive,
  FileText,
  AlertCircle,
  Lock,
  RefreshCcw,
  Scale,
  Cookie
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

// --- Constants ---
const WHATSAPP_NUMBER = "+44 7988 579524";
const WHATSAPP_URL = "https://wa.me/447988579524?text=Hi%20iptvportugal.pro";

// --- SEO Schema Component ---
const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTVPORTUGAL Premium IPTV Service",
    "description": "Best 4K & 8K IPTV Service with Portuguese Channels. 30,000+ live channels and 120,000+ VOD.",
    "brand": { "@type": "Brand", "name": "IPTVPORTUGAL" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "15",
      "highPrice": "65",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10450"
    }
  };
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

// --- View Components ---

const HeroSection = ({ setActiveTab }) => {
  const { t } = useTranslation();
  return (
    <section className="pt-40 pb-12 px-6 min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white border border-white/10 mb-10 shadow-xl">
            <Flame size={16} className="text-orange-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl lg:text-[5.5rem] font-black mb-8 leading-[1] text-white tracking-tight uppercase">
            <Trans i18nKey="hero.title">Channels in <span className="text-grad-pink-orange">4K & 8K</span> Without Compromise.</Trans>
          </h1>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg uppercase tracking-wider">
              <MessageCircle size={24} /> {t('hero.cta')}
            </a>
            <button onClick={() => setActiveTab('pricing')} className="flex items-center gap-4 px-6 py-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
              <span className="text-sm font-bold text-white uppercase tracking-widest">{t('nav.pricing')}</span>
              <ChevronRight size={18} className="text-grad-pink-orange" />
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(255,140,0,0.2)]">
             <img 
               src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format,compress&fit=crop&q=60&w=630"
               alt="IPTVPORTUGAL Streaming 4K 8K" 
               className="w-full h-auto" 
               width="630" 
               height="483" 
               fetchpriority="high"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-[2rem] flex items-center justify-between border-white/20">
                <div>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">{t('hero.now_streaming')}</p>
                  <p className="font-black text-white text-lg tracking-tight">{t('hero.event_title')}</p>
                </div>
                <div className="w-14 h-14 rounded-full grad-pink-orange flex items-center justify-center shadow-lg shadow-orange-500/40 animate-pulse"><PlayCircle size={32} className="text-white" /></div>
             </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 blur-[100px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/10 blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

import { PricingSection, FeaturesSection, DevicesSection, GuideSection, SportsSection, FAQSection, PolicySection, FinalCTASection } from './components/AllSections';

// --- Navbar ---

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'features', label: t('nav.features') },
    { id: 'devices', label: t('nav.devices') },
    { id: 'guide', label: t('nav.guide') },
    { id: 'faq', label: t('nav.faq') },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')} 
          aria-label="IPTV Portugal Home"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 grad-pink-orange rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform"><Zap className="text-white" size={24} /></div>
          <span className="text-2xl font-black font-['Outfit'] tracking-tighter text-white uppercase">IPTV<span className="text-grad-pink-orange">PORTUGAL</span></span>
        </button>

        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className={`transition-colors uppercase tracking-widest text-[11px] ${activeTab === item.id ? 'text-grad-pink-orange font-black underline underline-offset-8 decoration-2' : 'text-white/70 hover:text-white'}`}>
              {item.label}
            </button>
          ))}
          <button 
            onClick={toggleLanguage} 
            aria-label={`Switch language to ${i18n.language === 'en' ? 'Portuguese' : 'English'}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-all uppercase text-[10px] font-bold tracking-widest text-white"
          >
            <Globe size={14} className="text-orange-400" /> {i18n.language === 'en' ? 'PT' : 'EN'}
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-6 text-sm uppercase tracking-wider">{t('nav.cta')}</a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage} 
            aria-label="Change Language"
            className="p-2 glass rounded-lg text-white"
          >
            <Globe size={20} className="text-orange-400" />
          </button>
          <button 
            className="text-white p-2" 
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
          <div className="md:hidden bg-black border-b border-white/10 overflow-hidden animate-fade-in-up">
            <div className="flex flex-col p-6 gap-6 font-medium text-white/90">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-left uppercase tracking-widest text-sm ${activeTab === item.id ? 'text-grad-pink-orange font-black' : 'text-white'}`}>{item.label}</button>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center uppercase tracking-wider">{t('nav.cta')}</a>
            </div>
          </div>
        )}
    </nav>
  );
};

// --- Main App ---

function App() {
  const getInitialTab = () => {
    const path = window.location.pathname.replace('/', '');
    const validTabs = ['home', 'pricing', 'features', 'devices', 'guide', 'faq', 'refund', 'disclaimer', 'terms', 'privacy', 'cookie', 'dmca'];
    return validTabs.includes(path) ? path : 'home';
  };
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const { t } = useTranslation();

  const getMetaData = () => {
    switch(activeTab) {
      case 'pricing': return { title: `Pricing Plans - IPTVPORTUGAL`, desc: "Check our flexible IPTV plans starting from €15. Best 4K & 8K IPTV in Portugal." };
      case 'features': return { title: `Features & Advantages - IPTVPORTUGAL`, desc: "Discover 30,000+ live channels, 120,000+ VODs and advanced features like Catch-up and EPG." };
      case 'devices': return { title: `Compatible Devices - IPTVPORTUGAL`, desc: "Watch IPTV on Smart TV, Firestick, Android, iOS and PC. Easy setup for all devices." };
      case 'guide': return { title: `Installation Guide - IPTVPORTUGAL`, desc: "Step-by-step installation guide for your IPTV subscription on any device." };
      case 'faq': return { title: `Frequently Asked Questions - IPTVPORTUGAL`, desc: "Common questions about our IPTV service, payments, and setup." };
      case 'refund': return { title: "Refund Policy - IPTVPORTUGAL", desc: "Our 48-hour money-back guarantee and refund policy details." };
      case 'disclaimer': return { title: "Legal Disclaimer - IPTVPORTUGAL", desc: "Important legal information and disclaimer for our IPTV service." };
      case 'terms': return { title: "Terms of Use - IPTVPORTUGAL", desc: "Rules and terms of service for using IPTVPORTUGAL subscriptions." };
      case 'privacy': return { title: "Privacy Policy - IPTVPORTUGAL", desc: "How we protect and manage your personal data at IPTVPORTUGAL." };
      case 'cookie': return { title: "Cookie Policy - IPTVPORTUGAL", desc: "How we use cookies to enhance your streaming experience." };
      case 'dmca': return { title: "DMCA Policy - IPTVPORTUGAL", desc: "Copyright compliance and DMCA removal process for IPTVPORTUGAL." };
      default: return { title: "IPTVPORTUGAL – Best 4K & 8K IPTV Service with Portuguese Channels", desc: "Enjoy over 30,000 live channels and a premium library of 120,000+ movies and series in stunning 4K & 8K Ultra HD quality." };
    }
  };

  const meta = getMetaData();

  const handleTabChange = (id) => {
    setActiveTab(id);
    window.history.pushState({}, '', id === 'home' ? '/' : `/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-orange-500/30 overflow-x-hidden">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <meta name="keywords" content="IPTV Portugal, 4K IPTV, 8K IPTV, Portuguese channels, live streaming Portugal, IPTV service, IPTVPORTUGAL, Refund Policy, DMCA" />
        <link rel="canonical" href={`https://iptvportugal.pro/${activeTab === 'home' ? '' : activeTab}`} />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:url" content="https://iptvportugal.pro" />
        <meta property="og:site_name" content="IPTVPORTUGAL" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <SchemaMarkup />
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="flex-grow bg-gradient-mesh relative">
        {activeTab === 'home' ? (
          <div className="animate-fade-in-up">
            <HeroSection setActiveTab={handleTabChange} />
            <PricingSection isFullView={true} />
            <FeaturesSection isFullView={true} />
            <DevicesSection isFullView={true} />
            <GuideSection isFullView={true} />
            <SportsSection isFullView={true} />
            <FAQSection isFullView={true} />
            <FinalCTASection />
          </div>
        ) : (
          <div key={activeTab} className="animate-fade-in-up">
            {activeTab === 'pricing' && <PricingSection isFullView={false} />}
            {activeTab === 'features' && <FeaturesSection isFullView={false} />}
            {activeTab === 'devices' && <DevicesSection isFullView={false} />}
            {activeTab === 'guide' && <GuideSection isFullView={false} />}
            {activeTab === 'faq' && <FAQSection isFullView={false} />}
            {['refund', 'disclaimer', 'terms', 'privacy', 'cookie', 'dmca'].includes(activeTab) && <PolicySection policyId={activeTab} />}
          </div>
        )}
      </main>

      <footer className="pt-20 pb-12 px-8 border-t border-white/10 bg-black/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => handleTabChange('home')} 
              aria-label="IPTV Portugal Home Footer"
              className="flex items-center gap-3 mb-8 group cursor-pointer w-fit focus:outline-none"
            >
              <div className="w-12 h-12 grad-pink-orange rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"><Zap size={32} /></div>
              <span className="text-3xl font-black font-['Outfit'] tracking-tighter text-white uppercase">IPTV<span className="text-grad-pink-orange">PORTUGAL</span></span>
            </button>
            <p className="text-slate-300 max-w-md leading-relaxed text-lg font-medium italic">
              "Providing Ultra HD streaming experiences with unmatched server stability for the Portuguese market since 2018."
            </p>
            <div className="mt-8 flex items-center gap-4 text-slate-300 font-bold text-xs uppercase tracking-widest">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full grad-pink-orange border-2 border-black flex items-center justify-center text-[8px] font-black">4K</div>
                 <div className="w-8 h-8 rounded-full grad-aqua-turquoise border-2 border-black flex items-center justify-center text-[8px] font-black">8K</div>
                 <div className="w-8 h-8 rounded-full grad-indigo-pink border-2 border-black flex items-center justify-center text-[8px] font-black">UHD</div>
              </div>
              <span>Trusted by 10k+ active subscribers</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-white text-xl font-black mb-8 uppercase tracking-widest border-b border-orange-500/30 pb-2 w-fit">{t('footer.quick_links')}</h2>
            <ul className="space-y-4 text-slate-300 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={() => handleTabChange('home')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.home')}</button></li>
              <li><button onClick={() => handleTabChange('pricing')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.pricing')}</button></li>
              <li><button onClick={() => handleTabChange('features')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.features')}</button></li>
              <li><button onClick={() => handleTabChange('faq')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.faq')}</button></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-black mb-8 uppercase tracking-widest border-b border-orange-500/30 pb-2 w-fit">{t('footer.legal')}</h2>
            <ul className="space-y-4 text-slate-300 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={() => handleTabChange('refund')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><RefreshCcw size={14} /> Refund Policy</button></li>
              <li><button onClick={() => handleTabChange('terms')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><FileText size={14} /> Terms of Use</button></li>
              <li><button onClick={() => handleTabChange('privacy')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Lock size={14} /> Privacy Policy</button></li>
              <li><button onClick={() => handleTabChange('cookie')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Cookie size={14} /> Cookie Policy</button></li>
              <li><button onClick={() => handleTabChange('dmca')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Scale size={14} /> DMCA Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-300 text-[10px] font-black uppercase tracking-widest text-center">
          <div className="flex items-center gap-6">
             <p>© 2026 IPTVPORTUGAL. {t('footer.rights')}</p>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-green-400">Server Status: Online</span>
             </div>
          </div>
          <div className="flex gap-10 items-center">
             <Smartphone size={16} className="text-orange-500" />
             <span className="text-slate-300">{WHATSAPP_NUMBER}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[150px] -z-10"></div>
      </footer>
    </div>
  );
}

export default App;
