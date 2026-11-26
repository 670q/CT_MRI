/**
 * Master Cross-Vendor Acronym Database
 * Extracted directly from MRI Master (mrimaster.com/mri-acronyms/)
 * Translates clinical and physics sequence names across Siemens, GE, and Philips.
 */

export const VENDOR_CATEGORIES = {
  spin_echo: { en: "Spin Echo Family", ar: "عائلة صدى الغزل (Spin Echo)" },
  gradient_echo: { en: "Gradient Echo & Steady State", ar: "عائلة صدى التدرج (Gradient Echo)" },
  fat_sat: { en: "Fat Suppression & Inversion", ar: "كبت الشحم والقلب (Inversion & Fat Sat)" },
  diffusion: { en: "Diffusion & Perfusion", ar: "الانتشار والتروية (DWI & Perfusion)" },
  volumetric_3d: { en: "3D Volumetric Imaging", ar: "التصوير الحجمي ثلاثي الأبعاد (3D)" },
  motion_correction: { en: "Motion Correction & Radial", ar: "مقاومة الحركة والشرائح الشعاعية" },
  parallel_imaging: { en: "Parallel Imaging (PAT)", ar: "تقنيات التصوير المتوازي (PAT/SENSE)" },
  angiography: { en: "MR Angiography (MRA/MRV)", ar: "تصوير الأوعية الدموية بالرنين" },
  metal_reduction: { en: "Metal Artifact Reduction", ar: "تقنيات تقليل عيوب المعادن" }
};

