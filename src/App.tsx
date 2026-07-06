import { useState, useEffect } from 'react';
import { sensorsData, SENSOR_CATEGORIES, Sensor } from './data';
import HumanSilhouette from './components/HumanSilhouette';
import SensorDetails from './components/SensorDetails';
import AmbientSound from './components/AmbientSound';
import QuizSection from './components/QuizSection';
import ContemplationBoard from './components/ContemplationBoard';
import DivineArtpiece from './components/DivineArtpiece';
import GratitudeCounter from './components/GratitudeCounter';
import {
  Languages,
  RotateCcw,
  Sparkles,
  BookOpen,
  Heart,
  Info,
  Globe,
  SlidersHorizontal,
  Compass,
  AlertTriangle,
  Flame,
  Volume2
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [selectedSensor, setSelectedSensor] = useState<Sensor>(sensorsData[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [failedSensorId, setFailedSensorId] = useState<number | null>(null);

  // Auto-switch to first sensor of that category when category changes
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSelectedSensor(sensorsData[0]);
    } else {
      const filtered = sensorsData.filter((s) => s.systemName === catId);
      if (filtered.length > 0) {
        setSelectedSensor(filtered[0]);
      }
    }
  };

  const handleSelectSensor = (sensor: Sensor) => {
    setSelectedSensor(sensor);
  };

  const handleToggleFailure = () => {
    if (failedSensorId === selectedSensor.id) {
      setFailedSensorId(null);
    } else {
      setFailedSensorId(selectedSensor.id);
    }
  };

  const handleResetAllFailures = () => {
    setFailedSensorId(null);
  };

  // Setup language from browser locale by default (optional, defaults to Arabic as requested)
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Determine dynamic overlay class names based on simulated sensory failure
  const getFailureFilterClass = () => {
    if (failedSensorId === null) return '';
    switch (failedSensorId) {
      case 1: // Photoreceptors: Blindness / Night mode
        return 'filter brightness-[0.22] contrast-125 transition-all duration-1000';
      case 5: // Vestibular: Vertigo spinning
        return 'animate-vertigo';
      case 8: // Thermoreceptors: Heat flashes
        return 'shadow-[inset_0_0_80px_rgba(239,68,68,0.25)] transition-all duration-500';
      default:
        return '';
    }
  };

  const isRTL = language === 'ar';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen pb-20 selection:bg-brand-amber selection:text-brand-charcoal transition-all duration-700 ${getFailureFilterClass()}`}
      style={{ backgroundColor: '#f6f3eb' }}
    >
      {/* Top ambient banner if failure simulator is running */}
      {failedSensorId !== null && (
        <div className="bg-red-600 text-white text-xs text-center py-2 px-4 font-bold flex items-center justify-center gap-2 animate-pulse z-50 relative">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>
            {language === 'ar'
              ? `تنبيه: محاكاة تعطّل ${sensorsData.find((s) => s.id === failedSensorId)?.nameAr} نشطة الآن. عِش غياب النعمة!`
              : `ALERT: Failure simulation of ${sensorsData.find((s) => s.id === failedSensorId)?.nameEn} is active. Experience the loss!`}
          </span>
          <button
            onClick={handleResetAllFailures}
            className="bg-white text-red-700 hover:bg-brand-clay transition-all px-2 py-0.5 rounded-md font-mono font-extrabold uppercase text-[10px] cursor-pointer"
          >
            {language === 'ar' ? 'إعادة تعيين' : 'REBOOT SYSTEM'}
          </button>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col gap-8">
        {/* Header bar */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-amber/10 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-brand-charcoal text-brand-amber flex items-center justify-center shadow-lg border border-brand-amber/30">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-brand-charcoal font-serif tracking-tight flex items-center gap-2">
                {language === 'ar' ? 'موسوعة المستشعرات الربانية' : 'Divine Sensors Encyclopedia'}
                <Sparkles className="w-4 h-4 text-brand-amber" />
              </h1>
              <p className="text-xs text-brand-dark-brown/60 font-medium">
                {language === 'ar' ? 'وفي أنفسكم أفلا تبصرون...' : 'And in yourselves, do you not see...'}
              </p>
            </div>
          </div>

          {/* Quick Settings Panel */}
          <div className="flex items-center flex-wrap gap-3">
            {/* Audio Ambient Controller */}
            <AmbientSound
              isFailedState={failedSensorId !== null}
              failedSensorName={
                failedSensorId
                  ? language === 'ar'
                    ? sensorsData.find((s) => s.id === failedSensorId)?.nameAr || null
                    : sensorsData.find((s) => s.id === failedSensorId)?.nameEn || null
                  : null
              }
              language={language}
            />

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-brand-cream border border-brand-amber/20 rounded-full px-4 py-2 text-xs font-bold text-brand-dark-brown hover:bg-brand-clay transition-all shadow-sm focus:outline-none"
              id="btn-toggle-lang"
            >
              <Globe className="w-4 h-4 text-brand-amber" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Reset All */}
            {failedSensorId !== null && (
              <button
                onClick={handleResetAllFailures}
                className="flex items-center gap-1.5 bg-red-50 border border-red-200 hover:bg-red-100 rounded-full px-3 py-2 text-xs font-bold text-red-700 transition-all focus:outline-none"
                id="btn-reset-failures"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'إعادة التوازن' : 'Restore'}</span>
              </button>
            )}
          </div>
        </header>

        {/* Dynamic Spiritual Introduction & Motivation */}
        <section className="bg-brand-cream/60 border border-brand-amber/10 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex-grow max-w-4xl">
            <h2 className="text-lg md:text-xl font-bold text-brand-dark-brown font-serif mb-2">
              {language === 'ar' ? 'عجائب البرمجة الإلهية في الجسد البشري' : 'Miraculous Biological Programming'}
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-brand-dark-brown/80 font-medium text-justify">
              {language === 'ar' ? (
                <>
                  منظومات مجهرية فائقة الدقة تعمل في صمت تام، تقيس ضغط دمك، وتوازن حركتك، وتحمي خلاياك من التمزق والاحتراق، وتضبط اتزان مائك، دون حاجة لوعيك أو بطاريات شحن. هذه هي <b>المستشعرات الربانية</b> التي وهبك إياها الخالق برحمة لا متناهية. استكشف علمها وموتها تفاعلياً.
                </>
              ) : (
                <>
                  Microscopic sensor arrays operating continuously, monitoring arterial pressures, fluid osmosis, thermal tolerances, and pain reflex feedback in perfect, absolute silence. These are the <b>Divine Sensors</b> embedded in your system. Explore their parameters and simulated absence interactively.
                </>
              )}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-xs text-brand-amber bg-brand-clay px-4 py-2 rounded-2xl border border-brand-amber/15 font-semibold">
            <BookOpen className="w-4 h-4 animate-bounce" />
            <span>{language === 'ar' ? '١٧ حساساً معجزاً' : '17 Miracle Systems'}</span>
          </div>
        </section>

        {/* The Divine Artwork Masterpiece Display */}
        <DivineArtpiece language={language} />

        {/* Category filtering tab bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 bg-brand-clay/40 border border-brand-amber/10 rounded-2xl p-2.5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-brand-dark-brown/50" />
            <span className="text-xs font-mono text-brand-dark-brown/60 uppercase font-bold">
              {language === 'ar' ? 'تصفية الفئات:' : 'Filter Systems:'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SENSOR_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-xs px-4 py-2 rounded-xl border transition-all duration-200 focus:outline-none font-semibold ${
                  activeCategory === cat.id
                    ? 'bg-brand-amber border-brand-amber text-brand-charcoal shadow-sm font-bold'
                    : 'bg-brand-cream border-brand-clay hover:bg-brand-clay/60 text-brand-dark-brown/80'
                }`}
                id={`category-filter-btn-${cat.id}`}
              >
                {language === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Dashboard */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Interactive Human Map & Category Info (lg:span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-brand-cream/40 border border-brand-amber/10 rounded-3xl p-5 shadow-sm">
              <h3 className="text-xs font-mono tracking-widest text-brand-amber uppercase font-bold mb-4 text-center">
                {language === 'ar' ? 'خريطة الاستشعار التشريحي' : 'Anatomical Sensory Grid'}
              </h3>
              <HumanSilhouette
                sensors={sensorsData}
                selectedSensor={selectedSensor}
                onSelectSensor={handleSelectSensor}
                language={language}
                activeCategory={activeCategory}
                failedSensorId={failedSensorId}
              />
            </div>
          </div>

          {/* Column 2: Selected Sensor Deep-Dive Card & Loss Simulator (lg:span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SensorDetails
              selectedSensor={selectedSensor}
              isFailed={failedSensorId === selectedSensor.id}
              onToggleFailure={handleToggleFailure}
              language={language}
            />
          </div>
        </main>

        {/* Dynamic Contemplation & Spiritual Reflections Area */}
        <section className="mt-8 border-t border-brand-amber/10 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase font-semibold">
              {language === 'ar' ? 'سفر التدبر والحمد' : 'Gratitude & Exploration Deck'}
            </span>
            <h3 className="text-2xl font-bold text-brand-dark-brown mt-1 font-serif">
              {language === 'ar' ? 'باقة التأملات واليقين البيولوجي' : 'Spiritual & Biological Reflections'}
            </h3>
            <p className="text-xs text-brand-dark-brown/60 mt-2 font-medium">
              {language === 'ar'
                ? 'تأمل الحكمة في تصميم خلاياك، وتفكر في الميزانيات المادية التي تعجز عن تعويض نعمة واحدة.'
                : 'Ponder on the absolute design equations of your cellular structures and the immeasurable value of healthy default state.'}
            </p>
          </div>

          <ContemplationBoard language={language} />
        </section>

        {/* Dynamic Interactive Wisdom Quiz */}
        <section className="mt-12 bg-brand-clay/30 border border-brand-amber/10 rounded-3xl p-4 md:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase font-semibold">
              {language === 'ar' ? 'احرص على الفهم والتدبر' : 'Assess Your Certainty'}
            </span>
            <h3 className="text-xl font-bold text-brand-dark-brown mt-1 font-serif">
              {language === 'ar' ? 'اختبار مهارات التدبر واليقين' : 'The Certainty Verification Challenge'}
            </h3>
          </div>

          <QuizSection language={language} />
        </section>

        {/* Educational Concluding Reflection Message Box */}
        <section className="mt-12 bg-[#1c1511] border border-brand-amber/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden" id="educational-reflection-box" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-amber/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row gap-6 items-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-brand-amber animate-pulse" />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h4 className="text-lg md:text-xl font-bold text-brand-amber font-serif mb-3">
                {language === 'ar' ? 'رسالة تربوية في ختام التفكر:' : 'Educational Message at the Conclusion of Contemplation:'}
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-brand-cream/90 font-serif">
                {language === 'ar' 
                  ? 'لقد خلقك الله لتقوم بدورك الإعماري والعبادي في هذا الكون، وذلّل لك من أجل ذلك آلاف النظم والمستشعرات الكيميائية والميكانيكية لتؤدي أدوارها بثبات دون حتى وعيك الكامل بها. إن كل نبضة لقلبك، وكل عملية تمدد في رئتيك، وكل شعور بالألم أو العطش أو الحرارة، هو نداء صامت يدعوك لقول الحمد لله. فاحفظ هذه النعم واثبت على شكرها.'
                  : 'God created you to fulfill your constructive and devotional role in this universe, and has subjected thousands of chemical and mechanical systems and sensors for this purpose to perform their roles steadfastly without your full awareness. Every beat of your heart, every expansion of your lungs, and every feeling of pain, thirst, or heat is a silent call inviting you to say: Alhamdu lillah (Praise be to God). So protect these blessings and remain steadfast in their gratitude.'}
              </p>
            </div>
          </div>
        </section>

        {/* Footer Area */}
        <footer className="mt-16 border-t border-brand-amber/15 pt-8 text-center flex flex-col items-center gap-4">
          {/* Islamic Verse Sign-off */}
          <div className="max-w-2xl">
            <p className="text-base md:text-xl font-bold font-serif text-brand-amber leading-relaxed">
              " هَٰذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِن دُونِهِ "
            </p>
            <p className="text-[10px] md:text-xs opacity-70 italic text-brand-dark-brown/70 mt-1 font-serif">
              "This is the creation of Allah. So show me what those other than Him have created." (Surah Luqman - 11)
            </p>
          </div>

          {/* Majestic Poetry */}
          <div className="border-t border-brand-amber/5 pt-4 w-full max-w-md">
            <p className="text-xs md:text-sm font-semibold font-serif text-brand-dark-brown italic">
              أتحسب أنك جرم صغير .. وفيك انطوى العالم الأكبر
            </p>
            <p className="text-[10px] opacity-60 font-serif italic mt-0.5">
              "Do you deem yourself a small body, while folded within you is the greater universe?"
            </p>
          </div>

          {/* Official Branding & Slogan Footer */}
          <div className="flex flex-col items-center gap-1.5 border-t border-brand-amber/10 pt-6 w-full max-w-md">
            <span className="text-xs font-mono tracking-widest text-brand-amber uppercase font-semibold">
              {language === 'ar' ? 'تحت رعاية وبإشراف' : 'Sponsored & Under the Auspices of'}
            </span>
            <h4 className="text-sm md:text-base font-extrabold text-brand-dark-brown font-serif">
              مؤسسة عطاء العقيلة التنموية
            </h4>
            <span className="text-[10px] md:text-xs text-brand-amber font-serif italic">
              من أجل دولة كريمة
            </span>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-3.5">
              <span className="text-[10px] md:text-xs font-mono text-brand-dark-brown/70 font-semibold">
                {language === 'ar' ? 'تواصل معنا مباشرة عبر الواتساب:' : 'Contact us directly on WhatsApp:'}
              </span>
              <a
                href="https://wa.me/9647812600392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-300 shadow-md hover:shadow-lg shadow-green-500/20 cursor-pointer group"
                title={language === 'ar' ? 'تواصل معنا على الواتساب' : 'Contact us on WhatsApp'}
              >
                <svg className="w-4.5 h-4.5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>+964 781 260 0392</span>
              </a>
            </div>
          </div>

          {/* Human designed credits */}
          <div className="text-[10px] font-mono text-brand-dark-brown/50 uppercase mt-4 flex items-center gap-1">
            <span>&copy; 2026</span>
            <span>&bull;</span>
            <span>{language === 'ar' ? 'موسوعة المستشعرات الربانية بالجسد' : 'Divine Sensors Encyclopedia'}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              {language === 'ar' ? 'الحمد لله رب العالمين' : 'Praise be to God'}
              <Heart className="w-2.5 h-2.5 text-red-600 fill-red-600 inline" />
            </span>
          </div>
        </footer>
      </div>

      {/* Floating Action Button (FAB) Gratitude Counter with Persistent Sparks */}
      <GratitudeCounter language={language} />
    </div>
  );
}
