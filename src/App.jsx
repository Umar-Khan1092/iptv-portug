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
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

// --- Constants ---
const WHATSAPP_NUMBER = "+32 460 20 27 33";
const WHATSAPP_URL = "https://wa.me/32460202733";

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
        <div className="flex-1 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white border border-white/10 mb-10 shadow-xl">
            <Flame size={16} className="text-orange-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">{t('hero.badge')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl lg:text-[5.5rem] font-black mb-8 leading-[1] text-white tracking-tight uppercase">
            <Trans i18nKey="hero.title">Channels in <span className="text-grad-pink-orange">4K & 8K</span> Without Compromise.</Trans>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </motion.p>
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
             <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200" alt="IPTVPORTUGAL Streaming 4K 8K" className="w-full h-auto" />
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

const PricingSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const features = t('pricing.features', { returnObjects: true });
  const featureList = Array.isArray(features) ? features : [];
  
  return (
    <section className={`px-6 max-w-7xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-6xl mb-6 text-white font-black uppercase tracking-tighter">{t('pricing.title')}</h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <PricingCard price="15" duration={t('pricing.duration.1m')} features={featureList} gradientClass="grad-aqua-turquoise" delay={0.1} />
        <PricingCard price="35" duration={t('pricing.duration.3m')} features={featureList} gradientClass="grad-saphire-cobalt" delay={0.2} />
        <PricingCard price="45" duration={t('pricing.duration.6m')} features={featureList} isPopular={true} gradientClass="grad-indigo-pink" delay={0.3} />
        <PricingCard price="65" duration={t('pricing.duration.1y')} features={featureList} gradientClass="grad-red-light" delay={0.4} />
      </div>
    </section>
  );
};

const FeaturesSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const whyChooseItems = t('why_choose.items', { returnObjects: true });
  const featureItems = t('features.items', { returnObjects: true });
  const whyChooseSafe = Array.isArray(whyChooseItems) ? whyChooseItems : [];
  const featuresSafe = Array.isArray(featureItems) ? featureItems : [];

  return (
    <section className={`px-6 max-w-7xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'}`}>
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-6xl mb-6 text-white font-black uppercase tracking-tighter">{t('why_choose.title')}</h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t('why_choose.subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {whyChooseSafe.map((item, i) => (
          <FeatureCard key={i} icon={[Headphones, Zap, ShieldCheck, CreditCard, Globe, PlayCircle][i]} title={item.title} desc={item.desc} gradientClass={['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink', 'grad-saphire-cobalt', 'grad-red-light', 'grad-yellow-brown'][i]} delay={0.1 * i} />
        ))}
      </div>
      <div className="text-center mb-12"><h3 className="text-3xl text-white font-black uppercase tracking-widest">{t('features.title')}</h3></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuresSafe.map((text, i) => {
          const Icon = [Tv, Zap, Plus, ShieldCheck, Smartphone, Film, Globe, Trophy][i] || Star;
          const grads = ['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink', 'grad-saphire-cobalt', 'grad-red-light', 'grad-yellow-brown', 'grad-pink-orange', 'grad-aqua-turquoise'];
          return (
            <div key={i} className="p-8 rounded-[2rem] glass flex flex-col items-center text-center gap-5 border-white/5">
              <div className={`p-4 rounded-2xl ${grads[i] || 'grad-pink-orange'} text-white shadow-lg`}><Icon size={36} /></div>
              <span className="font-bold text-white text-sm uppercase tracking-wider">{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const DevicesSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const deviceList = t('devices.list', { returnObjects: true });
  const deviceListSafe = Array.isArray(deviceList) ? deviceList : [];

  return (
    <section className={`px-6 max-w-7xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'}`}>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 relative grid grid-cols-2 gap-6">
          <DeviceBox icon={Monitor} title="Smart TVs" desc="Samsung, LG, Android TV" grad="grad-aqua-turquoise" />
          <DeviceBox icon={Smartphone} title="Mobile" desc="iOS, Android, Tablets" grad="grad-pink-orange" mt />
          <DeviceBox icon={Flame} title="Fire Stick" desc="Amazon, Shield, Roku" grad="grad-indigo-pink" nmt />
          <DeviceBox icon={Laptop} title="Computers" desc="Windows, macOS, Linux" grad="grad-saphire-cobalt" />
          <div className="absolute inset-0 bg-blue-500/10 blur-[150px] -z-10"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl lg:text-6xl mb-8 leading-[1.1] text-white font-black uppercase tracking-tighter">{t('devices.title')}</h2>
          <p className="text-slate-200 text-lg mb-10 leading-relaxed font-medium">{t('devices.subtitle')}</p>
          <ul className="space-y-6">
            {deviceListSafe.map((item, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                <div className={`w-8 h-8 rounded-full ${['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink', 'grad-saphire-cobalt'][i % 4]} flex items-center justify-center text-white flex-shrink-0`}><CheckCircle2 size={18} /></div>
                <span className="font-semibold text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const GuideSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const guideSteps = t('guide.steps', { returnObjects: true });
  const activationSteps = t('activation.steps', { returnObjects: true });
  const guideSafe = Array.isArray(guideSteps) ? guideSteps : [];
  const activationSafe = Array.isArray(activationSteps) ? activationSteps : [];

  return (
    <section className={`px-6 max-w-7xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl mb-6 text-white font-black uppercase tracking-tighter">{t('guide.title')}</h2>
        <p className="text-slate-300 text-lg">{t('guide.subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {guideSafe.map((step, i) => (
          <div key={i} className={`p-10 rounded-[3rem] bg-[#161424] border border-white/10 ${i === 1 ? 'lg:scale-110 shadow-2xl z-10' : ''}`}>
            <div className="flex items-center gap-5 mb-8">
              <div className={`w-12 h-12 rounded-2xl ${['grad-aqua-turquoise', 'grad-pink-orange', 'grad-saphire-cobalt'][i] || 'grad-pink-orange'} flex items-center justify-center font-black text-xl text-white shadow-lg`}>0{i + 1}</div>
              <h3 className="text-2xl text-white font-bold">{step.title}</h3>
            </div>
            <ul className="space-y-5 text-slate-300">
              {(step.items || []).map((item, j) => (<li key={j} className="flex gap-3 items-start"><ChevronRight size={18} className="text-slate-500 mt-1 flex-shrink-0" /> <span className="font-medium">{item}</span></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-center">
        <h2 className="text-4xl lg:text-5xl mb-16 text-white font-black uppercase tracking-tighter">{t('activation.title')}</h2>
        <div className="grid md:grid-cols-3 gap-16 relative z-10">
          {activationSafe.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-3xl ${['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink'][i] || 'grad-pink-orange'} flex items-center justify-center mb-8 text-white font-black text-3xl shadow-xl`}>{i+1}</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase">{step.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SportsSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const sportsItems = t('sports.items', { returnObjects: true });
  const sportsSafe = Array.isArray(sportsItems) ? sportsItems : [];

  return (
    <section className={`px-6 max-w-7xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'} rounded-[5rem] bg-[#0f0e17] border border-white/5 my-12`}>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="inline-block px-5 py-2 rounded-xl bg-red-500/10 text-red-500 font-black text-xs mb-6 uppercase tracking-[0.2em] flex items-center gap-2 border border-red-500/20 shadow-lg shadow-red-500/5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> {t('sports.live')}
          </div>
          <h2 className="text-4xl lg:text-6xl mb-10 text-white font-black tracking-tighter uppercase">{t('sports.title')}</h2>
          <div className="space-y-8">
            {sportsSafe.map((item, i) => {
              const grads = ['grad-red-light', 'grad-saphire-cobalt', 'grad-yellow-brown'];
              return (
                <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${grads[i] || 'grad-red-light'} flex items-center justify-center flex-shrink-0 text-white shadow-lg`}><Trophy size={28} /></div>
                  <div>
                    <h4 className="font-black text-white text-xl mb-2 uppercase">{item.title}</h4>
                    <p className="text-slate-300 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] h-72 w-full object-cover shadow-2xl border-2 border-white/5" alt="Sports 1" />
            <div className="h-40 rounded-[2.5rem] grad-pink-orange flex items-center justify-center p-8 text-center border-2 border-white/10"><p className="font-black text-white text-2xl tracking-tighter uppercase leading-tight">LIVE THE PASSION</p></div>
          </div>
          <div className="space-y-6 pt-12">
            <div className="h-40 rounded-[2.5rem] glass flex items-center justify-center border-white/10 shadow-2xl"><PlayCircle size={64} className="text-orange-500" /></div>
            <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" className="rounded-[2.5rem] h-72 w-full object-cover shadow-2xl border-2 border-white/5" alt="Arena" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ isFullView }) => {
  const { t } = useTranslation();
  const faqQuestions = t('faq.questions', { returnObjects: true });
  const faqSafe = Array.isArray(faqQuestions) ? faqQuestions : [];

  return (
    <section className={`px-6 max-w-4xl mx-auto ${isFullView ? 'py-24' : 'pt-32 pb-24'}`}>
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-6xl mb-6 text-white font-black uppercase tracking-tighter">{t('faq.title')}</h2>
        <p className="text-slate-300 text-lg">Answers to your key questions about IPTVPORTUGAL</p>
      </div>
      <div className="space-y-3">
        {faqSafe.map((item, i) => (<Accordion key={i} i={i} title={item.q} content={item.a} />))}
      </div>
    </section>
  );
};

const PolicySection = ({ policyId }) => {
  const { t } = useTranslation();
  const iconMap = {
    refund: RefreshCcw,
    disclaimer: AlertCircle,
    terms: FileText,
    privacy: Lock,
    cookie: Cookie,
    dmca: Scale
  };
  const Icon = iconMap[policyId] || FileText;
  const grads = ['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink', 'grad-saphire-cobalt', 'grad-red-light'];
  const grad = grads[Math.floor(Math.random() * grads.length)];
  const policyContent = t(`policies.${policyId}.content`, { returnObjects: true });
  const contentSafe = Array.isArray(policyContent) ? policyContent : [];

  return (
    <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className={`w-20 h-20 rounded-3xl ${grad} flex items-center justify-center mx-auto mb-8 text-white shadow-2xl`}>
          <Icon size={40} />
        </div>
        <h1 className="text-4xl lg:text-6xl mb-6 text-white font-black uppercase tracking-tighter">{t(`policies.${policyId}.title`)}</h1>
      </div>
      <div className="glass p-12 rounded-[3rem] border-white/10 space-y-12">
        {contentSafe.map((section, idx) => (
          <div key={idx} className="space-y-4">
             <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-orange-500 pl-4">{section.h}</h2>
             <p className="text-slate-300 text-lg leading-relaxed font-medium">{section.p}</p>
          </div>
        ))}
        <div className="pt-8 border-t border-white/5 text-sm italic opacity-60 text-center">
          Last Updated: May 2026. This policy is governed by the latest digital services regulations.
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding text-center relative overflow-hidden">
      <div className="relative z-10 py-24 px-8 rounded-[5rem] grad-indigo-pink shadow-2xl border border-white/20 mx-4">
        <h2 className="text-4xl lg:text-[5rem] font-black mb-10 text-white tracking-tighter leading-tight uppercase">Ready for the Revolution?</h2>
        <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">The best 4K & 8K IPTV is just a click away. No lag, no buffering, just pure entertainment on IPTVPORTUGAL.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-indigo-600 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl hover:shadow-white/20">
          <MessageCircle size={32} /> {t('nav.cta')}
        </a>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/20 blur-[150px] -z-10"></div>
    </section>
  );
};

// --- Sub-components ---

const DeviceBox = ({ icon: Icon, title, desc, grad, mt, nmt }) => (
  <div className={`p-8 rounded-[2.5rem] glass flex flex-col gap-5 border-white/10 shadow-2xl relative group overflow-hidden ${mt ? 'mt-10' : ''} ${nmt ? '-mt-10' : ''}`}>
    <div className={`w-14 h-14 rounded-2xl ${grad} flex items-center justify-center text-white shadow-lg`}><Icon size={32} /></div>
    <h4 className="text-xl font-bold text-white uppercase">{title}</h4>
    <p className="text-xs text-slate-400 font-medium">{desc}</p>
    <div className={`absolute inset-0 ${grad} opacity-0 group-hover:opacity-[0.03] transition-opacity`}></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, delay, gradientClass }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }} viewport={{ once: true }} className="p-8 rounded-3xl glass hover:border-white/20 transition-all duration-300 group overflow-hidden relative">
    <div className={`w-14 h-14 rounded-2xl ${gradientClass || 'grad-pink-orange'} flex items-center justify-center mb-6 text-white shadow-lg`}><Icon size={28} /></div>
    <h3 className="text-xl mb-3 text-white font-bold uppercase tracking-tight">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed relative z-10">{desc}</p>
  </motion.div>
);

const PricingCard = ({ price, duration, features, isPopular, delay, gradientClass }) => {
  const { t } = useTranslation();
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }} viewport={{ once: true }} className={`relative p-8 rounded-[3rem] glass flex flex-col border-white/10 h-full transition-all duration-500 hover:scale-[1.02] ${isPopular ? 'border-white/30 scale-105 z-10 shadow-2xl' : ''}`}>
      {isPopular && <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 ${gradientClass} text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg`}>Best Value</div>}
      <div className="mb-8">
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">{duration}</p>
        <div className="flex items-baseline gap-1"><span className="text-4xl font-black text-white">{t('pricing.currency')}{price}</span></div>
      </div>
      <div className="space-y-4 mb-10 flex-grow">
        {(features || []).map((feat, i) => (
          <div key={i} className="flex items-center gap-3"><div className={`w-1.5 h-1.5 rounded-full ${gradientClass}`}></div><span className="text-xs text-slate-300 font-medium">{feat}</span></div>
        ))}
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 ${gradientClass} text-white shadow-lg hover:shadow-xl`}><MessageCircle size={18} /> {t('pricing.cta')}</a>
    </motion.div>
  );
};

const Accordion = ({ title, content, i }) => {
  const [isOpen, setIsOpen] = useState(false);
  const grads = ['grad-pink-orange', 'grad-aqua-turquoise', 'grad-indigo-pink', 'grad-saphire-cobalt', 'grad-red-light'];
  return (
    <div className="border-b border-white/10 bg-white/[0.02] rounded-2xl mb-2 overflow-hidden px-4">
      <button className="w-full py-6 flex items-center justify-between text-left group" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">{title}</span>
        <div className={`w-8 h-8 rounded-full ${grads[i % grads.length]} flex items-center justify-center text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</div>
      </button>
      <AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-6 text-slate-300 leading-relaxed font-medium">{content}</p></motion.div>)}</AnimatePresence>
    </div>
  );
};

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
        <div onClick={() => handleNavClick('home')} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 grad-pink-orange rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform"><Zap className="text-white" size={24} /></div>
          <span className="text-2xl font-black font-['Outfit'] tracking-tighter text-white uppercase">IPTV<span className="text-grad-pink-orange">PORTUGAL</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className={`transition-colors uppercase tracking-widest text-[11px] ${activeTab === item.id ? 'text-grad-pink-orange font-black underline underline-offset-8 decoration-2' : 'text-white/70 hover:text-white'}`}>
              {item.label}
            </button>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-all uppercase text-[10px] font-bold tracking-widest text-white">
            <Globe size={14} className="text-orange-400" /> {i18n.language === 'en' ? 'PT' : 'EN'}
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-6 text-sm uppercase tracking-wider">{t('nav.cta')}</a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLanguage} className="p-2 glass rounded-lg text-white"><Globe size={20} className="text-orange-400" /></button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black border-b border-white/10 overflow-hidden">
            <div className="flex flex-col p-6 gap-6 font-medium text-white/90">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-left uppercase tracking-widest text-sm ${activeTab === item.id ? 'text-grad-pink-orange font-black' : 'text-white'}`}>{item.label}</button>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center uppercase tracking-wider">{t('nav.cta')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('home');
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
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div key="full-site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HeroSection setActiveTab={handleTabChange} />
              <PricingSection isFullView={true} />
              <FeaturesSection isFullView={true} />
              <DevicesSection isFullView={true} />
              <GuideSection isFullView={true} />
              <SportsSection isFullView={true} />
              <FAQSection isFullView={true} />
              <FinalCTASection />
            </motion.div>
          ) : (
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {activeTab === 'pricing' && <PricingSection isFullView={false} />}
              {activeTab === 'features' && <FeaturesSection isFullView={false} />}
              {activeTab === 'devices' && <DevicesSection isFullView={false} />}
              {activeTab === 'guide' && <GuideSection isFullView={false} />}
              {activeTab === 'faq' && <FAQSection isFullView={false} />}
              {['refund', 'disclaimer', 'terms', 'privacy', 'cookie', 'dmca'].includes(activeTab) && <PolicySection policyId={activeTab} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="pt-20 pb-12 px-8 border-t border-white/10 bg-black/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div onClick={() => handleTabChange('home')} className="flex items-center gap-3 mb-8 group cursor-pointer w-fit">
              <div className="w-12 h-12 grad-pink-orange rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"><Zap size={32} /></div>
              <span className="text-3xl font-black font-['Outfit'] tracking-tighter text-white uppercase">IPTV<span className="text-grad-pink-orange">PORTUGAL</span></span>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed text-lg font-medium italic">
              "Providing Ultra HD streaming experiences with unmatched server stability for the Portuguese market since 2018."
            </p>
            <div className="mt-8 flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full grad-pink-orange border-2 border-black flex items-center justify-center text-[8px] font-black">4K</div>
                 <div className="w-8 h-8 rounded-full grad-aqua-turquoise border-2 border-black flex items-center justify-center text-[8px] font-black">8K</div>
                 <div className="w-8 h-8 rounded-full grad-indigo-pink border-2 border-black flex items-center justify-center text-[8px] font-black">UHD</div>
              </div>
              <span>Trusted by 10k+ active subscribers</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-black mb-8 uppercase tracking-widest border-b border-orange-500/30 pb-2 w-fit">{t('footer.quick_links')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={() => handleTabChange('home')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.home')}</button></li>
              <li><button onClick={() => handleTabChange('pricing')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.pricing')}</button></li>
              <li><button onClick={() => handleTabChange('features')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.features')}</button></li>
              <li><button onClick={() => handleTabChange('faq')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><ChevronRight size={14} /> {t('nav.faq')}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-8 uppercase tracking-widest border-b border-orange-500/30 pb-2 w-fit">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-slate-400 font-bold uppercase text-[11px] tracking-widest">
              <li><button onClick={() => handleTabChange('refund')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><RefreshCcw size={14} /> Refund Policy</button></li>
              <li><button onClick={() => handleTabChange('terms')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><FileText size={14} /> Terms of Use</button></li>
              <li><button onClick={() => handleTabChange('privacy')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Lock size={14} /> Privacy Policy</button></li>
              <li><button onClick={() => handleTabChange('cookie')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Cookie size={14} /> Cookie Policy</button></li>
              <li><button onClick={() => handleTabChange('dmca')} className="hover:text-orange-400 transition-colors flex items-center gap-2"><Scale size={14} /> DMCA Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest text-center">
          <div className="flex items-center gap-6">
             <p>© 2026 IPTVPORTUGAL. {t('footer.rights')}</p>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-green-500/70">Server Status: Online</span>
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
