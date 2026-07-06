import { useState } from 'react';
import { REFLECTION_DECK, CONTEMPLATION_QUOTES } from '../data';
import { BookOpen, Sparkles, Coins, HelpCircle, Check, Quote } from 'lucide-react';

interface ContemplationBoardProps {
  language: 'ar' | 'en';
}

interface CostItem {
  nameAr: string;
  nameEn: string;
  techAr: string;
  techEn: string;
  unitCost: number;
  qty: number;
  qtyLabelAr: string;
  qtyLabelEn: string;
}

const TECH_EQUIVALENTS: CostItem[] = [
  {
    nameAr: "مستشعرات الضوء والشبكية",
    nameEn: "Retina Photoreceptors",
    techAr: "مصفوفات خلايا فلكية فائقة النانومتر",
    techEn: "Astronomical ultra-nanometer photo-sensors",
    unitCost: 2,
    qty: 125000000,
    qtyLabelAr: "125 مليون خلية بصرية",
    qtyLabelEn: "125,000,000 optical cells"
  },
  {
    nameAr: "حساسات التوازن والدهليز",
    nameEn: "Vestibular Gyroscope",
    techAr: "جيروسكوب جزيئي مائي مجهري معالج",
    techEn: "Microfluidic molecular atomic gyroscopes",
    unitCost: 85000,
    qty: 2,
    qtyLabelAr: "منظومتين مائيتين بالأذنين",
    qtyLabelEn: "2 specialized inner ear systems"
  },
  {
    nameAr: "حساسات الألم والإنذار",
    nameEn: "Nociceptive Alarm Mesh",
    techAr: "شبكة مجسات حرارية ميكانيكية نانوية موصلة",
    techEn: "Conductive nano thermal-mechanical fiber mesh",
    unitCost: 15,
    qty: 100000,
    qtyLabelAr: "100 ألف نقطة مجس جلدي",
    qtyLabelEn: "100,000 cutaneous sensor nodes"
  },
  {
    nameAr: "حساسات السوائل الأسموزية",
    nameEn: "Osmotic Fluid Controllers",
    techAr: "محلل دم ميكرو-مائع دقيق فوري التغذية",
    techEn: "Dynamic microfluidic blood solute analyzers",
    unitCost: 2500000,
    qty: 1,
    qtyLabelAr: "مستكشف كيميائي تحت المهاد",
    qtyLabelEn: "1 hypothalamus analyzer hub"
  },
  {
    nameAr: "مستشعرات الضغط الشرياني",
    nameEn: "Arterial Baroreceptors",
    techAr: "صمامات نانو-كهربائية لتعديل تدفق الدم",
    techEn: "Servo-controlled arterial strain transducers",
    unitCost: 120000,
    qty: 2,
    qtyLabelAr: "مستشعرين في الشرايين الكبرى",
    qtyLabelEn: "2 aortic & carotid strain sensors"
  }
];

