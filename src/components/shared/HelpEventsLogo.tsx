import React from "react";

const HelpEventsLogo = () => {
  return (
    <div className="flex items-center gap-2 justify-self-start">
      <svg width="36" height="36" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#FFC94A" />
        <path d="M22 28C5 18 10 4 22 12C34 4 39 18 22 28Z" fill="#0E3B43" />
        <path d="M5 27Q22 46 39 27Q22 36 5 27Z" fill="#0E3B43" />
      </svg>
      <span className="hidden text-xl font-bold text-white sm:inline">
        Help Events
      </span>
    </div>
  );
};

export default HelpEventsLogo;
