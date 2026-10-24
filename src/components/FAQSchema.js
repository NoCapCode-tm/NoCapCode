import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { globalFaqs, getRegionalFaq } from './data/faqs.js';

export default function FAQSchema() {
  const { countryCode } = useParams();
  const region = countryCode?.toLowerCase();
  
  let combinedFaqs = Array.isArray(globalFaqs) ? [...globalFaqs] : [];

  if (region && typeof getRegionalFaq === 'function') {
    const regionalEntries = getRegionalFaq(region, region.toUpperCase());
    if (Array.isArray(regionalEntries)) {
      combinedFaqs = [...combinedFaqs, ...regionalEntries];
    }
  }

  // Deduplicate and ensure non-empty question/answer strings for strict Google Rich Results validation
  const seen = new Set();
  const validFaqs = combinedFaqs.filter(faq => {
    const q = (faq?.question || faq?.q || '').trim();
    const a = (faq?.answer || faq?.a || '').trim();
    if (!q || !a || seen.has(q)) return false;
    seen.add(q);
    return true;
  });

  if (validFaqs.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": validFaqs.map(faq => ({
      "@type": "Question",
      "name": (faq.question || faq.q).trim(),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": (faq.answer || faq.a).trim()
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}