export default function ContemplationBoard({ language }: ContemplationBoardProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedQuoteIdx, setSelectedQuoteIdx] = useState(0);

  // Compute total estimated worth of physical sensors
  const totalCost = TECH_EQUIVALENTS.reduce((acc, item) => acc + (item.unitCost * item.qty), 0);

  const formatCost = (val: number) => {
    if (language === 'ar') {
      const millions = val / 1000000;
      return `${millions.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US')} مليون دولار أمريكي`;
    } else {
      return `$${(val / 1000000).toLocaleString('en-US')} Million USD`;
    }
  };

  return (
    <div className="flex flex-col gap-10" id="contemplation-board-section">
      {/* Dynamic Spiritual Quotes Banner */}
      <div className="bg-gradient-to-r from-brand-dark-brown to-brand-charcoal rounded-3xl p-8 text-brand-cream border border-brand-amber/30 relative overflow-hidden shadow-xl">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <BookOpen className="w-96 h-96 text-brand-amber" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <Quote className="w-8 h-8 text-brand-amber opacity-60 animate-bounce" />

          {/* Glowing Animated Verse */}
          <div className="flex flex-col gap-3 min-h-[140px] justify-center">
            <p className="text-xl md:text-3xl font-bold font-serif text-brand-amber leading-relaxed tracking-wide drop-shadow-md animate-breath-warm">
              " {CONTEMPLATION_QUOTES[selectedQuoteIdx].quoteAr} "
            </p>
            <p className="text-xs md:text-md opacity-75 font-serif italic text-brand-clay">
              "{CONTEMPLATION_QUOTES[selectedQuoteIdx].quoteEn}"
            </p>
          </div>

          <div className="flex items-center gap-2 border-t border-brand-clay/10 pt-4 w-full justify-center">
            <span className="text-[11px] font-mono tracking-widest text-brand-amber uppercase font-semibold">
              {language === 'ar' ? CONTEMPLATION_QUOTES[selectedQuoteIdx].sourceAr : CONTEMPLATION_QUOTES[selectedQuoteIdx].sourceEn}
            </span>
          </div>

          {/* Quote Switcher dots */}
          <div className="flex gap-2 mt-2">
            {CONTEMPLATION_QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedQuoteIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full border transition-all ${
                  selectedQuoteIdx === idx ? 'bg-brand-amber border-brand-amber scale-125' : 'bg-transparent border-brand-cream/40 hover:border-brand-cream'
                }`}
                title={`Quote ${idx + 1}`}
                id={`quote-dot-btn-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Reflection Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REFLECTION_DECK.map((deck, idx) => (
          <div
            key={idx}
            className="bg-brand-cream border border-brand-amber/15 rounded-3xl p-6 hover:shadow-xl hover:border-brand-amber/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-clay/70 border border-brand-amber/10 flex items-center justify-center text-brand-amber mb-4">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="text-base font-bold text-brand-dark-brown mb-2 font-serif">
                {language === 'ar' ? deck.titleAr : deck.titleEn}
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-brand-dark-brown/80 font-medium text-justify">
                {language === 'ar' ? deck.textAr : deck.textEn}
              </p>
            </div>
            <div className="border-t border-brand-amber/10 pt-4 mt-6 flex items-center justify-between text-[11px] text-brand-amber font-mono font-bold uppercase">
              <span>{language === 'ar' ? 'رحمة إلهية' : 'DIVINE GRACE'}</span>
              <span>0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Worth Equivalency Calculator (Biological vs Technological) */}
      <div className="bg-brand-clay/40 border border-brand-amber/20 rounded-3xl p-6 md:p-8 shadow-inner flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 flex items-center justify-center text-brand-amber shadow-sm">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-brand-dark-brown font-serif">
              {language === 'ar' ? 'التكلفة والمحاكاة التكنولوجية المذهلة' : 'Industrial Worth Equivalency'}
            </h3>
            <p className="text-xs md:text-sm text-brand-dark-brown/70 leading-relaxed mt-2 text-justify font-medium">
              {language === 'ar'
                ? "لو أردنا استبدال بعض هذه الحساسات المذهلة بأرقى ما توصلت إليه علوم النانو-تكنولوجيا الطبية والصناعية، كم تبلغ القيمة التقديرية لبنائها وتجهيزها في معامل الكوكب؟ دعنا نقوم بالتقدير المالي البسيط."
                : "If we attempted to manufacture equivalent medical-grade nanotechnologies for only five of these sensors, what would the astronomical production cost be? Explore the budget below."}
            </p>
          </div>
          <button
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            className="self-start bg-brand-charcoal hover:bg-brand-amber hover:text-brand-charcoal text-brand-cream transition-all duration-300 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-md focus:outline-none"
            id="btn-toggle-worth-calc"
          >
            {calculatorOpen ? (
              <span>{language === 'ar' ? 'إغلاق الميزانية' : 'HIDE ANALYSIS'}</span>
            ) : (
              <span>{language === 'ar' ? 'استكشف الفاتورة المادية' : 'VIEW COST ANALYSIS'}</span>
            )}
          </button>
        </div>

        {/* Dynamic worth chart / list */}
        <div className="w-full lg:w-3/5">
          {calculatorOpen ? (
            <div className="bg-brand-cream border border-brand-amber/20 rounded-2xl p-5 shadow-lg flex flex-col gap-4 animate-breath-warm">
              <span className="text-[10px] font-mono tracking-widest text-brand-dark-brown/50 uppercase block border-b border-brand-amber/10 pb-2">
                {language === 'ar' ? 'الفاتورة التقديرية لأعضاء الكوكب المجهرية' : 'Estimated Production Invoice per Human'}
              </span>

              <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1">
                {TECH_EQUIVALENTS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 border-b border-brand-clay pb-2 text-xs">
                    <div>
                      <span className="font-bold text-brand-dark-brown block">
                        {language === 'ar' ? item.nameAr : item.nameEn}
                      </span>
                      <span className="text-[10px] text-brand-dark-brown/60 block font-serif italic">
                        {language === 'ar' ? item.techAr : item.techEn}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-brand-amber font-bold block">
                        {language === 'ar' ? formatCost(item.unitCost * item.qty) : formatCost(item.unitCost * item.qty)}
                      </span>
                      <span className="text-[9px] text-brand-dark-brown/50 block">
                        {language === 'ar' ? item.qtyLabelAr : item.qtyLabelEn}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Calculation Row */}
              <div className="bg-brand-clay/60 rounded-xl p-4 flex items-center justify-between border border-brand-amber/20">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-brown/60 block">
                    {language === 'ar' ? 'المجموع لـ 5 أنظمة فقط' : 'Total (for 5 systems only)'}
                  </span>
                  <span className="text-base md:text-xl font-extrabold text-brand-amber font-mono">
                    {formatCost(totalCost)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-brand-dark-brown/60 block">
                    {language === 'ar' ? 'سعر البيع الإلهي' : 'Divine Transaction'}
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                    {language === 'ar' ? 'مجاناً للعباد' : 'FREE OF CHARGE'}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Closed placeholder representation (gorgeous gold ring) */
            <div className="relative border-2 border-dashed border-brand-amber/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 bg-brand-cream/50">
              <span className="text-4xl font-extrabold text-brand-amber font-mono">
                {language === 'ar' ? '٢٥١,٧٠٠,٠٠٠' : '$251,700,000'}
              </span>
              <div>
                <span className="text-xs font-bold text-brand-dark-brown uppercase block">
                  {language === 'ar' ? 'القيمة التقديرية البدائية كقطع غيار صناعية' : 'Initial estimated industrial manufacturing value'}
                </span>
                <span className="text-[10px] text-brand-dark-brown/60 font-medium">
                  {language === 'ar' ? 'لقاء تجهيز 5 مستشعرات فقط، فما بالك بـ 12 وبقية أعضاء جسدك؟' : 'For building just 5 sensors. What about the other 12 and the entire body?'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
