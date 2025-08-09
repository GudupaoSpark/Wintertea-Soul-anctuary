"use client";
import { useEffect, useState } from 'react';

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateShapes = () => {
      const colors = [
        'bg-amber-300/20',
        'bg-orange-300/20', 
        'bg-yellow-300/20',
        'bg-pink-300/20',
        'bg-purple-300/20'
      ];
      
      const newShapes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5
      }));
      
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} blur-sm animate-float`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`
          }}
        />
      ))}
    </div>
  );
}