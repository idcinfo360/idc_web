import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({
  title = "IDC - Indian Developer Community | Empowering Developers Across India",
  description = "Join IDC, India's largest developer community. Connect with Indian developers, participate in hackathons, learn new technologies, and advance your programming career.",
  keywords = "Developer Community, IDC, Indian Developer, Indian Developer Community, Developer, Programming, Hackathons, Technology, India, Coding, Software Development, Tech Community, Dharmik Gohil",
  author = "Dharmik Gohil",
  url = "https://indiandevelopercommunity.in/",
  image = "https://indiandevelopercommunity.in/idc-social-preview.jpg",
  type = "website",
  structuredData = null,
  canonical = null
}) => {
  const finalUrl = canonical || url;
  const finalImage = image.startsWith('http') ? image : `https://indiandevelopercommunity.in${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Indian Developer Community" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content="@dharmikgohil" />
      <meta name="twitter:site" content="@idc_community" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;