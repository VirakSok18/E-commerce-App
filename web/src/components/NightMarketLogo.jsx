import React from 'react';

export default function NightMarketLogo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Night Market Logo</title>
      <rect width="100" height="100" rx="24" fill="#2C3E50" />
      <path
        d="M50 20C40 20 33 27 33 37V40H67V37C67 27 60 20 50 20ZM50 26C55.5 26 60.5 30.5 61 36.5C59 34 55 32 50 32C45 32 41 34 39 36.5C39.5 30.5 44.5 26 50 26Z"
        fill="#FF8C42"
      />
      <path
        d="M26 38H74C76.2 38 78 39.8 77.8 42L74.2 78C74 80.2 72.2 82 70 82H30C27.8 82 26 80.2 25.8 78L22.2 42C22 39.8 23.8 38 26 38Z"
        fill="#FF6B35"
      />
      <path
        d="M50 48C43.4 48 38 53.4 38 60C38 66.6 43.4 72 50 72C54.2 72 57.9 69.8 60 66.5C54.5 66 50 61.5 50 56C50 52.5 51.8 49.5 54.5 48.2C53.1 48.1 51.6 48 50 48Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
