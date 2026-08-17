import React from 'react';

export const oakwellTheme = {
  clinicName: "Oakwell Dental",
  location: "Leeds, UK",
  phone: "0113 496 0000",
  email: "hello@oakwelldental.co.uk",
  accentColor: "#4FA3E0", // blue
  bgColor: "#08080f", // dark
  cardBg: "#0b0b14",
  headerBg: "#0b0b14", // for chatbot
  chatBg: "#05050a", // for chatbot
  borderColor: "rgba(255,255,255,0.08)",
  textColor: "text-zinc-300",
  mutedColor: "text-zinc-500",
  ctaText: "#08080f", // text on accent
};

export const oakwellHero = {
  tagline: "Modern dentistry · Without the anxiety.",
  subTagline: "A sleek, patient-first dental experience in the heart of Leeds. General dentistry, implants, and Invisalign.",
  stats: [
    { value: "500+", label: "5-Star Reviews" },
    { value: "0% APR", label: "Finance Available" },
    { value: "Same-Day", label: "Emergencies" },
  ],
};

export const oakwellServices = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "General Dentistry",
    description: "Comprehensive check-ups, hygiene, and restorative care using the latest minimally invasive techniques."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Invisalign",
    description: "Clear, comfortable aligners to straighten your teeth discreetly. Includes 3D digital scanning."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
    title: "Teeth Whitening",
    description: "Professional, safe, and effective teeth whitening treatments for a brighter, more confident smile."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth, restoring both function and aesthetics."
  }
];

export const oakwellTrust = {
  headline: "A different kind of dental practice.",
  subHeadline: "We've re-imagined the dental experience from the ground up to be calm, transparent, and completely tailored to you.",
  points: [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: "Nervous patient specialists",
      description: "Our environment and approach are designed to keep you relaxed and fully informed."
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: "Fully transparent pricing",
      description: "No hidden fees, ever. We discuss all costs before beginning any treatment."
    }
  ],
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Online Booking" },
    { value: "100%", label: "Digital Workflow" },
    { value: "5★", label: "Google Rating" },
  ]
};

export const oakwellTestimonials = [
  {
    name: "Sarah Jenkins",
    role: "Invisalign Patient",
    quote: "I put off going to the dentist for years due to anxiety. The team at Oakwell completely changed my perspective. So calm and professional.",
    rating: 5
  },
  {
    name: "David T.",
    role: "Routine Care",
    quote: "The easiest booking process I've ever experienced, and the clinic itself feels more like a modern lounge than a dental practice.",
    rating: 5
  },
  {
    name: "Emma W.",
    role: "Implant Patient",
    quote: "Incredible attention to detail. My new implant looks and feels exactly like a natural tooth. Cannot recommend them highly enough.",
    rating: 5
  }
];
