import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Trophy, Heart } from 'lucide-react';

interface QuizSectionProps {
  language: 'ar' | 'en';
}

interface Question {
  id: number;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionAr: "ما هو الخطر الفوري والأشد فتكاً الذي يواجه الإنسان عند تعطل حساسات الألم (Nociceptors)؟",
    questionEn: "What is the most immediate and lethal threat a person faces when pain sensors (Nociceptors) fail?",
    optionsAr: [
      "الإصابة بالزكام والرشح بصفة مستمرة",
      "التعرض للحروق، والكسور، وانفجار الزائدة الدودية دون أدنى شعور بالإنذار مما يسبب الموت",
      "تغير لون البشرة إلى شاحب جداً وفقدان توازن الجسم"
    ],
    optionsEn: [
      "Developing constant colds and respiratory infections",
      "Suffering severe burns, bone fractures, or organ ruptures without any warning signal, leading to rapid death",
      "The skin turning pale and losing overall motor balance"
    ],
    correctIndex: 1,
    explanationAr: "الألم ليس عقوبة، بل هو لغة الرحمة الإلهية؛ فجهاز الإنذار الفوري يحمي خلاياك وجسدك من التلف الدائم والاحتراق والموت في صمت تام.",
    explanationEn: "Pain is not a punishment but a protective mercy; this automatic alarm system shields your body from silent tissue destruction and instantaneous death."
  },
  {
    id: 2,
    questionAr: "تسمى المتلازمة التي يصاب بها الإنسان عند تلف الحساسات الكيميائية للدم (Chemoreceptors) فيتوقف عن التنفس تلقائياً أثناء النوم بـ:",
    questionEn: "The rare syndrome resulting from damaged blood chemoreceptors, causing a person to completely stop breathing during sleep, is called:",
    optionsAr: [
      "متلازمة لعنة أوندين (Ondine's Curse)",
      "متلازمة باركنسون وتصلب الأنسجة",
      "متلازمة مينيير للدوار الدهليزي"
    ],
    optionsEn: [
      "Ondine's Curse (Central Alveolar Hypoventilation)",
      "Parkinson's Neurological Syndrome",
      "Meniere's Vestibular Disease"
    ],
    correctIndex: 0,
    explanationAr: "تتسبب متلازمة لعنة أوندين في الموت اختناقاً لمجرد استسلام المريض للنوم، لأن الدماغ يفقد برمجة التنفس الآلي التلقائي.",
    explanationEn: "Ondine's Curse forces individuals to rely on mechanical ventilators to sleep, as the brain completely forgets the biological autopilot code for breathing."
  },
  {
    id: 3,
    questionAr: "أي مستشعر حيوي يعمل كـ \"جيروسكوب مائي\" لتحديد اتجاه وميلان الرأس وتوازن الجسم أثناء الحركة والسير؟",
    questionEn: "Which biosensor operates as a \"fluidic gyroscope\" to track head tilt and coordinate equilibrium during motion?",
    optionsAr: [
      "حساسات الضغط الشرياني (Baroreceptors)",
      "الخلايا الشعرية الدهليزية في الأذن الداخلية (Vestibular Hair Cells)",
      "حساسات التوازن والموقع العضلية (Proprioceptors)"
    ],
    optionsEn: [
      "Arterial Baroreceptors",
      "Inner Ear Vestibular Hair Cells",
      "Muscle Proprioceptors"
    ],
    correctIndex: 1,
    explanationAr: "تعمل الخلايا الشعرية الدهليزية على رصد حركة السوائل المجهرية بالأذن الداخلية، وتحديث الدماغ فوراً لتصحيح التوازن ومنع الدوار المستمر.",
    explanationEn: "Vestibular hair cells track microscopic fluid displacements in your ear, immediately updating the brain to correct balance and prevent chronic, spinning vertigo."
  },
  {
    id: 4,
    questionAr: "تقيس حساسات التركيز الأسموزي (Osmoreceptors) بدقة فائقة تركيز المواد في الدم لمنع خلايا الدماغ من:",
    questionEn: "Osmoreceptors measure blood solute concentration with high fidelity to prevent brain cells from:",
    optionsAr: [
      "الانكماش والجفاف الشديد أو الانتفاخ والانفجار القاتل",
      "التحول إلى خلايا دهنية صعبة الاحتراق",
      "فقدان القدرة على تمييز ملامس الحرير والحديد"
    ],
    optionsEn: [
      "Shrinking to severe dehydration or swelling and lethally bursting",
      "Converting into stubborn adipose cells that cannot burn",
      "Losing the ability to distinguish between silk and raw iron"
    ],
    correctIndex: 0,
    explanationAr: "أي تغير مجهري في نسبة الملح بالدم قد يؤدي لجذب المياه لداخل خلايا الدماغ وتورمها القاتل، أو جفاف الخلايا وموتها فجأة. سبحان الخالق!",
    explanationEn: "Even a tiny osmotic imbalance could draw water into brain cells causing cerebral edema (brain swelling), or dehydrating them to death. Glory to the Creator!"
  }
];

