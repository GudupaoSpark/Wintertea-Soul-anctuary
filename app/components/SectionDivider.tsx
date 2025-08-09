"use client";

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'zigzag';
  color?: string;
  flip?: boolean;
}

export default function SectionDivider({ 
  variant = 'wave', 
  color = '#fef3c7',
  flip = false 
}: SectionDividerProps) {
  const getPath = () => {
    switch (variant) {
      case 'wave':
        return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
      case 'curve':
        return "M0,64L1440,32L1440,0L0,0Z";
      case 'zigzag':
        return "M0,32L60,16L120,32L180,16L240,32L300,16L360,32L420,16L480,32L540,16L600,32L660,16L720,32L780,16L840,32L900,16L960,32L1020,16L1080,32L1140,16L1200,32L1260,16L1320,32L1380,16L1440,32L1440,0L0,0Z";
      default:
        return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    }
  };

  return (
    <div className={`relative ${flip ? 'transform rotate-180' : ''}`}>
      <svg
        className="w-full h-16 md:h-20"
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getPath()}
          fill={color}
        />
      </svg>
    </div>
  );
}