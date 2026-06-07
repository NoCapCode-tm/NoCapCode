import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { globalFaqs, getRegionalFaq } from './data/faqs.js';

export default function FAQSchema() {
  const { countryCode } = useParams();
  const region = countryCode?.toLowerCase();
  
  // 1. Load the initial global baseline questions
  let combinedFaqs = [...globalFaqs];

  // 2. Fetch the programmatic array of regional variants if a valid countryCode parameter is active
  if (region) {
    // Pass the countryCode along with a capitalized version for the template logic
    const regionalEntries = getRegionalFaq(region, region.toUpperCase());
    
    // Smoothly spread the new array elements into the collection
    if (Array.isArray(regionalEntries)) {
      combinedFaqs = [...combinedFaqs, ...regionalEntries];
    }
  }

  // 3. Map everything into Google's strict JSON-LD specification schema structure
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": combinedFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
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