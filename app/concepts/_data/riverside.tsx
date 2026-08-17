import React from 'react';

export const riversideTheme = {
  clinicName: "Riverside Dental",
  location: "Bristol, UK",
  phone: "0117 496 0000",
  email: "hello@riversidedental.co.uk",
  accentColor: "#2d5a4e", // green
  bgColor: "#faf8f5", // warm white
  cardBg: "#ffffff",
  headerBg: "#ffffff", // for chatbot
  chatBg: "#faf8f5", // for chatbot
  borderColor: "rgba(28,43,32,0.12)",
  textColor: "#1c2b20",
  textClass: "text-[#1c2b20]",
  mutedColor: "text-[#1c2b20]/80",
  ctaText: "#ffffff", // text on accent
};

export const riversideHero = {
  tagline: "Family dentistry · With a gentle touch.",
  subTagline: "A welcoming, family-focused dental practice in Bristol. Providing lifelong care for smiles of all ages.",
  stats: [
    { value: "2,000+", label: "Happy Families" },
    { value: "NHS/Private", label: "Options Available" },
    { value: "Kids Go Free", label: "With Parents" },
  ],
};

export const riversideServices = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Family Care",
    description: "Comprehensive care for the whole family, from your toddler's first visit to senior dental health."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Preventative",
    description: "Regular check-ups, hygiene visits, and tailored advice to keep your teeth healthy for life."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
    title: "Restorative",
    description: "High-quality fillings, crowns, and bridges to restore the strength and function of your teeth."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Emergency",
    description: "Same-day appointments available for pain relief, broken teeth, and urgent dental care."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 2 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Cosmetic Care",
    description: "Enhance your smile with professional whitening, veneers, and aesthetic treatments."
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h20M12 2v20M5 5l14 14M19 5L5 19"/></svg>,
    title: "Orthodontics",
    description: "Clear aligners and traditional braces for perfectly straight teeth and optimal bite function."
  }
];

export const riversideTrust = {
  headline: "Your local friendly dentist.",
  subHeadline: "We believe a visit to the dentist shouldn't be stressful. We've created a warm, welcoming environment where everyone feels at ease.",
  points: [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: "Great with kids",
      description: "Our team loves helping children build positive habits and keeping their visits fun and relaxed."
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: "Community focused",
      description: "Proudly serving the Bristol community for over 15 years with reliable, honest dental care."
    }
  ],
  stats: [
    { value: "15+", label: "Years in Bristol" },
    { value: "Late", label: "Thursday Openings" },
    { value: "Free", label: "Parking" },
    { value: "5★", label: "Patient Reviews" },
  ]
};

export const riversideTestimonials = [
  {
    name: "Mark & Family",
    role: "Family Patients",
    quote: "We've been bringing our kids here for years. The team is so patient and wonderful with them. It makes our check-ups a breeze.",
    rating: 5
  },
  {
    name: "Anna K.",
    role: "Routine Care",
    quote: "Such a warm and welcoming practice. I used to dread the dentist, but everyone at Riverside is incredibly gentle and reassuring.",
    rating: 5
  },
  {
    name: "Tom R.",
    role: "Emergency Patient",
    quote: "Got me in on the same day when I had terrible toothache. The dentist explained everything clearly and got me out of pain quickly.",
    rating: 5
  }
];