export const VENDOR_ACRONYMS = [
  // 1. Spin Echo Family
  {
    category: "spin_echo",
    generic: "Spin Echo",
    genericAr: "صدى الغزل البسيط",
    siemens: "SE",
    ge: "SE",
    philips: "SE",
    toshiba: "SE",
    hitachi: "SE",
    descriptionEn: "The gold-standard contrast reference. Uses 90° excitation followed by 180° refocusing pulse.",
    descriptionAr: "المرجع المعياري الذهبي للتباين. نبضة 90° متبوعة بنبضة إعادة تركيز 180°."
  },
  {
    category: "spin_echo",
    generic: "Fast / Turbo Spin Echo",
    genericAr: "صدى الغزل فائق السرعة",
    siemens: "TSE (Turbo Spin Echo)",
    ge: "FSE (Fast Spin Echo)",
    philips: "TSE (Turbo Spin Echo)",
    toshiba: "FSE",
    hitachi: "FSE",
    descriptionEn: "Multiple 180° refocusing pulses per TR to fill multiple k-space lines in each cycle (Turbo Factor / ETL).",
    descriptionAr: "نبضات 180° متعددة لإعادة التركيز في كل دورة TR لملء خطوط متعددة في الفضاء K وتقليل زمن الفحص."
  },
  {
    category: "spin_echo",
    generic: "Single-Shot Fast Spin Echo",
    genericAr: "صدى الغزل بطلقة واحدة فائقة السرعة",
    siemens: "HASTE",
    ge: "SSFSE",
    philips: "Single-Shot TSE",
    toshiba: "FASE",
    hitachi: "Single-Shot FSE",
    descriptionEn: "Ultra-fast acquisition filling the entire k-space in a single excitation shot; virtually motion-immune (under 1 sec/slice).",
    descriptionAr: "تصوير فائق السرعة يملأ كامل الفضاء K بنبضة واحدة فقط (أقل من ثانية للشريحة)، مقاوم للحركة بشكل كامل."
  },
  {
    category: "spin_echo",
    generic: "TSE with 90° Driven Equilibrium (Fast Recovery)",
    genericAr: "صدى غزل مع نبضة استعادة التوازن السريعة",
    siemens: "RESTORE",
    ge: "FRFSE (Fast Recovery)",
    philips: "DRIVE",
    toshiba: "T2 Plus FSE",
    hitachi: "Driven Equilibrium",
    descriptionEn: "Applies a -90° pulse at the end of the echo train to drive longitudinal magnetization back to Z-axis rapidly, boosting fluid signal.",
    descriptionAr: "تطبيق نبضة -90° في نهاية قطار الصدى لإرجاع المغنطة للمحور الطولي سريعاً، مما يزيد سطوع السوائل دون إطالة TR."
  },
  {
    category: "spin_echo",
    generic: "3D TSE with Variable Flip Angle",
    genericAr: "صدى الغزل ثلاثي الأبعاد بزوايا قلب متغيرة",
    siemens: "SPACE",
    ge: "CUBE",
    philips: "VISTA",
    toshiba: "mVox",
    hitachi: "isoFSE",
    descriptionEn: "Sub-millimeter isotropic 3D volumetric FSE that allows arbitrary multi-planar reformation without voxel stretching.",
    descriptionAr: "تصوير حجمي ثلاثي الأبعاد بأحجام فوكسل متساوية الأبعاد تسمح بإعادة بناء المقاطع في أي اتجاه بدقة متناهية."
  },
  {
    category: "spin_echo",
    generic: "Reduced-FOV 3D TSE",
    genericAr: "تصوير ثلاثي الأبعاد بحقل رؤية مصغر",
    siemens: "ZOOMit SPACE",
    ge: "FOCUS FSE",
    philips: "Small-FOV VISTA",
    toshiba: "-",
    hitachi: "-",
    descriptionEn: "Spine and prostate targeted high-resolution imaging without aliasing from outside anatomy.",
    descriptionAr: "تصوير مستهدف عالي الدقة للعمود الفقري والبروستاتا دون التفاف الصورة (Aliasing) من الأنسجة المجاورة."
  },

  // 2. Gradient Echo & Steady State
  {
    category: "gradient_echo",
    generic: "Conventional Gradient Echo",
    genericAr: "صدى التدرج التقليدي",
    siemens: "GRE",
    ge: "GRE",
    philips: "FFE (Fast Field Echo)",
    toshiba: "FE",
    hitachi: "GE",
    descriptionEn: "Uses flip angles <90° and gradient polarity reversal instead of 180° RF pulse. Sensitive to T2* susceptibility.",
    descriptionAr: "استخدام زوايا قلب أقل من 90° وعكس أقطاب التدرج بدلاً من نبضة 180°، شديد الحساسية للنزيف والتكلس T2*."
  },
  {
    category: "gradient_echo",
    generic: "Spoiled Gradient Echo (T1-weighted)",
    genericAr: "صدى التدرج مع إتلاف المغنطة المستعرضة (T1)",
    siemens: "FLASH",
    ge: "SPGR",
    philips: "T1-FFE",
    toshiba: "T1-FFE",
    hitachi: "RSSG",
    descriptionEn: "Destroys residual transverse magnetization using RF spoiling, producing pure T1 contrast without T2 contamination.",
    descriptionAr: "إتلاف المغنطة المستعرضة المتبقية بنبضات تشويش راديوية لإنتاج تباين T1 نقي جداً للتصوير الديناميكي."
  },
  {
    category: "gradient_echo",
    generic: "Coherent Gradient Echo (T2*-weighted)",
    genericAr: "صدى التدرج المتماسك (T2*)",
    siemens: "FISP",
    ge: "GRASS",
    philips: "FFE",
    toshiba: "SSFP",
    hitachi: "Rephased SARGE",
    descriptionEn: "Preserves transverse magnetization using gradient rewinding, emphasizing fluid and T2/T1 ratio contrast.",
    descriptionAr: "الحفاظ على المغنطة المستعرضة وإعادة تركيزها لإبراز السوائل والأوعية الدموية بتباين T2* عالي."
  },
  {
    category: "gradient_echo",
    generic: "Balanced Steady-State Free Precession (True FISP)",
    genericAr: "صدى التدرج المتوازن فائق التباين",
    siemens: "TrueFISP",
    ge: "FIESTA",
    philips: "bFFE (Balanced FFE)",
    toshiba: "True SSFP",
    hitachi: "BASG",
    descriptionEn: "Fully balanced gradients in all 3 axes. Provides maximum signal-to-noise ratio and bright fluid/blood contrast at high speed.",
    descriptionAr: "تدرجات متوازنة تماماً في المحاور الثلاثة. يعطي أعلى نسبة إشارة وسطوع باهر للدم والسوائل (تصوير القلب والأجنة)."
  },
  {
    category: "gradient_echo",
    generic: "Multi-Echo Gradient Echo Combined",
    genericAr: "صدى التدرج متعدد الأصداء المدمج",
    siemens: "MEDIC",
    ge: "MERGE",
    philips: "mFFE",
    toshiba: "ADAGE",
    hitachi: "ADAGE",
    descriptionEn: "Combines multiple gradient echoes to boost SNR and suppress flow artifacts, optimal for cervical spine discs and joints.",
    descriptionAr: "دمج عدة أصداء تدرج لزيادة الإشارة وكبت عيوب تدفق السوائل، مثالي لغضاريف الرقبة والمفاصل."
  },

  // 3. Volumetric 3D Imaging
  {
    category: "volumetric_3d",
    generic: "Volume Interpolated Breath-Hold 3D T1",
    genericAr: "التصوير الحجمي ثلاثي الأبعاد لكتم النفس T1",
    siemens: "VIBE",
    ge: "LAVA",
    philips: "THRIVE",
    toshiba: "3D Quick",
    hitachi: "TIGRE",
    descriptionEn: "Fast 3D spoiled gradient echo with k-space zero filling and fat sat. The cornerstone of dynamic contrast liver/breast imaging.",
    descriptionAr: "التسلسل الأساسي والأهم لفحص الكبد والبطن الديناميكي وحقن الصبغة بكتم النفس."
  },
  {
    category: "volumetric_3d",
    generic: "Ultrafast 3D Magnetization Prepared GRE",
    genericAr: "التصوير الحجمي العصبي ثلاثي الأبعاد فائق السرعة",
    siemens: "MPRAGE",
    ge: "BRAVO",
    philips: "3D TFE",
    toshiba: "3D FFE",
    hitachi: "MPRAGE",
    descriptionEn: "Inversion prep pulse followed by 3D rapid GRE. Delivers stunning gray/white matter contrast for brain volumetry and stereotaxy.",
    descriptionAr: "نبضة قلب متبوعة بمسح ثلاثي الأبعاد فائق السرعة. يعطي تمايزاً مبهراً بين المادة البيضاء والرمادية للدماغ."
  },

  // 4. Motion Correction & Radial Blades
  {
    category: "motion_correction",
    generic: "Radial k-Space Motion-Insensitive Blades",
    genericAr: "شرائح الفضاء K الشعاعية المقاومة للحركة",
    siemens: "BLADE",
    ge: "PROPELLER",
    philips: "MultiVane",
    toshiba: "JET",
    hitachi: "RADAR",
    descriptionEn: "Collects k-space in rotating propeller strips with continuous central oversampling, eliminating patient motion and flow artifacts.",
    descriptionAr: "جمع بيانات الفضاء K في شرائح دائرية دوارة كالرياح مع إعادة مسح المركز، مما يمحو حركة المريض والتنفس تماماً."
  },
  {
    category: "motion_correction",
    generic: "1D/2D Prospective Acquisition Correction (Navigators)",
    genericAr: "مستشعرات الحجاب الحاجز الاستباقية لتتبع التنفس",
    siemens: "PACE (1D/2D)",
    ge: "Navigator Echo",
    philips: "Respiratory Navigator",
    toshiba: "Echo-Navigator",
    hitachi: "Respiratory Gating",
    descriptionEn: "Tracks diaphragm position in real time using a cross-beam navigator, acquiring data only during end-expiration without patient breath-holds.",
    descriptionAr: "تتبع حركة قبة الحجاب الحاجز لحظياً بنبضة شعاعية والتقاط المقاطع فقط عند ثبات الزفير دون الحاجة لكتم النفس."
  },

  // 5. Inversion Recovery & Fat Suppression
  {
    category: "fat_sat",
    generic: "Short-Tau Inversion Recovery",
    genericAr: "استعادة الانقلاب القصيرة (STIR)",
    siemens: "STIR / TIRM",
    ge: "STIR",
    philips: "STIR",
    toshiba: "FastSTIR",
    hitachi: "STIR",
    descriptionEn: "TI chosen at fat zero-crossing (130-170ms). Reliable, magnetic field inhomogeneity-resistant fat suppression.",
    descriptionAr: "زمن قلب (TI) عند نقطة انعدام مغنطة الدهن (130-170ms). كبت دهني متجانس حتى بوجود معادن أو حقول غير متجانسة."
  },
  {
    category: "fat_sat",
    generic: "Fluid Attenuated Inversion Recovery",
    genericAr: "كبت السوائل الحرة (FLAIR)",
    siemens: "Dark Fluid (FLAIR)",
    ge: "FLAIR",
    philips: "FLAIR",
    toshiba: "FastFLAIR",
    hitachi: "FLAIR",
    descriptionEn: "Long TI (~2000-2500ms) nulls free water/CSF while highlighting periventricular edema and demyelinating plaques.",
    descriptionAr: "زمن قلب طويل يطمس إشارة ماء النخاع الشوكي والبطينات CSF لإبراز وذمات التصلب اللويحي والجلطات بجلاء."
  },
  {
    category: "fat_sat",
    generic: "Chemical Shift Selective Fat Saturation",
    genericAr: "كبت الشحم الكيميائي الانتقائي (Fat Sat)",
    siemens: "Fat Sat (ChemSat)",
    ge: "Fat Sat / ChemSat",
    philips: "SPIR",
    toshiba: "MSOFT",
    hitachi: "SINC",
    descriptionEn: "Spectrally selective RF pulse tuned to fat resonance frequency (-220Hz at 1.5T) followed by dephasing spoiler gradient.",
    descriptionAr: "نبضة راديوية مضبوطة بدقة على تردد رنين الشحم لتدمير مغنطته قبل بدء التصوير."
  },
  {
    category: "fat_sat",
    generic: "Dixon Multi-Echo Fat/Water Separation",
    genericAr: "فصل الشحم والماء المتقدم (تقنية ديكسون)",
    siemens: "Dixon (VIBE/TSE)",
    ge: "IDEAL / LAVA-Flex",
    philips: "mDixon XD",
    toshiba: "WFS",
    hitachi: "FatSep",
    descriptionEn: "Calculates in-phase, out-of-phase, fat-only, and water-only images from a single scan with robust homogeneous fat suppression.",
    descriptionAr: "إنتاج 4 صور من فحص واحد (ماء نقي، دهن نقي، متوافق الطور، ومتعاكس الطور) بكبت شحم فائق التجانس حتى بوجود معادن."
  },

  // 6. Parallel Imaging Techniques
  {
    category: "parallel_imaging",
    generic: "Image-Based Parallel Imaging",
    genericAr: "التصوير المتوازي المعتمد على الصورة (Image-Domain)",
    siemens: "mSENSE",
    ge: "ASSET",
    philips: "SENSE",
    toshiba: "SPEEDER",
    hitachi: "RAPID",
    descriptionEn: "Under-samples k-space, then un-aliases images using spatial sensitivity maps of multi-channel receiver coils.",
    descriptionAr: "تقليل خطوط الفضاء K وفك تشابك الصورة لاحقاً بالاعتماد على خرائط حساسية قنوات الملفات."
  },
  {
    category: "parallel_imaging",
    generic: "k-Space-Based Parallel Imaging",
    genericAr: "التصوير المتوازي المعتمد على الفضاء K (k-Space Domain)",
    siemens: "GRAPPA",
    ge: "ARC",
    philips: "k-space SENSE",
    toshiba: "k-SPEEDER",
    hitachi: "k-RAPID",
    descriptionEn: "Synthesizes missing k-space data directly in k-space before Fourier Transform using auto-calibrated coil kernels.",
    descriptionAr: "توليد خطوط الفضاء K المفقودة مباشرة قبل التحويل الرياضي، يتميز بمقاومة أعلى لعيوب الالتفاف في الأطراف."
  },

  // 7. Angiography
  {
    category: "angiography",
    generic: "3D Time-of-Flight Non-Contrast MRA",
    genericAr: "تصوير الشرايين ثلاثي الأبعاد بزمن الطيران بدون صبغة",
    siemens: "3D TOF",
    ge: "3D TOF / Inhance Inflow",
    philips: "3D TOF",
    toshiba: "3D TOF",
    hitachi: "3D TOF",
    descriptionEn: "Flow-related enhancement of unsaturated fresh blood flowing into saturated stationary tissue slice.",
    descriptionAr: "إبراز الدم الشرياني المتدفق غير المشبع داخل الأنسجة الساكنة المشبعة دون الحاجة لأي صبغة وريدية."
  },
  {
    category: "angiography",
    generic: "Dynamic Time-Resolved Contrast MRA",
    genericAr: "تصوير الأوعية الديناميكي عالي الدقة الزمنية بالصبغة",
    siemens: "TWIST",
    ge: "TRICKS",
    philips: "4D-TRAK",
    toshiba: "DRKS",
    hitachi: "TRAQ",
    descriptionEn: "Rapid k-space peripheral sharing to generate angiographic frames every 1-2 seconds to separate arterial and venous transit.",
    descriptionAr: "مشاركة أطراف الفضاء K لإنتاج إطارات وعائية كل ثانية إلى ثانيتين لتمييز مرحلة التدفق الشرياني والوريدي بدقة."
  },

  // 8. Metal Artifact Reduction
  {
    category: "metal_reduction",
    generic: "Advanced Metal Artifact Reduction (2D/3D)",
    genericAr: "تقنيات تقليل عيوب المعادن والغرسات المتقدمة",
    siemens: "Advanced WARP (SEMAC/VAT)",
    ge: "MAVRIC SL",
    philips: "O-MAR",
    toshiba: "VAT FSE",
    hitachi: "MARS",
    descriptionEn: "Combines View Angle Tilting (VAT) with multi-spectral slice encoding (SEMAC) to correct in-plane and through-plane metal distortion.",
    descriptionAr: "دمج إمالة زوايا الرؤية مع الترميز الطيفي لتصحيح التشويه المعدني داخل الشريحة وعبرها وإظهار العظام قرب المسامير."
  },

  // 9. Diffusion, Perfusion & Cardiac Extensions
  {
    category: "diffusion",
    generic: "Multi-Shot Readout-Segmented / Reduced-FOV DWI",
    genericAr: "تصوير الانتشار متعدد الطلقات قليل التشويه",
    siemens: "RESOLVE / ZOOMit DWI",
    ge: "MUSE / FOCUS DWI",
    philips: "IRIS / Multi-Shot DWI",
    toshiba: "Multi-shot EPI",
    hitachi: "Multi-shot DWI",
    descriptionEn: "Segmented readout EPI minimizing geometric susceptibility distortion near skull base, IAMs, orbits, spine, and prostate.",
    descriptionAr: "يقلل تشويه الحساسية المغناطيسية بشكل جذري في قاعدة الجمجمة والقناة السمعية والعيون والبروستاتا والعمود الفقري."
  },
  {
    category: "diffusion",
    generic: "First-Pass Stress Myocardial Perfusion",
    genericAr: "تصوير تروية عضلة القلب بالإجهاد (First-Pass Perfusion)",
    siemens: "SR-TrueFISP / TurboFLASH Perfusion",
    ge: "FGRE Time-Course / FastCine Perfusion",
    philips: "T1-TFE / bFFE Dynamic Perfusion",
    toshiba: "Saturation-Recovery FFE",
    hitachi: "SR-GRE Perfusion",
    descriptionEn: "Saturation-recovery ECG-triggered ultra-fast multi-slice bolus tracking to detect inducible myocardial ischemia.",
    descriptionAr: "تتبع سريع لمرور الصبغة تحت الإجهاد الدوائي عبر شرائح القلب القصيرة لكشف مناطق نقص التروية."
  },
  {
    category: "gradient_echo",
    generic: "Late Gadolinium Enhancement Viability (PSIR)",
    genericAr: "تصوير حيوية عضلة القلب بالصبغة المتأخرة",
    siemens: "PSIR TrueFISP / TurboFLASH",
    ge: "MDE / Phase-Sensitive MDE",
    philips: "PSIR T1-TFE",
    toshiba: "LGE PSIR",
    hitachi: "PSIR",
    descriptionEn: "Phase-sensitive inversion recovery nulling normal myocardium consistently across heart-rate variations.",
    descriptionAr: "تحديد نسيج الندبة والاحتشاء القلبي بدقة عالية مع طمس تام للعضلة السليمة."
  },
  {
    category: "gradient_echo",
    generic: "Myocardial T1 / T2* Parametric Mapping",
    genericAr: "خرائط القياس الكمي للقلب (T1 & T2* Mapping)",
    siemens: "MyoMaps (MOLLI / ShMOLLI / T2*)",
    ge: "CardioMaps (MOLLI)",
    philips: "Cardiac T1/T2 Mapping (MOLLI)",
    toshiba: "T1/T2 Mapping",
    hitachi: "T1 Mapping",
    descriptionEn: "Pixel-wise T1 (diffuse fibrosis, amyloidosis) and T2* (myocardial iron overload) quantitative parametric maps.",
    descriptionAr: "إنتاج خرائط لونية رقمية لتقييم التليف المنتشر وترسبات الحديد بالقلب والعضلة."
  },
  {
    category: "fat_sat",
    generic: "3D MR Neurography (Vascular-Suppressed STIR)",
    genericAr: "تصوير الضفائر العصبية ثلاثي الأبعاد مع كبت الأوعية",
    siemens: "3D STIR SPACE (DESS / Neurography)",
    ge: "3D STIR CUBE",
    philips: "3D NerveVIEW / SHINKEI",
    toshiba: "3D mVox STIR",
    hitachi: "3D isoSTIR",
    descriptionEn: "Suppresses fat and flowing blood simultaneously to isolate brachial and lumbosacral plexus nerve roots.",
    descriptionAr: "كبت الدهون وإشارة الدم المتدفق معاً لإبراز جذور الأعصاب في الضفيرة العضدية والقطنية العجزية بوضوح."
  },
  {
    category: "volumetric_3d",
    generic: "Free-Breathing 4D Radial Dynamic (GRASP)",
    genericAr: "التصوير الحركي الرباعي بالتنفس الحر بدون كتم نفس",
    siemens: "StarVIBE / GRASP-VIBE",
    ge: "DISCO Star",
    philips: "4D FreeBreathing THRIVE",
    toshiba: "Stack-of-Stars VIBE",
    hitachi: "Radial 3D",
    descriptionEn: "Golden-angle radial stack-of-stars 3D T1 enabling dynamic liver/abdomen contrast scanning during free breathing.",
    descriptionAr: "تصوير ديناميكي للبطن والكبد بدون حبس النفس لمرضى ضيق التنفس وكبار السن والأطفال."
  },
  {
    category: "parallel_imaging",
    generic: "Compressed Sensing & AI Reconstruction",
    genericAr: "التصوير المضغوط وإعادة البناء بالذكاء الاصطناعي",
    siemens: "Compressed Sensing / Deep Resolve",
    ge: "HyperSense / AIR Recon DL",
    philips: "Compressed SENSE / SmartSpeed",
    toshiba: "Compressed SPEEDER / AiCE",
    hitachi: "IP-RAPID",
    descriptionEn: "Random k-space undersampling paired with deep learning denoising cutting scan time by 40-70% while boosting SNR.",
    descriptionAr: "تسريع الفحوصات بنسبة 40-70% مع رفع نقاء الصورة باستخدام الشبكات العصبية والفضاء K المضغوط."
  },
  {
    category: "angiography",
    generic: "Non-Contrast ECG-Gated Lower Limb MRA",
    genericAr: "تصوير شرايين الأطراف السفلية بدون صبغة (QISS)",
    siemens: "QISS (Quiescent Interval Slice-Selective)",
    ge: "Inhance DeltaFlow",
    philips: "TRANCE / Non-Contrast MRA",
    toshiba: "FBI (Fresh Blood Imaging)",
    hitachi: "VASC-ASL",
    descriptionEn: "ECG-synchronized non-contrast MRA ideal for renal impairment / CKD patients needing peripheral arterial runoff.",
    descriptionAr: "تصوير شرايين الساقين بدون صبغة تماماً لمرضى الفشل الكلوي المزمن عبر مزامنة النبض."
  }
];
