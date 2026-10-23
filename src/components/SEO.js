import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "NoCapCode™ | Custom Software Development & AI Automation", 
  description = "NoCapCode builds custom software, SaaS platforms, websites, mobile apps, and AI automation systems for startups and modern businesses worldwide.", 
  canonicalUrl = "https://nocapcode.cloud/",
  image = "https://nocapcode.cloud/internal/og-cover.png",
  type = "website",
  lang = "en"
}) {
  
  let safeCanonical = canonicalUrl.trim();
  if (safeCanonical !== "https://nocapcode.cloud/" && !safeCanonical.endsWith('/')) {
    safeCanonical += '/';
  }

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={safeCanonical} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NoCapCode" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={safeCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* X (Twitter) Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nocapcodecloud" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}