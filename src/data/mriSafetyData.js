/**
 * MRI Safety & Contrast Decision Tree
 * Based on American College of Radiology (ACR) Manual on Contrast Media & IEC 60601-2-33 Standards.
 */

export const ACR_CONTRAST_GROUPS = {
  group_1: {
    name: "Group I: High Risk for NSF (Linear Non-Ionic / Ionic)",
    nameAr: "المجموعة الأولى: عالية الخطورة لمتلازمة NSF (ممنوعة لمرضى القصور الكلوي)",
    riskLevel: "High",
    agents: [
      { generic: "Gadodiamide", brand: "Omniscan" },
      { generic: "Gadopentetate dimeglumine", brand: "Magnevist" },
      { generic: "Gadoversetamide", brand: "Optimark" }
    ],
    guidelineEn: "Contraindicated in patients with severe chronic kidney disease (eGFR < 30 mL/min/1.73m²) or acute kidney injury (AKI). Screening eGFR is mandatory within 30-60 days.",
    guidelineAr: "ممنوعة تماماً للمرضى الذين يقل معدل ترشيح الكلى لديهم عن 30 مل/دقيقة أو المصابين بفشل كلوي حاد. يلزم إجراء تحليل وظائف الكلى مسبقاً."
  },
  group_2: {
    name: "Group II: Very Low / Negligible Risk for NSF (Macrocyclic Agents)",
    nameAr: "المجموعة الثانية: فائقة الأمان وشبه معدومة المخاطر (المركبات الحلقية الكبرى)",
    riskLevel: "Minimal",
    agents: [
      { generic: "Gadoterate meglumine", brand: "Dotarem / Clariscan" },
      { generic: "Gadobutrol", brand: "Gadavist / Gadovist" },
      { generic: "Gadoteridol", brand: "ProHance" }
    ],
    guidelineEn: "Extremely low or unconfounded zero risk of Nephrogenic Systemic Fibrosis (NSF). Standard of care in Saudi hospitals. Routine eGFR screening is not strictly required for outpatients without known severe renal disease according to latest ACR updates.",
    guidelineAr: "آمنة جداً ومخاطر تليف الكلى التصلبي (NSF) معها شبه معدومة. هي المعيار الذهبي المعتمد في مستشفيات المملكة حالياً. لا يلزم حرمان المريض منها حتى مع انخفاض وظائف الكلى إذا كانت الفائدة السريرية تفوق المخاطر."
  },
  group_3: {
    name: "Group III: Hepatobiliary Specific (Primovist / Eovist)",
    nameAr: "المجموعة الثالثة: صبغات الكبد النوعية المفرزة في الصفراء",
    riskLevel: "Low",
    agents: [
      { generic: "Gadoxetate disodium", brand: "Eovist / Primovist" }
    ],
    guidelineEn: "Excreted 50% via hepatocytes into bile and 50% via kidneys. Very few reported NSF cases. Low dose (0.025 mmol/kg — 1/4 standard dose).",
    guidelineAr: "تُفرز بنسبة 50% عبر خلايا الكبد في القنوات الصفراوية و50% عبر الكلى. جرعتها ربع الجرعة العادية (0.025 mmol/kg). تُستخدم خصيصاً لتشخيص أورام الكبد الأولية HCC."
  }
};

/**
 * Evaluates NSF risk and provides immediate clinical recommendation based on eGFR and agent group.
 */