export default function QuizSection({ language }: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // Prevent double answer
    setSelectedOption(idx);
    if (idx === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  return (
    <div className="bg-brand-cream border border-brand-amber/15 rounded-3xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto" id="wisdom-quiz-module">
      <div className="flex items-center justify-between border-b border-brand-amber/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-brand-amber" />
          <h3 className="text-md font-bold text-brand-dark-brown font-serif">
            {language === 'ar' ? 'اختبار تفاعلي: تدبر وعلم اليقين' : 'Interactive Quiz: Reflective Certainty'}
          </h3>
        </div>
        <div className="text-xs font-mono text-brand-dark-brown/60">
          {quizFinished
            ? (language === 'ar' ? 'اكتمل' : 'Completed')
            : `${language === 'ar' ? 'السؤال' : 'Question'} ${currentIndex + 1} / ${QUIZ_QUESTIONS.length}`}
        </div>
      </div>

      {!quizFinished ? (
        <div className="flex flex-col gap-6">
          {/* Question Text */}
          <h4 className="text-sm md:text-base font-bold text-brand-dark-brown leading-relaxed">
            {language === 'ar' ? currentQuestion.questionAr : currentQuestion.questionEn}
          </h4>

          {/* Options List */}
          <div className="flex flex-col gap-3">
            {(language === 'ar' ? currentQuestion.optionsAr : currentQuestion.optionsEn).map((option, idx) => {
              const isCorrect = idx === currentQuestion.correctIndex;
              const isSelected = idx === selectedOption;

              let btnStyle = "bg-brand-clay/30 border-brand-amber/10 hover:bg-brand-clay/60 text-brand-dark-brown";
              if (selectedOption !== null) {
                if (isCorrect) {
                  btnStyle = "bg-green-50 border-green-500 text-green-900 font-medium";
                } else if (isSelected) {
                  btnStyle = "bg-red-50 border-red-500 text-red-900";
                } else {
                  btnStyle = "bg-brand-clay/10 border-transparent text-brand-dark-brown/40 pointer-events-none";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full text-right md:text-justify px-4 py-3.5 rounded-xl border transition-all duration-300 text-xs md:text-sm flex items-start gap-3 focus:outline-none ${btnStyle}`}
                  disabled={selectedOption !== null}
                  id={`quiz-option-btn-${idx}`}
                >
                  <span className="w-5 h-5 rounded-full bg-brand-clay/50 border border-brand-amber/20 shrink-0 flex items-center justify-center text-[10px] font-mono text-brand-dark-brown select-none">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-grow">{option}</span>
                  {selectedOption !== null && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  )}
                  {selectedOption !== null && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Area */}
          {showExplanation && (
            <div className="bg-brand-clay/40 border border-brand-amber/20 rounded-2xl p-4 md:p-5 animate-breath-warm">
              <div className="flex items-center gap-2 text-brand-amber mb-2">
                <Heart className="w-4 h-4 fill-brand-amber" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'ar' ? 'تأمل الحكمة والرحمة' : 'Reflect on the Divine Wisdom'}
                </span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-brand-dark-brown font-serif italic">
                {language === 'ar' ? currentQuestion.explanationAr : currentQuestion.explanationEn}
              </p>
            </div>
          )}

          {/* Action buttons */}
          {selectedOption !== null && (
            <button
              onClick={handleNext}
              className="mt-2 self-end bg-brand-charcoal text-brand-cream hover:bg-brand-amber hover:text-brand-charcoal transition-all duration-300 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 focus:outline-none shadow-md hover:shadow-lg"
              id="btn-quiz-next"
            >
              {currentIndex + 1 === QUIZ_QUESTIONS.length ? (
                <span>{language === 'ar' ? 'عرض النتيجة' : 'FINISH QUIZ'}</span>
              ) : (
                <span>{language === 'ar' ? 'السؤال التالي' : 'NEXT QUESTION'}</span>
              )}
            </button>
          )}
        </div>
      ) : (
        /* Quiz Finished Summary */
        <div className="text-center py-6 flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-brand-amber/10 border border-brand-amber/30 flex items-center justify-center text-brand-amber animate-pulse mb-2">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-dark-brown">
              {language === 'ar' ? 'اكتمل اختبار التأمل والتدبر!' : 'Contemplation Quiz Complete!'}
            </h4>
            <p className="text-xs text-brand-dark-brown/60 mt-1">
              {language === 'ar' 
                ? 'لقد أنهيت الأسئلة بنجاح واستزدت من علم اليقين في عجائب خلق الله.' 
                : 'You have completed the test, reflecting on the grand structural design of human systems.'}
            </p>
          </div>

          <div className="bg-brand-clay/50 border border-brand-amber/20 rounded-2xl px-8 py-4 my-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-brown/50 block mb-1">
              {language === 'ar' ? 'النتيجة الكلية لليقين' : 'Reflective Score'}
            </span>
            <span className="text-3xl font-extrabold text-brand-amber font-mono">
              {score} / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          <button
            onClick={restartQuiz}
            className="bg-brand-clay border border-brand-amber/30 hover:border-brand-amber hover:bg-brand-cream text-brand-dark-brown transition-all duration-300 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 focus:outline-none"
            id="btn-quiz-restart"
          >
            <RefreshCw className="w-4 h-4 text-brand-amber" />
            <span>{language === 'ar' ? 'إعادة الاختبار' : 'RESTART QUIZ'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
