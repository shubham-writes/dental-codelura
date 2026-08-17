import React from 'react';

export const northbridgeTheme = {
  clinicName: "Northbridge Dental",
  location: "London, UK",
  phone: "020 7946 0000",
  email: "hello@northbridge.co.uk",
  accentColor: "#9e7d2b", // richer, darker gold for high contrast against cream
  bgColor: "#f9f6f1", // cream
  cardBg: "#ffffff",
  headerBg: "#ffffff", // for chatbot
  chatBg: "#f9f6f1", // for chatbot
  borderColor: "rgba(14,26,46,0.12)",
  textColor: "#0e1a2e",
  textClass: "text-[#0e1a2e]",
  mutedColor: "text-[#0e1a2e]/80",
  ctaText: "#ffffff", // text on accent
};

export const northbridgeHero = {
  tagline: "Smile makeovers · Designed for you.",
  subTagline: "A luxury cosmetic practice in London offering bespoke veneers, composite bonding, and advanced facial aesthetics.",
  stats: [
    { value: "1,000+", label: "Makeovers" },
    { value: "0% APR", label: "Finance" },
    { value: "Bespoke", label: "Treatment Plans" },
  ],
};

export const northbridgeServices = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Veneers",
    description: "Hand-crafted porcelain veneers designed to create your perfect, natural-looking smile."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Composite Bonding",
    description: "Non-invasive reshaping and contouring to repair chips, close gaps, and enhance your smile in one visit."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
    title: "Teeth Whitening",
    description: "Premium laser whitening and home kits for a brilliantly bright and lasting result."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Smile Design",
    description: "Digital smile design technology allowing you to preview your new smile before treatment begins."
  }
];

export const northbridgeTrust = {
  headline: "Luxury dental care.",
  subHeadline: "We combine world-class expertise with a 5-star concierge service to deliver the ultimate cosmetic dentistry experience.",
  points: [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: "Award-winning clinicians",
      description: "Our team includes some of the UK's most sought-after cosmetic dentists and specialists."
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: "Bespoke treatment plans",
      description: "Every smile is unique. We tailor every aspect of your treatment to your facial aesthetics."
    }
  ],
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "VIP", label: "Patient Care" },
    { value: "3D", label: "Smile Design" },
    { value: "5★", label: "Patient Rating" },
  ]
};

export const northbridgeTestimonials = [
  {
    name: "Eleanor H.",
    role: "Veneers Patient",
    quote: "My new veneers have completely transformed my confidence. The process was flawless and the results are stunningly natural.",
    rating: 5
  },
  {
    name: "James C.",
    role: "Composite Bonding",
    quote: "I couldn't believe they achieved this in a single visit. The team's attention to detail is truly world-class.",
    rating: 5
  },
  {
    name: "Sophie M.",
    role: "Smile Makeover",
    quote: "From the first consultation to the final reveal, the service was impeccable. Worth every penny for this level of care.",
    rating: 5
  }
];