export const evaluateContrastSafety = (egfr, groupKey) => {
  const g = parseFloat(egfr);
  if (isNaN(g) || g < 0) return null;

  if (groupKey === "group_1") {
    if (g < 30) {
      return {
        status: "contraindicated",
        badgeEn: "CONTRAINDICATED",
        badgeAr: "ممنوع الحقن قطعيـاً",
        color: "#ef4444",
        recommendationEn: "Do NOT administer Group I contrast. Extreme risk of Nephrogenic Systemic Fibrosis (NSF). Switch to Group II agent (Dotarem/Gadovist) if contrast is clinically indispensable.",
        recommendationAr: "يُمنع إعطاء صبغات المجموعة الأولى تماماً لخطر الإصابة بالتليف الجهازي الكلوي (NSF). استبدلها بصبغة من المجموعة الثانية (Dotarem أو Gadovist)."
      };
    } else if (g < 45) {
      return {
        status: "caution",
        badgeEn: "HIGH CAUTION",
        badgeAr: "حذر شديد وموافقة استشاري",
        color: "#f59e0b",
        recommendationEn: "Avoid Group I if possible. Use Group II agent instead. Ensure written informed consent and clinical consultation.",
        recommendationAr: "يُفضل تجنبها واستخدام صبغة من المجموعة الثانية مع توقيع موافقة خطية واستشارة طبيب الأشعة."
      };
    } else {
      return {
        status: "acceptable",
        badgeEn: "ACCEPTABLE",
        badgeAr: "مقبول سريرياً",
        color: "#10b981",
        recommendationEn: "Standard dose permitted (0.1 mmol/kg). Maintain adequate pre- and post-scan hydration.",
        recommendationAr: "يُسمح بالجرعة النظامية (0.1 mmol/kg) مع الحرص على شرب السوائل الكافية قبل الفحص وبعده."
      };
    }
  }

  if (groupKey === "group_2") {
    if (g < 30) {
      return {
        status: "caution",
        badgeEn: "ACCEPTABLE WITH CAUTION",
        badgeAr: "مسموح عند الضرورة السريرية",
        color: "#f59e0b",
        recommendationEn: "Group II agents have virtually zero unconfounded NSF risk. Administer lowest diagnostic dose if exam cannot be postponed or replaced by non-contrast study. Dialysis patients should receive dialysis within 24-48 hours.",
        recommendationAr: "صبغات المجموعة الثانية آمنة ومخاطر الـ NSF معها تكاد تكون معدومة. يُحقن المريض بأقل جرعة ممكنة إذا كان الفحص ضرورياً. مرضى الغسيل يُفضل جدولة جلسة الغسيل خلال 24 ساعة."
      };
    } else {
      return {
        status: "safe",
        badgeEn: "SAFE / APPROVED",
        badgeAr: "آمن ومعتمد للاستخدام",
        color: "#10b981",
        recommendationEn: "Fully approved for routine diagnostic administration at 0.1 mmol/kg (typically 0.2 mL/kg for standard 0.5M formulation or 0.1 mL/kg for 1.0M Gadovist).",
        recommendationAr: "آمن تماماً ومعتمد للاستخدام بالجرعة المعيارية 0.1 mmol/kg (ما يعادل 0.2 مل/كغم للصبغات القياسية أو 0.1 مل/كغم لـ Gadovist)."
      };
    }
  }

  // Group 3 (Primovist)
  return {
    status: "safe",
    badgeEn: "HEPATOBILIARY SPECIFIC",
    badgeAr: "صبغة كبدية نوعية منخفضة الجرعة",
    color: "#06b6d4",
    recommendationEn: "Administer quarter-dose (0.025 mmol/kg = 0.1 mL/kg). Excellent safety profile. Dual biliary and renal elimination pathways.",
    recommendationAr: "يُحقن المريض بربع الجرعة العادية (0.025 mmol/kg). ملف أمان ممتاز بفضل المسار المزدوج للإخراج عبر الكبد والكلى."
  };
};

/**
 * MRI RF Safety & SAR vs B1+rms Reference
 */
export const MRI_RF_SAFETY_RULES = {
  sarLimits: [
    {
      mode: "Normal Operating Mode",
      modeAr: "نمط التشغيل العادي",
      wholeBodySar: "2.0 W/kg",
      headSar: "3.2 W/kg",
      descriptionEn: "Routine scanning without special thermal risk. Body core temperature rise < 0.5°C.",
      descriptionAr: "النمط الروتيني الطبيعي دون مخاطر حرارية. ارتفاع حرارة الجسم أقل من نصف درجة مئوية."
    },
    {
      mode: "First Level Controlled Mode",
      modeAr: "نمط التحكم من المستوى الأول (تحذير كونسول)",
      wholeBodySar: "4.0 W/kg",
      headSar: "3.2 W/kg",
      descriptionEn: "Requires deliberate technologist console confirmation. Body core temperature may rise up to 1.0°C. Monitor patient comfort and cooling fans.",
      descriptionAr: "يتطلب تأكيداً يدوياً من الفني على الكونسول. قد ترتفع حرارة الجسم حتى درجة كاملة، يلزم تفعيل مراوح التبريد ومراقبة المريض."
    }
  ],
  b1rmsGuide: {
    titleEn: "SAR vs B1+rms (Crucial for MR-Conditional Implants)",
    titleAr: "الفرق الحرج بين SAR و B1+rms للغرسات الطبية",
    pearlEn: "Modern MR-Conditional pacemakers, neuromodulators, and heart valves specify safety conditions in B1+rms (microTesla, µT) rather than SAR, because B1+rms directly reflects the incident RF magnetic field regardless of patient weight or bore loading. A typical pacemaker limit is B1+rms ≤ 2.0 µT or ≤ 2.8 µT in Normal Operating Mode.",
    pearlAr: "أجهزة تنظيم ضربات القلب والتحفيز العصبي الحديثة المتوافقة مشروطاً (MR-Conditional) تحدد أمانها بوحدة B1+rms (ميكرو تسلا) وليس SAR، لأن B1+rms يقيس شدة المجال الراديوي المباشر على الغرسة بغض النظر عن وزن المريض. الحد الأقصى الشائع لمعظم البطاريات هو B1+rms ≤ 2.0 µT."
  }
};
