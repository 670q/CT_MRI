/**
 * Master MRI Physics Engine & Authentic Presets from MRI Master (mrimaster.com)
 * Comprehensive sequence database covering Brain, Spine, MSK, Abdomen/Pelvis, and Cardiac/Vascular.
 */

export const PHYSICS_CATEGORIES = {
  all: { en: "All Sequences", ar: "جميع التسلسلات" },
  brain: { en: "Brain & Neuro", ar: "الدماغ والأعصاب" },
  spine: { en: "Spine", ar: "العمود الفقري" },
  msk: { en: "MSK & Joints", ar: "العضلات والمفاصل" },
  abdomen: { en: "Abdomen & Pelvis", ar: "البطن والحوض" },
  cardiac_vascular: { en: "Cardiac & MRA", ar: "القلب والأوعية" }
};

export const MRIMASTER_PHYSICS_PRESETS = [
  // --- BRAIN & NEURO ---
  {
    id: "brain_t1_se",
    category: "brain",
    nameEn: "Brain T1 Axial SE",
    nameAr: "الدماغ: مقطع T1 محوري معتمد",
    descriptionEn: "Standard anatomical brain T1 sequence with high anatomical definition and SNR balance.",
    descriptionAr: "تسلسل الدماغ المعياري التشريحي بتباين T1 متوازن بين الإشارة والدقة.",
    params: { tr: 500, te: 15, fov: 220, matrixPhase: 256, matrixFreq: 256, sliceThk: 5.0, nex: 1, bandwidth: 150, etl: 1, parallelFactor: 1 }
  },
  {
    id: "brain_t2_fse",
    category: "brain",
    nameEn: "Brain T2 Axial TSE/FSE",
    nameAr: "الدماغ: مقطع T2 محوري فائق السرعة",
    descriptionEn: "Standard diagnostic T2 Turbo Spin Echo with high fluid sensitivity and fast acquisition.",
    descriptionAr: "تسلسل T2 الروتيني فائق السرعة لكشف السوائل والوذمات الدماغية.",
    params: { tr: 4000, te: 105, fov: 220, matrixPhase: 256, matrixFreq: 384, sliceThk: 4.0, nex: 2, bandwidth: 200, etl: 16, parallelFactor: 2 }
  },
  {
    id: "brain_flair",
    category: "brain",
    nameEn: "Brain Axial T2 FLAIR",
    nameAr: "الدماغ: مقطع T2 FLAIR لكبت السوائل",
    descriptionEn: "Inversion recovery with TI=2500ms designed to null free water/CSF signal for MS plaque evaluation.",
    descriptionAr: "تسلسل استعادة الانقلاب لكبت السائل النخاعي الحر وإبراز لويحات التصلب اللويحي.",
    params: { tr: 9000, te: 120, fov: 220, matrixPhase: 256, matrixFreq: 256, sliceThk: 4.0, nex: 1, bandwidth: 180, etl: 20, parallelFactor: 2 }
  },
  {
    id: "brain_dwi_epi",
    category: "brain",
    nameEn: "Brain DWI EPI (Stroke)",
    nameAr: "الدماغ: انتشار الماء السريع للجلطات (DWI)",
    descriptionEn: "Single-shot Echo Planar Imaging with b-values (0 & 1000 s/mm²) for acute ischemia detection within 15 seconds.",
    descriptionAr: "تصوير أحادي النبضة فائق السرعة لكشف احتشاء الدماغ الحاد خلال 15 ثانية.",
    params: { tr: 3500, te: 90, fov: 230, matrixPhase: 128, matrixFreq: 128, sliceThk: 5.0, nex: 3, bandwidth: 1400, etl: 128, parallelFactor: 2 }
  },
  {
    id: "brain_3d_mprage",
    category: "brain",
    nameEn: "Brain 3D T1 MPRAGE / SPGR",
    nameAr: "الدماغ: مسح حجمي ثلاثي الأبعاد 3D T1",
    descriptionEn: "High-resolution 1mm isotropic 3D gradient echo with magnetization preparation for volumetric anatomy.",
    descriptionAr: "تصوير حجمي متساوي الأبعاد بدقة 1 مم لإعادة البناء في المستويات الثلاثة والتخطيط الجراحي.",
    params: { tr: 2000, te: 3.0, fov: 256, matrixPhase: 256, matrixFreq: 256, sliceThk: 1.0, nex: 1, bandwidth: 240, etl: 1, parallelFactor: 2 }
  },
  {
    id: "brain_gre_t2star",
    category: "brain",
    nameEn: "Brain Axial GRE T2*",
    nameAr: "الدماغ: مقطع التدرج T2* لكشف النزيف والترسبات",
    descriptionEn: "Gradient echo sensitive to magnetic susceptibility, micro-hemorrhages, and cavernomas.",
    descriptionAr: "تسلسل حساس للحساسية المغناطيسية والنزيف المجهري والتكلسات والكهوف الوعائية.",
    params: { tr: 600, te: 20, fov: 220, matrixPhase: 224, matrixFreq: 256, sliceThk: 4.0, nex: 1, bandwidth: 160, etl: 1, parallelFactor: 1 }
  },
  {
    id: "brain_swi",
    category: "brain",
    nameEn: "Brain 3D SWI / SWAN",
    nameAr: "الدماغ: تصوير الحساسية المغناطيسية عالي الدقة",
    descriptionEn: "High-resolution fully flow-compensated 3D gradient echo combining phase and magnitude data for blood products.",
    descriptionAr: "تصوير ثلاثي الأبعاد يدمج بيانات الطور والشدة لكشف الشعيرات الدموية والجلطات الدقيقة والنزف الحاد.",
    params: { tr: 30, te: 20, fov: 220, matrixPhase: 256, matrixFreq: 320, sliceThk: 1.6, nex: 1, bandwidth: 100, etl: 1, parallelFactor: 2 }
  },
  {
    id: "brain_3d_tof_mra",
    category: "brain",
    nameEn: "Brain 3D TOF MRA (Circle of Willis)",
    nameAr: "شرايين الدماغ: تدفق ثلاثي الأبعاد بدون صبغة (TOF)",
    descriptionEn: "Non-contrast inflow time-of-flight angiogram optimized for aneurysm and stenosis evaluation in circle of Willis.",
    descriptionAr: "تصوير تدفق الدم الشرياني بدقة عالية بدون صبغة لتقييم أم دم الدماغ وتضيق الشرايين.",
    params: { tr: 25, te: 3.5, fov: 200, matrixPhase: 256, matrixFreq: 384, sliceThk: 0.8, nex: 1, bandwidth: 180, etl: 1, parallelFactor: 2 }
  },

  // --- SPINE ---
  {
    id: "lumbar_t2_sag",
    category: "spine",
    nameEn: "Lumbar Spine T2 Sagittal FSE",
    nameAr: "الفقرات القطنية: مقطع T2 سهمي للغضاريف",
    descriptionEn: "Diagnostic T2 sagittal sequence for intervertebral disc herniation, spinal stenosis, and cord termination.",
    descriptionAr: "التسلسل الأساسي لتقييم انزلاق الغضاريف وتضيق القناة الشوكية وجذور الأعصاب.",
    params: { tr: 3500, te: 100, fov: 260, matrixPhase: 256, matrixFreq: 384, sliceThk: 4.0, nex: 2, bandwidth: 220, etl: 18, parallelFactor: 2 }
  },
  {
    id: "lumbar_t1_sag",
    category: "spine",
    nameEn: "Lumbar Spine T1 Sagittal SE",
    nameAr: "الفقرات القطنية: مقطع T1 سهمي لنخاع العظم",
    descriptionEn: "Evaluates bone marrow replacement, compression fractures, Modic endplate changes, and epidural fat.",
    descriptionAr: "تقييم نقي العظم والكسور الانضغاطية وتغيرات موديك والدهون فوق الجافية.",
    params: { tr: 600, te: 12, fov: 260, matrixPhase: 256, matrixFreq: 320, sliceThk: 4.0, nex: 2, bandwidth: 180, etl: 4, parallelFactor: 1 }
  },
  {
    id: "lumbar_t2_ax",
    category: "spine",
    nameEn: "Lumbar Spine T2 Axial FSE (Disc Angled)",
    nameAr: "الفقرات القطنية: مقطع T2 محوري مائل للغضاريف",
    descriptionEn: "Angled parallel to disc spaces (L3/L4, L4/L5, L5/S1) for nerve root and foramen stenosis.",
    descriptionAr: "مقاطع محورية مائلة موازية لمستوى الغضاريف لفحص الثقوب العصبية وضغط الجذور.",
    params: { tr: 3800, te: 110, fov: 200, matrixPhase: 224, matrixFreq: 320, sliceThk: 4.0, nex: 2, bandwidth: 200, etl: 16, parallelFactor: 1 }
  },
  {
    id: "cervical_t2_sag",
    category: "spine",
    nameEn: "Cervical Spine T2 Sagittal FSE",
    nameAr: "الفقرات العنقية: مقطع T2 سهمي للنخاع الشوكي",
    descriptionEn: "High-resolution depiction of cervical spinal cord, disc bulges, and myelopathy cord signal.",
    descriptionAr: "فحص دقيق للنخاع الشوكي العنقي لكشف الاعتلال النقوي والانضغاط الغضروفي.",
    params: { tr: 3200, te: 95, fov: 220, matrixPhase: 256, matrixFreq: 384, sliceThk: 3.0, nex: 2, bandwidth: 200, etl: 16, parallelFactor: 2 }
  },
  {
    id: "cervical_t2_ax_medic",
    category: "spine",
    nameEn: "Cervical Spine Axial T2* MEDIC / MERGE",
    nameAr: "الفقرات العنقية: مقطع T2* محوري متعدد الصدى",
    descriptionEn: "Multi-echo gradient echo producing high gray/white cord contrast and neural foramen opening.",
    descriptionAr: "تسلسل تدرجي متعدد الصدى يبرز المادة الرمادية والبيضاء في النخاع والثقوب العصبية.",
    params: { tr: 650, te: 17, fov: 180, matrixPhase: 224, matrixFreq: 288, sliceThk: 3.0, nex: 2, bandwidth: 180, etl: 1, parallelFactor: 1 }
  },
  {
    id: "thoracic_stir_sag",
    category: "spine",
    nameEn: "Thoracic Spine STIR Sagittal",
    nameAr: "الفقرات الصدرية: مقطع STIR سهمي لكبت الشحم",
    descriptionEn: "Inversion recovery suppressing bone marrow fat to reveal edema, acute fractures, and metastasis.",
    descriptionAr: "تسلسل كبت الشحم للكشف عن وذمات العظام والكسور الحادة والالتهابات والنقائل.",
    params: { tr: 4500, te: 60, fov: 320, matrixPhase: 256, matrixFreq: 320, sliceThk: 4.0, nex: 2, bandwidth: 220, etl: 14, parallelFactor: 2 }
  },

  // --- MSK & JOINTS ---
  {
    id: "knee_pd_fatsat",
    category: "msk",
    nameEn: "Knee PD Fat-Sat Sagittal FSE",
    nameAr: "الركبة: مقطع كثافة البروتون السهمي (ACL & Meniscus)",
    descriptionEn: "Clinical gold-standard for ACL, PCL, and meniscal tear assessment with spectral fat suppression.",
    descriptionAr: "المرجع المعياري الذهبي للرباط الصليبي والغضاريف الهلالية بكبت كيميائي للدهون.",
    params: { tr: 2800, te: 32, fov: 160, matrixPhase: 256, matrixFreq: 384, sliceThk: 3.0, nex: 2, bandwidth: 200, etl: 12, parallelFactor: 1 }
  },
  {
    id: "knee_t2_cor_fatsat",
    category: "msk",
    nameEn: "Knee T2 Fat-Sat Coronal FSE",
    nameAr: "الركبة: مقطع T2 إكليلي للأربطة الجانبية (MCL/LCL)",
    descriptionEn: "Parallel to femoral condyles to examine collateral ligaments, meniscal roots, and cartilage wear.",
    descriptionAr: "مقطع موازٍ للقمتي الفخذ لفحص الأربطة الجانبية وجذور الغضاريف والغضروف المفصلي.",
    params: { tr: 3600, te: 85, fov: 160, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 2, bandwidth: 220, etl: 15, parallelFactor: 1 }
  },
  {
    id: "shoulder_pd_fatsat_obl",
    category: "msk",
    nameEn: "Shoulder PD Fat-Sat Oblique Coronal",
    nameAr: "الكتف: مقطع كثافة البروتون المائل للكفة المدورة",
    descriptionEn: "Angled parallel to supraspinatus tendon for rotator cuff tear and labral detachment.",
    descriptionAr: "مائل بمحاذاة وتر فوق الشوكة لتشخيص تمزقات الكفة المدورة وشفا الحق.",
    params: { tr: 2600, te: 30, fov: 150, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 2, bandwidth: 200, etl: 10, parallelFactor: 1 }
  },
  {
    id: "shoulder_t1_cor",
    category: "msk",
    nameEn: "Shoulder T1 Oblique Coronal",
    nameAr: "الكتف: مقطع T1 مائل لضمور العضلات ونخاع العظم",
    descriptionEn: "Evaluates muscular fatty atrophy (Goutallier grading) and acromial morphology.",
    descriptionAr: "تقييم الضمور الشحمي لعضلات الكتف وشكل الأخرم وكسور العظام.",
    params: { tr: 600, te: 12, fov: 150, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.5, nex: 2, bandwidth: 180, etl: 4, parallelFactor: 1 }
  },
  {
    id: "ankle_pd_fatsat_sag",
    category: "msk",
    nameEn: "Ankle PD Fat-Sat Sagittal FSE",
    nameAr: "الكاحل: مقطع كثافة البروتون السهمي لوتر أكيليس",
    descriptionEn: "Detailed inspection of Achilles tendon, plantar fascia, and talar dome osteochondral lesions.",
    descriptionAr: "فحص وتر العرقوب (أكيليس) واللفافة الأخمصية ورضوض عظم الكاحل.",
    params: { tr: 2800, te: 34, fov: 140, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 2, bandwidth: 190, etl: 11, parallelFactor: 1 }
  },
  {
    id: "hip_t1_cor",
    category: "msk",
    nameEn: "Hip Joint T1 Coronal SE",
    nameAr: "مفصل الورك: مقطع T1 إكليلي لنخر رأس الفخذ (AVN)",
    descriptionEn: "Bilateral hip evaluation for avascular necrosis (AVN), subchondral fractures, and marrow edema.",
    descriptionAr: "فحص ثنائي للوركين لكشف النخر اللاوعائي لرأس الفخذ والكسور الخفية.",
    params: { tr: 650, te: 14, fov: 360, matrixPhase: 288, matrixFreq: 384, sliceThk: 4.0, nex: 2, bandwidth: 210, etl: 3, parallelFactor: 2 }
  },

  // --- ABDOMEN & PELVIS ---
  {
    id: "liver_t1_vibe",
    category: "abdomen",
    nameEn: "Liver T1 3D VIBE / LAVA (Dual-Echo)",
    nameAr: "الكبد: حجمي ثلاثي الأبعاد 3D T1 VIBE للصبغة",
    descriptionEn: "Breath-hold 3D spoiled gradient echo used for dynamic multiphasic liver contrast imaging (15-20s).",
    descriptionAr: "تصوير حجمي ثلاثي الأبعاد بحبس النفس للحقن الديناميكي لمراحل الكبد الشريانية والوريدية.",
    params: { tr: 4.2, te: 1.8, fov: 380, matrixPhase: 192, matrixFreq: 288, sliceThk: 2.5, nex: 1, bandwidth: 450, etl: 1, parallelFactor: 2 }
  },
  {
    id: "liver_t2_fatsat_resp",
    category: "abdomen",
    nameEn: "Liver T2 Fat-Sat (Respiratory Triggered)",
    nameAr: "الكبد: مقطع T2 محوري بكبت الشحم مع حسّاس التنفس",
    descriptionEn: "High fluid sensitivity sequence triggered by navigator or bellows for hemangiomas, cysts, and liver metastases.",
    descriptionAr: "تسلسل T2 بحساسات التنفس لتفادي حركة الحجاب الحاجز وتشخيص الأورام الوعائية والأكياس والنقائل.",
    params: { tr: 4200, te: 90, fov: 380, matrixPhase: 256, matrixFreq: 320, sliceThk: 5.0, nex: 2, bandwidth: 260, etl: 21, parallelFactor: 2 }
  },
  {
    id: "mrcp_3d_thick_slab",
    category: "abdomen",
    nameEn: "MRCP 3D Thick Slab (Biliary & Pancreatic)",
    nameAr: "القنوات الصفراوية: مقطع 3D MRCP سميك فائق السوائل",
    descriptionEn: "Heavy T2 weighting (TE > 600-800ms) with respiratory gating for static biliary tree and pancreatic duct visualization.",
    descriptionAr: "تسلسل فائق التباين السائلي لكشف حصوات القنوات المرارية وتضيق القناة البنكرياسية.",
    params: { tr: 2500, te: 650, fov: 300, matrixPhase: 256, matrixFreq: 384, sliceThk: 40.0, nex: 1, bandwidth: 350, etl: 120, parallelFactor: 2 }
  },
  {
    id: "pelvis_prostate_t2_ax",
    category: "abdomen",
    nameEn: "Prostate/Pelvis High-Res T2 Axial FSE",
    nameAr: "البروستاتا والحوض: مقطع T2 محوري فائق الدقة (PI-RADS)",
    descriptionEn: "Sub-millimeter in-plane resolution across the prostate gland for peripheral and transition zone cancer grading.",
    descriptionAr: "دقة عالية دون المليمتر لتقييم أورام البروستاتا والمنطقة المحيطية وفق معايير PI-RADS الدولية.",
    params: { tr: 4200, te: 105, fov: 180, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 3, bandwidth: 200, etl: 18, parallelFactor: 2 }
  },

  // --- CARDIAC & VASCULAR ---
  {
    id: "cardiac_cine_truefisp",
    category: "cardiac_vascular",
    nameEn: "Cardiac Cine 2D TrueFISP / FIESTA (4-Chamber)",
    nameAr: "القلب: سينمائي حركي 4-Chamber TrueFISP بالنبض",
    descriptionEn: "ECG-gated steady-state free precession (bSSFP) evaluating left ventricular ejection fraction and wall motion.",
    descriptionAr: "تصوير سينمائي متزامن مع تخطيط القلب ECG لقياس كفاءة ضخ البطين الأيسر وحركة الجدران.",
    params: { tr: 3.2, te: 1.5, fov: 340, matrixPhase: 192, matrixFreq: 256, sliceThk: 6.0, nex: 1, bandwidth: 930, etl: 1, parallelFactor: 2 }
  },
  {
    id: "carotid_mra_ce",
    category: "cardiac_vascular",
    nameEn: "Carotid & Aortic Arch Contrast MRA (CE-MRA)",
    nameAr: "شرايين الرقبة والأبهر: تصوير وعائي ثلاثي الأبعاد بالصبغة",
    descriptionEn: "Time-resolved 3D spoiled gradient echo during bolus contrast transit for carotid bifurcation stenosis.",
    descriptionAr: "تصوير حجمي فائق السرعة أثناء مرور صبغة الجادولينيوم لكشف تضيق الشريان السباتي وقوس الأبهر.",
    params: { tr: 3.5, te: 1.2, fov: 320, matrixPhase: 224, matrixFreq: 384, sliceThk: 1.2, nex: 1, bandwidth: 600, etl: 1, parallelFactor: 3 }
  },
  {
    id: "cardiac_stress_perfusion",
    category: "cardiac_vascular",
    nameEn: "Cardiac Stress Perfusion (First-Pass SR-GRE / TrueFISP)",
    nameAr: "القلب: تروية عضلة القلب بالإجهاد الدوائي (First-Pass)",
    descriptionEn: "ECG-triggered saturation-recovery ultra-fast single-shot imaging tracking adenosine/regadenoson first-pass contrast bolus across 3 short-axis slices per heartbeat.",
    descriptionAr: "تصوير فائق السرعة متزامن مع نبض القلب لتتبع مرور صبغة الإجهاد عبر 3 مقاطع قصيرة في كل نبضة لكشف نقص التروية.",
    params: { tr: 2.6, te: 1.2, fov: 360, matrixPhase: 144, matrixFreq: 192, sliceThk: 8.0, nex: 1, bandwidth: 950, etl: 1, parallelFactor: 2 }
  },
  {
    id: "cardiac_lge_viability",
    category: "cardiac_vascular",
    nameEn: "Cardiac Viability Late Gadolinium (LGE PSIR)",
    nameAr: "القلب: حيوية عضلة القلب بالصبغة المتأخرة (LGE PSIR)",
    descriptionEn: "Phase-sensitive inversion recovery acquired 10-15 min post-Gd to null normal myocardium (black) and highlight myocardial scar/fibrosis (bright).",
    descriptionAr: "استعادة انقلاب حساسة للطور بعد 10-15 دقيقة لطمس العضلة السليمة وإبراز التليف والندبات القلبية.",
    params: { tr: 8.0, te: 3.3, fov: 350, matrixPhase: 192, matrixFreq: 256, sliceThk: 8.0, nex: 1, bandwidth: 140, etl: 1, parallelFactor: 2 }
  },
  {
    id: "cardiac_t1_molli",
    category: "cardiac_vascular",
    nameEn: "Cardiac Myocardial T1 Mapping (MOLLI)",
    nameAr: "القلب: خرائط التقييم الكمي T1 Mapping (MOLLI)",
    descriptionEn: "Modified Look-Locker Inversion recovery quantifying native and post-contrast T1 relaxation times for diffuse fibrosis, amyloidosis, and Fabry disease.",
    descriptionAr: "تكميم أزمنة الاسترخاء T1 قبل وبعد الصبغة لتشخيص التليف المنتشر والداء النشواني والتهاب العضلة القلبية.",
    params: { tr: 2.8, te: 1.1, fov: 360, matrixPhase: 160, matrixFreq: 256, sliceThk: 8.0, nex: 1, bandwidth: 1080, etl: 1, parallelFactor: 2 }
  },

  // --- SPINE, PLEXUS & SI JOINTS ---
  {
    id: "si_joints_t1_cor",
    category: "spine",
    nameEn: "SI Joints Oblique Coronal T1 SE",
    nameAr: "المفصل الحرقفي العجزي: T1 إكليلي مائل",
    descriptionEn: "Angled parallel to dorsal sacrum to detect structural sacroiliitis: subchondral sclerosis, erosions, and fat metaplasia.",
    descriptionAr: "مائل بمحاذاة العجز لتشخيص التآكلات العظمية والتصلب واستحالة النخاع الدهنية في التهاب المفصل.",
    params: { tr: 550, te: 12, fov: 240, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.5, nex: 2, bandwidth: 180, etl: 3, parallelFactor: 1 }
  },
  {
    id: "si_joints_stir_cor",
    category: "spine",
    nameEn: "SI Joints Oblique Coronal STIR",
    nameAr: "المفصل الحرقفي العجزي: STIR إكليلي مائل للوذمة النشطة",
    descriptionEn: "Gold standard for active inflammatory sacroiliitis showing periarticular bone marrow edema (ASAS criteria).",
    descriptionAr: "المعيار الذهبي لكشف التهاب المفصل الحرقفي العجزي النشط ووذمة نخاع العظم الحادة.",
    params: { tr: 4500, te: 50, fov: 240, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.5, nex: 2, bandwidth: 200, etl: 12, parallelFactor: 2 }
  },
  {
    id: "lumbosacral_plexus_3d_stir",
    category: "spine",
    nameEn: "Lumbosacral Plexus 3D STIR SPACE (Neurography)",
    nameAr: "الضفيرة القطنية العجزية: تصوير أعصاب ثلاثي الأبعاد 3D STIR",
    descriptionEn: "Isotropic 3D STIR with vascular suppression (SHINKEI/SPACE) for sciatic, femoral, and sacral nerve root plexopathy.",
    descriptionAr: "تصوير حجمي ثلاثي الأبعاد للأعصاب الطرفية لكشف انضغاط أو التهاب الضفيرة القطنية العجزية والعصب الوركي.",
    params: { tr: 2200, te: 160, fov: 320, matrixPhase: 256, matrixFreq: 256, sliceThk: 1.2, nex: 1, bandwidth: 360, etl: 80, parallelFactor: 2 }
  },

  // --- MSK SMALL PARTS & SPECIAL VIEWS ---
  {
    id: "hand_fingers_pd_fs",
    category: "msk",
    nameEn: "Hand & Fingers Small-FOV PD Fat-Sat",
    nameAr: "اليد والأصابع: كثافة البروتون عالي الدقة حقل رؤية صغير",
    descriptionEn: "High-resolution 80-100mm small FOV sequence for flexor tendon pulleys, collateral ligaments, and volar plates.",
    descriptionAr: "حقل رؤية دقيق جداً 80-100 مم لفحص بكرات الأوتار القابضة والأربطة الجانبية والصفائح الراحية للأصابع.",
    params: { tr: 2800, te: 34, fov: 90, matrixPhase: 256, matrixFreq: 320, sliceThk: 2.0, nex: 3, bandwidth: 160, etl: 10, parallelFactor: 1 }
  },
  {
    id: "thumb_t1_cor",
    category: "msk",
    nameEn: "Thumb Thin-Slice T1 Coronal (Gamekeeper's / Stener)",
    nameAr: "الإبهام: مقطع T1 إكليلي رقيق (تمزق الرباط الزندي)",
    descriptionEn: "Dedicated 2mm coronal sequence parallel to metacarpophalangeal sesamoids for UCL Stener lesion assessment.",
    descriptionAr: "مقاطع إكليلية دقيقة بسماكة 2 مم لتقييم تمزق الرباط الجانبي الزندي لإبهام اليد (Stener lesion).",
    params: { tr: 600, te: 14, fov: 85, matrixPhase: 256, matrixFreq: 320, sliceThk: 2.0, nex: 2, bandwidth: 150, etl: 3, parallelFactor: 1 }
  },
  {
    id: "shoulder_aber_pd_fs",
    category: "msk",
    nameEn: "Shoulder ABER View Oblique Axial T1 FS / PD FS",
    nameAr: "الكتف: وضعية ABER المائلة للشفا الأمامي السفلي",
    descriptionEn: "Abduction and External Rotation (ABER) positioning tensioning the anteroinferior labroligamentous complex for Perthes/Bankart tears.",
    descriptionAr: "وضعية تبعيد وتدوير خارجي للذراع لشد الرباط الحقاني العضدي وإظهار تمزقات Bankart و Perthes الخفية.",
    params: { tr: 650, te: 14, fov: 160, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 2, bandwidth: 180, etl: 3, parallelFactor: 1 }
  },

  // --- ABDOMEN, OB/GYN & PELVIC FLOOR ---
  {
    id: "placenta_haste_sag",
    category: "abdomen",
    nameEn: "Placenta & Fetal Sagittal HASTE / SSFSE",
    nameAr: "المشيمة والجنين: مقطع HASTE سهمي بطلقة واحدة",
    descriptionEn: "Single-shot fast spin echo (<1 sec/slice) freezing maternal/fetal motion for placenta accreta spectrum (PAS) evaluation.",
    descriptionAr: "تصوير فائق السرعة (< ثانية للشريحة) يجمّد حركة الجنين والتنفس لتقييم التصاق المشيمة (Placenta Accreta).",
    params: { tr: 1200, te: 90, fov: 380, matrixPhase: 256, matrixFreq: 320, sliceThk: 4.0, nex: 1, bandwidth: 450, etl: 128, parallelFactor: 2 }
  },
  {
    id: "placenta_truefisp",
    category: "abdomen",
    nameEn: "Placenta & Fetal Axial TrueFISP / FIESTA",
    nameAr: "المشيمة والجنين: مقطع TrueFISP للتروية والواجهة العضلية",
    descriptionEn: "Balanced steady-state free precession demonstrating clear placental-myometrial interface and retroplacental vascularity without Gd.",
    descriptionAr: "يُظهر بوضوح الحد الفاصل بين المشيمة وعضلة الرحم والأوعية الدموية دون الحاجة لحقن صبغة أثناء الحمل.",
    params: { tr: 4.2, te: 1.8, fov: 380, matrixPhase: 256, matrixFreq: 256, sliceThk: 4.0, nex: 1, bandwidth: 750, etl: 1, parallelFactor: 2 }
  },
  {
    id: "proctogram_dynamic_bffe",
    category: "abdomen",
    nameEn: "Defecating Proctogram Dynamic TrueFISP / FIESTA Cine",
    nameAr: "تصوير التغوط الديناميكي: سينمائي قاع الحوض أثناء الإخراج",
    descriptionEn: "Real-time midsagittal dynamic bSSFP (1 frame/sec) during squeeze, Valsalva, and evacuation of rectal ultrasound gel.",
    descriptionAr: "تصوير سينمائي حي (إطار/ثانية) أثناء الشد والإخراج لتقييم هبوط قاع الحوض والمستقيم والمثانة (Rectocele/Cystocele).",
    params: { tr: 3.1, te: 1.5, fov: 300, matrixPhase: 192, matrixFreq: 256, sliceThk: 8.0, nex: 1, bandwidth: 850, etl: 1, parallelFactor: 2 }
  },
  {
    id: "female_urethra_t2_hr",
    category: "abdomen",
    nameEn: "Female Urethra High-Res Small-FOV T2 Axial",
    nameAr: "الإحليل الأنثوي: مقطع T2 محوري فائق الدقة",
    descriptionEn: "Targeted small-FOV T2 FSE (140mm) delineating urethral wall layers, diverticula, Skene gland cysts, and periurethral fibrosis.",
    descriptionAr: "تصوير مستهدف بحقل رؤية 140 مم لإيضاح طبقات جدار الإحليل والرتوج الإحليلية وأكياس غدد سكين.",
    params: { tr: 4000, te: 100, fov: 140, matrixPhase: 256, matrixFreq: 320, sliceThk: 3.0, nex: 3, bandwidth: 180, etl: 16, parallelFactor: 1 }
  },
  {
    id: "mr_urography_3d_t2",
    category: "abdomen",
    nameEn: "MR Urography / KUB 3D Heavily T2 SPACE",
    nameAr: "المسالك البولية KUB: مسح حجمي ثلاثي الأبعاد 3D T2",
    descriptionEn: "Respiratory-gated isotropic heavily T2-weighted 3D urogram depicting renal pelvicalyceal system and ureters without contrast.",
    descriptionAr: "تصوير مائي غير جراحي لحوض الكلية والحالبين والمثانة بوزن T2 فائق السطوع مع مزامنة التنفس.",
    params: { tr: 2400, te: 680, fov: 360, matrixPhase: 256, matrixFreq: 320, sliceThk: 1.5, nex: 1, bandwidth: 400, etl: 110, parallelFactor: 2 }
  }
];

