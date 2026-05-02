import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "features": "Advantages",
        "pricing": "Pricing",
        "devices": "Devices",
        "guide": "Guide",
        "faq": "FAQ",
        "cta": "Get Started Now"
      },
      "hero": {
        "badge": "#1 IPTV Provider in Portugal",
        "title": "Channels in <1>4K & 8K</1> Without Compromise.",
        "subtitle": "Enjoy over 30,000 live channels and a premium library of 120,000+ movies and series. Absolute stability with servers optimized for Portugal.",
        "cta": "Get Started Now",
        "happy_clients": "10k+ Happy Clients",
        "now_streaming": "Now Streaming",
        "event_title": "Champions League Final"
      },
      "pricing": {
        "title": "Choose Your Perfect Plan",
        "subtitle": "Flexible pricing options tailored to your streaming needs. No hidden fees.",
        "currency": "€",
        "duration": { "1m": "1 Month", "3m": "3 Months", "6m": "6 Months", "1y": "1 Year" },
        "cta": "Get Started",
        "features": [
          "30,000+ Live TV Channels",
          "120,000+ Movies & Series (VOD)",
          "Stream Quality (HD / FHD / 4K)",
          "Compatible Devices",
          "Simultaneous Connections",
          "7-Day Catch-Up TV",
          "Electronic Programme Guide (EPG)",
          "Anti-Freeze & Buffer-Free Playback",
          "99.9% Uptime Guarantee"
        ]
      },
      "why_choose": {
        "title": "Why Choose IPTVPORTUGAL?",
        "subtitle": "Discover why we are the #1 IPTV service in Portugal, combining Ultra HD quality with unmatched support.",
        "items": [
          { "title": "24/7 Support", "desc": "Real human support available anytime via WhatsApp or email." },
          { "title": "Instant Setup", "desc": "No technical skills required — start watching immediately after purchase." },
          { "title": "Reliable Service", "desc": "99.9% uptime with powerful servers designed for uninterrupted streaming." },
          { "title": "Affordable Plans", "desc": "Flexible pricing with no long-term contracts or hidden charges." },
          { "title": "Optimized for Portugal", "desc": "Local channels and fast performance tailored specifically for Portugal." },
          { "title": "Free Trial", "desc": "Test the service before buying and experience quality risk-free." }
        ]
      },
      "features": {
        "title": "Advanced IPTV Features",
        "subtitle": "Everything you need for the best streaming experience.",
        "items": [
          "Built-in EPG (TV Guide)",
          "7-Day Catch-Up",
          "Daily Content Updates",
          "Secure Connection",
          "Multi-screen Support",
          "Categorized Content",
          "International Channels",
          "Premium Sports & PPV"
        ]
      },
      "devices": {
        "title": "Compatible With All Your Devices",
        "subtitle": "Our service is built to work smoothly on all modern devices. Setup is simple and takes only a few minutes.",
        "list": [
          "Install apps like IPTV Smarters or TiviMate",
          "Full support for MAG Box (250, 322, 520, etc)",
          "Direct stream via VLC or Web Player",
          "Compatible with Chromecast and AirPlay"
        ]
      },
      "guide": {
        "title": "Installation Guide (Step-by-Step)",
        "subtitle": "Setting up IPTV is very easy — even if you're a beginner.",
        "steps": [
          {
            "title": "Smart TV / Android",
            "items": ["Install IPTV Smarters or IBO Player", "Open app and enter details", "Use M3U Link or Xtream Codes", "Restart and start watching!"]
          },
          {
            "title": "Fire TV Stick",
            "items": ["Install Downloader app", "Download IPTV Smarters Pro", "Enter subscription details", "Enjoy streaming on your TV"]
          },
          {
            "title": "MAG / PC / Others",
            "items": ["MAG: Set Portal URL in settings", "PC: Use VLC Media Player", "Paste M3U link in Network Stream", "Instant access to channel list"]
          }
        ]
      },
      "activation": {
        "title": "How to Activate in 3 Easy Steps",
        "steps": [
          { "title": "Choose Plan", "desc": "Select the subscription that fits your needs — 6, 12, or 24 months." },
          { "title": "Receive Details", "desc": "Receive your login details instantly via WhatsApp or Email." },
          { "title": "Start Watching", "desc": "Install and enjoy 4K & 8K Ultra HD streaming." }
        ]
      },
      "sports": {
        "live": "LIVE",
        "title": "Live Sports & Premium Events",
        "items": [
          { "title": "Football & European Cups", "desc": "Watch Liga Portugal, Champions League, Europa League live." },
          { "title": "UFC, Boxing & Combat", "desc": "Enjoy all major fights without extra fees." },
          { "title": "NBA, NFL & Global Sports", "desc": "International leagues and PPV events included." }
        ]
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "questions": [
          { "q": "What do I need to use IPTV?", "a": "You only need a stable internet connection, a compatible device, and your login details." },
          { "q": "How do I pay for my subscription?", "a": "You can pay using the methods shown at checkout. Activation is instant." },
          { "q": "Which devices work with IPTVPORTUGAL?", "a": "Works on Smart TVs, Android, iOS, Firestick, MAG boxes, and PCs." },
          { "q": "Can I use it on multiple devices?", "a": "Yes, depending on your plan. Some allow multiple connections." }
        ]
      },
      "policies": {
        "terms": {
          "title": "Terms of Use",
          "content": [
            { "h": "1. Acceptance of Terms", "p": "By accessing or using IPTV Portugal services, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our services. Continued use of the service indicates full acceptance of these terms and any future updates." },
            { "h": "2. Service Overview", "p": "IPTV Portugal provides a digital television streaming service delivered via internet protocol (IPTV). The service may include: Live TV channels, Video on Demand (VOD) content (movies & series), Electronic Program Guide (EPG), and Customer support assistance. Content availability may vary and can change without prior notice." },
            { "h": "3. Account & Access", "p": "After purchase, users receive login credentials such as M3U playlist links or Xtream Codes. Users are responsible for keeping credentials confidential and preventing unauthorized access. Sharing access outside your household is strictly prohibited." },
            { "h": "4. Acceptable Use Policy", "p": "The service is intended for personal, non-commercial use only. You agree NOT to resell, redistribute, or share credentials with third parties. Violation may result in immediate account termination without refund." },
            { "h": "5. Subscription & Payments", "p": "Prices are displayed in EUR (€). Subscription plans: 6, 12, or 24 months. Payments are processed manually via WhatsApp instructions. No auto-renewal is applied." },
            { "h": "6. Service Availability", "p": "We aim to provide stable service, but we do not guarantee uninterrupted streaming. Service may be affected by internet connection, device compatibility, or server maintenance." },
            { "h": "7. Termination", "p": "We reserve the right to suspend or terminate accounts if terms are violated or misuse is detected." },
            { "h": "8. Changes to Terms", "p": "We may update these terms at any time. Continued use of the service means you accept updated terms." },
            { "h": "9. Contact", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "privacy": {
          "title": "Privacy Policy",
          "content": [
            { "h": "1. Introduction", "p": "Your privacy is important to us. This policy explains how we collect, use, and protect your personal data." },
            { "h": "2. Data We Collect", "p": "We only collect necessary data: Name and WhatsApp number. We do NOT collect unnecessary personal information." },
            { "h": "3. Purpose of Data", "p": "Your data is used to process orders, deliver login credentials, provide support, and send service updates." },
            { "h": "4. Data Protection", "p": "We use SSL encryption (HTTPS), secure data storage, and restricted access systems." },
            { "h": "5. Data Sharing", "p": "We do NOT sell or share your data. Data is only shared when required by law or needed for payment processing." },
            { "h": "6. User Rights (GDPR)", "p": "You have the right to access, correct, delete, or request data portability." },
            { "h": "7. Data Retention", "p": "We keep data only as long as necessary for service operation and legal compliance." },
            { "h": "8. Updates", "p": "Policy may change over time. Continued use means acceptance." },
            { "h": "9. Contact", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "refund": {
          "title": "Refund Policy",
          "content": [
            { "h": "1. Overview", "p": "We aim for customer satisfaction and fair service." },
            { "h": "2. Refund Eligibility", "p": "Refunds are ONLY allowed if requested within 48 hours and the service has a technical issue on our side that cannot be resolved." },
            { "h": "3. Non-Refundable Cases", "p": "Refunds are NOT provided for change of mind, incorrect setup, poor internet connection, device incompatibility, or late requests (after 48 hours)." },
            { "h": "4. Request Process", "p": "Send via WhatsApp: Order details, issue description, and purchase time." },
            { "h": "5. Processing Time", "p": "Refunds take 5–10 business days depending on payment method." },
            { "h": "6. Support", "p": "We always try to fix the issue first before refunding." }
          ]
        },
        "cookie": {
          "title": "Cookie Policy",
          "content": [
            { "h": "1. What Are Cookies", "p": "Cookies are small files stored on your device to improve user experience." },
            { "h": "2. Types of Cookies Used", "p": "Essential Cookies (required for site functionality) and Analytics Cookies (help improve performance tracked anonymously)." },
            { "h": "3. Third-Party Cookies", "p": "We may use Google Fonts and analytics tools." },
            { "h": "4. Managing Cookies", "p": "Users can disable, delete, or block third-party cookies via browser settings." },
            { "h": "5. Impact of Disabling", "p": "Disabling cookies may affect website performance." },
            { "h": "6. Updates", "p": "Policy may change anytime." }
          ]
        },
        "dmca": {
          "title": "DMCA Policy",
          "content": [
            { "h": "1. Introduction", "p": "We respect intellectual property rights and comply with copyright laws." },
            { "h": "2. Reporting Copyright Infringement", "p": "Provide proof of ownership, content identification, contact details, and a statement of good faith." },
            { "h": "3. Action Taken", "p": "We may remove content, suspend accounts, or investigate claims." },
            { "h": "4. Counter Claims", "p": "Users can submit counter-notice if content was removed wrongly." },
            { "h": "5. Repeat Violations", "p": "Repeated violations result in permanent bans." },
            { "h": "6. Contact", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        }
      },
      "footer": {
        "desc": "The best IPTV service in Portugal with 4K and 8K channels. Stability, quality, and 24/7 support.",
        "quick_links": "Quick Links",
        "contact": "Contact",
        "rights": "All rights reserved. Best 4K/8K IPTV Service.",
        "legal": "Legal Information"
      }
    }
  },
  pt: {
    translation: {
      "nav": {
        "home": "Início",
        "features": "Vantagens",
        "pricing": "Preços",
        "devices": "Dispositivos",
        "guide": "Guia",
        "faq": "FAQ",
        "cta": "Começar Agora"
      },
      "hero": {
        "badge": "Provedor de IPTV nº 1 em Portugal",
        "title": "Canais em <1>4K & 8K</1> Sem Compromissos.",
        "subtitle": "Aproveite mais de 30.000 canais ao vivo e uma biblioteca premium de mais de 120.000 filmes e séries. Estabilidade absoluta com servidores otimizados para Portugal.",
        "cta": "Começar Agora",
        "happy_clients": "10k+ Clientes Felizes",
        "now_streaming": "Agora a transmitir",
        "event_title": "Final da Champions League"
      },
      "pricing": {
        "title": "Escolha o Seu Plano Perfeito",
        "subtitle": "Opções de preços flexíveis adaptadas às suas necessidades. Sem taxas ocultas.",
        "currency": "€",
        "duration": { "1m": "1 Mês", "3m": "3 Meses", "6m": "6 Meses", "1y": "1 Ano" },
        "cta": "Começar Agora",
        "features": [
          "30.000+ Canais em Direto",
          "120.000+ Filmes e Séries (VOD)",
          "Qualidade de Stream (HD / FHD / 4K)",
          "Dispositivos Compatíveis",
          "Ligações Simultâneas",
          "7 Dias Catch-Up TV",
          "Guia Eletrónico (EPG)",
          "Anti-Freeze e Buffer-Free",
          "99.9% Garantia de Uptime"
        ]
      },
      "why_choose": {
        "title": "Porquê Escolher a IPTVPORTUGAL?",
        "subtitle": "Descubra porque somos o serviço de IPTV número 1 em Portugal, combinando qualidade Ultra HD com suporte incomparável.",
        "items": [
          { "title": "Suporte 24/7", "desc": "Suporte humano real disponível a qualquer momento via WhatsApp ou email." },
          { "title": "Configuração Instantânea", "desc": "Não são necessárias competências técnicas — comece a ver imediatamente após a compra." },
          { "title": "Serviço Fiável", "desc": "Uptime de 99,9% com servidores potentes desenhados para streaming sem interrupções." },
          { "title": "Planos Acessíveis", "desc": "Preços flexíveis sem contratos de longo prazo ou taxas ocultas." },
          { "title": "Otimizado para Portugal", "desc": "Canais locais e alta performance especificamente para utilizadores portugueses." },
          { "title": "Teste Gratuito", "desc": "Experimente a qualidade do serviço sem riscos antes de comprar." }
        ]
      },
      "features": {
        "title": "Funcionalidades Avançadas",
        "subtitle": "Tudo o que precisa para a melhor experiência de streaming.",
        "items": [
          "EPG Integrado (Guia TV)",
          "7 Dias Catch-Up",
          "Atualizações Diárias",
          "Ligação Segura",
          "Suporte Multi-ecrã",
          "Conteúdo Categorizado",
          "Canais Internacionais",
          "Desporto Premium & PPV"
        ]
      },
      "devices": {
        "title": "Compatível com Todos os Seus Dispositivos",
        "subtitle": "O nosso serviço funciona perfeitamente em todos os dispositivos modernos. Configuração em minutos.",
        "list": [
          "Instale apps como IPTV Smarters ou TiviMate",
          "Suporte total para MAG Box (250, 322, 520, etc)",
          "Stream direto via VLC ou Web Player",
          "Compatível com Chromecast e AirPlay"
        ]
      },
      "guide": {
        "title": "Guia de Instalação (Passo-a-Passo)",
        "subtitle": "Configurar a IPTV é muito fácil — mesmo para principiantes.",
        "steps": [
          {
            "title": "Smart TV / Android",
            "items": ["Instale IPTV Smarters ou IBO Player", "Abra a app e insira os dados", "Use M3U Link ou Xtream Codes", "Reinicie e comece a ver!"]
          },
          {
            "title": "Fire TV Stick",
            "items": ["Instale a app Downloader", "Baixe o IPTV Smarters Pro", "Insira os detalhes da subscrição", "Desfrute do streaming na sua TV"]
          },
          {
            "title": "MAG / PC / Outros",
            "items": ["MAG: Defina o Portal URL nas definições", "PC: Use o VLC Media Player", "Cole o link M3U no Network Stream", "Acesso instantâneo à lista"]
          }
        ]
      },
      "activation": {
        "title": "Como Ativar em 3 Passos Fáceis",
        "steps": [
          { "title": "Escolha o Plano", "desc": "Selecione a subscrição que melhor se adapta — 6, 12 ou 24 meses." },
          { "title": "Receba os Dados", "desc": "Receba os seus dados de login instantaneamente via WhatsApp ou Email." },
          { "title": "Comece a Ver", "desc": "Instale e desfrute de streaming 4K & 8K Ultra HD." }
        ]
      },
      "sports": {
        "live": "DIRECTO",
        "title": "Desporto Ao Vivo e Eventos Premium",
        "items": [
          { "title": "Futebol & Taças Europeias", "desc": "Assista à Liga Portugal, Champions League, Europa League em direto." },
          { "title": "UFC, Boxe e Combate", "desc": "Aproveite todos os combates principais sem taxas extras." },
          { "title": "NBA, NFL e Desporto Global", "desc": "Ligas internacionais e eventos PPV incluídos." }
        ]
      },
      "faq": {
        "title": "Perguntas Frequentes",
        "questions": [
          { "q": "O que preciso para usar IPTV?", "a": "Apenas precisa de uma ligação estável à internet, um dispositivo compatível e os seus dados de acesso." },
          { "q": "Como posso pagar a minha subscrição?", "a": "Pode pagar usando os métodos no checkout. A ativação é imediata." },
          { "q": "Em que dispositivos funciona a IPTVPORTUGAL?", "a": "Funciona em Smart TVs, Android, iOS, Firestick, boxes MAG e PCs." },
          { "q": "Posso usar em vários dispositivos?", "a": "Sim, dependendo do seu plano. Alguns permitem várias ligações." }
        ]
      },
      "policies": {
        "terms": {
          "title": "Termos de Uso",
          "content": [
            { "h": "1. Aceitação dos Termos", "p": "Ao aceder ou usar os serviços da IPTV Portugal, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços." },
            { "h": "2. Visão Geral do Serviço", "p": "A IPTV Portugal fornece um serviço de streaming de televisão digital entregue via protocolo de internet (IPTV). O conteúdo pode variar e mudar sem aviso prévio." },
            { "h": "3. Conta e Acesso", "p": "Após a compra, os utilizadores recebem credenciais de login. Os utilizadores são responsáveis por manter as credenciais confidenciais. A partilha de acesso fora da sua residência é estritamente proibida." },
            { "h": "4. Política de Uso Aceitável", "p": "O serviço destina-se apenas a uso pessoal e não comercial. Você concorda em NÃO revender ou redistribuir o serviço." },
            { "h": "5. Subscrição e Pagamentos", "p": "Os preços são exibidos em EUR (€). Planos: 6, 12 ou 24 meses. Pagamentos processados via WhatsApp." },
            { "h": "6. Disponibilidade do Serviço", "p": "Pretendemos fornecer um serviço estável, mas não garantimos streaming ininterrupto." },
            { "h": "7. Rescisão", "p": "Reservamo-nos o direito de suspender ou encerrar contas se os termos forem violados." },
            { "h": "8. Alterações nos Termos", "p": "Podemos atualizar estes termos a qualquer momento." },
            { "h": "9. Contacto", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "privacy": {
          "title": "Política de Privacidade",
          "content": [
            { "h": "1. Introdução", "p": "A sua privacidade é importante para nós. Esta política explica como recolhemos e protegemos os seus dados pessoais." },
            { "h": "2. Dados que Recolhemos", "p": "Apenas recolhemos dados necessários: Nome e número de WhatsApp." },
            { "h": "3. Finalidade dos Dados", "p": "Os seus dados são usados para processar encomendas e fornecer suporte." },
            { "h": "4. Proteção de Dados", "p": "Usamos encriptação SSL (HTTPS) e armazenamento seguro." },
            { "h": "5. Partilha de Dados", "p": "NÃO vendemos ou partilhamos os seus dados." },
            { "h": "6. Direitos do Utilizador (GDPR)", "p": "Você tem o direito de aceder, corrigir ou apagar os seus dados." },
            { "h": "7. Retenção de Dados", "p": "Mantemos os dados apenas pelo tempo necessário." },
            { "h": "8. Atualizações", "p": "A política pode mudar com o tempo." },
            { "h": "9. Contacto", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "refund": {
          "title": "Política de Reembolso",
          "content": [
            { "h": "1. Visão Geral", "p": "Pretendemos a satisfação do cliente e um serviço justo." },
            { "h": "2. Elegibilidade de Reembolso", "p": "Reembolsos são permitidos APENAS se solicitados em 48 horas e houver falha técnica do nosso lado." },
            { "h": "3. Casos Não Reembolsáveis", "p": "Mudança de ideia, má ligação à internet ou incompatibilidade de dispositivo." },
            { "h": "4. Processo de Solicitação", "p": "Envie via WhatsApp os detalhes da encomenda e descrição do problema." },
            { "h": "5. Tempo de Processamento", "p": "Leva 5–10 dias úteis." },
            { "h": "6. Suporte", "p": "Tentamos sempre resolver o problema antes de reembolsar." }
          ]
        },
        "cookie": {
          "title": "Política de Cookies",
          "content": [
            { "h": "1. O que são Cookies", "p": "Pequenos ficheiros guardados no seu dispositivo para melhorar a experiência." },
            { "h": "2. Tipos de Cookies", "p": "Essenciais para o site e analíticos para performance." },
            { "h": "3. Cookies de Terceiros", "p": "Podemos usar Google Fonts e ferramentas de análise." },
            { "h": "4. Gestão de Cookies", "p": "Pode desativar ou apagar cookies no seu navegador." },
            { "h": "5. Impacto ao Desativar", "p": "Pode afetar a performance do site." },
            { "h": "6. Atualizações", "p": "Pode mudar a qualquer momento." }
          ]
        },
        "dmca": {
          "title": "Política DMCA",
          "content": [
            { "h": "1. Introdução", "p": "Respeitamos os direitos de propriedade intelectual." },
            { "h": "2. Denunciar Infração", "p": "Forneça prova de propriedade e identificação do conteúdo." },
            { "h": "3. Ação Tomada", "p": "Podemos remover conteúdo ou suspender contas." },
            { "h": "4. Contra-reclamações", "p": "Utilizadores podem enviar contra-notificação." },
            { "h": "5. Violações Repetidas", "p": "Resultam em banimentos permanentes." },
            { "h": "6. Contacto", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        }
      },
      "footer": {
        "desc": "O melhor serviço de IPTV em Portugal com canais 4K e 8K. Estabilidade, qualidade e suporte 24/7.",
        "quick_links": "Links Rápidos",
        "contact": "Contacto",
        "rights": "Todos os direitos reservados. Melhor Serviço IPTV 4K/8K.",
        "legal": "Informação Legal"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
