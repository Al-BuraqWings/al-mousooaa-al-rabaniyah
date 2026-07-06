import { useState } from 'react';
import { Sensor } from '../data';
import { Sparkles, Heart, Activity, AlertCircle } from 'lucide-react';

interface HumanSilhouetteProps {
  sensors: Sensor[];
  selectedSensor: Sensor;
  onSelectSensor: (sensor: Sensor) => void;
  language: 'ar' | 'en';
  activeCategory: string;
  failedSensorId: number | null;
}

export default function HumanSilhouette({
  sensors,
  selectedSensor,
  onSelectSensor,
  language,
  activeCategory,
  failedSensorId,
}: HumanSilhouetteProps) {
  const [hoveredSensor, setHoveredSensor] = useState<Sensor | null>(null);

  // Filtered list of sensors to highlight on the body
  const isSensorActive = (sensor: Sensor) => {
    if (activeCategory === 'all') return true;
    return sensor.systemName === activeCategory;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center select-none" id="human-blueprint-container">
      {/* Blueprint background title */}
      <div className="absolute top-2 left-4 text-[10px] font-mono tracking-widest text-brand-dark-brown/40 uppercase">
        {language === 'ar' ? 'مخطط الاستشعار المجهري' : 'Micro-Sensory Blueprint'}
      </div>
      <div className="absolute top-2 right-4 text-[10px] font-mono tracking-widest text-brand-dark-brown/40 uppercase">
        V. 12.0
      </div>

      {/* Main SVG Blueprint */}
   <div className="relative w-full aspect-[5/6] bg-[#0f172a] rounded-3xl border border-brand-amber/20 shadow-sm p-4 overflow-hidden flex items-center justify-center">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cca43b_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <svg
          viewBox="0 0 200 240"
          className="w-full h-full max-h-[440px] drop-shadow-md transition-all duration-700"
          id="svg-human-silhouette"
        >
          {/* Defs for gradients */}
          <defs>
            <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#cca43b" stopOpacity={failedSensorId ? "0.05" : "0.2"} />
              <stop offset="100%" stopColor="#cca43b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="bodyLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={failedSensorId ? "#ef4444" : "#cca43b"} stopOpacity="0.8" />
              <stop offset="100%" stopColor={failedSensorId ? "#7f1d1d" : "#8c6c21"} stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Ambient Body Aura */}
          <ellipse
            cx="100"
            cy="110"
            rx="55"
            ry="105"
            fill="url(#bodyGlow)"
            className="transition-all duration-700"
          />

          {/* Inner Organ Outlines */}
          {/* Lungs */}
          <g opacity={failedSensorId === 7 ? "0.3" : "0.45"} className="transition-opacity duration-500">
            <path
              d="M 86,75 C 80,75 74,80 74,90 C 74,102 84,108 86,108 Z"
              fill="none"
              stroke="#cca43b"
              strokeWidth="0.8"
            />
            <path
              d="M 114,75 C 120,75 126,80 126,90 C 126,102 116,108 114,108 Z"
              fill="none"
              stroke="#cca43b"
              strokeWidth="0.8"
            />
          </g>

          {/* Golden Heart (Pulsating) */}
          <g
            opacity={failedSensorId === 2 ? "0.2" : "0.85"}
            className="transition-all duration-500 origin-[104px_86px]"
          >
            <path
              d="M 104,83 C 102,80 98,80 98,83 C 98,87 104,92 104,92 C 104,92 110,87 110,83 C 110,80 106,80 104,83 Z"
              fill={failedSensorId ? "none" : "#dc2626"}
              stroke="#dc2626"
              strokeWidth="0.5"
              className={failedSensorId ? "" : "animate-pulse"}
            />
          </g>

          {/* Brain Contour inside Head */}
          <path
            d="M 94,30 C 94,22 106,22 106,30 C 109,24 116,32 114,40 C 110,45 90,45 86,40 C 84,32 91,24 94,30 Z"
            fill="none"
            stroke={failedSensorId === 6 || failedSensorId === 9 ? "#ef4444" : "#cca43b"}
            strokeWidth="0.7"
            opacity="0.6"
            className="transition-colors duration-500"
          />

          {/* Spinal Cord (Nervous center) */}
          <line
            x1="100"
            y1="45"
            x2="100"
            y2="140"
            stroke={failedSensorId === 3 || failedSensorId === 4 ? "#ef4444" : "#cca43b"}
            strokeWidth="0.8"
            strokeDasharray="1.5 1.5"
            opacity="0.7"
            className="transition-colors duration-500"
          />

          {/* Primary Anatomical Outline (Golden Blueprint style) */}
          <g id="body-mannequin">
            <path
              d="
                M 100,20 
                C 88,20 86,30 86,38
                C 86,48 92,54 96,56
                L 96,62
                C 82,64 74,70 68,78
                L 58,100
                C 54,106 50,118 50,130
                L 42,165
                C 41,170 45,173 48,168
                L 58,135
                L 60,155
                C 60,190 66,202 72,215
                L 66,250
                L 60,290
                C 59,298 67,300 70,290
                L 80,252
                L 88,252
                L 96,290
                C 99,300 107,298 106,290
                L 100,250
                L 94,215
                C 100,215 100,215 106,215
                L 100,250
                L 94,290
                C 93,298 101,300 104,290
                L 112,252
                L 120,252
                L 130,290
                C 133,300 141,298 140,290
                L 134,250
                L 128,215
                C 134,202 140,190 140,155
                L 142,135
                L 152,168
                C 155,173 159,170 158,165
                L 150,130
                C 150,118 146,106 142,100
                L 132,78
                C 126,70 118,64 104,62
                L 104,56
                C 108,54 114,48 114,38
                C 114,30 112,20 100,20 Z
              "
              fill="none"
              stroke="url(#bodyLine)"
              strokeWidth="1.2"
              className="transition-all duration-700"
            />
          </g>

          {/* Connecting lines for Cluster Head Sensors (Osmoreceptors, Vestibular, Photoreceptors, Acoustic, Chemoreceptors) */}
          <g opacity="0.4">
            {/* Left head callouts */}
            <line x1="94" y1="36" x2="45" y2="36" stroke="#cca43b" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="92" y1="46" x2="45" y2="56" stroke="#cca43b" strokeWidth="0.5" strokeDasharray="1 1" />

            {/* Right head callouts */}
            <line x1="106" y1="36" x2="155" y2="36" stroke="#cca43b" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="108" y1="46" x2="155" y2="56" stroke="#cca43b" strokeWidth="0.5" strokeDasharray="1 1" />
          </g>
        </svg>

        {/* Dynamic Glowing Hotspot Overlays */}
        {sensors.map((sensor) => {
          const isSelected = selectedSensor.id === sensor.id;
          const isHovered = hoveredSensor?.id === sensor.id;
          const isActive = isSensorActive(sensor);
          const isFailed = failedSensorId === sensor.id;

          // Convert coordinates scaled to 100% boundary container
          return (
            <button
              key={sensor.id}
              onClick={() => onSelectSensor(sensor)}
              onMouseEnter={() => setHoveredSensor(sensor)}
              onMouseLeave={() => setHoveredSensor(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none transition-all duration-500 z-20 ${
                isActive ? 'scale-100 opacity-100 cursor-pointer' : 'scale-75 opacity-20 pointer-events-none'
              }`}
              style={{
                left: `${sensor.coords.x}%`,
                top: `${sensor.coords.y}%`,
              }}
              id={`sensor-pin-${sensor.id}`}
            >
              {/* Outer wave rings */}
              {isActive && (
                <>
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isFailed
                        ? 'animate-ping bg-red-600 opacity-40'
                        : isSelected
                        ? 'animate-ping bg-brand-amber opacity-40'
                        : isHovered
                        ? 'scale-150 bg-brand-amber/30 opacity-30'
                        : 'animate-pulse bg-brand-amber/20 opacity-20'
                    }`}
                    style={{ margin: '-6px' }}
                  />
                  {isSelected && (
                    <div
                      className="absolute inset-0 rounded-full border border-brand-amber animate-spin"
                      style={{ margin: '-4px', animationDuration: '4s' }}
                    />
                  )}
                </>
              )}

              {/* Core Hotspot Pin */}
              <div
                className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isFailed
                    ? 'bg-red-600 border-red-300 text-white scale-125 shadow-lg shadow-red-500/50'
                    : isSelected
                    ? 'bg-brand-amber border-brand-cream text-brand-charcoal scale-125 shadow-md shadow-brand-amber/50'
                    : isHovered
                    ? 'bg-brand-clay border-brand-amber text-brand-amber scale-110'
                    : 'bg-brand-cream/90 border-brand-amber/40 text-brand-dark-brown/70'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isFailed ? 'bg-white' : isSelected ? 'bg-brand-cream' : 'bg-brand-amber'}`} />
              </div>

              {/* Mini Tooltip on Hover */}
              {isHovered && !isSelected && (
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-brand-charcoal text-brand-cream text-xs px-3 py-1.5 rounded-lg shadow-xl border border-brand-amber/20 whitespace-nowrap flex flex-col items-center gap-0.5 z-40 transition-all duration-300`}>
                  <span className="font-semibold text-[11px] text-brand-amber">
                    {language === 'ar' ? sensor.nameAr : sensor.nameEn}
                  </span>
                  <span className="text-[9px] opacity-75">
                    {language === 'ar' ? sensor.locationAr : sensor.locationEn}
                  </span>
                </div>
              )}
            </button>
          );
        })}

        {/* Elegant cluster lines text tags (visual callouts on the overlay) */}
        {/* Left labels */}
        <div className="absolute left-3 top-[10%] flex flex-col gap-3 max-w-[100px] items-start pointer-events-none text-right">
          <div className={`transition-all duration-300 ${selectedSensor.id === 6 ? 'opacity-100 scale-105' : 'opacity-40'}`}>
            <span className="block text-[8px] uppercase tracking-wider text-brand-amber font-mono">Osmoreceptors</span>
            <span className="block text-[10px] font-semibold text-brand-dark-brown truncate">
              {language === 'ar' ? 'السوائل والتركيز' : 'Fluid Osmosis'}
            </span>
          </div>
          <div className={`transition-all duration-300 ${selectedSensor.id === 12 ? 'opacity-100 scale-105' : 'opacity-40'}`}>
            <span className="block text-[8px] uppercase tracking-wider text-brand-amber font-mono">Acoustic Hair</span>
            <span className="block text-[10px] font-semibold text-brand-dark-brown truncate">
              {language === 'ar' ? 'الصوت والاهتزاز' : 'Acoustic Waves'}
            </span>
          </div>
        </div>

        {/* Right labels */}
        <div className="absolute right-3 top-[10%] flex flex-col gap-3 max-w-[100px] items-end pointer-events-none text-left">
          <div className={`transition-all duration-300 ${selectedSensor.id === 5 ? 'opacity-100 scale-105' : 'opacity-40'}`}>
            <span className="block text-[8px] uppercase tracking-wider text-brand-amber font-mono">Vestibular Hair</span>
            <span className="block text-[10px] font-semibold text-brand-dark-brown truncate">
              {language === 'ar' ? 'التوازن الديناميكي' : 'Dynamic Balance'}
            </span>
          </div>
          <div className={`transition-all duration-300 ${selectedSensor.id === 1 ? 'opacity-100 scale-105' : 'opacity-40'}`}>
            <span className="block text-[8px] uppercase tracking-wider text-brand-amber font-mono">Photoreceptors</span>
            <span className="block text-[10px] font-semibold text-brand-dark-brown truncate">
              {language === 'ar' ? 'حساسات الشبكية' : 'Photoreceptors'}
            </span>
          </div>
        </div>

        {/* Category Aura Visualizer Indicator */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-brand-clay/50 border border-brand-amber/10 rounded-full px-2.5 py-0.5 text-[9px] text-brand-dark-brown/70 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" />
          <span>{activeCategory.toUpperCase()} CATEGORY</span>
        </div>
      </div>

      {/* Grid listing underneath the mannequin for accessible navigation */}
      <div className="w-full mt-4 bg-brand-clay/30 border border-brand-amber/10 rounded-2xl p-3">
        <span className="text-[10px] font-mono tracking-wider text-brand-dark-brown/60 uppercase block mb-2 text-center">
          {language === 'ar' ? 'فهرس المستشعرات الحيوية' : 'Biosensors Index'}
        </span>
        <div className="grid grid-cols-3 gap-1.5 text-center">
          {sensors.map((sensor) => {
            const isSelected = selectedSensor.id === sensor.id;
            const isFailed = failedSensorId === sensor.id;
            const isActive = isSensorActive(sensor);

            return (
              <button
                key={sensor.id}
                onClick={() => onSelectSensor(sensor)}
                className={`text-[10px] px-1 py-1.5 rounded-lg border transition-all duration-200 truncate ${
                  isFailed
                    ? 'bg-red-50 border-red-300 text-red-800 font-medium animate-pulse'
                    : isSelected
                    ? 'bg-brand-amber/20 border-brand-amber text-brand-charcoal font-semibold'
                    : isActive
                    ? 'bg-brand-cream/80 border-brand-clay hover:bg-brand-clay/50 text-brand-dark-brown/80'
                    : 'bg-brand-cream/30 border-transparent text-brand-dark-brown/30 cursor-not-allowed'
                }`}
                disabled={!isActive}
                id={`sensor-index-btn-${sensor.id}`}
              >
                {sensor.id}. {language === 'ar' ? sensor.nameAr : sensor.nameEn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
