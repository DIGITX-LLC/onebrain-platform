import OneAPIPage from '../component/about/OneAPIPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OneAPI - Unified AI API Platform for Bangladesh | ChatGPT, Claude, Gemini API',
  description: 'Access ChatGPT, Claude, Gemini, DeepSeek and all top AI models through one API. Pay in BDT with bKash, Nagad. No international card needed. Built for Bangladeshi developers.',
  keywords: [
    'AI API Bangladesh',
    'ChatGPT API Bangladesh',
    'Claude API Bangladesh', 
    'Gemini API Bangladesh',
    'DeepSeek API',
    'unified AI API',
    'OneBrain API',
    'OneAPI',
    'AI API BDT payment',
    'bKash AI payment',
    'Nagad AI payment',
    'AI for developers Bangladesh',
    'OpenAI alternative Bangladesh',
    'affordable AI API',
    'Llama API',
    'Mistral API',
    'AI models Bangladesh',
    'machine learning API',
    'LLM API Bangladesh'
  ],
  authors: [{ name: 'OneBrain', url: 'https://onebrain.app' }],
  creator: 'DigitX',
  publisher: 'OneBrain',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'OneAPI - One API, Every AI Model | OneBrain',
    description: 'Access ChatGPT, Claude, Gemini, DeepSeek and all top AI models through one API endpoint. Pay in BDT with bKash, Nagad. Built for Bangladeshi developers.',
    url: 'https://onebrain.app/api-service',
    siteName: 'OneBrain',
    locale: 'en_BD',
    type: 'website',
    images: [
      {
        url: 'https://onebrain.app/assets/oneBrainLogo.svg',
        width: 1200,
        height: 630,
        alt: 'OneAPI - Unified AI API Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneAPI - One API, Every AI Model',
    description: 'Access ChatGPT, Claude, Gemini & more through one API. Pay in BDT. Built for Bangladesh.',
    creator: '@onaborain_app',
    images: ['https://onebrain.app/assets/oneBrainLogo.svg'],
  },
  alternates: {
    canonical: 'https://onebrain.app/api-service',
  },
  category: 'Technology',
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OneAPI',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description: 'Unified AI API platform providing access to ChatGPT, Claude, Gemini, DeepSeek and more. Pay in BDT with local payment methods.',
  url: 'https://onebrain.app/api-service',
  datePublished: '2026-01-01',
  author: {
    '@type': 'Organization',
    name: 'OneBrain',
    url: 'https://onebrain.app',
  },
  provider: {
    '@type': 'Organization',
    name: 'DigitX',
    url: 'https://digitxgroup.com',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'BDT',
    lowPrice: '499',
    highPrice: '1999',
    offerCount: '3',
  },
  featureList: [
    'ChatGPT API Access',
    'Claude API Access',
    'Gemini API Access',
    'DeepSeek API Access',
    'Llama API Access',
    'Mistral API Access',
    'Pay in BDT',
    'bKash Payment',
    'Nagad Payment',
    'Local Support in Bangladesh',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
};

export default function APIServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OneAPIPage />
    </>
  );
}
