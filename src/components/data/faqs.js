// src/data/faqs.js

// 1. Global Core FAQs (Served to your main homepage)
export const globalFaqs = [
  {
    question: "What does NoCapCode do?",
    answer: "NoCapCode builds custom software systems, SaaS platforms, corporate websites, mobile applications, AI automation architectures, and scalable digital infrastructure for startups and modern businesses worldwide."
  },
  {
    question: "Do you develop SaaS products and MVPs?",
    answer: "Yes. SaaS engineering and MVP development are core competencies at NoCapCode. We guide founders from initial architecture validation to stable, production-ready, scalable systems."
  },
  {
    question: "Does NoCapCode provide AI automation services?",
    answer: "Yes. We design and integrate customized AI automation systems, large language model (LLM) workflows, internal operational tools, and complex API pipelines to optimize business efficiency."
  }
];

// 2. The Multi-Variant Regional Matrix Engine
// Generates a deep, localized pool of software engineering FAQs for all 60+ countries
export const getRegionalFaq = (regionCode, regionName) => {
  const code = regionCode?.toLowerCase();

  // Core thematic blocks tailored dynamically by the region variable
  const matrix = {
    // Development Services
    software: {
      question: `Looking for a reliable custom software development company in ${regionName}?`,
      answer: `NoCapCode provides high-performance custom software engineering tailored specifically to business ecosystems across ${regionName}, emphasizing clean architecture and long-term maintainability.`
    },
    saas: {
      question: `How does NoCapCode launch SaaS products and MVPs for startups in ${regionName}?`,
      answer: `We work directly with founders in ${regionName} to plan, engineer, and deploy highly scalable SaaS platforms, removing technical debt early and building clean, modular frontends and backends.`
    },
    ai: {
      question: `Can NoCapCode deploy custom AI automations and LLM workflows for businesses in ${regionName}?`,
      answer: `Yes. We engineer workflows using intelligent automated engines, API integrations, and secure database connections to replace manual overhead for teams located in ${regionName}.`
    },
    webgl: {
      question: `Do you engineer high-end creative frontends, interactive 3D elements, and WebGL sites for brands in ${regionName}?`,
      answer: `Absolutely. NoCapCode designs immersive web experiences combining React, Three.js, and complex shader layouts, ensuring flawless performance across desktop and mobile browsers in ${regionName}.`
    },
    
    // Project Management & Collaboration
    collaboration: {
      question: `How does NoCapCode handle project management and communication with clients in ${regionName}?`,
      answer: `We use milestone-based execution trackers, transparent asynchronous updates, and clear dashboard timelines to give ${regionName} businesses absolute visibility at every phase of the sprint.`
    },
    timezone: {
      question: `Does your team offer timezone-aligned sprint meetings and support for ${regionName}?`,
      answer: `Yes. Our agile software developers sync daily cycles and delivery pipelines to guarantee efficient real-time communication during standard business hours in ${regionName}.`
    },

    // Technical Standards & Security
    compliance: {
      question: `Are the software apps and data integrations engineered by NoCapCode fully compliant with privacy policies in ${regionName}?`,
      answer: `Yes. Every system we deploy for the ${regionName} market integrates secure hosting setups, data-at-rest encryption, and explicit structural structures adhering strictly to local regional standards.`
    },
    cloud: {
      question: `What backend cloud infrastructure does NoCapCode deploy for enterprise applications in ${regionName}?`,
      answer: `We build robust, scalable cloud infrastructure using secure cloud native global networks, optimized edge caching, and serverless architectures designed for high-traffic networks in ${regionName}.`
    },
    refactoring: {
      question: `Can NoCapCode refactor, audit, or scale legacy codebases or broken systems for companies in ${regionName}?`,
      answer: `Yes. We stabilize, clean, and optimize legacy codebases in ${regionName} that suffer from critical crashes, scaling limitations, or poor historical code implementation.`
    },

    // Business Logistics
    ip: {
      question: `Do clients in ${regionName} retain full code ownership and intellectual property rights?`,
      answer: `Yes. Upon successful milestone completion, all source code repositories, visual designs, database architectures, and digital intellectual properties are transferred directly to your ${regionName} business entity.`
    },
    maintenance: {
      question: `Does your software studio provide post-launch long-term support and maintenance services across ${regionName}?`,
      answer: `Yes, we back our code deployments with dedicated technical maintenance packages, uptime monitoring intervals, and performance optimization routines tailored for companies across ${regionName}.`
    },
    startups: {
      question: `Why should an early-stage startup or non-technical founder in ${regionName} choose NoCapCode?`,
      answer: `We cut through standard agency fluff by delivering deep scope clarity via our 'Start With Clarity' model, making sure your venture in ${regionName} ships code that aligns perfectly with real commercial validation.`
    }
  };

  // 3. Smart Categorization Map
  // Returns an array of contextual questions based on regional profiles
  const regionalSelection = [];

  // Always seed regional foundational profiles
  regionalSelection.push(matrix.software, matrix.saas, matrix.ai, matrix.webgl, matrix.collaboration, matrix.ip, matrix.maintenance, matrix.startups);

  // Apply target compliance parameters for specific global regulatory environments
  if (['uk', 'de', 'fr', 'at', 'nl', 'ie', 'se', 'no', 'dk', 'fi', 'it', 'es', 'pt', 'be', 'pl', 'cz', 'ro'].includes(code)) {
    regionalSelection.push(matrix.compliance);
  } else {
    // Apply standard operational cloud infrastructure templates for other global nodes
    regionalSelection.push(matrix.cloud);
  }

  // Handle direct timezone/proximity matching profiles
  if (['us', 'ca', 'mx', 'uk', 'ae', 'sa', 'in', 'au'].includes(code)) {
    regionalSelection.push(matrix.timezone);
  } else {
    regionalSelection.push(matrix.refactoring);
  }

  return regionalSelection;
};