import React from "react";

const NoDataFound: React.FC<{ message?: string; secondaryMessage?: string }> = ({
  message = "No data found.",
  secondaryMessage = "Try refreshing or check back later."
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Engaging SVG illustration with animation */}
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8 animate-float"
      >
        <defs>
          <linearGradient id="docGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B64D3" />
            <stop offset="100%" stopColor="#A5B4FC" />
          </linearGradient>
        </defs>
        {/* Document */}
        <rect x="35" y="30" width="70" height="90" rx="10" fill="url(#docGradient)" />
        <rect x="45" y="45" width="50" height="10" rx="3" fill="#fff" opacity="0.8" />
        <rect x="45" y="60" width="40" height="8" rx="2" fill="#fff" opacity="0.7" />
        <rect x="45" y="75" width="30" height="8" rx="2" fill="#fff" opacity="0.6" />
        {/* Magnifying glass */}
        <circle cx="105" cy="105" r="18" fill="#fff" stroke="#3B64D3" strokeWidth="3" />
        <circle cx="105" cy="105" r="10" fill="#A5B4FC" stroke="#3B64D3" strokeWidth="2" />
        <rect x="120" y="120" width="16" height="5" rx="2.5" transform="rotate(45 120 120)" fill="#3B64D3" />
        {/* Sparkles */}
        <g>
          <circle cx="60" cy="35" r="2" fill="#FACC15" />
          <circle cx="120" cy="50" r="1.5" fill="#F472B6" />
          <circle cx="80" cy="120" r="1.8" fill="#34D399" />
        </g>
      </svg>
      <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center drop-shadow-sm">
        {message}
      </h2>
      <p className="text-gray-500 text-base text-center max-w-lg mb-2">
        {secondaryMessage}
      </p>
    </div>
  );
};

// Add a floating animation using Tailwind's arbitrary keyframes
// In your global CSS (e.g., index.css), add:
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
// .animate-float { animation: float 2.5s ease-in-out infinite; }

export default NoDataFound; 