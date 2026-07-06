import { Sensor } from '../data';
import {
  HeartPulse,
  Eye,
  Flame,
  Accessibility,
  Compass,
  Droplet,
  Expand,
  Thermometer,
  FlaskConical,
  Activity,
  Hand,
  Volume2,
  Sparkles,
  AlertOctagon,
  ShieldAlert,
  Info,
  Dna,
  Zap,
  Printer
} from 'lucide-react';

interface SensorDetailsProps {
  selectedSensor: Sensor;
  isFailed: boolean;
  onToggleFailure: () => void;
  language: 'ar' | 'en';
}

function SensorIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Eye': return <Eye className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'FlameKindling': return <Flame className={className} />;
    case 'Accessibility': return <Accessibility className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Expand': return <Expand className={className} />;
    case 'Thermometer': return <Thermometer className={className} />;
    case 'FlaskConical': return <FlaskConical className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Hand': return <Hand className={className} />;
    case 'Volume2': return <Volume2 className={className} />;
    default: return <Sparkles className={className} />;
  }
}

export default function SensorDetails({
  selectedSensor,
  isFailed,
  onToggleFailure,
  language,
}: SensorDetailsProps) {
  // Helper to translate severity labels
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'fatal':
        return {
          bg: 'bg-red-900/10 text-red-700 border-red-500/30',
          labelAr: 'قاضٍ / مميت فوري',
          labelEn: 'Fatal / Instant Death'
        };
      case 'critical':
        return {
          bg: 'bg-amber-900/10 text-amber-700 border-amber-500/30',
          labelAr: 'حرج جداً / عجز دائم',
          labelEn: 'Critical / Severe Disability'
        };
      default:
        return {
          bg: 'bg-orange-900/10 text-orange-700 border-orange-500/30',
          labelAr: 'خطير / ترنح حاد',
          labelEn: 'Severe / Ataxia'
        };
    }
  };

  const severity = getSeverityBadge(selectedSensor.severity);

  // High-value comparative facts to trigger "Awe and wonder"
  const getComparativeFact = (id: number) => {
    switch (id) {
      case 1: // Photoreceptors
        return {
          ar: "الشبكية البشرية تحتوي على 125 مليون حساس ضوئي مكثف في مساحة أظفر الإصبع، وتتفوق بحساسيتها للضوء الفردي (الفوتون) على الكاميرات الفلكية فائقة الدقة بمليار مرة.",
          en: "The human retina houses over 125 million photoreceptors in a space smaller than a fingernail, with a single-photon sensitivity that exceeds high-end astronomical cameras a billion times."
        };
      case 2: // Baroreceptors
        return {
          ar: "هذا الحساس الميكانيكي يرسل آلاف الإشارات العصبية في الثانية لمركز التحكم بالدماغ، لتعديل نبضات القلب وانبساط الشرايين تلقائياً، دون انقطاع، لتصمد أمام الجاذبية الأرضية عند وقوفك المفاجئ.",
          en: "This mechanical sensor fires thousands of impulses per second to the vasomotor center to automatically stabilize pressure, preventing you from instantly fainting every time you stand up."
        };
      case 3: // Nociceptors
        return {
          ar: "تعمل حساسات الألم بنظام شبكة معقدة تستجيب في أجزاء من الألف من الثانية لإشعال رد فعل فوري (سحب اليد مثلاً) قبل أن يدرك عقلك الواعي وجود الخطر بحوالي 0.2 ثانية كاملة لحفظ لحمك وعظمك.",
          en: "Nociceptors operate on a millisecond network, triggering reflex loops (like pulling your hand from fire) 0.2 seconds before your conscious brain even registers the burn, saving tissue from destruction."
        };
      case 4: // Proprioceptors
        return {
          ar: "الوعي الذاتي بالجسد؛ حساسات متغلغلة داخل ألياف العضلات تقيس الميكرو-شد، تتيح لك العزف ببراعة، والكتابة، والمشي مغمض العينين دون التفكير في مكان أقدامك وأطرافك.",
          en: "The absolute coordinates of your physical self. Deep muscle spindles constantly feed micro-tensions to the cerebellum, allowing you to walk, write, or touch your nose with your eyes closed."
        };
      case 5: // Vestibular
        return {
          ar: "جيروسكوب بيولوجي مائي في غاية الدقة؛ يرصد انحناء السائل بـ 1 من المليون من الملليمتر، وهو أسرع بعشر مرات من جيروسكوب الهواتف الذكية في تتبع وتصحيح انحراف الرأس المتسارع.",
          en: "An fluidic bio-gyroscope in your inner ear. It tracks liquid displacements smaller than 1 millionth of a millimeter, responding 10 times faster than smartphone gyros to stabilize gaze."
        };
      case 6: // Osmoreceptors
        return {
          ar: "تقيس هذه الحساسات أي تغير في تركيز أملاح الدم بنسبة ضئيلة جداً تفوق 1%، وتأمر الغدة النخامية فوراً بإفراز الهرمون المانع لإدرار البول لمنع الخلايا الدماغية من الانفجار أو الجفاف التام.",
          en: "These sensors detect solute concentration shifts under 1%. They instantly order the pituitary to secrete vasopressin, keeping your brain cells from expanding or shrinking to death."
        };
      case 7: // Stretch
        return {
          ar: "بدون حساسات تمدد الرئتين، سينفجر النسيج الرئوي الرقيق مع الشهيق العميق الثاني لك اليوم. إنها تعمل كفرامل هوائية دقيقة تأمر الدماغ ببدء الزفير عند نقطة الامتلاء الآمنة.",
          en: "Without stretch feedback, your delicate alveolar tissues would rupture on your next deep breath. They act as pneumatic brakes, signalling the medulla to transition into exhalation safely."
        };
      case 8: // Thermoreceptors
        return {
          ar: "تعمل كـ ثرموستات ذكي يرصد تذبذب الحرارة بأجزاء من عشرة من الدرجة المئوية، لتبدأ الشرايين بالتوسع والعرق بالانهمار للتبريد، أو الارتعاش والقبض للتدفئة حفاظاً على إنزيمات الحياة.",
          en: "Acting as an ultra-precise thermostat, they monitor fluctuations of less than 0.1°C, coordinating systemic sweating or shivering to maintain the golden 37°C vital enzymatic window."
        };
      case 9: // Chemoreceptors
        return {
          ar: "تراقب حساسات حموضة الدم (pH) بدقة ميكرومترية. إذا ارتفعت الحموضة بمقدار بسيط نتيجة كتم النفس، تأمر الحجاب الحاجز بالانقباض بعنف، فتنقذك من الموت خنقاً وثاني أكسيد الكربون.",
          en: "Chemoreceptors guard blood pH down to microscopic units. If carbon dioxide builds up slightly, they command the diaphragm to contract violently, saving you from carbon dioxide narcosis."
        };
      case 10: // Glucoreceptors
        return {
          ar: "هذه هي حارس الطاقة للدماغ؛ تقيس أدنى تراجع لغلوكوز الدم في الكبد والشريان، وتطلق نداءات الجوع الشديد والتوتر لإجبارك على الأكل قبل فناء طاقة الدماغ وحدوث الوفاة.",
          en: "The brain's fuel guardians. They measure glucose concentrations and trigger immediate hunger signals to force intake before cerebral energy falls below critical levels, preventing a coma."
        };
      case 11: // Tactile
        return {
          ar: "جسيمات ميكرومترية فائقة تميز خشونة أو نعومة مادة بسماكة 13 نانومتر (أصغر من حجم الفيروس). تمنحك وعياً خارقاً باللمس لقراءة البرايل والتفاعل الحركي المعقد مع محيطك.",
          en: "Microscopic corpuscles capable of detecting texture differences of just 13 nanometers (smaller than a virus). This grants humans the delicate grip needed to read Braille or handle fine glass."
        };
      case 12: // Acoustic
        return {
          ar: "تحول الخلايا الشعرية في القوقعة اهتزازات الهواء بقوة نانو-وات إلى لغة كهربائية، وتميز بدقة مذهلة بين 20 ألف تردد صوتي مختلف وتلتقط همس الرياح وصوت مَن تحب بوضوح تام.",
          en: "Microscopic hair cells convert sound pressures of less than a picowatt into neural pulses, distinguishing over 20,000 distinct sound frequencies with flawless acoustic fidelity."
        };
      case 13: // Satiety
        return {
          ar: "مستشعرات تمدد المعدة وكيمياء الهرمونات تعمل معاً لترسل إشارات بالغة التعقيد للدماغ تحدد الامتلاء بالنانو-جرام لحمايتك من تمزق المعدة القاتل أو الموت جوعاً.",
          en: "Stomach stretch sensors and endocrine receptors sync perfectly to measure fullness to the nanogram, protecting the stomach wall from fatal ruptures or severe physical depletion."
        };
      case 14: // Visceral
        return {
          ar: "مستشعرات الألم الحشوي لا تنشط إلا عند الأخطار الحقيقية المهددة لحياة الأعضاء كالكلى والقلب، وتعمل بصمت تام في الأحوال العادية لحفظ تركيزك في الحياة اليومية.",
          en: "Visceral pain receptors remain silent during everyday activities but fire intense signals during organ emergencies (e.g. kidney inflammation or cardiac ischemia) to initiate life-saving reflexes."
        };
      case 15: // Shear Stress
        return {
          ar: "تقيس مستشعرات الاحتكاك ضغط الدم وتيار الجريان على جدران الشرايين بدقة متناهية، فتفرز فوراً مواد طبيعية لتوسيع الوعاء الدموي ومنع جلطات فورية عند التوتر والركض.",
          en: "These specialized endothelial cells track flow-friction and trigger nitric oxide release to dilate vessels instantly, protecting you from strokes and heart attacks under sudden stress."
        };
      case 16: // Golgi Tendon
        return {
          ar: "تعد مغازل كولجي في الأوتار من أدق موازين الوزن والشد العضلي؛ تمنعك قسرياً من حمل الأثقال المفرطة بإفلاتها فجأة لحماية العضلة من التمزق والكسور.",
          en: "Golgi tendon organs measure exact mechanical tension in real-time, executing a protective reflex that forces muscle relaxation to prevent horrific tendon detachment during excessive lifting."
        };
      case 17: // Pruriceptors
        return {
          ar: "تتحسس هذه المستقبلات المركبات الغريبة والسموم التي تلامس الجلد، لتثير الرغبة الملحة في الحك كآلية دفاعية ميكانيكية بالغة الذكاء لطرد الكائنات والميكروبات.",
          en: "Pruriceptors detect microscopic chemical irritants and toxins, triggering an immediate itch reflex to mechanically sweep away invading microbes or insects before they breach the skin barrier."
        };
      default:
        return { ar: "", en: "" };
    }
  };

  const compFact = getComparativeFact(selectedSensor.id);

  return (
    <div
      className={`relative rounded-3xl border transition-all duration-500 overflow-hidden printable-card ${
        isFailed
          ? 'bg-red-950/20 border-red-500/40 shadow-2xl shadow-red-500/10'
          : 'bg-brand-cream border-brand-amber/15 shadow-xl shadow-brand-dark-brown/5'
      }`}
      id={`sensor-details-panel-${selectedSensor.id}`}
    >
      {/* Decorative top bar */}
      <div
        className={`h-2 w-full transition-colors duration-500 ${
          isFailed ? 'bg-red-600 animate-pulse' : 'bg-brand-amber'
        }`}
      />

      {/* Top Banner with Categories and Info */}
      <div className="p-6 md:p-8 flex flex-col gap-6">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                isFailed
                  ? 'bg-red-600 text-white animate-bounce shadow-lg shadow-red-600/30'
                  : 'bg-brand-clay text-brand-amber border border-brand-amber/20'
              }`}
            >
              <SensorIcon name={selectedSensor.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-brand-amber uppercase font-semibold">
                  {selectedSensor.systemName.toUpperCase()} SENSOR
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${severity.bg} font-medium`}>
                  {language === 'ar' ? severity.labelAr : severity.labelEn}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-brand-dark-brown mt-0.5 font-serif">
                {language === 'ar' ? selectedSensor.nameAr : selectedSensor.nameEn}
              </h2>
            </div>
          </div>

          {/* Simulate Failure & PDF Export Switches */}
          <div className="flex items-center flex-wrap gap-2.5">
            <button
              onClick={onToggleFailure}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                isFailed
                  ? 'bg-red-600 text-white border-red-400 hover:bg-red-700 shadow-md shadow-red-600/20'
                  : 'bg-brand-cream text-brand-dark-brown border-brand-amber/30 hover:bg-brand-clay hover:border-brand-amber'
              }`}
              id="btn-simulate-failure"
            >
              <Zap className={`w-4 h-4 ${isFailed ? 'animate-pulse text-white' : 'text-brand-amber'}`} />
              {isFailed ? (
                <span>{language === 'ar' ? 'إعادة تشغيل الحساس' : 'REBOOT SENSOR'}</span>
              ) : (
                <span>{language === 'ar' ? 'محاكاة تعطيل الحساس' : 'SIMULATE SENSOR LOSS'}</span>
              )}
            </button>

            {/* Download/Print Feature (تحميل بطاقة المستشعر كـ PDF/صورة) */}
            <button
              onClick={() => {
                window.print();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border bg-brand-amber text-brand-charcoal border-brand-amber hover:bg-brand-amber/80 cursor-pointer shadow-md shadow-brand-amber/10 hover:shadow-lg hover:shadow-brand-amber/20"
              id="btn-download-card"
              title={language === 'ar' ? 'تحميل بطاقة هذا المستشعر كـ PDF أو طباعتها' : 'Download or print this sensor card as a PDF'}
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'ar' ? 'تحميل بطاقة المستشعر (PDF)' : 'Download Card (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Anatomical Location Detail */}
        <div className="bg-brand-clay/40 border border-brand-amber/5 rounded-2xl px-4 py-3 flex items-center justify-between text-xs text-brand-dark-brown/80 font-medium">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-brand-amber flex-shrink-0" />
            <span>
              {language === 'ar' ? 'الموقع التشريحي الدقيق للخلية:' : 'Anatomical Cellular Location:'}
            </span>
          </div>
          <span className="font-semibold text-brand-amber bg-brand-cream px-2.5 py-1 rounded-lg border border-brand-amber/10">
            {language === 'ar' ? selectedSensor.locationAr : selectedSensor.locationEn}
          </span>
        </div>

        {/* Failure Overlay Alert Box (Dynamic visual crisis state) */}
        {isFailed && (
          <div className="bg-red-950/40 border-2 border-red-500 rounded-2xl p-5 text-brand-cream animate-vertigo flex flex-col md:flex-row items-center gap-4 shadow-inner">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg animate-pulse">
              <AlertOctagon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-400 mb-1 font-mono">
                {language === 'ar' ? '⚠️ تحذير: حالة غياب وحرمان حسي!' : '⚠️ ALERT: SYSTEM SENSORY DEPRIVATION!'}
              </h3>
              <p className="text-sm leading-relaxed font-sans font-medium text-red-200">
                {language === 'ar' ? selectedSensor.failureAr : selectedSensor.failureEn}
              </p>
            </div>
          </div>
        )}

        {/* Primary Information Tabs: Function vs Failure vs Causes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Section 1: Function & Benefit */}
          <div className="bg-brand-clay/30 border border-brand-amber/10 rounded-2xl p-5 hover:border-brand-amber/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-brand-amber" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-amber font-mono">
                {language === 'ar' ? 'الوظيفة والنعمة' : 'Function & Grace'}
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-brand-dark-brown font-medium">
              {language === 'ar' ? selectedSensor.functionAr : selectedSensor.functionEn}
            </p>
          </div>

          {/* Section 2: Consequence of Failure */}
          <div className={`border rounded-2xl p-5 transition-all duration-300 ${
            isFailed 
              ? 'bg-red-900/10 border-red-500/40' 
              : 'bg-brand-clay/30 border-brand-amber/10 hover:border-brand-amber/30'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className={`w-4.5 h-4.5 ${isFailed ? 'text-red-500' : 'text-brand-dark-brown/70'}`} />
              <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${isFailed ? 'text-red-500' : 'text-brand-dark-brown/70'}`}>
                {language === 'ar' ? 'عواقب العطَل والغياب' : 'Failure Consequences'}
              </h4>
            </div>
            <p className={`text-xs leading-relaxed font-medium ${isFailed ? 'text-red-300' : 'text-brand-dark-brown/80'}`}>
              {language === 'ar' ? selectedSensor.failureAr : selectedSensor.failureEn}
            </p>
          </div>

          {/* Section 3: Causes of Failure */}
          <div className="bg-brand-clay/30 border border-brand-amber/10 rounded-2xl p-5 hover:border-brand-amber/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Dna className="w-4.5 h-4.5 text-brand-dark-brown/70" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark-brown/70 font-mono">
                {language === 'ar' ? 'مسببات التلف والعجز' : 'Causes of Failure'}
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-brand-dark-brown/80 font-medium">
              {language === 'ar' ? selectedSensor.causesAr : selectedSensor.causesEn}
            </p>
          </div>
        </div>

        {/* Visual Deep-Dive Scientific Contrast Card */}
        <div className="bg-gradient-to-br from-brand-clay/50 to-brand-cream border border-brand-amber/20 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2 border-b border-brand-amber/10 pb-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-amber font-mono flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-amber animate-pulse" />
              {language === 'ar' ? 'المقارنة العلمية والإعجازية' : 'Divine Engineering Contrast'}
            </h4>
            <span className="text-[10px] bg-brand-clay px-2.5 py-0.5 rounded-full text-brand-dark-brown/70 font-bold uppercase">
              {language === 'ar' ? 'تأمل الحكمة' : 'Wisdom Insight'}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-brand-dark-brown/90 font-serif italic text-justify leading-relaxed">
            {language === 'ar' ? compFact.ar : compFact.en}
          </p>
        </div>
      </div>
    </div>
  );
}
