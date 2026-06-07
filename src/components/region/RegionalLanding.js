import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// 1. The Global Master List for Top 50+ Tech Hubs
const supportedCountries = {
  // North America
  us: { name: "the USA", lang: "en-us" },
  ca: { name: "Canada", lang: "en-ca" },
  mx: { name: "Mexico", lang: "en-mx" },

  // Europe (Top Tech Hubs)
  uk: { name: "the UK", lang: "en-gb" },
  ie: { name: "Ireland", lang: "en-ie" },
  de: { name: "Germany", lang: "en-de" },
  fr: { name: "France", lang: "en-fr" },
  nl: { name: "the Netherlands", lang: "en-nl" },
  ch: { name: "Switzerland", lang: "en-ch" },
  se: { name: "Sweden", lang: "en-se" },
  no: { name: "Norway", lang: "en-no" },
  dk: { name: "Denmark", lang: "en-dk" },
  fi: { name: "Finland", lang: "en-fi" },
  it: { name: "Italy", lang: "en-it" },
  es: { name: "Spain", lang: "en-es" },
  pt: { name: "Portugal", lang: "en-pt" },
  be: { name: "Belgium", lang: "en-be" },
  pl: { name: "Poland", lang: "en-pl" },
  cz: { name: "the Czech Republic", lang: "en-cz" },
  ro: { name: "Romania", lang: "en-ro" },
  ua: { name: "Ukraine", lang: "en-ua" },
  at: { 
    name: "Österreich", 
    lang: "de-at", 
    overrideTitle: "NoCapCode™ Österreich | Maßgeschneiderte Softwareentwicklung & KI",
    overrideDesc: "NoCapCode entwickelt hochperformante Individualsoftware, Webanwendungen und KI-Automatisierung für Unternehmen in Österreich und Europa." 
  },

  // Asia Pacific
  in: { 
    name: "India", 
    lang: "en-in",
    overrideTitle: "NoCapCode™ India | Top Custom Software & Product Engineering Studio",
    overrideDesc: "NoCapCode delivers world-class custom software engineering, scalable websites, and advanced AI workflow automations built for global scale."
  },
  au: { name: "Australia", lang: "en-au" },
  nz: { name: "New Zealand", lang: "en-nz" },
  sg: { name: "Singapore", lang: "en-sg" },
  jp: { name: "Japan", lang: "en-jp" },
  kr: { name: "South Korea", lang: "en-kr" },
  tw: { name: "Taiwan", lang: "en-tw" },
  hk: { name: "Hong Kong", lang: "en-hk" },
  cn: { name: "China", lang: "en-cn" },
  id: { name: "Indonesia", lang: "en-id" },
  my: { name: "Malaysia", lang: "en-my" },
  ph: { name: "the Philippines", lang: "en-ph" },
  vn: { name: "Vietnam", lang: "en-vn" },
  th: { name: "Thailand", lang: "en-th" },
  pk: { name: "Pakistan", lang: "en-pk" },
  bd: { name: "Bangladesh", lang: "en-bd" },
  lk: { name: "Sri Lanka", lang: "en-lk" },

  // Middle East
  ae: { 
    name: "the UAE", 
    lang: "en-ae",
    overrideTitle: "NoCapCode™ UAE | Elite Custom Software & AI Automation Dubai",
    overrideDesc: "NoCapCode engineers high-performance custom applications, websites, and business AI automation pipelines for enterprises across the UAE."
  },
  sa: { name: "Saudi Arabia", lang: "en-sa" },
  qa: { name: "Qatar", lang: "en-qa" },
  kw: { name: "Kuwait", lang: "en-kw" },
  bh: { name: "Bahrain", lang: "en-bh" },
  om: { name: "Oman", lang: "en-om" },
  il: { name: "Israel", lang: "en-il" },

  // Africa
  za: { name: "South Africa", lang: "en-za" },
  ng: { name: "Nigeria", lang: "en-ng" },
  eg: { name: "Egypt", lang: "en-eg" },

  // South America
  br: { name: "Brazil", lang: "en-br" },
  ar: { name: "Argentina", lang: "en-ar" }
};

// 2. The Dynamic SEO Generator
const getDynamicSEO = (countryCode) => {
  const code = countryCode?.toLowerCase();
  const country = supportedCountries[code];

  // If no valid country code is found in the URL, serve the global defaults
  if (!country) {
    return {
      title: "NoCapCode™ | Custom Software Development & AI Automation",
      desc: "NoCapCode builds custom software, SaaS platforms, websites, mobile apps, and AI automation systems for startups and modern businesses worldwide.",
      isGlobal: true
    };
  }

  // Generate the SEO dynamically using the country data
  return {
    title: country.overrideTitle || `NoCapCode™ ${country.name} | Custom Software Development & AI Automation`,
    desc: country.overrideDesc || `NoCapCode builds premium custom software, SaaS platforms, and AI automation systems for startups and modern businesses across ${country.name}.`,
    isGlobal: false
  };
};

export default function Home() {
  // Read the country code from the URL (e.g., /us, /uk, /at)
  const { countryCode } = useParams();
  const currentKey = countryCode?.toLowerCase();
  const seo = getDynamicSEO(currentKey);

  return (
    <div className="home-wrapper">
      {/* 3. Dynamically update the document head */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
        <link 
          rel="canonical" 
          href={seo.isGlobal ? "https://nocapcode.cloud/" : `https://nocapcode.cloud/${currentKey}`} 
        />
        
        {/* Automatically loop through all 50+ countries to generate the cross-linking map */}
        {Object.entries(supportedCountries).map(([code, data]) => (
          <link 
            key={code} 
            rel="alternate" 
            href={`https://nocapcode.cloud/${code}`} 
            hreflang={data.lang} 
          />
        ))}
        <link rel="alternate" href="https://nocapcode.cloud/" hreflang="x-default" />
      </Helmet>

      {/* Your beautiful existing landing page code, Three.js scenes, GSAP components continue exactly as they are below */}
      <main>
        {/* Your existing components like <Hero />, <AnimatedBackground />, etc. */}
      </main>
    </div>
  );
}