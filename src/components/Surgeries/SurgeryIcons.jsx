const Base = ({ children }) => (
  <svg viewBox="0 0 64 64" width="56" height="56">
    <circle cx="32" cy="32" r="30" fill="#EEF2FF" />
    {children}
  </svg>
);

// 1. Piles
export const PilesIcon = () => (
  <Base>
    <path
      d="M22 34c4-6 16-6 20 0"
      stroke="#4F46E5"
      strokeWidth="3"
      fill="none"
    />
  </Base>
);

// 2. Hernia
export const HerniaIcon = () => (
  <Base>
    <circle cx="32" cy="36" r="8" fill="#FB923C" />
  </Base>
);

// 3. Kidney Stone
export const KidneyStoneIcon = () => (
  <Base>
    <path
      d="M24 22c-6 6-4 18 4 20"
      stroke="#EF4444"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M40 22c6 6 4 18-4 20"
      stroke="#EF4444"
      strokeWidth="3"
      fill="none"
    />
  </Base>
);

// 4. Cataract
export const CataractIcon = () => (
  <Base>
    <circle
      cx="32"
      cy="32"
      r="10"
      stroke="#374151"
      strokeWidth="3"
      fill="none"
    />
  </Base>
);

// 5. Circumcision
export const CircumcisionIcon = () => (
  <Base>
    <path d="M32 18v28" stroke="#F59E0B" strokeWidth="4" />
  </Base>
);

// 6. Lasik
export const LasikIcon = () => (
  <Base>
    <path d="M20 32h24" stroke="#2563EB" strokeWidth="3" />
    <circle cx="32" cy="32" r="6" fill="#93C5FD" />
  </Base>
);

// 7. Varicose Veins
export const VaricoseIcon = () => (
  <Base>
    <path
      d="M32 18c-6 8 6 14 0 28"
      stroke="#DC2626"
      strokeWidth="3"
      fill="none"
    />
  </Base>
);

// 8. Gallstone
export const GallstoneIcon = () => (
  <Base>
    <ellipse cx="32" cy="36" rx="10" ry="6" fill="#FBBF24" />
  </Base>
);

// 9. Anal Fistula
export const AnalFistulaIcon = () => (
  <Base>
    <circle cx="32" cy="32" r="6" fill="#FB7185" />
    <path d="M32 38v8" stroke="#FB7185" strokeWidth="3" />
  </Base>
);

// 10. Gynaecomastia
export const GynaecomastiaIcon = () => (
  <Base>
    <circle cx="26" cy="32" r="6" fill="#F472B6" />
    <circle cx="38" cy="32" r="6" fill="#F472B6" />
  </Base>
);

// 11. Anal Fissure
export const AnalFissureIcon = () => (
  <Base>
    <path d="M32 20v24" stroke="#EF4444" strokeWidth="3" />
  </Base>
);

// 12. Lipoma
export const LipomaIcon = () => (
  <Base>
    <circle cx="32" cy="34" r="10" fill="#FDBA74" />
  </Base>
);

// 13. Sebaceous Cyst
export const SebaceousIcon = () => (
  <Base>
    <circle cx="32" cy="32" r="8" fill="#FCD34D" />
  </Base>
);

// 14. Pilonidal Sinus
export const PilonidalIcon = () => (
  <Base>
    <path d="M32 20v24" stroke="#7C3AED" strokeWidth="3" />
    <circle cx="32" cy="44" r="3" fill="#7C3AED" />
  </Base>
);

// 15. Lump in Breast
export const BreastLumpIcon = () => (
  <Base>
    <circle cx="32" cy="34" r="10" fill="#FCA5A5" />
    <circle cx="32" cy="34" r="3" fill="#991B1B" />
  </Base>
);

// 16. TURP
export const TurpIcon = () => (
  <Base>
    <ellipse cx="32" cy="36" rx="12" ry="8" fill="#60A5FA" />
  </Base>
);

// 17. Hydrocele
export const HydroceleIcon = () => (
  <Base>
    <circle cx="28" cy="36" r="6" fill="#93C5FD" />
    <circle cx="36" cy="36" r="6" fill="#93C5FD" />
  </Base>
);

// 18. Knee Replacement
export const KneeIcon = () => (
  <Base>
    <path d="M32 18v28" stroke="#4B5563" strokeWidth="4" />
  </Base>
);

// 19. Hair Transplant
export const HairTransplantIcon = () => (
  <Base>
    <path
      d="M22 26c4-6 16-6 20 0"
      stroke="#111827"
      strokeWidth="3"
      fill="none"
    />
  </Base>
);
