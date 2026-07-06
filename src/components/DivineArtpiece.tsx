import { useState } from 'react';
import { Eye, Heart, Activity, Compass, Flame, Info, EyeOff, Sparkles, PhoneCall } from 'lucide-react';

interface DivineArtpieceProps {
  language: 'ar' | 'en';
}

export default function DivineArtpiece({ language }: DivineArtpieceProps) {
  const [lossActive, setLossActive] = useState<boolean>(false);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'retina',
      icon: Eye,
      titleAr: 'مستشعرات الشبكية والضوء',
      titleEn: 'Retina Sensors (Photoreceptors)',
      descAr: 'شعاع ساطع ينبثق من العين، ينكسر كقوس قزح ممثلاً تحويل فوتونات الكون إلى كهرباء يبصر بها العقل.',
      descEn: 'Brilliant light emitting from the eyes, refracting into a rainbow spectrum, representing the magical conversion of cosmic photons into sight.'
    },
    {
      id: 'baro',
      icon: Heart,
      titleAr: 'مستشعرات الضغط الشرياني',
      titleEn: 'Blood Pressure (Baroreceptors)',
      descAr: 'نبضات دافئة من الضوء الأحمر تسري على طول القوس الأبهر في الصدر، كمنظم ضغط ينبض بالرحمة.',
      descEn: 'Warm red, pulsing light waves along the main aortic arch in the chest, acting as an automatic life-preserving pressure regulator.'
    },
    {
      id: 'nerves',
      icon: Activity,
      titleAr: 'شبكة الأعصاب واللمس',
      titleEn: 'Nerve Grid (Touch & Pain)',
      descAr: 'شبكة بالغة الصغر والدقة من خيوط الضوء السياني والأزرق تمتد في الأذرع والأطراف لتنقل الألم والدفء واللمس.',
      descEn: 'An ultra-fine, delicate web of cyan and soft blue light threads spreading down the arms and fingertips to register danger and feel.'
    },
    {
      id: 'balance',
      icon: Compass,
      titleAr: 'مستشعرات التوازن الدهليزي',
      titleEn: 'Balance Sensors (Cochlea)',
      descAr: 'حلزون ذهبي متوهج في عمق الأذن الداخلية، يمثل الجيروسكوب الإلهي الحافظ لتوازننا أثناء السعي والوقوف.',
      descEn: 'A golden, glowing spiral cochlea inside the inner ear acting as a dynamic gyroscope to maintain perfect posture.'
    },
    {
      id: 'nature',
      icon: Flame,
      titleAr: 'عناصر الطبيعة المتفاعلة',
      titleEn: 'Living Nature Integration',
      descAr: 'على الجانب الأيسر، تتفاعل أشعة الشمس وقطرة المطر الملامسة للورقة مع الحساسات لتبرز اتصالنا بالوجود.',
      descEn: 'On the left, solar rays and a raindrop touching a leaf interact with the biological sensors, linking humans to nature.'
    }
  ];

  const toggleLoss = () => {
    setLossActive(!lossActive);
  };

  const isRTL = language === 'ar';

  return (
    <div 
      className="bg-brand-cream border-2 border-brand-amber/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
      id="divine-artpiece-showcase"
    >
      {/* Decorative Ancient Manuscript Ornaments */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-amber/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-amber/10 to-transparent pointer-events-none" />

      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-amber/15 pb-6 mb-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-brand-amber uppercase font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'ar' ? 'التحفة الفنية الرقمية الإعجازية' : 'The Miraculous Digital Artpiece'}
          </span>
          <h3 className="text-2xl font-bold text-brand-dark-brown font-serif mt-1">
            {language === 'ar' ? 'لوحة المستشعرات الربانية الرقمية' : 'Divine Sensors Masterpiece Poster'}
          </h3>
          <p className="text-xs text-brand-dark-brown/60 mt-1 font-medium max-w-xl">
            {language === 'ar' 
              ? 'عمل فني رقمي يدمج مخطوطات القرون الوسطى بالجمال البصري الحديث، لتمثيل الأجهزة المجهرية داخل جسدك الكريستالي.'
              : 'A digital masterpiece combining medieval manuscripts with modern sleek UI aesthetics to visualize the intricate sensors inside your crystal-glass torso.'}
          </p>
        </div>

        {/* Interactive Loss Simulator Switch */}
        <button
          onClick={toggleLoss}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
            lossActive
              ? 'bg-red-600 text-white border-red-400 hover:bg-red-700 shadow-lg shadow-red-600/30'
              : 'bg-brand-clay text-brand-dark-brown border-brand-amber/30 hover:bg-brand-clay hover:border-brand-amber'
          }`}
          id="art-loss-simulator-toggle"
        >
          {lossActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          {lossActive ? (
            <span>{language === 'ar' ? 'إعادة الإضاءة والرحمة' : 'Restore Divine Light'}</span>
          ) : (
            <span>{language === 'ar' ? 'محاكاة الحرمان والظلمة' : 'Simulate Loss & Deprivation'}</span>
          )}
        </button>
      </div>

      {/* Interactive Layout: Grid of Image (Left) & Hotspots details (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image with loss simulator overlay filter (lg:span-7) */}
        <div className="relative rounded-2xl overflow-hidden border border-brand-amber/20 bg-white shadow-2xl group w-full aspect-[16/9]">
         <img 
  src="/src/assets/images/divine_sensors_art_1783326370148.jpg"
  alt="Divine Sensory Receptors Masterpiece"
  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-all duration-1000"
  id="generated-art-element"
/>

            {/* Glowing Quranic Thuluth verse watermark simulation on UI overlay */}
            <div className="absolute top-4 right-4 bg-brand-charcoal/40 backdrop-blur-md border border-brand-amber/20 rounded-xl px-4 py-2 pointer-events-none">
              <span className="text-xs md:text-sm font-serif font-bold text-brand-amber tracking-normal">
                وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ
              </span>
            </div>

            {/* Interactive Hotspot pins positioned absolutely on top of the image to mimic exploration */}
            <div className="absolute inset-0 pointer-events-auto">
              {/* Retina Hotspot */}
              <button
                onClick={() => setSelectedHotspot('retina')}
                className={`absolute top-[25%] left-[50%] -translate-x-1/2 w-8 h-8 rounded-full border-2 border-brand-amber/80 flex items-center justify-center bg-brand-cream/90 shadow-lg cursor-pointer hover:scale-125 transition-transform ${selectedHotspot === 'retina' ? 'scale-125 ring-4 ring-brand-amber/40' : 'animate-pulse'}`}
                style={{ animationDuration: '3s' }}
                title="Retina Sensors"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-brand-amber" />
              </button>

              {/* Baroreceptors Hotspot */}
              <button
                onClick={() => setSelectedHotspot('baro')}
                className={`absolute top-[48%] left-[49%] -translate-x-1/2 w-8 h-8 rounded-full border-2 border-red-500/80 flex items-center justify-center bg-brand-cream/90 shadow-lg cursor-pointer hover:scale-125 transition-transform ${selectedHotspot === 'baro' ? 'scale-125 ring-4 ring-red-500/40' : 'animate-pulse'}`}
                style={{ animationDuration: '2.5s' }}
                title="Baroreceptors"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-red-600" />
              </button>

              {/* Nerve Grid Hotspot */}
              <button
                onClick={() => setSelectedHotspot('nerves')}
                className={`absolute top-[65%] left-[30%] -translate-x-1/2 w-8 h-8 rounded-full border-2 border-cyan-500/80 flex items-center justify-center bg-brand-cream/90 shadow-lg cursor-pointer hover:scale-125 transition-transform ${selectedHotspot === 'nerves' ? 'scale-125 ring-4 ring-cyan-500/40' : 'animate-pulse'}`}
                style={{ animationDuration: '3.5s' }}
                title="Nerve Grid"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-500" />
              </button>

              {/* Balance Hotspot */}
              <button
                onClick={() => setSelectedHotspot('balance')}
                className={`absolute top-[25%] left-[57%] -translate-x-1/2 w-8 h-8 rounded-full border-2 border-yellow-500/80 flex items-center justify-center bg-brand-cream/90 shadow-lg cursor-pointer hover:scale-125 transition-transform ${selectedHotspot === 'balance' ? 'scale-125 ring-4 ring-yellow-500/40' : 'animate-pulse'}`}
                style={{ animationDuration: '4s' }}
                title="Balance Sensors"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
              </button>
            </div>

            {/* Offline Simulator Dimmed Arm Callout Label when Loss Active */}
            {lossActive && (
              <div className="absolute bottom-4 left-4 bg-red-900/90 border border-red-500 px-3 py-1.5 rounded-xl animate-pulse text-[10px] md:text-xs font-mono font-bold text-white">
                {language === 'ar' ? '⚠️ الذراع في حالة إظلام (محاكاة فقدان النعمة)' : '⚠️ Arm Offline (Loss Simulator Active)'}
              </div>
            )}
          </div>
          
          <span className="text-[10px] font-mono tracking-wider text-brand-dark-brown/40 uppercase mt-2">
            {language === 'ar' ? 'انقر على نقاط اللوحة الفنية لاستكشاف التصميم' : 'Click on the artwork hotspots to explore features'}
          </span>
        </div>

        {/* Right Column: Hotspots list & deep contemplation details (lg:span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-brand-clay/40 rounded-2xl p-5 border border-brand-amber/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold mb-3 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-brand-amber" />
              {language === 'ar' ? 'التحليل التشريحي والروحي للوحة' : 'Visual & Spiritual Analysis'}
            </h4>
            
            {/* If no hotspot is selected, show general overview */}
            {selectedHotspot === null ? (
              <div className="text-xs leading-relaxed text-brand-dark-brown/80 space-y-3">
                <p>
                  {language === 'ar'
                    ? 'هذا العمل الرقمي يبرز المعجزة الإلهية في تصميم الأعصاب والأنظمة الحسية بطريقة علمية وروحانية فريدة.'
                    : 'This majestic digital rendering illustrates the miraculous precision of human anatomy, contrasting biological machinery with golden, sacred patterns.'}
                </p>
                <p className="font-serif italic text-brand-amber font-semibold text-center py-2 text-sm border-t border-b border-brand-amber/10">
                  {language === 'ar' ? '"وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ"' : '"And in yourselves, do you not see?"'}
                </p>
                <p className="text-[11px] opacity-75">
                  {language === 'ar'
                    ? 'انقر على الدوائر المتوهجة لتفصيل العناصر الأربعة الكبرى الموضحة في اللوحة من شبكية العين وتوازن الأذن وحتى دقات الشريان.'
                    : 'Click on any of the blinking hotspots to explore the major celestial sensory receptors visualized within the crystal glass torso.'}
                </p>
              </div>
            ) : (
              // Selected hotspot details
              <div className="space-y-4">
                {(() => {
                  const item = hotspots.find((h) => h.id === selectedHotspot);
                  if (!item) return null;
                  const IconComp = item.icon;
                  return (
                    <div>
                      <div className="flex items-center gap-2 border-b border-brand-amber/10 pb-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-amber/10 text-brand-amber flex items-center justify-center">
                          <IconComp className="w-4.5 h-4.5" />
                        </div>
                        <h5 className="text-sm font-bold text-brand-dark-brown">
                          {language === 'ar' ? item.titleAr : item.titleEn}
                        </h5>
                      </div>
                      <p className="text-xs leading-relaxed text-brand-dark-brown font-medium">
                        {language === 'ar' ? item.descAr : item.descEn}
                      </p>
                      
                      <button
                        onClick={() => setSelectedHotspot(null)}
                        className="text-[10px] text-brand-amber font-mono font-bold hover:underline block mt-4"
                      >
                        {language === 'ar' ? '&larr; العودة للتحليل العام' : '&larr; Back to General Analysis'}
                      </button>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Quick interactive hotlinks representing the art values */}
          <div className="grid grid-cols-2 gap-2">
            {hotspots.slice(0, 4).map((h) => (
              <button
                key={h.id}
                onClick={() => setSelectedHotspot(h.id)}
                className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                  selectedHotspot === h.id
                    ? 'bg-brand-amber border-brand-amber text-brand-charcoal font-bold scale-[1.02]'
                    : 'bg-brand-cream border-brand-clay hover:bg-brand-clay/40 text-brand-dark-brown/80 font-semibold'
                }`}
              >
                <span className="block text-[10px] md:text-xs">
                  {language === 'ar' ? h.titleAr.split(' ')[0] : h.titleEn.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
