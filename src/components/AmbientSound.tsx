import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, AlertTriangle } from 'lucide-react';

interface AmbientSoundProps {
  isFailedState: boolean;
  failedSensorName: string | null;
  language: 'ar' | 'en';
}

export default function AmbientSound({ isFailedState, failedSensorName, language }: AmbientSoundProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const waveFrameRef = useRef<number | null>(null);
  const [wavePoints, setWavePoints] = useState<string>('');

  // Waveform visualization animation
  useEffect(() => {
    let t = 0;
    const updateWave = () => {
      t += isFailedState ? 0.15 : 0.04;
      const points: string[] = [];
      const width = 180;
      const height = 40;
      const centerY = height / 2;
      const segments = 40;

      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        let y = centerY;

        if (isPlaying) {
          if (isFailedState) {
            // Erratic, broken, or flatlining waveform
            const noise = Math.sin(t + i * 0.8) * Math.cos(t * 2 + i * 0.3) * 8;
            // Introduce sharp spikes or dampening
            y = centerY + (Math.random() > 0.95 ? noise * 2.5 : noise * 0.4);
          } else {
            // Calm, fluid breathing sine wave
            y = centerY + Math.sin(t + i * 0.3) * 12 * Math.sin(t * 0.2);
          }
        } else {
          // Flatline when audio is off (with subtle micro-vibrations for lifelike feel)
          y = centerY + Math.sin(i * 0.1) * 0.3;
        }
        points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
      }
      setWavePoints(points.join(' '));
      waveFrameRef.current = requestAnimationFrame(updateWave);
    };

    updateWave();
    return () => {
      if (waveFrameRef.current) cancelAnimationFrame(waveFrameRef.current);
    };
  }, [isPlaying, isFailedState]);

  // Handle audio initialization and adjustments
  const startAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Create nodes
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Healthy breathing frequency (432 Hz Solfeggio / Calm state)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(432, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);

      // Low volume to prevent annoying the user
      gain.gain.setValueAtTime(0.06, ctx.currentTime);

      // Connect LFO for gentle breathing effect
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.2, ctx.currentTime); // 0.2 Hz (every 5 seconds)
      lfoGain.gain.setValueAtTime(0.015, ctx.currentTime); // gentle gain modulation

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      // Connections
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      lfo.start();

      oscRef.current = osc;
      gainRef.current = gain;
      lfoRef.current = lfo;
      filterRef.current = filter;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Web Audio API not fully supported or blocked by browser policy:", e);
    }
  };

  const stopAudio = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch (e) {}
    }
    if (lfoRef.current) {
      try {
        lfoRef.current.stop();
        lfoRef.current.disconnect();
      } catch (e) {}
    }
    oscRef.current = null;
    lfoRef.current = null;
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  // React to body state changes (Healthy vs Failed)
  useEffect(() => {
    if (!isPlaying || !audioCtxRef.current || !oscRef.current || !gainRef.current || !filterRef.current) return;
    const ctx = audioCtxRef.current;

    if (isFailedState) {
      // Shift frequency to a tense, lower alarm frequency or erratic pitch
      oscRef.current.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.4);
      filterRef.current.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.4);
      gainRef.current.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.2); // make alert more audible
    } else {
      // Smoothly return to the golden 432 Hz harmony
      oscRef.current.frequency.exponentialRampToValueAtTime(432, ctx.currentTime + 0.8);
      filterRef.current.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.8);
      gainRef.current.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.8);
    }
  }, [isFailedState, isPlaying]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch (e) {}
      }
      if (lfoRef.current) {
        try {
          lfoRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-3 bg-brand-clay/60 border border-brand-amber/20 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm">
      <button
        onClick={toggleSound}
        className="text-brand-dark-brown hover:text-brand-amber transition-all focus:outline-none flex items-center justify-center p-1"
        title={isPlaying ? "Mute" : "Unmute"}
        id="btn-toggle-sound"
      >
        {isPlaying ? (
          <Volume2 className={`w-4 h-4 text-brand-amber ${isFailedState ? 'animate-bounce text-red-600' : ''}`} />
        ) : (
          <VolumeX className="w-4 h-4 opacity-50" />
        )}
      </button>

      {/* Waveform Visualizer */}
      <div className="flex flex-col items-start w-32 md:w-40">
        <svg width="100%" height="24" viewBox="0 0 180 40" className="overflow-visible">
          <path
            d={wavePoints}
            fill="none"
            stroke={isPlaying ? (isFailedState ? '#dc2626' : '#cca43b') : '#a39b8c'}
            strokeWidth={isFailedState && isPlaying ? 2.5 : 1.5}
            strokeLinecap="round"
            className="transition-colors duration-300"
          />
        </svg>
        <span className="text-[10px] font-sans text-brand-dark-brown/60 -mt-1 select-none font-medium truncate w-full">
          {isPlaying ? (
            isFailedState ? (
              <span className="text-red-600 font-semibold flex items-center gap-1">
                <AlertTriangle className="w-2.5 h-2.5 inline" />
                {language === 'ar' ? `خلل: ${failedSensorName}` : `Error: ${failedSensorName}`}
              </span>
            ) : (
              <span className="text-brand-amber font-semibold flex items-center gap-1 animate-pulse">
                <Sparkles className="w-2.5 h-2.5 inline" />
                {language === 'ar' ? 'تردد التوازن 432Hz' : 'Harmonic Balance 432Hz'}
              </span>
            )
          ) : (
            language === 'ar' ? 'شغّل صوت التوازن' : 'Play equilibrium hum'
          )}
        </span>
      </div>
    </div>
  );
}
