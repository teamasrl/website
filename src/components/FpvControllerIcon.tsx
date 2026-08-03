// components/FpvControllerIcon.tsx
interface IconProps {
  className?: string;
}

export const DroneIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="12" x2="4" y2="4" />
    <line x1="12" y1="12" x2="20" y2="4" />
    <line x1="12" y1="12" x2="4" y2="20" />
    <line x1="12" y1="12" x2="20" y2="20" />
    <circle cx="4" cy="4" r="2.5" />
    <circle cx="20" cy="4" r="2.5" />
    <circle cx="4" cy="20" r="2.5" />
    <circle cx="20" cy="20" r="2.5" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" />
  </svg>
);

export const GogglesIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1.5 8 Q1.5 4 5.5 4 H18.5 Q22.5 4 22.5 8 V15 Q22.5 19 18.5 19 H16.5 Q14 19 12 16.5 Q10 19 7.5 19 H5.5 Q1.5 19 1.5 15 Z" />
    <circle cx="7" cy="11.5" r="3.7" />
    <circle cx="17" cy="11.5" r="3.7" />
    <line x1="1.5" y1="9" x2="0" y2="9" />
    <line x1="22.5" y1="9" x2="24" y2="9" />
  </svg>
);

const FpvControllerIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <div className="flex items-center gap-2">
    <DroneIcon className={className} />
    <span className="text-sm font-medium">FPV</span>
    <GogglesIcon className={className} />
  </div>
);

export default FpvControllerIcon;