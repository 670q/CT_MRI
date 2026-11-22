/**
 * Scan Rescue: MRI Artifact Troubleshooting Matrix
 * Modeled after mrimaster.com artifact directory and Board examination checklists.
 * Structured as: Visual Clue -> Physical Cause -> Immediate Console Fix.
 */

export const ARTIFACT_CATEGORIES = {
  hardware_metal: { en: "Metal & Susceptibility", ar: "المعادن والحساسية المغناطيسية" },
  motion_flow: { en: "Motion, Flow & Breathing", ar: "حركة المريض والنبض والتنفس" },
  spatial_kspace: { en: "Spatial Encoding & k-Space", ar: "ترميز المكان والفضاء K" },
  chemical_fat: { en: "Chemical Shift & Fat Suppression", ar: "الإزاحة الكيميائية وكبت الشحم" }
};

export const MRI_ARTIFACTS = [
  {
    id: "metal_susceptibility",
    category: "hardware_metal",
    nameEn: "Magnetic Susceptibility / Metal Artifact",
    nameAr: "تشويه الحساسية المغناطيسية والمعادن",
    severity: "High",
    visualClue: {
      en: "Severe geometric distortion, massive black signal voids (blooming), with bright crescent fringes around metallic hardware, surgical clips, dental work, or hemorrhage.",
      ar: "تشويه هندسي شديد وهالات سوداء دائرية متضخمة محاطة بأقواس ناصعة البياض حول المسامير أو الحشوات أو نقاط النزيف."
    },
    physicalCause: {
      en: "Large mismatch in magnetic susceptibility between metal/tissue produces severe local B0 field gradients, causing immense dephasing and spatial mismapping of spins.",
      ar: "فارق هائل في الحساسية المغناطيسية بين المعدن والأنسجة يخلق تدرجات مجال مغناطيسي حادة تشوه توضيع الإشارة وتفقد التماسك الطوري."
    },
    immediateFix: {
      en: [
        "1. Replace Gradient Echo (GRE) with Turbo Spin Echo (TSE/FSE) — 180° RF pulses refocus field inhomogeneities.",
        "2. Increase Receiver Bandwidth substantially (>400-800 Hz/pixel) to compress spatial distortion.",
        "3. Reduce Slice Thickness and decrease voxel size.",
        "4. Replace Chemical Fat Saturation with STIR (inversion recovery relies on T1 relaxation, immune to B0 shifts).",
        "5. Enable dedicated multi-spectral metal sequences: Advanced WARP with SEMAC (Siemens), MAVRIC SL (GE), or O-MAR (Philips)."
      ],
      ar: [
        "1. استبدال تسلسلات GRE بتسلسلات FSE/TSE فورياً (نبضة 180° تعيد تركيز التشتت).",
        "2. رفع نطاق التردد Receiver Bandwidth لأكثر من 400-800 هرتز للبكسل لتضييق مسافة الإزاحة.",
        "3. تقليل سمك الشريحة (Slice Thickness) وتصغير حجم الفوكسل.",
        "4. استبدال كبت الشحم الكيميائي (Fat Sat) بتسلسل STIR المقاوم لتدرجات المجال.",
        "5. تفعيل تقنيات تقليل عيوب المعادن: SEMAC WARP (سيمنز)، MAVRIC SL (جي إي)، أو O-MAR (فيليبس)."
      ]
    },
    vendorTools: {
      siemens: "Advanced WARP + VAT + SEMAC",
      ge: "MAVRIC SL",
      philips: "O-MAR (Orthopedic Metal Artifact Reduction)"
    }
  },

  {
    id: "aliasing_wrap",
    category: "spatial_kspace",
    nameEn: "Aliasing / Wrap-Around Artifact",
    nameAr: "التفاف الصورة وتداخل الأطراف (Aliasing)",
    severity: "High",
    visualClue: {
      en: "Anatomy situated outside the Field of View wraps around and overlaps onto the opposite side of the image (e.g. nose or back of skull wrapped into brain).",
      ar: "انطباق الأنسجة الواقعة خارج حقل الرؤية وظهورها متداخلة في الطرف المعاكس (مثل التفاف الأنف ليظهر داخل المخ)."
    },
    physicalCause: {
      en: "Anatomy outside FOV receives RF excitation, but phase shifts exceed ±180° due to under-sampling along the phase-encoding axis (violating Nyquist theorem).",
      ar: "عدم كفاية عينات الترميز الطوري لأنسجة تقع خارج الـ FOV مما يجعل فروق الطور تتجاوز 180 درجة فتنطوي للطرف الآخر."
    },
    immediateFix: {
      en: [
        "1. Enable Phase Oversampling / No Phase Wrap (acquires extra phase steps outside FOV and discards them).",
        "2. Enlarge Field of View (FOV) to cover the entire anatomical perimeter.",
        "3. Swap Phase and Frequency encoding directions (e.g., from A-P to R-L) so the wider body axis lies along frequency.",
        "4. Apply localized Spatial Presaturation Bands (Sat Bands) over out-of-FOV tissue."
      ],
      ar: [
        "1. تفعيل مضاعفة العينات Phase Oversampling / No Phase Wrap لإلغاء الالتفاف دون زيادة وقت الفحص.",
        "2. توسيع حقل الرؤية (FOV) ليشمل كامل أبعاد العضو.",
        "3. تبديل اتجاه طور التشفير (Phase/Frequency Swap) ليكون البعد الأوسع للمريض في اتجاه التردد.",
        "4. وضع أحزمة إشباع مكانية (Saturation Bands) على الأنسجة الخارجية لإخماد إشارتها."
      ]
    },
    vendorTools: {
      siemens: "Phase Oversampling (%)",
      ge: "No Phase Wrap (NPW)",
      philips: "Fold-over Suppression"
    }
  },

  {
    id: "chemical_shift_type1",
    category: "chemical_fat",
    nameEn: "Chemical Shift Artifact (Type I - Spatial Shift)",
    nameAr: "الإزاحة الكيميائية للدهون والماء (النوع الأول)",
    severity: "Medium",
    visualClue: {
      en: "Alternating dark and bright bands along fat-water interfaces exclusively in the frequency-encoding direction (classic kidney/retroperitoneal fat border, optic nerve).",
      ar: "ظهور خط أسود على جانب العضو وخط أبيض ناصع على الجانب المقابل عند التقاء الماء والدهن باتجاه ترميز التردد (مثل حواف الكلى والعصب البصري)."
    },
    physicalCause: {
      en: "Protons in fat precess ~3.5 ppm slower (~220 Hz at 1.5T, ~440 Hz at 3T) than water due to electron shielding. The scanner misinterprets frequency difference as a spatial shift.",
      ar: "بروتونات الشحم تدور بسرعة أبطأ من الماء بمقدار 3.5 جزء بالمليون (220 هرتز في 1.5T و 440 هرتز في 3T) بسبب التدريع الإلكتروني، فيترجمها الجهاز كإزاحة مكانية."
    },
    immediateFix: {
      en: [
        "1. Increase Receiver Bandwidth (Hz/pixel) to compress the pixel frequency span.",
        "2. Swap Frequency and Phase encoding directions to shift the artifact away from the area of interest.",
        "3. Apply Fat Saturation (FatSat / SPIR / SPAIR) to eliminate fat signal altogether.",
        "4. Scan at lower magnetic field strength (1.5T vs 3.0T) if severe."
      ],
      ar: [
        "1. زيادة نطاق استقبال التردد (Receiver Bandwidth) لتقليل عدد البكسلات التي تزاح إليها الدهون.",
        "2. تبديل اتجاه التردد والطور (Frequency Swap) لإبعاد خط الإزاحة عن المعلم التشريحي المستهدف.",
        "3. تفعيل كبت الشحم (Fat Saturation) لإلغاء إشارة الدهن بالكامل."
      ]
    },
    vendorTools: {
      siemens: "Receiver Bandwidth (Hz/Px)",
      ge: "Bandwidth (kHz)",
      philips: "Water-Fat Shift (pixels)"
    }
  },

  {
    id: "chemical_shift_type2",
    category: "chemical_fat",
    nameEn: "Chemical Shift Type II (India Ink / Phase Cancellation)",
    nameAr: "الإزاحة الكيميائية للنوع الثاني (خط الحبر الهندي)",
    severity: "Medium",
    visualClue: {
      en: "Sharply defined artificial black outline surrounding every organ bordered by fat (India ink effect) in all directions on Gradient Echo sequences.",
      ar: "خط أسود رفيع ومرسوم بدقة يحيط بجميع الأعضاء الملامسة للشحم كأنه مرسوم بحبر أسود (India Ink) على تسلسلات الـ Gradient Echo."
    },
    physicalCause: {
      en: "In voxels containing both fat and water, transverse magnetizations periodically cancel out at Out-of-Phase Echo Times (TE = 2.3ms at 1.5T, 1.15ms at 3T).",
      ar: "عند وجود ماء ودهن في نفس الفوكسل، تلغي مغنطة كل منهما الأخرى عند أزمنة TE المتعاكسة في الطور (Out-of-phase)."
    },
    immediateFix: {
      en: [
        "1. Set Echo Time (TE) to precise In-Phase values: 4.6 ms (or 9.2 ms) at 1.5T; 2.3 ms (or 4.6 ms) at 3.0T.",
        "2. Switch from Gradient Echo (GRE) to Spin Echo (SE/FSE) where 180° pulses maintain phase coherence.",
        "3. Note: In liver/adrenal imaging, this effect is deliberately diagnostic to confirm microscopic intracellular lipid (adrenal adenoma, fatty liver)."
      ],
      ar: [
        "1. اختيار زمن صدى TE متوافق الطور تماماً (In-Phase): 4.6 ms في أجهزة 1.5T أو 2.3 ms في أجهزة 3T.",
        "2. التحويل من Gradient Echo إلى Spin Echo/FSE.",
        "3. ملاحظة: يُستخدم هذا العيب عمداً لتشخيص أورام الكظر الحميدة وتدهن الكبد الدقيق."
      ]
    },
    vendorTools: {
      siemens: "In-Phase TE (4.6ms @ 1.5T)",
      ge: "Dual Echo SPGR",
      philips: "In-Phase TE (T1 FFE)"
    }
  },

  {
    id: "magic_angle",
    category: "hardware_metal",
    nameEn: "Magic Angle Effect",
    nameAr: "تأثير الزاوية السحرية (55 درجة)",
    severity: "Medium",
    visualClue: {
      en: "False high signal intensity mimicking tendinopathy or partial tear within normal tightly bound tendons (supraspinatus, patellar, Achilles) on short TE sequences (T1, PD).",
      ar: "سطوع كاذب عالي الإشارة يوحي بوجود تمزق أو التهاب في وتر سليم تماماً (مثل وتر فوق الشوكة للكتف أو وتر العرقوب) على صور T1 و PD."
    },
    physicalCause: {
      en: "Dipolar interactions within collagen fibers drop to zero when fibers are aligned at exactly 54.7° (~55°) relative to main magnetic field B0, extending T2 relaxation time from 1ms to 20ms.",
      ar: "التفاعل ثنائي القطب لألياف الكولاجين ينعدم عندما يميل الوتر بزاوية 54.7 درجة مع المجال المغناطيسي الرئيسي B0، فيستطيل زمن T2 ليصبح الوتر ساطعاً كأنه ممزق."
    },
    immediateFix: {
      en: [
        "1. Acquire T2-weighted sequence with long TE (>40-70 ms) — false signal decays completely while true pathology remains hyperintense.",
        "2. Reposition the patient's joint/limb to alter the tendon's angle relative to B0.",
        "3. Confirm with clinical correlation: true tears exhibit tendon contour thinning/disruption and peritendinous fluid."
      ],
      ar: [
        "1. فحص المقطع بـ T2 حقيقي بزمن TE طويل (>40-70 ms): السطوع الكاذب يختفي فورياً ويبقى التمزق الحقيقي فقط.",
        "2. تغيير وضعية الطرف لتغيير زاوية ميلان الوتر مع خطوط المجال B0.",
        "3. البحث عن علامات التمزق الحقيقية مثل انقطاع استمرارية الألياف والوذمة المحيطة."
      ]
    },
    vendorTools: {
      siemens: "T2 TSE (TE > 60ms)",
      ge: "T2 FSE (TE > 60ms)",
      philips: "T2 TSE High TE"
    }
  },

  {
    id: "motion_ghosting",
    category: "motion_flow",
    nameEn: "Motion & Ghosting Artifacts",
    nameAr: "حركة المريض والنبض الوعائي (Motion Ghosting)",
    severity: "High",
    visualClue: {
      en: "Smearing, blurring, or repetitive ghost copies of anatomical structures propagating exclusively across the phase-encoding direction.",
      ar: "تشوش وتكرار أشباح مضاعفة لملامح العضو تمتد على طول محور التشفير الطوري (Phase Direction) بسبب التنفس أو الحركة."
    },
    physicalCause: {
      en: "Patient movement, swallowing, cardiac pulsations, or breathing between phase-encoding steps introduces pseudo-periodic phase errors.",
      ar: "الحركة الدورية أو المفاجئة بين خطوات التشفير الطوري تُدخل أخطاء طورية تُترجم كنسخ شبحية مكررة."
    },
    immediateFix: {
      en: [
        "1. Enable Radial / Blade k-space motion correction: BLADE (Siemens), PROPELLER (GE), or MultiVane (Philips).",
        "2. Swap Phase and Frequency axes so ghosts do not cross the diagnostic ROI.",
        "3. Apply Spatial Saturation Bands over moving tissues (e.g. anterior abdominal wall or throat).",
        "4. Use Flow Compensation (Gradient Moment Nulling) for vascular pulsation.",
        "5. Apply Respiratory Triggering (PACE) or breath-holds in abdomen."
      ],
      ar: [
        "1. تفعيل الشرائح الشعاعية المقاومة للحركة: BLADE (سيمنز)، PROPELLER (جي إي)، MultiVane (فيليبس).",
        "2. تبديل اتجاه الطور لإبعاد الأشباح عن العضو المراد فحصه.",
        "3. تطبيق أحزمة إشباع مكانية (Saturation Bands) على جدار البطن أو البلعوم.",
        "4. تفعيل تعويض التدفق Flow Compensation لإخماد نبض الشرايين.",
        "5. استخدام مستشعرات التنفس أو حبس النفس في فحوصات البطن."
      ]
    },
    vendorTools: {
      siemens: "BLADE / PACE Navigator",
      ge: "PROPELLER 3.0 / Respiratory Gating",
      philips: "MultiVane / Respiratory Sensor"
    }
  },

  {
    id: "gibbs_truncation",
    category: "spatial_kspace",
    nameEn: "Gibbs / Truncation Artifact",
    nameAr: "تدرج جيبس والتقطيع النغمي (Gibbs Ringing)",
    severity: "Medium",
    visualClue: {
      en: "Multiple alternating dark and bright lines running parallel to sharp high-contrast interfaces (calvarium/cortex, spinal cord/CSF), often mimicking a spinal cord syrinx (pseudosyringomyelia).",
      ar: "خطوط متوازية متبادلة السواد والبياض تمتد بمحاذاة الحواف عالية التباين (مثل الحبل الشوكي والجمجمة)، تحاكي كاذباً وجود تجويف بالحبل الشوكي (Syrinx)."
    },
    physicalCause: {
      en: "Finite sampling of k-space (Fourier truncation) cannot mathematically reconstruct sharp step-function intensity boundaries without ringing oscillations.",
      ar: "عدم كفاية عينات التشفير لتمثيل التحولات الحادة في شدة الإشارة مما يسبب تذبذبات رنينية حول الحواف."
    },
    immediateFix: {
      en: [
        "1. Increase Acquisition Matrix in the phase direction (e.g., from 192 or 256 to 384 or 512).",
        "2. Reduce FOV to decrease pixel size.",
        "3. Apply raw k-space filtering (Hanning / Hamming filter / Deep Resolve).",
        "4. Beware: In cervical spine sagittal views, an apparent central slit-like syrinx that disappears on higher matrix is pseudosyringomyelia caused by Gibbs ringing."
      ],
      ar: [
        "1. زيادة حجم مصفوفة التشفير الطوري Phase Matrix (مثلاً من 256 إلى 384 أو 512).",
        "2. تصغير حقل الرؤية FOV لتقليص حجم البكسل.",
        "3. تفعيل مرشحات الفضاء K الرقمية لتنعيم الحواف.",
        "4. قاعدة سريرية: تجويف الحبل الشوكي الرفيع الذي يختفي عند زيادة المصفوفة هو تجويف كاذب ناتج عن جيبس."
      ]
    },
    vendorTools: {
      siemens: "Matrix increase / Deep Resolve",
      ge: "Matrix increase / AIR Recon DL",
      philips: "Matrix increase / SmartSpeed"
    }
  },

  {
    id: "cross_talk",
    category: "spatial_kspace",
    nameEn: "Cross-Talk / Slice Overlap Artifact",
    nameAr: "التداخل الإشعاعي بين الشرائح (Cross-Talk)",
    severity: "Medium",
    visualClue: {
      en: "Loss of SNR, patchy mottled signal loss, and reduced contrast across entire image series, especially in angled multislice spine or joint blocks.",
      ar: "فقدان ملحوظ في نسبة الإشارة وتشوش التباين في كافة الشرائح، خاصة عند تقاطع الشرائح في العمود الفقري."
    },
    physicalCause: {
      en: "Non-rectangular slice profile RF pulses excite adjacent slice tissues, or adjacent angled slices physically intersect in space, partially saturating spins.",
      ar: "ملفات النبضات ليست مستطيلة تماماً فتثير أطراف الشريحة المجاورة، أو تقاطع الشرائح المائلة في الفضاء مما يسبب تشبعاً مسبقاً وتدميراً للإشارة."
    },
    immediateFix: {
      en: [
        "1. Ensure a minimum 20% to 30% slice gap (distance factor) for contiguous 2D acquisitions.",
        "2. Use Interleaved acquisition ordering (scanning odd slices then even slices) to give adjacent slices time to relax.",
        "3. Avoid physically intersecting angled slice groups in lumbar disc planning.",
        "4. Switch to true 3D volumetric acquisitions (SPACE/CUBE/VISTA) where cross-talk does not exist."
      ],
      ar: [
        "1. ترك مسافة تباعد كافية بين الشرائح (Slice Gap لا يقل عن 20% إلى 30%).",
        "2. تفعيل التصوير المتشابك Interleaved (تصوير الشرائح الفردية ثم الزوجية) لإعطاء وقت للاسترخاء.",
        "3. تجنب تقاطع كتل الشرائح المائلة لغضاريف الفقرات مع بعضها في الفضاء.",
        "4. التحويل لتسلسلات 3D الحجمية التي تنعدم فيها هذه المشكلة تماماً."
      ]
    },
    vendorTools: {
      siemens: "Distance Factor (20-30%) / Interleaved",
      ge: "Spacing (Gap) / Interleaved",
      philips: "Gap (%) / Interleaved"
    }
  }
];
