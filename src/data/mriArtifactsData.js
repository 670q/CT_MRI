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
    image: "/artifacts/metal_susceptibility.png",
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
  },

  {
    id: "zipper_artifact",
    image: "/artifacts/zipper_artifact.jpg",
    category: "hardware_metal",
    nameEn: "Zipper Artifact (RF Feedthrough)",
    nameAr: "عيب السحّاب / التداخل الراديوي (Zipper Artifact)",
    severity: "High",
    visualClue: {
      en: "A straight bright/alternating dot-dash line running completely across the image along the phase-encoding or frequency axis at a fixed pixel position.",
      ar: "خط مستقيم متقطع (مثل السحاب) يمتد بطول الصورة عند تردد معين نتيجة تسرب ترددات راديوية من خارج الغرفة."
    },
    physicalCause: {
      en: "Extraneous RF interference enters the Faraday cage (open magnet room door, broken RF door fingerstock seals, patient monitoring wires acting as antennas) at a discrete frequency.",
      ar: "دخول إشارة راديوية خارجية إلى غرفة الرنين بسبب عدم إغلاق الباب جيداً أو تلف حشوات النحاس أو وجود أسلاك/هاتف غير معزول."
    },
    immediateFix: {
      en: [
        "1. Verify the MRI scan room RF door is firmly latched and copper fingerstock contacts are clean.",
        "2. Check if patient monitoring cables, pulse oximeter, or injector wires pass cleanly through waveguides.",
        "3. Turn off any unshielded LED lights, laptops, or phones inside the magnet room.",
        "4. Contact biomedical service if broken RF shielding persists across multiple frequencies."
      ],
      ar: [
        "1. التأكد من إغلاق باب غرفة الرنين بإحكام وتنظيف شرائط التلامس النحاسية.",
        "2. فحص أسلاك مراقبة المريض أو مضخة الصبغة والتأكد من عدم ملامستها للباب.",
        "3. إزالة أو إطفاء أي أجهزة إلكترونية أو إضاءة غير محمية داخل غرفة المغناطيس.",
        "4. استدعاء الصيانة لفحص عزل القفص النحاسي (Faraday Shielding) إذا استمر الخط."
      ]
    },
    vendorTools: {
      siemens: "RF Door Seal Check / Frequency Scout",
      ge: "RF Shielding Integrity Test",
      philips: "Spurious Signal Diagnostic"
    }
  },

  {
    id: "zebra_stripes",
    image: "/artifacts/zebra_stripes.webp",
    category: "hardware_metal",
    nameEn: "Zebra Stripes / Banding (bSSFP / TrueFISP)",
    nameAr: "خطوط الحمار الوحشي (Zebra Stripes / Banding)",
    severity: "Medium",
    visualClue: {
      en: "Alternating curved dark and bright interference bands radiating over off-center anatomy or the periphery of the FOV, common in cardiac TrueFISP/FIESTA.",
      ar: "أشرطة داكنة ومضيئة متبادلة ومقوسة تظهر في أطراف حقل الرؤية أو القلب في تسلسلات TrueFISP / FIESTA."
    },
    physicalCause: {
      en: "B0 magnetic field inhomogeneity at off-isocenter locations causes phase accumulation of 180° per TR in balanced steady-state free precession (bSSFP) sequences.",
      ar: "عدم تجانس المجال المغناطيسي بعيداً عن المركز يسبب انزياحاً طورياً بمقدار 180° في كل TR أثناء تسلسلات Steady-State المتوازنة."
    },
    immediateFix: {
      en: [
        "1. Minimize TR as tightly as possible (shorter TR pushes dark bands farther outside FOV).",
        "2. Perform localized 3D volume shimming (Frequency Scout / Shim Box) strictly over the heart or ROI.",
        "3. Switch from 2D TrueFISP/FIESTA to Spoiled GRE (FLASH/SPGR) if banding overlaps pathology."
      ],
      ar: [
        "1. تقليل زمن التكرار TR إلى أدنى حد ممكن (كلما قصر TR ابتعدت الخطوط عن منطقة الفحص).",
        "2. إجراء معايرة تجانس موضعية (Localized Shimming / Frequency Scout) على القلب مباشرة.",
        "3. التبديل إلى تسلسل FLASH أو SPGR إذا تداخلت الخطوط مع منطقة التشخيص."
      ]
    },
    vendorTools: {
      siemens: "Frequency Scout / Min TR TrueFISP",
      ge: "FIESTA Frequency Shift / Shimming",
      philips: "bFFE Phase Cycling / Volume Shim"
    }
  },

  {
    id: "dielectric_effect",
    image: "/artifacts/dielectric_effect.jpg",
    category: "hardware_metal",
    nameEn: "Dielectric Shading / Standing Wave Artifact (3T)",
    nameAr: "تأثير العزل الكهربائي وتعتيم 3 تسلا (Dielectric Effect)",
    severity: "High",
    visualClue: {
      en: "Broad central dark signal dropout (shading) across the mid-abdomen or pelvis on 3T scanners, especially in ascites, pregnancy, or high-BMI patients.",
      ar: "بقع تعتيم داكنة واسعة في منتصف البطن أو الحوض على أجهزة 3 تسلا، خاصة عند وجود استسقاء أو حمل."
    },
    physicalCause: {
      en: "At 3T (128 MHz), RF wavelength inside conductive abdominal fluid drops to ~26 cm (smaller than abdomen width), creating destructive standing-wave B1+ interference.",
      ar: "في 3 تسلا يقصر الطول الموجي للنبضة الراديوية داخل سوائل الجسم إلى نحو 26 سم، فتحدث موجات موقوفة تُضعف الإشارة في المنتصف."
    },
    immediateFix: {
      en: [
        "1. Place high-permittivity dielectric pads (barium titanate / ultrasound-free RF cushions) over the anterior abdomen.",
        "2. Enable Dual-Source Parallel RF Transmit (MultiTransmit / TrueForm).",
        "3. Switch to Spine/Body T2 TSE with Dixon or move patient to a 1.5T scanner if severe ascites persists."
      ],
      ar: [
        "1. وضع وسائد العزل الكهربائي (Dielectric Pads) فوق البطن مباشرة لتشتيت الموجات الموقوفة.",
        "2. تفعيل البث الراديوي المتعدد الموازي (MultiTransmit / TrueForm B1 Shimming).",
        "3. نقل المريض إلى جهاز 1.5 تسلا في حالات الاستسقاء الشديد إذا لزم الأمر."
      ]
    },
    vendorTools: {
      siemens: "TrueForm B1 Shim + Dielectric Pad",
      ge: "MultiDrive RF Transmit",
      philips: "MultiTransmit 4D"
    }
  },

  {
    id: "blooming_artifact",
    image: "/artifacts/blooming_artifact.jpg",
    category: "hardware_metal",
    nameEn: "Blooming Artifact (T2* / SWI Exaggeration)",
    nameAr: "عيب التضخم المغناطيسي (Blooming Artifact)",
    severity: "Medium",
    visualClue: {
      en: "Foci of hemosiderin, cerebral microbleeds, cavernous malformations, or calcifications appear much larger and darker than their true anatomical size on GRE/SWI.",
      ar: "ظهور بؤر النزيف الدماغي أو التكلسات أو المعادن بحجم أسود أكبر بكثير من حجمها التشريحي الحقيقي في تسلسلات GRE و SWI."
    },
    physicalCause: {
      en: "Paramagnetic blood breakdown products create local magnetic field distortion causing rapid T2* spin dephasing beyond the physical lesion boundary.",
      ar: "المواد البارامغناطيسية في منتجات الدم تسرّع فقدان التماسك الطوري T2* في البكسلات المحيطة بالآفة فتنطفئ إشارتها."
    },
    immediateFix: {
      en: [
        "1. Understand this is often diagnostically helpful for detecting microbleeds on SWI/T2*.",
        "2. To measure true lesion dimensions, reduce TE on GRE or compare against Spin Echo T1/T2 sequences.",
        "3. Increase Receiver Bandwidth and spatial resolution (smaller voxels limit local dephasing spread)."
      ],
      ar: [
        "1. يُستفاد منه سريرياً لاكتشاف النزيف المجهري، لكن لقياس الحجم الفعلي للآفة استخدم تسلسل Spin Echo.",
        "2. تقليل زمن الصدى TE في تسلسلات التدرج.",
        "3. زيادة نطاق التردد Bandwidth وتصغير حجم الفوكسل لتقليل امتداد التعتيم."
      ]
    },
    vendorTools: {
      siemens: "SWI Magnitude vs TSE Compare",
      ge: "SWAN / T2 FSE Correlation",
      philips: "SWIp / TSE Size Reference"
    }
  },

  {
    id: "nyquist_ghost",
    image: "/artifacts/nyquist_ghost.jpeg",
    category: "motion_flow",
    nameEn: "Nyquist N/2 Ghosting (EPI / DWI)",
    nameAr: "شبحية نايكوست النصفية في الانتشار (Nyquist N/2 Ghost)",
    severity: "High",
    visualClue: {
      en: "A faint duplicate ghost of the brain or body shifted strictly by half the FOV (N/2 pixels) along the phase-encoding direction on EPI-DWI / fMRI.",
      ar: "ظهور نسخة شبحية باهتة للدماغ أو الجسم مزاحة بمقدار نصف حقل الرؤية (N/2) في تسلسلات الانتشار EPI-DWI."
    },
    physicalCause: {
      en: "Odd and even k-space lines in single-shot EPI are traversed in opposite directions; eddy currents and gradient delays create slight phase mismatches between forward and reverse echoes.",
      ar: "تُقرأ السطور الفردية والزوجية في EPI باتجاهين متعاكسين، وتسبب التيارات الدوامية وتأخر التدرجات فرق طور يولّد شبحاً في منتصف الصورة."
    },
    immediateFix: {
      en: [
        "1. Ensure reference phase-correction pre-scan completed cleanly without patient motion.",
        "2. Use Readout-Segmented / Multi-shot EPI (RESOLVE / MUSE) or Parallel Imaging (GRAPPA/SENSE) to shorten echo train.",
        "3. Perform thorough 3D shimming before running EPI-DWI."
      ],
      ar: [
        "1. التأكد من ثبات المريض أثناء معايرة الطور الأولية قبل DWI وإعادة معايرة T2/Shim.",
        "2. تقليل طول قطار الصدى عبر تفعيل التصوير المتوازي (GRAPPA/SENSE) أو استخدام RESOLVE / MUSE DWI.",
        "3. تعديل نطاق تردد المستقبل (Bandwidth / Echo Spacing) لتسريع قراءة الفضاء K."
      ]
    },
    vendorTools: {
      siemens: "RESOLVE + GRAPPA + Advanced Shim",
      ge: "MUSE + ASSET + Autoshim",
      philips: "IRIS / SENSE DWI + Phase Correction"
    }
  },

  {
    id: "moire_fringes",
    image: "/artifacts/moire_fringes.jpg",
    category: "spatial_kspace",
    nameEn: "Moire Fringes (Aliasing + Field Inhomogeneity)",
    nameAr: "تموجات مواريه التداخلية (Moire Fringes)",
    severity: "Medium",
    visualClue: {
      en: "Wavy dark and bright concentric zebra-like interference fringes near the edges of large-FOV coronal body or neck GRE/SSFP images.",
      ar: "حلقات وتموجات متداخلة داكنة ومضيئة تشبه بصمة الأصابع على حواف صور الجسم أو الرقبة ذات حقل الرؤية الكبير."
    },
    physicalCause: {
      en: "Wrapped-around signals (aliasing) from arms/shoulders outside FOV experience inhomogeneous B0 gradients at magnet bore edges and interfere constructively/destructively with internal anatomy.",
      ar: "تداخل إشارة الأطراف الملتفة من خارج حقل الرؤية (حيث المجال غير متجانس قرب جدار الجهاز) مع إشارة الأنسجة الداخلية."
    },
    immediateFix: {
      en: [
        "1. Increase Phase Oversampling (No-Phase Wrap / Fold-over suppression) to eliminate arm/shoulder wrap-around.",
        "2. Expand FOV to cover shoulders/arms or swap phase and frequency encoding directions.",
        "3. Place Spatial Saturation Bands on outside arms or switch from GRE to Spin Echo."
      ],
      ar: [
        "1. تفعيل Oversampling الطوري (No-Phase Wrap) لمنع التفاف الذراعين من خارج حقل الرؤية.",
        "2. توسيع الـ FOV ليشمل الأطراف أو عكس اتجاه الطور والتردد.",
        "3. وضع شرائط كبت (Sat Bands) على الذراعين أو استخدام تسلسل Spin Echo."
      ]
    },
    vendorTools: {
      siemens: "Phase Oversampling + TSE",
      ge: "No Phase Wrap (NPW)",
      philips: "Fold-Over Suppression"
    }
  },

  {
    id: "bounce_point",
    image: "/artifacts/bounce_point.jpg",
    category: "chemical_fat",
    nameEn: "Bounce Point Artifact (Inversion Recovery Magnitude)",
    nameAr: "عيب نقطة الارتداد في استعادة الانقلاب (Bounce Point)",
    severity: "Medium",
    visualClue: {
      en: "Black outline halo separating interfaces (e.g., fat/muscle or myocardium/blood) on magnitude-reconstructed STIR, FLAIR, or LGE Inversion Recovery images.",
      ar: "خط أسود داكن رفيع يطوّق حدود الأنسجة في صور STIR أو FLAIR أو حيوية القلب LGE."
    },
    physicalCause: {
      en: "In magnitude IR reconstruction, tissues with opposite longitudinal magnetization signs (+/-) cross zero at the boundary pixel (partial volume averaging), canceling out to zero signal (black line).",
      ar: "عند استخدام إعادة بناء Magnitude مع نبضة انقلاب، يتعادل نسيج موجب المغنطة مع نسيج سالب المغنطة على الحدود فيصبح البكسل صفراً (خط أسود)."
    },
    immediateFix: {
      en: [
        "1. Switch reconstruction from Magnitude IR (MAG) to Phase-Sensitive Inversion Recovery (PSIR / Real IR).",
        "2. Adjust Inversion Time (TI) appropriately using a TI Scout (Look-Locker) in cardiac LGE.",
        "3. Reduce Slice Thickness to minimize partial-volume signal cancellation at boundaries."
      ],
      ar: [
        "1. تفعيل إعادة البناء الحساس للطور PSIR بدلاً من Magnitude IR (خاصة في القلب LGE).",
        "2. ضبط زمن الانقلاب TI بدقة باستخدام TI Scout.",
        "3. تقليل سمك الشريحة لتقليل تداخل الأنسجة متعاكسة الطور."
      ]
    },
    vendorTools: {
      siemens: "PSIR Reconstruction / TI Scout",
      ge: "Phase-Sensitive MDE / Real IR",
      philips: "PSIR / Real Reconstruction"
    }
  },

  {
    id: "partial_volume",
    image: "/artifacts/partial_volume.jpg",
    category: "spatial_kspace",
    nameEn: "Partial Volume Averaging Artifact",
    nameAr: "عيب التداخل الحجمي الجزئي (Partial Volume)",
    severity: "Medium",
    visualClue: {
      en: "Loss of fine anatomical detail, blurred tissue borders, or false intermediate signal intensity mimicking cysts/lesions (e.g., blurred pituitary microadenoma or rotator cuff).",
      ar: "طمس تفاصيل الحدود الدقيقة وظهور إشارة متوسطة مضللة تخفي الأورام الصغيرة (مثل أورام الغدة النخامية أو الأوتار)."
    },
    physicalCause: {
      en: "Different tissue types (e.g., CSF + brain cortex, or bone + cartilage) coexist within the same large voxel, so the scanner averages their signals into one ambiguous gray value.",
      ar: "وجود أكثر من نوع نسيج داخل نفس الفوكسل الكبير، مما يدفع الجهاز لحساب متوسط إشارتهما وإظهار لون رمادي مطموس."
    },
    immediateFix: {
      en: [
        "1. Decrease Slice Thickness (e.g., 2-3 mm for pituitary/orbits/joints, or 1 mm for 3D).",
        "2. Increase Acquisition Matrix and reduce FOV to shrink in-plane voxel size.",
        "3. Acquire 3D isotropic volumetric scans (SPACE / CUBE / VISTA / MPRAGE) for multiplanar reformation."
      ],
      ar: [
        "1. تقليل سماكة الشريحة Slice Thickness (إلى 2-3 مم للنخامية والمفاصل أو 1 مم للثلاثي الأبعاد).",
        "2. زيادة المصفوفة Matrix وتقليص الـ FOV لتصغير حجم الفوكسل.",
        "3. استخدام المسح الحجمي المتساوي 3D Isotropic."
      ]
    },
    vendorTools: {
      siemens: "3D SPACE / Thin-Slice TSE",
      ge: "3D CUBE / High Matrix",
      philips: "3D VISTA / High-Res Matrix"
    }
  },

  {
    id: "parallel_imaging_artifact",
    image: "/artifacts/parallel_imaging_artifact.jpg",
    category: "spatial_kspace",
    nameEn: "Parallel Imaging (SENSE/GRAPPA) Central Ghost & G-Factor Noise",
    nameAr: "عيوب التصوير المتوازي وتضخم الضوضاء المركزية (SENSE/GRAPPA)",
    severity: "Medium",
    visualClue: {
      en: "Central band of elevated speckled noise or residual wrap-around unfolding errors appearing near the center of the image rather than the edges.",
      ar: "ظهور شريط ضوضاء محبب أو بقايا التفاف غير مفكوك في منتصف الصورة (تأثير معامل G-Factor)."
    },
    physicalCause: {
      en: "Excessive parallel acceleration factor (R >= 3-4), poor coil element geometry separation along phase axis, or patient motion between calibration pre-scan and main scan.",
      ar: "رفع معامل تسريع التصوير المتوازي فوق قدرة ملف الاستقبال، أو حركة المريض بين فحص المعايرة والفحص الأساسي."
    },
    immediateFix: {
      en: [
        "1. Lower Parallel Imaging acceleration factor (reduce PAT/SENSE factor from 3-4 down to 2).",
        "2. Switch from Image-domain (SENSE/ASSET) to k-space-domain (GRAPPA/ARC) which tolerates tight FOV better.",
        "3. Ensure calibration pre-scan and diagnostic scan share identical FOV/coil selection without patient movement."
      ],
      ar: [
        "1. خفض معامل تسريع التصوير المتوازي (من 3 أو 4 إلى 2 مثلاً).",
        "2. التحويل من SENSE/ASSET إلى GRAPPA/ARC الأكثر تحملاً لحقول الرؤية الصغيرة.",
        "3. إعادة فحص المعايرة إذا تحرك المريض، أو استخدام NEX إضافي لتعويض SNR."
      ]
    },
    vendorTools: {
      siemens: "GRAPPA R=2 (AutoCalibration)",
      ge: "ARC R=2",
      philips: "Compressed SENSE (Moderate)"
    }
  },

  {
    id: "data_clipping",
    image: "/artifacts/data_clipping.jpg",
    category: "spatial_kspace",
    nameEn: "Data Clipping / Receiver Overflow Artifact",
    nameAr: "عيب تجاوز سعة المستقبل (Data Clipping / Overflow)",
    severity: "Medium",
    visualClue: {
      en: "Image exhibits washed-out contrast with superimposed herringbone/ghosting bands or inverted gray-white intensity blocks across the entire slice.",
      ar: "صورة باهتة متداخلة بأشرطة مموجة أو مناطق منقلبة الشدة بسبب تشبع المحوّل الرقمي في الجهاز."
    },
    physicalCause: {
      en: "Echo amplitude at the center of k-space exceeds the dynamic range limit of the Analog-to-Digital Converter (ADC) because receiver gain is set too high.",
      ar: "ارتفاع شدة الإشارة في مركز الفضاء K فوق الحد الأقصى لمحول التناظرية-الرقمية (ADC) نتيجة ضبط كسب الاستقبال أعلى من اللازم."
    },
    immediateFix: {
      en: [
        "1. Re-run automatic Receiver Gain / Transmitter Adjustment calibration (Pre-scan).",
        "2. Reduce Receiver Gain manually by 3-6 dB if scanning high-signal fluid phantoms or using large NEX.",
        "3. Avoid zero-delay echoes if coil elements sit directly against skin without padding."
      ],
      ar: [
        "1. إعادة تشغيل المعايرة التلقائية لكسب المستقبل (Auto Receiver Gain Adjust).",
        "2. خفض كسب المستقبل يدوياً إذا كان الفحص يحتوي على سوائل شديدة السطوع.",
        "3. وضع وسادة رغوية رقيقة بين الملف الموضعي والجلد لمنع تشبع عنصر الاستقبال القريب."
      ]
    },
    vendorTools: {
      siemens: "System Adjustments -> Receiver Gain",
      ge: "Manual Prescan -> R1/R2 Gain",
      philips: "Preparation Phase Reset"
    }
  },

  {
    id: "fat_water_swap",
    image: "/artifacts/fat_water_swap.png",
    category: "chemical_fat",
    nameEn: "Fat-Water Swap Artifact (Dixon Technique)",
    nameAr: "انقلاب إشارة الماء والدهون في ديكسون (Fat-Water Swap)",
    severity: "High",
    visualClue: {
      en: "On Dixon Water-only images, subcutaneous fat suddenly appears bright while fluid/edema turns dark (swap of fat and water labels) over part or all of the image.",
      ar: "في صور الماء فقط (Dixon Water-only)، يظهر الشحم ساطعاً فجأة وتنطفئ السوائل (تبادل خاطئ بين قناتي الماء والدهون)."
    },
    physicalCause: {
      en: "Dixon phase-unwrapping algorithm misidentifies whether water or fat is dominant inside a region with steep local B0 field inhomogeneity (near implants, chest wall, or edges).",
      ar: "خطأ رياضي في خوارزمية فك الطور لـ Dixon في مناطق عدم التجانس الشديد للمجال فتنعكس تسمية الماء والدهون."
    },
    immediateFix: {
      en: [
        "1. Always inspect the In-Phase, Out-of-Phase, AND Fat-only series together to recognize the swap immediately.",
        "2. Perform tighter localized 3D shimming over the target organ and re-acquire.",
        "3. Fall back to STIR (true T1-nulling) if B0 distortion prevents reliable Dixon separation."
      ],
      ar: [
        "1. فحص صور In-Phase و Fat-only معاً لاكتشاف الانقلاب فوراً وعدم تشخيصه خطأً كوذمة.",
        "2. إجراء معايرة Shimming دقيقة للمنطقة المستهدفة وإعادة التسلسل.",
        "3. استخدام STIR كبديل موثوق عند تكرار الانقلاب قرب المعادن أو الرقبة."
      ]
    },
    vendorTools: {
      siemens: "Dixon Check In/Out + STIR Backup",
      ge: "IDEAL / LAVA-Flex Water/Fat Verify",
      philips: "mDixon XD Verification"
    }
  },

  {
    id: "flow_artifacts",
    image: "/artifacts/flow_artifacts.jpg",
    category: "motion_flow",
    nameEn: "Vascular & CSF Flow / Pulsation Ghosting",
    nameAr: "عيوب نبض وتدفق الدم والسائل النخاعي (Flow Artifacts)",
    severity: "High",
    visualClue: {
      en: "Row of circular ghost dots propagating across the phase-encoding axis aligned with the abdominal aorta, carotid artery, IVC, or CSF ventricles.",
      ar: "سلسلة من البقع الدائرية المتكررة تمتد عبر المحور الطوري محاذية للأبهر أو الشريان السباتي أو السائل النخاعي."
    },
    physicalCause: {
      en: "Pulsatile blood and CSF accelerate/decelerate across cardiac cycles between phase-encoding steps, acquiring inconsistent phase shifts that map as ghosts along the PE axis.",
      ar: "تغير سرعة نبض الدم والسائل النخاعي بين خطوات الترميز الطوري يخلق أخطاء طورية تُسقط كشبحية متكررة."
    },
    immediateFix: {
      en: [
        "1. Apply Spatial Presaturation Bands (Sat Bands) upstream/downstream of entering blood vessels.",
        "2. Enable Flow Compensation (Gradient Moment Nulling / GMR) on T2/GRE sequences.",
        "3. Swap Phase and Frequency encoding directions so ghosts miss critical pathology (e.g., away from liver lesions or brainstem)."
      ],
      ar: [
        "1. وضع شرائط كبت مكانية (Sat Bands) أعلى وأسفل شريحة الفحص لطمس الدم الداخل.",
        "2. تفعيل تعويض التدفق (Flow Compensation / GMR) في الإعدادات.",
        "3. تبديل اتجاه الطور والتردد لتوجيه خط الشبحية بعيداً عن المنطقة التشخيصية المهمة."
      ]
    },
    vendorTools: {
      siemens: "Flow Comp + Walking Sat Band",
      ge: "Flow Comp + Spatial Sat",
      philips: "Flow Comp + REST Slab"
    }
  },

  {
    id: "herringbone_spike",
    image: "/artifacts/herringbone_spike.jpg",
    category: "hardware_metal",
    nameEn: "Herringbone / RF Spike Artifact (Crisscross Stripes)",
    nameAr: "عيب الحسك أو الشرارات الكهربائية (Herringbone / Spike)",
    severity: "High",
    visualClue: {
      en: "Crisscrossed slanted dark and bright corduroy/herringbone stripes covering the entire image diagonally.",
      ar: "خطوط متقاطعة مائلة تغطي كامل الصورة بشكل شبكي منتظم (يشبه نسيج الحسك)."
    },
    physicalCause: {
      en: "A high-amplitude single-point noise spike corrupts a discrete point in raw k-space (due to electrostatic static discharge from dry air, loose coil connector, or faulty gradient amplifier).",
      ar: "شرارة كهربائية ساكنة أو تلامس ضعيف في كابل الملف يضع نقطة شاذة عالية الشدة في الفضاء K فتنتج خطوطاً متقاطعة على كامل الصورة."
    },
    immediateFix: {
      en: [
        "1. Re-acquire the sequence immediately — sporadic static spikes often vanish on repeat scan.",
        "2. Check, unplug, clean, and firmly re-seat the receiver coil plugs on the patient table.",
        "3. Verify magnet room humidity (>40%) to prevent electrostatic discharge, and call service if recurring."
      ],
      ar: [
        "1. إعادة تشغيل التسلسل فوراً؛ الشرارات العابرة تختفي غالباً بالإعادة.",
        "2. فحص فيش توصيل الملف الموضعي وإعادة تركيبها بإحكام.",
        "3. التحقق من رطوبة الغرفة (منع الكهرباء الساكنة) وطلب الصيانة إذا استمرت في كل الفحوصات."
      ]
    },
    vendorTools: {
      siemens: "Coil Connector Reseat / Service Spike Test",
      ge: "Coil Port Check / Hardware Noise Check",
      philips: "Coil Plug Verify / Spike Diagnostic"
    }
  },

  {
    id: "stair_step_tof",
    image: "/artifacts/stair_step_tof.jpg",
    category: "motion_flow",
    nameEn: "Stair-Step / Venetian Blind Artifact (2D/MOTSA TOF MRA)",
    nameAr: "عيب الدرجات أو الستائر في تصوير الأوعية (Stair-Step / Venetian Blind)",
    severity: "Medium",
    visualClue: {
      en: "Horizontal banded intensity drop-offs or jagged stepped vessel contours visible on coronal/sagittal MIP reconstructions of 2D or multi-slab 3D TOF MRA.",
      ar: "انخفاضات أفقية متدرجة الشدة أو حواف متعرجة للأوعية الدموية تظهر في إعادة البناء MIP لتصوير الأوعية TOF."
    },
    physicalCause: {
      en: "In 2D TOF (thick slices) or MOTSA multi-slab 3D TOF, blood progressively saturates as it travels deeper into each slab before entering the next fresh unsaturated slab.",
      ar: "تشبع تدريجي لإشارة الدم داخل كل شريحة أو كتلة من شرائح TOF قبل دخوله الكتلة التالية ذات الإشارة الساطعة."
    },
    immediateFix: {
      en: [
        "1. Enable TONE (Tilted Optimized Non-saturating Excitation / Ramped RF Pulse) across 3D slabs.",
        "2. Increase slab overlap (30-50%) between multi-chunk MOTSA slabs or switch to single-slab 3D TOF.",
        "3. For 2D TOF, use thinner slices with negative overlap (-20%) or switch to contrast-enhanced MRA."
      ],
      ar: [
        "1. تفعيل نبضة TONE (أو Ramped RF) لموازنة سطوع الدم عبر الكتلة الثلاثية.",
        "2. زيادة تداخل الكتل (Overlap 30-50%) في MOTSA أو التحويل لكتلة 3D واحدة.",
        "3. استخدام شرائح أرق أو التحويل لـ MRA بالصبغة في حال التضيقات الشديدة."
      ]
    },
    vendorTools: {
      siemens: "TONE Ramp + 3D MOTSA Overlap",
      ge: "Ramp Pulse + Multi-Slab Overlap",
      philips: "TONE + Chunk Overlap"
    }
  }
];
