"use client";
import { useEffect, useRef } from 'react';

export default function LineAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = (path as SVGPathElement).getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `drawLine 3s ease-in-out ${index * 0.5}s forwards`;
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.6)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,400 Q300,200 600,400 T1200,400"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,500 Q400,300 800,500 T1200,500"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0,300 Q200,100 400,300 T800,300 Q1000,200 1200,300"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      
      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}