export interface Sensor {
  id: number;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  locationAr: string;
  locationEn: string;
  coords: { x: number; y: number }; // Percentage coords on a standard 100x100 silhouette bounding box
  functionAr: string;
  functionEn: string;
  failureAr: string;
  failureEn: string;
  causesAr: string;
  causesEn: string;
  iconName: string;
  severity: 'high' | 'critical' | 'fatal';
  systemName: string;
}

export const SENSOR_CATEGORIES = [
  { id: 'all', labelAr: 'جميع المستشعرات', labelEn: 'All Sensors' },
  { id: 'senses', labelAr: 'الحواس الخارجية', labelEn: 'External Senses' },
  { id: 'balance', labelAr: 'التوازن الداخلي', labelEn: 'Internal Balance' },
  { id: 'vital', labelAr: 'المؤشرات الحيوية', labelEn: 'Vital Indicators' }
];

export const sensorsData: Sensor[] = [
  {
    id: 1,
    nameAr: "حساسات الشبكية والضوء",
    nameEn: "Photoreceptors",
    categoryAr: "الحواس الخارجية",
    categoryEn: "External Senses",
    locationAr: "العين (الشبكية)",
    locationEn: "Eyes (Retina)",
    coords: { x: 50, y: 10 },
    functionAr: "تتكون من نوعين (العصي للمح المظلم، والمخاريط لرؤية الألوان والتفاصيل). تحول الضوء الساقط على العين إلى نبضات كهربائية يسافر بها العصب البصري للدماغ، لتتشكل صورة الكون من حولنا.",
    functionEn: "Consisting of two main types (rods for vision in dim light, and cones for color perception and fine details). They convert light falling on the retina into electrical impulses that travel via the optic nerve to the brain, forming our visual perception of the universe.",
    failureAr: "يفقد الإنسان القدرة على رؤية الألوان (عمى الألوان)، أو يصاب بالعشى الليلي، وفي حال تلفها الكامل يصاب بالعمى التام وظلمة العين.",
    failureEn: "Loss of color vision (color blindness), night blindness (nyctalopia), or in cases of complete damage, total blindness and permanent darkness.",
    causesAr: "انفصال الشبكية، مرض المياه الزرقاء (الجلوكوما)، اعتلال الشبكية السكري، أو العوامل الوراثية.",
    causesEn: "Retinal detachment, glaucoma, diabetic retinopathy, or hereditary genetic factors.",
    iconName: "Eye",
    severity: "critical",
    systemName: "senses"
  },
  {
    id: 2,
    nameAr: "حساسات الضغط الشرياني",
    nameEn: "Baroreceptors",
    categoryAr: "المؤشرات الحيوية",
    categoryEn: "Vital Indicators",
    locationAr: "شرايين الرقبة والصدر الرئيسية",
    locationEn: "Major Arteries (Carotid Sinus & Aorta)",
    coords: { x: 50, y: 19 },
    functionAr: "تقيس تمدد الشرايين وتعمل كجهاز ضغط دم آلي، تأمر القلب والأوعية بالتوسع أو الانقباض لضمان وصول الدم للدماغ بانتظام عند الوقوف أو الحركة.",
    functionEn: "They detect the stretching of arterial walls, acting as an automatic blood pressure regulator. They instruct the heart and blood vessels to dilate or constrict, ensuring steady blood flow to the brain when standing or moving.",
    failureAr: "هبوط ضغط الدم الانتصابي الحاد، دوار شديد وإغماء متكرر بمجرد الوقوف، وعدم قدرة الجسم على التحكم في نبضات القلب.",
    failureEn: "Severe orthostatic hypotension, intense dizziness, recurrent fainting immediately upon standing up, and the body's inability to regulate heart rate dynamically.",
    causesAr: "التصلب العصبي، داء السكري المزمن، الشيخوخة وتصلب الشرايين، ومرض باركنسون.",
    causesEn: "Autonomic neuropathy, chronic diabetes, aging, atherosclerosis (hardening of arteries), and Parkinson's disease.",
    iconName: "HeartPulse",
    severity: "fatal",
    systemName: "vital"
  },
  {
    id: 3,
    nameAr: "حساسات الألم",
    nameEn: "Nociceptors",
    categoryAr: "المؤشرات الحيوية",
    categoryEn: "Vital Indicators",
    locationAr: "الجلد والأنسجة الداخلية",
    locationEn: "Skin & Internal Tissues",
    coords: { x: 26, y: 35 },
    functionAr: "جهاز الإنذار الفوري للجسد؛ ترصد أي خطر كيميائي أو حراري أو ميكانيكي يهدد الأنسجة وتترجمه كـ \"ألم\" ليدفعك للابتعاد عن الخطر.",
    functionEn: "The body's immediate alarm system. They detect any thermal, chemical, or mechanical threat to tissues, translating it into \"pain\" to force you to retreat from danger.",
    failureAr: "يفقد الإنسان الشعور بالألم تماماً، فيتعرض للحروق، والكسور، وبتر الأعضاء، والتهاب الزائدة الدودية وانفجارها دون أن يدري، مما يؤدي للوفاة السريعة.",
    failureEn: "Complete loss of pain perception. The person suffers severe burns, fractures, silent tissue damage, or appendicitis and organ rupture without ever feeling it, leading to life-threatening complications or rapid death.",
    causesAr: "مرض عدم الحساسية الخلقية للألم (خلل جيني نادر)، أو الاعتلال العصبي السكري المتقدم.",
    causesEn: "Congenital Insensitivity to Pain (CIP - a rare genetic mutation) or advanced diabetic neuropathy.",
    iconName: "FlameKindling",
    severity: "fatal",
    systemName: "vital"
  },
  {
    id: 4,
    nameAr: "حساسات التوازن والموقع",
    nameEn: "Proprioceptors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "العضلات والمفاصل والأوتار",
    locationEn: "Muscles, Joints & Tendons",
    coords: { x: 38, y: 64 },
    functionAr: "مستشعرات ميكانيكية في العضلات والمفاصل تُعلم الدماغ بوضعية جسدك وأطرافك في الفضاء دون الحاجة للنظر إليها (الوعي الذاتي بالجسد).",
    functionEn: "Mechanical receptors in muscles and joints that inform the brain of the exact position and orientation of your body and limbs in space without needing to look at them (spatial self-awareness).",
    failureAr: "ترنح حركي حاد، وفقدان التوازن تماماً، وعجز الإنسان عن المشي أو لمس وجهه أو الإمساك بالأشياء إلا بالتركيز البصري الشديد عليها.",
    failureEn: "Severe sensory ataxia, complete loss of balance, and inability to walk, touch one's face, or hold objects without intense, exhausting visual concentration on the limbs.",
    causesAr: "نقص حاد في فيتامين B12، التسمم بالمعادن الثقيلة، أو إصابات الحبل الشوكي.",
    causesEn: "Severe Vitamin B12 deficiency, heavy metal poisoning (such as mercury or lead), or spinal cord injuries.",
    iconName: "Accessibility",
    severity: "high",
    systemName: "balance"
  },
  {
    id: 5,
    nameAr: "حساسات التوازن الديناميكي",
    nameEn: "Vestibular Hair Cells",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "الأذن الداخلية (المنظومة الدهليزية)",
    locationEn: "Inner Ear (Vestibular System)",
    coords: { x: 53, y: 9 },
    functionAr: "توجد في الأذن الداخلية (المنظومة الدهليزية) وترصد حركة السوائل داخل القنوات؛ تعمل كـ \"حساس الجيروسكوب\" لمعرفة اتجاه الرأس وميلانه لحفظ توازن الجسم أثناء الحركة.",
    functionEn: "Situated in the inner ear's semicircular canals to detect fluid movement. They act as a biological gyroscope, sensing head orientation and rotation to maintain overall body equilibrium during movement.",
    failureAr: "دوار دهليزي حاد (الدوخة المستمرة)، والشعور بأن العالم يدور من حولك، والغثيان، وعدم القدرة على الوقوف مستقيماً.",
    failureEn: "Severe vestibular vertigo (relentless spinning sensation), chronic dizziness, motion sickness, nausea, and the absolute inability to stand or walk straight.",
    causesAr: "التهاب الأذن الداخلية الفيروسي، مرض مينيير، أو ضربات الرأس العنيفة.",
    causesEn: "Labyrinthitis (viral inner ear infection), Meniere's disease, or severe head trauma.",
    iconName: "Compass",
    severity: "high",
    systemName: "balance"
  },
  {
    id: 6,
    nameAr: "حساسات السوائل والتركيز الأسموزي",
    nameEn: "Osmoreceptors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "الدماغ (تحت المهاد)",
    locationEn: "Brain (Hypothalamus)",
    coords: { x: 48, y: 8 },
    functionAr: "تقيس بدقة متناهية تركيز الأملاح والماء في الدم داخل الدماغ لضمان عدم جفاف الخلايا أو انفجارها.",
    functionEn: "They measure with extreme precision the concentration of salts and water in the bloodstream inside the brain, regulating thirst and fluid balance to prevent cells from dehydrating or bursting.",
    failureAr: "خلل حاد في نظام السوائل؛ إما جفاف قاتل دون الشعور بالعطش، أو احتباس شديد للماء يؤدي إلى وذمة دماغية (تورم الدماغ) وغيبوبة.",
    failureEn: "Fatal disruption of fluid homeostasis; either severe dehydration due to lack of thirst sensation, or extreme water retention causing cerebral edema (brain swelling), seizures, and coma.",
    causesAr: "أورام الغدة النخامية أو منطقة تحت المهاد، السكتات الدماغية، أو ضربات الرأس الحادة.",
    causesEn: "Pituitary or hypothalamic tumors, strokes, or traumatic brain injury.",
    iconName: "Droplet",
    severity: "fatal",
    systemName: "balance"
  },
  {
    id: 7,
    nameAr: "حساسات التمدد والامتلاء",
    nameEn: "Stretch Receptors",
    categoryAr: "المؤشرات الحيوية",
    categoryEn: "Vital Indicators",
    locationAr: "الرئتين، المعدة، والمثانة البولية",
    locationEn: "Lungs, Stomach & Urinary Bladder",
    coords: { x: 50, y: 34 },
    functionAr: "تنتشر في الرئتين والمعدة والمثانة. في الرئتين تمنع الإفراط في الشهيق لحمايتها من التمزق، وفي المعدة والمثانة تعطي إشارات الامتلاء والشبع أو الحاجة للتفريغ.",
    functionEn: "Distributed across the lungs, stomach, and bladder. In lungs, they trigger the Hering-Breuer reflex to prevent over-inflation and rupture. In the stomach and bladder, they signal fullness, satiety, or the necessity to empty.",
    failureAr: "تمزق في الأنسجة الرئوية، أو تمدد خطير في المعدة والمثانة وفقدان السيطرة على الإخراج، أو سمنة مفرطة لغياب إشارات الشبع.",
    failureEn: "Pulmonary tissue rupture (over-inflation), dangerous over-distension of the stomach or bladder, loss of urinary/fecal control, or severe obesity due to the complete absence of satiety signals.",
    causesAr: "تلف العصب الحائر، الانسداد الرئوي المزمن، أو إصابات النخاع الشوكي السفلي.",
    causesEn: "Vagus nerve damage, Chronic Obstructive Pulmonary Disease (COPD), or lower spinal cord injuries.",
    iconName: "Expand",
    severity: "critical",
    systemName: "vital"
  },
  {
    id: 8,
    nameAr: "حساسات الحرارة",
    nameEn: "Thermoreceptors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "الجلد والأعضاء الداخلية عموماً",
    locationEn: "Skin & Internal Viscera",
    coords: { x: 20, y: 48 },
    functionAr: "مستشعرات للبرودة والسخونة في الجلد والأحشاء، تعمل كـ \"ثرموستات\" للحفاظ على حرارة الأعضاء الداخلية ثابتة عند 37°C.",
    functionEn: "Specialized sensors for cold and heat in the skin and viscera. They function as a thermal thermostat, triggering sweating or shivering to maintain core body temperature strictly at 37°C (98.6°F).",
    failureAr: "عجز الجسم عن إفراز العرق للتبريد أو الارتجاف للتدفئة، مما يسبب الموت السريع من ضربات الشمس الحارة أو تجمد الأعضاء في الأجواء الباردة.",
    failureEn: "Inability to sweat for cooling or shiver for heating, causing rapid fatal outcomes from heatstroke (hyperthermia) or hypothermia in cold environments.",
    causesAr: "الحروق العميقة المقشرة للجلد، تلف الأعصاب الطرفية، أو إصابات مركز تنظيم الحرارة في الدماغ.",
    causesEn: "Deep full-thickness skin burns, peripheral neuropathy, or damage to the preoptic area/hypothalamus temperature regulation center in the brain.",
    iconName: "Thermometer",
    severity: "fatal",
    systemName: "balance"
  },
  {
    id: 9,
    nameAr: "الحساسات الكيميائية للدم",
    nameEn: "Chemoreceptors",
    categoryAr: "المؤشرات الحيوية",
    categoryEn: "Vital Indicators",
    locationAr: "جذع الدماغ والشرايين",
    locationEn: "Brainstem & Main Arteries",
    coords: { x: 46, y: 15 },
    functionAr: "تقيس باستمرار مستويات الأكسجين، وثاني أكسيد الكربون، ودرجة حموضة الدم (pH) لتعديل سرعة وعمق التنفس تلقائياً.",
    functionEn: "They continuously monitor oxygen, carbon dioxide, and blood acidity levels (pH) to automatically adjust breathing rate and depth, keeping blood gases in physiological equilibrium.",
    failureAr: "توقف التنفس الإرادي أثناء النوم (متلازمة لعنة أوندين) مما يؤدي للموت اختناقاً، أو حموضة الدم القاتلة دون أي رد فعل دفاعي من الرئتين.",
    failureEn: "Sleep apnea and Ondine's curse (congenital central hypoventilation syndrome) where breathing completely stops during sleep, or severe fatal acidosis with zero compensatory breathing response.",
    causesAr: "التهابات جذع الدماغ، السكتات الدماغية المركزية، أو التسمم بالجرعات الزائدة من المخدرات والمهدئات.",
    causesEn: "Brainstem infections (encephalitis), central nervous system strokes, or severe poisoning/overdose of narcotics and sedatives.",
    iconName: "FlaskConical",
    severity: "fatal",
    systemName: "vital"
  },
  {
    id: 10,
    nameAr: "حساسات الجوع والطاقة",
    nameEn: "Glucoreceptors",
    categoryAr: "المؤشرات الحيوية",
    categoryEn: "Vital Indicators",
    locationAr: "الكبد والمنطقة البصرية في الدماغ",
    locationEn: "Liver & Brain (Hypothalamus)",
    coords: { x: 47, y: 42 },
    functionAr: "مستشعرات متخصصة في الكبد والدماغ تقيس مستوى سكر الغلوكوز في الدم لحماية الدماغ من النفاد المفاجئ للطاقة.",
    functionEn: "Specialized glucose sensors in the liver and hypothalamus that monitor blood sugar levels, triggering hunger or hormone release to safeguard the brain from sudden energy depletion.",
    failureAr: "غيبوبة سكر مفاجئة وموت دماغي دون أن يشعر الإنسان بأي أعراض جوع أو تعب تحذيرية تدفعه لتناول السكر.",
    failureEn: "Sudden hypoglycemic coma and brain death without any warning hunger pangs or fatigue symptoms that would otherwise compel the individual to consume glucose.",
    causesAr: "خلل وظيفي في منطقة تحت المهاد بالدماغ، أو تلف الأعصاب الواصلة بين الكبد والجهاز العصبي المركزي.",
    causesEn: "Hypothalamic dysfunction, or neuropathy affecting the afferent pathways connecting the liver to the central nervous system.",
    iconName: "Activity",
    severity: "critical",
    systemName: "vital"
  },
  {
    id: 11,
    nameAr: "حساسات اللمس الدقيق والاهتزاز",
    nameEn: "Tactile Receptors",
    categoryAr: "الحواس الخارجية",
    categoryEn: "External Senses",
    locationAr: "الجلد وأطراف الأصابع",
    locationEn: "Skin & Fingertips",
    coords: { x: 18, y: 56 },
    functionAr: "تشمل (جسيمات ميسنر، وباكيني، وميركل) في الجلد. تمكنك من الإحساس بملامس الأشياء، والاهتزازات، وقراءة لغة برايل للمكفوفين، والتعرف على الجمادات باللمس.",
    functionEn: "Comprising Meissner's, Pacinian corpuscles, and Merkel discs. They enable you to perceive textures, vibrations, read Braille, and recognize objects solely by touch.",
    failureAr: "خدر كامل في اليدين والجسم، وعجز عن الإمساك بالأشياء بدقة (تسقط الأشياء من اليد تلقائياً)، وعدم القدرة على التمييز بين الحرير والحديد.",
    failureEn: "Complete numbness, loss of manual dexterity (objects slip from hands involuntarily), and inability to distinguish between different textures like silk and raw iron.",
    causesAr: "الجذام، الاعتلال العصبي السكري، أو نقص فيتامينات الأعصاب (مجموعة B).",
    causesEn: "Leprosy, diabetic neuropathy, or severe vitamin B-complex deficiencies.",
    iconName: "Hand",
    severity: "high",
    systemName: "senses"
  },
  {
    id: 12,
    nameAr: "حساسات الصوت الاهتزازية",
    nameEn: "Acoustic Mechanoreceptors",
    categoryAr: "الحواس الخارجية",
    categoryEn: "External Senses",
    locationAr: "الأذن (القوقعة)",
    locationEn: "Ear (Cochlea)",
    coords: { x: 44, y: 10 },
    functionAr: "ملايين الخلايا الشعرية داخل قوقعة الأذن ترصد اهتزازات الهواء وتحول الترددات الصوتية إلى لغة كهربائية يفهمها الدماغ كأصوات وكلام.",
    functionEn: "Millions of specialized microscopic hair cells in the cochlea that detect air vibrations, transforming acoustic frequencies into neural electrical signals that the brain decodes as sound and speech.",
    failureAr: "الصمم التام أو الصمم العصبي، حيث يفقد الإنسان صلته السمعية بالعالم الخارجي.",
    failureEn: "Complete sensory deafness or profound sensorineural hearing loss, disconnecting the individual from all auditory contact with the world.",
    causesAr: "التعرض للأصوات الصاخبة جداً لفترات طويلة، الشيخوخة (صمم الشيخوخة)، أو الأدوية ذات السمية الأذنية.",
    causesEn: "Chronic exposure to high-decibel noise, aging (presbycusis), or ototoxic medications (certain antibiotics or chemotherapy drugs).",
    iconName: "Volume2",
    severity: "critical",
    systemName: "senses"
  },
  {
    id: 13,
    nameAr: "حساسات الجوع والشبع المتكاملة (Satiety Sensors)",
    nameEn: "Satiety & Hunger Sensors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "المعدة والأمعاء ومنطقة تحت المهاد بالدماغ",
    locationEn: "Stomach, Intestines & Hypothalamus",
    coords: { x: 52, y: 46 },
    functionAr: "تنظيم طاقة الجسد ميكانيكياً وكيميائياً عبر قياس هرمونات اللبتين والغريلين وتمدد المعدة.",
    functionEn: "Mechanically and chemically regulate body energy by measuring leptin and ghrelin hormone levels alongside stomach wall distension.",
    failureAr: "غياب إشارات الشبع مما يقود لسمنة مفرطة وتمدد خطير بجدار المعدة، أو غياب إشارات الجوع مما يسبب الهزال الجسدي الحاد.",
    failureEn: "Absence of satiety signals leading to morbid obesity and dangerous stomach wall enlargement, or absence of hunger signals leading to acute wasting.",
    causesAr: "تلف العصب الحائر، أو أورام منطقة تحت المهاد.",
    causesEn: "Vagus nerve damage or hypothalamic tumors.",
    iconName: "Activity",
    severity: "critical",
    systemName: "balance"
  },
  {
    id: 14,
    nameAr: "مستشعرات الألم الحشوي العميق (Visceral Receptors)",
    nameEn: "Deep Visceral Receptors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "الأعضاء الداخلية والأحشاء كالكلى والقلب",
    locationEn: "Internal Viscera (Kidneys, Heart, Liver)",
    coords: { x: 54, y: 53 },
    functionAr: "مزروعة داخل الأعضاء الداخلية كالكلى والقلب لترصد الالتهابات ونقص الأكسجين الحاد لإنقاذه سريعاً قبل تلفه.",
    functionEn: "Embedded within internal organs to monitor tissue inflammation and acute oxygen deprivation, prompting immediate protective measures before organ damage occurs.",
    failureAr: "حدوث جلطات صامتة أو انفجار الأعضاء دون الشعور بأي ألم تحذيري.",
    failureEn: "Occurrence of silent infarctions, tissue rupture, or organ failure without any protective warning pain, leading to catastrophic internal damage.",
    causesAr: "الاعتلال العصبي السكري المتقدم.",
    causesEn: "Advanced diabetic autonomic neuropathy.",
    iconName: "HeartPulse",
    severity: "fatal",
    systemName: "balance"
  },
  {
    id: 15,
    nameAr: "مستشعرات تيار الدم واللزوجة (Shear Stress Sensors)",
    nameEn: "Vascular Shear Stress Sensors",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "الأغشية المبطنة للشرايين والقلب",
    locationEn: "Endothelium of Major Blood Vessels & Heart",
    coords: { x: 36, y: 26 },
    functionAr: "تستشعر قوة احتكاك وتدفق الدم وتأمر بفرز مادة النيتريك أكسيد فوراً لتوسيع الشرايين ومنع الجلطات عند الضغط الزائد.",
    functionEn: "Sense friction forces exerted by blood flow and prompt the immediate secretion of nitric oxide to dilate arteries and prevent blood clots under increased loads.",
    failureAr: "تصلب دائم في الشرايين، ارتفاع مفاجئ وقاتل في ضغط الدم، وتكون جلطات دموية سريعة.",
    failureEn: "Permanent arterial stiffness, sudden fatal spikes in systemic blood pressure, and high susceptibility to rapid blood clot formations.",
    causesAr: "الارتفاع المزمن في الكوليسترول، أو التدخين.",
    causesEn: "Chronic high cholesterol or prolonged smoking.",
    iconName: "FlaskConical",
    severity: "fatal",
    systemName: "balance"
  },
  {
    id: 16,
    nameAr: "مستشعرات الجهد العضلي والأوتار (Golgi Tendon Organs)",
    nameEn: "Golgi Tendon Organs",
    categoryAr: "التوازن الداخلي",
    categoryEn: "Internal Balance",
    locationAr: "أوتار العضلات ونقاط الاتصال بالعظام",
    locationEn: "Muscle-Tendon Junctions",
    coords: { x: 64, y: 72 },
    functionAr: "تقيس بدقة متناهية الثقل الذي تحمله العضلة، وتجبرها على الارتخاء التام وإسقاط الوزن قسرياً إذا كان فوق طاقتها لحمايتها من التمزق.",
    functionEn: "Measure exact mechanical loads on muscles, forcing involuntary relaxation and load dropping if tension exceeds safety levels to prevent tissue tearing.",
    failureAr: "تمزق كامل في العضلات وانفصال الأوتار عن العظام عند محاولة حمل أوزان ثقيلة.",
    failureEn: "Complete muscle tears and painful tendon avulsion from bones when attempting to carry or lift heavy weights.",
    causesAr: "إصابات الحبل الشوكي، أو تناول المنشطات الهرمونية.",
    causesEn: "Spinal cord lesions or chronic anabolic steroid abuse.",
    iconName: "Accessibility",
    severity: "high",
    systemName: "balance"
  },
  {
    id: 17,
    nameAr: "مستشعرات الحكة والتحسس (Pruriceptors)",
    nameEn: "Pruriceptors (Itch Sensors)",
    categoryAr: "الحواس الخارجية",
    categoryEn: "External Senses",
    locationAr: "الطبقة السطحية من الجلد وبصيلات الشعر",
    locationEn: "Epidermal Skin Layers",
    coords: { x: 28, y: 78 },
    functionAr: "تنشط عند رصد مواد كيميائية غريبة وتجبر يدك على الحك لطرد المادة وحماية الجلد.",
    functionEn: "Activate upon detecting foreign chemical irritants or microbes, provoking the protective scratching urge to remove harmful agents and guard the skin.",
    failureAr: "بقاء المواد السامة والميكروبات والحشرات على الجلد لفترات طويلة وتغلغلها داخل الجسم دون رد فعل طارد.",
    failureEn: "Prolonged presence of toxins, parasites, and microbes on the skin without triggering a protective sweeping or scratching response.",
    causesAr: "الحروق الشديدة وتلف طبقة البشرة.",
    causesEn: "Severe full-thickness burns or epidermal layer destruction.",
    iconName: "Hand",
    severity: "high",
    systemName: "senses"
  }
];