export const PHYSICS_EXPLANATIONS = {
  fov: {
    en: "FOV (Field of View): Directly scales voxel volume. Halving FOV reduces SNR by ~75% (requires 4x NEX to recover), but doubles spatial resolution.",
    ar: "حقل الرؤية (FOV): يؤثر على حجم الفوكسل تربيعياً. تصغير حقل الرؤية إلى النصف يقلل نسبة الإشارة SNR بنسبة 75% لكنه يضاعف الدقة الصورية."
  },
  matrix: {
    en: "Matrix: Increasing phase matrix shrinks pixel size, enhancing resolution and sharpening edges (reducing partial volume & Gibbs ringing), but reduces SNR.",
    ar: "المصفوفة (Matrix): زيادة عدد أسطر مصفوفة الطور يصغر حجم البكسل ويزيد الدقة وتفاصيل الحدود ويقلل عيب جيبس، لكنه يخفض الإشارة ويزيد وقت الفحص."
  },
  thickness: {
    en: "Slice Thickness: Linear relationship with SNR and partial volume averaging. Thinner slices reduce partial volume averaging but decrease SNR proportionally.",
    ar: "سماكة الشريحة (Slice Thickness): علاقة طردية خطية مع الإشارة وتأثير الحجم الجزئي. ترقيق الشرائح يقلل التداخل النسيجي لكنه يخفض الإشارة بنفس النسبة."
  },
  tr: {
    en: "TR (Repetition Time): Governs T1 recovery and total scan time. Longer TR allows full longitudinal relaxation (higher SNR and T2-weighting), but increases scan time proportionally.",
    ar: "زمن التكرار (TR): يحدد مدى استرخاء المغنطة الطولية T1 وزمن الفحص الإجمالي. زيادة TR تعطي إشارة أعلى وتباين T2 ولكنها تطيل وقت الفحص خطياً."
  },
  nex: {
    en: "NEX / NSA (Averages): Signal averages increase SNR by √NEX. Doubling NEX increases SNR by 41% (√2 = 1.41) while doubling the total scan time.",
    ar: "مرات جمع الإشارة (NEX/NSA): زيادة NEX ترفع الإشارة بنسبة الجذر التربيعي (√NEX). مضاعفة NEX مرتين تزيد الإشارة بنسبة 41% فقط ولكنها تضاعف زمن الفحص كاملاً."
  }
};

export const calculateMriPhysics = (params) => {
  const pixelFreq = params.fov / params.matrixFreq;
  const pixelPhase = params.fov / params.matrixPhase;
  const voxelVolume = pixelFreq * pixelPhase * params.sliceThickness;

  const baseVoxel = (220 / 256) * (220 / 256) * 4.0;
  const voxelRatio = voxelVolume / (baseVoxel || 1);
  const nexFactor = Math.sqrt(Math.max(1, params.nex));
  const bwFactor = Math.sqrt(130 / Math.max(10, params.bandwidth || 130));
  const parallelPenalty = 1 / Math.sqrt(Math.max(1, params.parallelFactor || 1));
  const snrRelative = Math.round(100 * voxelRatio * nexFactor * bwFactor * parallelPenalty);

  const totalLines = params.matrixPhase;
  const effectiveLines = totalLines / Math.max(1, params.etl || 1);
  const totalSeconds = Math.round(((params.tr / 1000) * effectiveLines * params.nex) / Math.max(1, params.parallelFactor || 1));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const scanTimeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return {
    voxelVolume: voxelVolume.toFixed(2),
    snrRelative: Math.max(1, snrRelative),
    scanTimeFormatted,
    totalSeconds,
  };
};
