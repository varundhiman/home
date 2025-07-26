import React from 'react';

export const WeightIcon = () => (
  <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#8B5CF6", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#10B981", stopOpacity:1}} />
      </linearGradient>
    </defs>
    
    {/* Background circle */}
    <circle cx="16" cy="16" r="15" fill="url(#gradient)" stroke="white" strokeWidth="2"/>
    
    {/* Scale base */}
    <rect x="8" y="22" width="16" height="3" rx="1.5" fill="white"/>
    
    {/* Scale platform */}
    <rect x="6" y="18" width="20" height="2" rx="1" fill="white"/>
    
    {/* Scale post */}
    <rect x="15" y="12" width="2" height="6" fill="white"/>
    
    {/* Scale dial */}
    <circle cx="16" cy="12" r="4" fill="white"/>
    <circle cx="16" cy="12" r="3" fill="url(#gradient)"/>
    
    {/* Scale needle */}
    <line x1="16" y1="12" x2="18" y2="10" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const BlogIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

export const ReviewIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);