export const CONTEMPLATION_QUOTES = [
  {
    quoteAr: "وَفِي أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
    quoteEn: "And in yourselves, do you not see?",
    sourceAr: "سورة الذاريات - الآية ٢١",
    sourceEn: "Surah Ad-Dhariyat - Verse 21",
  },
  {
    quoteAr: "هَٰذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِن دُونِهِ",
    quoteEn: "This is the creation of Allah. So show me what those other than Him have created.",
    sourceAr: "سورة لقمان - الآية ١١",
    sourceEn: "Surah Luqman - Verse 11",
  },
  {
    quoteAr: "أتحسب أنك جرم صغير وفيك انطوى العالم الأكبر",
    quoteEn: "Do you deem yourself a small body, while folded within you is the greater universe?",
    sourceAr: "أمير المؤمنين علي بن أبي طالب عليه السلام",
    sourceEn: "attributed to Ali ibn Abi Talib",
  }
];

export const REFLECTION_DECK = [
  {
    titleAr: "كفاءة مذهلة ومصادر طاقة ذاتية",
    titleEn: "Astonishing Efficiency & Self-Powering",
    textAr: "تعمل هذه المستشعرات الحيوية بلا انقطاع طوال حياتك دون شحن أو بطاريات خارجية، وتعتمد فقط على تدفق الدم البسيط والمغذيات الحيوية، بإنتاجية طاقة مجهرية تفوق تكنولوجيا الكوكب.",
    textEn: "These biosensors work continuously throughout your lifetime without charging or external batteries. Fueled only by simple blood flow and nutrients, their tiny energy footprint outperforms any modern technological equivalents."
  },
  {
    titleAr: "التكلفة الافتراضية والتقدير البشري",
    titleEn: "The Immeasurable Financial Cost",
    textAr: "لو أردنا استبدال هذه الحساسات الاثني عشر بمعدات تكنولوجية طبية اصطناعية تحاكي نصف دقتها وحجمها المجهري، لعجزت ثروات الأرض كلها عن بنائها أو حتى تزويدها بالطاقة وتوصيلها بالجهاز العصبي بذكاء.",
    textEn: "If we attempted to substitute these 12 systems with synthetic medical technology matching even half their precision, all the world's wealth would fall short of building, powering, or mapping them to our neural pathways."
  },
  {
    titleAr: "صمت تام واستقرار مطلق",
    titleEn: "Complete Silence & Perfect Stability",
    textAr: "تخيل أن العمليات الحسابية المعقدة لتعديل الضغط والغازات والاتزان الكيميائي والحرارة والماء تحدث في داخلك في أجزاء من المليون من الثانية بانتظام وصمت مطبق دون أن تشعر بضجيج المصانع الحيوية.",
    textEn: "Imagine: highly complex algorithmic processes adjusting your blood pressure, arterial gases, thermal levels, and osmotic concentration occur in fractions of a microsecond in absolute, peaceful silence without any factory noise."
  }
];
