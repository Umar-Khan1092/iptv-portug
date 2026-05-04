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
          { "q": "What do I need to use IPTV?", "a": "You only need a stable internet connection, a compatible device (Smart TV, phone, PC, or Firestick), and your IPTV login details." },
          { "q": "How do I pay for my IPTV subscription?", "a": "You can pay using the available payment methods shown at checkout. After payment, your account is activated instantly." },
          { "q": "Which devices work with IPTV Portugal?", "a": "IPTV works on Smart TVs, Android devices, iOS, Firestick, MAG boxes, PCs, and streaming devices like Apple TV and Chromecast." },
          { "q": "Can I use IPTV on multiple devices at the same time?", "a": "Yes, depending on your plan. Some subscriptions allow multiple connections, while others are limited to one device." },
          { "q": "What channels do I get with IPTV in Portugal?", "a": "You get thousands of channels including sports, movies, news, entertainment, kids content, and international channels." },
          { "q": "Do I need a VPN to use IPTV?", "a": "A VPN is not required, but it can improve privacy and help with stable access in some cases." },
          { "q": "What internet speed do I need for IPTV?", "a": "For smooth streaming:\nHD: at least 10 Mbps\n4K: at least 25 Mbps\n8K: 50 Mbps or higher recommended" },
          { "q": "How do I get legal IPTV in Portugal?", "a": "Legal IPTV services are licensed providers that offer official content. Always choose trusted providers with transparent subscriptions." },
          { "q": "What is the best app for IPTV?", "a": "Popular apps include IPTV Smarters Pro, TiviMate, Smart IPTV, and IBO Player." },
          { "q": "How do I add an M3U playlist to IPTV?", "a": "Open your IPTV app, choose “Add Playlist,” then enter your M3U URL or Xtream Codes provided after subscription." },
          { "q": "How do I install IPTV on my TV?", "a": "Install an IPTV app from your Smart TV store, enter your login details, and your channels will load automatically." },
          { "q": "What is the best VPN for IPTV?", "a": "Popular VPNs include NordVPN, ExpressVPN, and Surfshark for privacy and secure streaming." },
          { "q": "What is an IPTV box?", "a": "An IPTV box is a small device that connects to your TV and lets you stream IPTV content directly." },
          { "q": "Is IPTV legal in Portugal?", "a": "IPTV is legal when provided by licensed services. Always choose verified providers to ensure safe usage." },
          { "q": "Why is my IPTV buffering?", "a": "Buffering usually happens due to slow internet, overloaded servers, or unstable WiFi connection." }
        ]
      },
      "policies": {
        "terms": {
          "title": "Terms of Use",
          "content": [
            { "h": "1. Acceptance of Terms", "p": "By accessing or using IPTV Portugal services, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our services.\nContinued use of the service indicates full acceptance of these terms and any future updates." },
            { "h": "2. Service Overview", "p": "IPTV Portugal provides a digital television streaming service delivered via internet protocol (IPTV). The service may include:\n• Live TV channels\n• Video on Demand (VOD) content (movies & series)\n• Electronic Program Guide (EPG)\n• Customer support assistance\nContent availability may vary and can change without prior notice due to technical or operational reasons." },
            { "h": "3. Account & Access", "p": "After purchase, users receive login credentials such as:\n• M3U playlist link\n• Xtream Codes (username, password, server URL)\n\nUsers are responsible for:\n• Keeping credentials confidential\n• Preventing unauthorized access\n• All activities under their account\n\nSharing access outside your household is strictly prohibited." },
            { "h": "4. Acceptable Use Policy", "p": "The service is intended for personal, non-commercial use only.\nYou agree NOT to:\n• Resell or redistribute the service\n• Share credentials with third parties\n• Use the service in commercial environments (bars, shops, etc.)\n• Record or distribute content\n\nViolation may result in immediate account termination without refund." },
            { "h": "5. Subscription & Payments", "p": "• Prices are displayed in EUR (€)\n• Subscription plans: 6, 12, or 24 months\n• Payments are processed manually via WhatsApp instructions\n• No auto-renewal (user must renew manually)\n\nAccess remains valid until the subscription expires." },
            { "h": "6. Service Availability", "p": "We aim to provide stable service, but we do not guarantee uninterrupted streaming.\nService may be affected by:\n• Internet connection issues\n• Device compatibility\n• Third-party applications\n• Server maintenance" },
            { "h": "7. Termination", "p": "We reserve the right to suspend or terminate accounts if:\n• Terms are violated\n• Misuse is detected\n• Operational risks arise" },
            { "h": "8. Changes to Terms", "p": "We may update these terms at any time. Continued use of the service means you accept updated terms." },
            { "h": "9. Contact", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "privacy": {
          "title": "Privacy Policy",
          "content": [
            { "h": "1. Introduction", "p": "Your privacy is important to us. This policy explains how we collect, use, and protect your personal data." },
            { "h": "2. Data We Collect", "p": "We only collect necessary data:\n• Name\n• WhatsApp number\n\nWe do NOT collect unnecessary personal information." },
            { "h": "3. Purpose of Data", "p": "Your data is used to:\n• Process orders\n• Deliver login credentials\n• Provide support\n• Send service updates" },
            { "h": "4. Data Protection", "p": "We use:\n• SSL encryption (HTTPS)\n• Secure data storage\n• Restricted access systems" },
            { "h": "5. Data Sharing", "p": "We do NOT sell or share your data.\nData is only shared when:\n• Required by law\n• Needed for payment processing" },
            { "h": "6. User Rights (GDPR)", "p": "You have the right to:\n• Access your data\n• Correct your data\n• Delete your data\n• Request data portability" },
            { "h": "7. Data Retention", "p": "We keep data only as long as necessary for service operation and legal compliance." },
            { "h": "8. Updates", "p": "Policy may change over time. Continued use means acceptance." },
            { "h": "9. Contact", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "refund": {
          "title": "Refund Policy",
          "content": [
            { "h": "1. Overview", "p": "We aim for customer satisfaction and fair service." },
            { "h": "2. Refund Eligibility", "p": "Refunds are ONLY allowed if:\n• Requested within 48 hours\n• Service has a technical issue on our side\n• Issue cannot be resolved" },
            { "h": "3. Non-Refundable Cases", "p": "Refunds are NOT provided for:\n• Change of mind\n• Incorrect setup\n• Poor internet connection\n• Device incompatibility\n• Late requests (after 48 hours)" },
            { "h": "4. Request Process", "p": "Send via WhatsApp:\n• Order details\n• Issue description\n• Purchase time" },
            { "h": "5. Processing Time", "p": "Refunds take 5–10 business days depending on payment method." },
            { "h": "6. Support", "p": "We always try to fix the issue first before refunding." }
          ]
        },
        "cookie": {
          "title": "Cookie Policy",
          "content": [
            { "h": "1. What Are Cookies", "p": "Cookies are small files stored on your device to improve user experience." },
            { "h": "2. Types of Cookies Used", "p": "Essential Cookies:\n• Required for site functionality\n• Navigation and session management\n\nAnalytics Cookies:\n• Help improve performance\n• Track user behavior anonymously" },
            { "h": "3. Third-Party Cookies", "p": "We may use:\n• Google Fonts\n• Analytics tools" },
            { "h": "4. Managing Cookies", "p": "Users can:\n• Disable cookies\n• Delete cookies\n• Block third-party cookies" },
            { "h": "5. Impact of Disabling", "p": "Disabling cookies may affect website performance." },
            { "h": "6. Updates", "p": "Policy may change anytime." }
          ]
        },
        "dmca": {
          "title": "DMCA Policy",
          "content": [
            { "h": "1. Introduction", "p": "We respect intellectual property rights and comply with copyright laws." },
            { "h": "2. Reporting Copyright Infringement", "p": "Provide:\n• Proof of ownership\n• Content identification\n• Contact details\n• Statement of good faith" },
            { "h": "3. Action Taken", "p": "We may:\n• Remove content\n• Suspend accounts\n• Investigate claims" },
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
          { "q": "O que preciso para usar IPTV?", "a": "Apenas precisa de uma ligação estável à internet, um dispositivo compatível (Smart TV, telefone, PC ou Firestick) e os seus dados de acesso IPTV." },
          { "q": "Como posso pagar a minha subscrição IPTV?", "a": "Pode pagar usando os métodos disponíveis no checkout. Após o pagamento, a sua conta é ativada instantaneamente." },
          { "q": "Em que dispositivos funciona a IPTV Portugal?", "a": "A IPTV funciona em Smart TVs, dispositivos Android, iOS, Firestick, boxes MAG, PCs e dispositivos de streaming como Apple TV e Chromecast." },
          { "q": "Posso usar a IPTV em vários dispositivos ao mesmo tempo?", "a": "Sim, dependendo do seu plano. Algumas subscrições permitem várias ligações, enquanto outras são limitadas a um dispositivo." },
          { "q": "Que canais recebo com a IPTV em Portugal?", "a": "Recebe milhares de canais incluindo desporto, filmes, notícias, entretenimento, conteúdo infantil e canais internacionais." },
          { "q": "Preciso de uma VPN para usar IPTV?", "a": "Uma VPN não é obrigatória, mas pode melhorar a privacidade e ajudar a ter um acesso mais estável em alguns casos." },
          { "q": "Que velocidade de internet preciso para IPTV?", "a": "Para um streaming fluído:\nHD: pelo menos 10 Mbps\n4K: pelo menos 25 Mbps\n8K: 50 Mbps ou superior recomendado" },
          { "q": "Como posso obter IPTV legal em Portugal?", "a": "Os serviços de IPTV legais são provedores licenciados que oferecem conteúdo oficial. Escolha sempre provedores de confiança com subscrições transparentes." },
          { "q": "Qual é a melhor app para IPTV?", "a": "As apps populares incluem IPTV Smarters Pro, TiviMate, Smart IPTV e IBO Player." },
          { "q": "Como adiciono uma lista M3U à IPTV?", "a": "Abra a sua app IPTV, escolha 'Add Playlist', e depois insira o seu URL M3U ou Xtream Codes fornecidos após a subscrição." },
          { "q": "Como instalo IPTV na minha TV?", "a": "Instale uma app IPTV a partir da loja da sua Smart TV, insira os seus dados de acesso e os canais carregarão automaticamente." },
          { "q": "Qual é a melhor VPN para IPTV?", "a": "As VPNs mais populares incluem NordVPN, ExpressVPN e Surfshark para privacidade e streaming seguro." },
          { "q": "O que é uma box IPTV?", "a": "Uma box IPTV é um pequeno dispositivo que se liga à sua TV e permite transmitir conteúdo IPTV diretamente." },
          { "q": "A IPTV é legal em Portugal?", "a": "A IPTV é legal quando fornecida por serviços licenciados. Escolha sempre provedores verificados para garantir um uso seguro." },
          { "q": "Por que razão a minha IPTV está a fazer buffering?", "a": "O buffering geralmente acontece devido a internet lenta, servidores sobrecarregados ou ligação WiFi instável." }
        ]
      },
      "policies": {
        "terms": {
          "title": "Termos de Uso",
          "content": [
            { "h": "1. Aceitação dos Termos", "p": "Ao aceder ou usar os serviços da IPTV Portugal, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se não concordar com qualquer parte destes termos, não deve usar os nossos serviços.\nO uso contínuo do serviço indica a aceitação total destes termos e de quaisquer atualizações futuras." },
            { "h": "2. Visão Geral do Serviço", "p": "A IPTV Portugal fornece um serviço de streaming de televisão digital entregue via protocolo de internet (IPTV). O serviço pode incluir:\n• Canais de TV ao vivo\n• Conteúdo de Video on Demand (VOD) (filmes e séries)\n• Guia Eletrónico de Programação (EPG)\n• Assistência ao cliente\nA disponibilidade de conteúdo pode variar e ser alterada sem aviso prévio devido a razões técnicas ou operacionais." },
            { "h": "3. Conta e Acesso", "p": "Após a compra, os utilizadores recebem credenciais de login, tais como:\n• Link da lista M3U\n• Códigos Xtream (utilizador, senha, URL do servidor)\n\nOs utilizadores são responsáveis por:\n• Manter as credenciais confidenciais\n• Impedir o acesso não autorizado\n• Todas as atividades sob a sua conta\n\nA partilha de acesso fora da sua residência é estritamente proibida." },
            { "h": "4. Política de Uso Aceitável", "p": "O serviço destina-se apenas a uso pessoal e não comercial.\nVocê concorda em NÃO:\n• Revender ou redistribuir o serviço\n• Partilhar credenciais com terceiros\n• Usar o serviço em ambientes comerciais (bares, lojas, etc.)\n• Gravar ou distribuir conteúdo\n\nA violação pode resultar no encerramento imediato da conta sem reembolso." },
            { "h": "5. Subscrição e Pagamentos", "p": "• Os preços são exibidos em EUR (€)\n• Planos de subscrição: 6, 12, ou 24 meses\n• Os pagamentos são processados manualmente via WhatsApp\n• Sem renovação automática (o utilizador deve renovar manualmente)\n\nO acesso permanece válido até ao fim da subscrição." },
            { "h": "6. Disponibilidade do Serviço", "p": "O nosso objetivo é fornecer um serviço estável, mas não garantimos um streaming sem interrupções.\nO serviço pode ser afetado por:\n• Problemas de ligação à internet\n• Compatibilidade do dispositivo\n• Aplicações de terceiros\n• Manutenção dos servidores" },
            { "h": "7. Rescisão", "p": "Reservamo-nos o direito de suspender ou encerrar contas se:\n• Os termos forem violados\n• For detetado mau uso\n• Surgirem riscos operacionais" },
            { "h": "8. Alterações aos Termos", "p": "Podemos atualizar estes termos a qualquer momento. O uso contínuo do serviço significa que aceita os termos atualizados." },
            { "h": "9. Contacto", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "privacy": {
          "title": "Política de Privacidade",
          "content": [
            { "h": "1. Introdução", "p": "A sua privacidade é importante para nós. Esta política explica como recolhemos, usamos e protegemos os seus dados pessoais." },
            { "h": "2. Dados que Recolhemos", "p": "Recolhemos apenas os dados necessários:\n• Nome\n• Número de WhatsApp\n\nNÃO recolhemos informações pessoais desnecessárias." },
            { "h": "3. Finalidade dos Dados", "p": "Os seus dados são usados para:\n• Processar encomendas\n• Entregar credenciais de login\n• Fornecer suporte\n• Enviar atualizações do serviço" },
            { "h": "4. Proteção de Dados", "p": "Nós usamos:\n• Encriptação SSL (HTTPS)\n• Armazenamento seguro de dados\n• Sistemas de acesso restrito" },
            { "h": "5. Partilha de Dados", "p": "NÃO vendemos ou partilhamos os seus dados.\nOs dados apenas são partilhados quando:\n• Exigido por lei\n• Necessário para processamento de pagamento" },
            { "h": "6. Direitos do Utilizador (RGPD)", "p": "Você tem o direito de:\n• Aceder aos seus dados\n• Corrigir os seus dados\n• Apagar os seus dados\n• Solicitar a portabilidade dos dados" },
            { "h": "7. Retenção de Dados", "p": "Mantemos os dados apenas pelo tempo necessário para a operação do serviço e conformidade legal." },
            { "h": "8. Atualizações", "p": "A política pode mudar com o tempo. O uso contínuo significa aceitação." },
            { "h": "9. Contacto", "p": "📱 WhatsApp: +44 7988 579524" }
          ]
        },
        "refund": {
          "title": "Política de Reembolso",
          "content": [
            { "h": "1. Visão Geral", "p": "O nosso objetivo é a satisfação do cliente e um serviço justo." },
            { "h": "2. Elegibilidade para Reembolso", "p": "Os reembolsos APENAS são permitidos se:\n• Solicitados num prazo de 48 horas\n• O serviço tiver um problema técnico do nosso lado\n• O problema não puder ser resolvido" },
            { "h": "3. Casos Não Reembolsáveis", "p": "Os reembolsos NÃO são fornecidos por:\n• Mudança de ideias\n• Configuração incorreta\n• Ligação fraca à internet\n• Incompatibilidade de dispositivo\n• Solicitações tardias (após 48 horas)" },
            { "h": "4. Processo de Solicitação", "p": "Envie via WhatsApp:\n• Detalhes do pedido\n• Descrição do problema\n• Hora da compra" },
            { "h": "5. Tempo de Processamento", "p": "Os reembolsos demoram de 5 a 10 dias úteis, dependendo do método de pagamento." },
            { "h": "6. Suporte", "p": "Tentamos sempre corrigir o problema primeiro antes de reembolsar." }
          ]
        },
        "cookie": {
          "title": "Política de Cookies",
          "content": [
            { "h": "1. O que são Cookies", "p": "Os cookies são pequenos ficheiros armazenados no seu dispositivo para melhorar a experiência do utilizador." },
            { "h": "2. Tipos de Cookies Usados", "p": "Cookies Essenciais:\n• Necessários para a funcionalidade do site\n• Navegação e gestão de sessão\n\nCookies Analíticos:\n• Ajudam a melhorar a performance\n• Rastream o comportamento do utilizador de forma anónima" },
            { "h": "3. Cookies de Terceiros", "p": "Podemos usar:\n• Google Fonts\n• Ferramentas analíticas" },
            { "h": "4. Gestão de Cookies", "p": "Os utilizadores podem:\n• Desativar cookies\n• Apagar cookies\n• Bloquear cookies de terceiros" },
            { "h": "5. Impacto ao Desativar", "p": "Desativar cookies pode afetar o desempenho do website." },
            { "h": "6. Atualizações", "p": "A política pode mudar a qualquer momento." }
          ]
        },
        "dmca": {
          "title": "Política DMCA",
          "content": [
            { "h": "1. Introdução", "p": "Respeitamos os direitos de propriedade intelectual e cumprimos as leis de direitos de autor." },
            { "h": "2. Denunciar Infração de Direitos de Autor", "p": "Forneça:\n• Prova de propriedade\n• Identificação do conteúdo\n• Dados de contacto\n• Declaração de boa fé" },
            { "h": "3. Ação Tomada", "p": "Podemos:\n• Remover o conteúdo\n• Suspender contas\n• Investigar denúncias" },
            { "h": "4. Contra-reclamações", "p": "Os utilizadores podem enviar uma contra-notificação se o conteúdo foi removido injustamente." },
            { "h": "5. Violações Repetidas", "p": "Violações repetidas resultam em banimentos permanentes." },
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
