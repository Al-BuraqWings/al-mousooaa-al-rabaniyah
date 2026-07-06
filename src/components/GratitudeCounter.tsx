import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  scale: number;
}

export default function GratitudeCounter({ language }: { language: 'ar' | 'en' }) {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('gratitude_count');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isBeating, setIsBeating] = useState(false);

  useEffect(() => {
    localStorage.setItem('gratitude_count', count.toString());
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
    setIsBeating(true);
    setTimeout(() => setIsBeating(false), 300);

    // Play tactile vibration if supported
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }

    // Generate 12 beautifully randomized floating particles
    const newParticles: Particle[] = Array.from({ length: 12 }).map((_, i) => {
      return {
        id: Date.now() + i + Math.random(),
        x: (Math.random() - 0.5) * 80, // horizontal offset
        y: 0,
        size: Math.random() * 8 + 4, // 4px to 12px
        color: ['#cca43b', '#e5c060', '#ffd700', '#f5ebd0', '#b58826'][Math.floor(Math.random() * 5)],
        angle: (Math.random() - 0.5) * 45, // drift angle
        scale: Math.random() * 0.5 + 0.8,
      };
    });

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup old particles after 2 seconds to avoid any leakage
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center select-none" id="gratitude-counter-widget">
      {/* Luminous Particle Layer */}
      <div className="absolute pointer-events-none w-0 h-0 flex items-center justify-center overflow-visible">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, x: 0, y: 0, scale: p.scale }}
              animate={{
                opacity: 0,
                x: p.x + Math.sin(p.angle) * 100,
                y: -150 - Math.random() * 50,
                scale: 0.2,
                rotate: p.angle * 10
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 10px ${p.color}, 0 0 2px ${p.color}`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Main Counter FAB */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#2b231d] to-[#1c1511] text-brand-cream border border-brand-amber/35 shadow-2xl shadow-brand-dark-brown/50 hover:border-brand-amber cursor-pointer group focus:outline-none overflow-hidden"
        id="btn-gratitude-counter"
      >
        {/* Animated glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-[500%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent animate-[spin_10s_linear_infinite]" />

        {/* Pulsing heart/sparkle icon */}
        <div className="relative flex items-center justify-center">
          <Heart
            className={`w-5 h-5 text-red-500 fill-red-500 transition-transform duration-300 ${
              isBeating ? 'scale-125' : 'animate-[pulse_1.5s_infinite]'
            }`}
          />
          <Sparkles className="absolute -top-1.5 -right-1.5 w-3 h-3 text-brand-amber animate-spin-slow" />
        </div>

        {/* Text and Count */}
        <div className="relative flex flex-col items-start leading-none">
          <span className="text-[10px] font-bold text-brand-amber/80 tracking-wide uppercase font-mono mb-0.5">
            {language === 'ar' ? 'عداد الحمد والامتنان' : 'Gratitude Counter'}
          </span>
          <span className="text-sm font-bold font-serif text-brand-cream flex items-center gap-1">
            <span>{language === 'ar' ? 'الحمد لله:' : 'Alhamdulillah:'}</span>
            <span className="font-mono text-brand-amber text-base">{count.toLocaleString()}</span>
          </span>
        </div>
      </motion.button>
    </div>
  );
}
