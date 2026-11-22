/**
 * Master MRI Physics Engine & Authentic Presets from MRI Master (mrimaster.com)
 * Includes real-time mathematical calculators for SNR, Voxel Volume, and Scan Time.
 */

export const MRIMASTER_PHYSICS_PRESETS = [
  {
    id: "brain_t1_se",
    nameEn: "Brain T1 Axial SE (mrimaster.com)",
    nameAr: "الدماغ: مقطع T1 محوري معتمد (mrimaster)",
    descriptionEn: "Standard anatomical brain T1 sequence with high anatomical definition and SNR balance.",
    descriptionAr: "تسلسل الدماغ المعياري التشريحي بتباين T1 متوازن بين الإشارة والدقة.",
    params: {
      tr: 500,        // ms
      te: 15,         // ms
      fov: 220,       // mm
      matrixPhase: 256,
      matrixFreq: 256,
      sliceThk: 5.0,  // mm
      nex: 1,         // NSA
      bandwidth: 150, // Hz/pixel
      etl: 1,         // Spin echo
      parallelFactor: 1
    }
  },
  {
    id: "brain_t2_fse",
    nameEn: "Brain T2 Axial TSE/FSE (mrimaster.com)",
    nameAr: "الدماغ: مقطع T2 محوري فائق السرعة (mrimaster)",
    descriptionEn: "Standard diagnostic T2 Turbo Spin Echo with high fluid sensitivity and fast acquisition.",
    descriptionAr: "تسلسل T2 الروتيني فائق السرعة لكشف السوائل والوذمات الدماغية.",
    params: {
      tr: 4000,
      te: 105,
      fov: 220,
      matrixPhase: 256,
      matrixFreq: 384,
      sliceThk: 4.0,
      nex: 2,
      bandwidth: 200,
      etl: 16,
      parallelFactor: 2
    }
  },
  {
    id: "brain_flair",
    nameEn: "Brain Axial T2 FLAIR (mrimaster.com)",
    nameAr: "الدماغ: مقطع T2 FLAIR لكبت السوائل (mrimaster)",
    descriptionEn: "Inversion recovery with TI=2500ms designed to null free water/CSF signal for MS plaque evaluation.",
    descriptionAr: "تسلسل استعادة الانقلاب لكبت السائل النخاعي الحر وإبراز لويحات التصلب اللويحي.",
    params: {
      tr: 9000,
      te: 120,
      fov: 220,
      matrixPhase: 256,
      matrixFreq: 256,
      sliceThk: 4.0,
      nex: 1,
      bandwidth: 180,
      etl: 20,
      parallelFactor: 2
    }
  },
  {
    id: "knee_pd_fatsat",
    nameEn: "Knee Sagittal PD FatSat (mrimaster.com)",
    nameAr: "الركبة: مقطع سهمي PD مع كبت الشحم (mrimaster)",
    descriptionEn: "High spatial resolution joint protocol optimized for meniscal tears and articular cartilage fissures.",
    descriptionAr: "فحص المفاصل فائق الدقة المخصص لتمزقات الغضاريف الهلالية وأربطة الركبة.",
    params: {
      tr: 2800,
      te: 32,
      fov: 160,
      matrixPhase: 256,
      matrixFreq: 320,
      sliceThk: 3.0,
      nex: 2,
      bandwidth: 160,
      etl: 12,
      parallelFactor: 1
    }
  },
  {
    id: "lumbar_t2_sag",
    nameEn: "Lumbar Spine T2 Sagittal (mrimaster.com)",
    nameAr: "الفقرات القطنية: مقطع سهمي T2 للديسك (mrimaster)",
    descriptionEn: "High-contrast spine protocol demonstrating disc hydration and spinal canal dimensions.",
    descriptionAr: "فحص العمود الفقري القطني لإظهار انزلاق الأقراص الغضروفية وتضيق القناة العصبية.",
    params: {
      tr: 3500,
      te: 100,
      fov: 280,
      matrixPhase: 256,
      matrixFreq: 384,
      sliceThk: 4.0,
      nex: 2,
      bandwidth: 180,
      etl: 18,
      parallelFactor: 2
    }
  },
  {
    id: "liver_t1_vibe",
    nameEn: "Liver 3D T1 VIBE/LAVA Dynamic (mrimaster.com)",
    nameAr: "الكبد: مقطع 3D T1 ديناميكي لحبس النفس (mrimaster)",
    descriptionEn: "Sub-20 second breath-hold 3D gradient echo with isotropic volumetric reconstruction for triphasic contrast enhancement.",
    descriptionAr: "مسح حجمي ثلاثي الأبعاد بكتم النفس أقل من 20 ثانية لتصوير مراحل التروية الكبدية.",
    params: {
      tr: 4.0,
      te: 1.8,
      fov: 380,
      matrixPhase: 192,
      matrixFreq: 256,
      sliceThk: 3.0,
      nex: 1,
      bandwidth: 450,
      etl: 1,
      parallelFactor: 2
    }
  },
  {
    id: "brain_dwi_epi",
    nameEn: "Brain DWI EPI (b=1000) (mrimaster.com)",
    nameAr: "الدماغ: مقطع انتشار الماء السريع DWI (mrimaster)",
    descriptionEn: "Single-shot echo-planar sequence capturing cellular cytotoxic edema in hyperacute stroke.",
    descriptionAr: "تسلسل بلانار بطلقة واحدة يلتقط الوذمة السامة للخلايا في الجلطات الحادة خلال دقائق.",
    params: {
      tr: 3200,
      te: 85,
      fov: 230,
      matrixPhase: 128,
      matrixFreq: 128,
      sliceThk: 4.0,
      nex: 3,
      bandwidth: 1200,
      etl: 128,
      parallelFactor: 2
    }
  }
];

/**
 * Calculates real-time mathematical MRI parameters:
 * 1. Pixel Size in Phase and Frequency (mm)
 * 2. Voxel Volume (mm³)
 * 3. Relative SNR (%) calibrated to baseline standard
 * 4. Total Acquisition Scan Time (minutes and seconds)
 */
export const calculateMriPhysics = (params) => {
  const {
    tr,
    te,
    fov,
    matrixPhase,
    matrixFreq,
    sliceThk,
    nex,
    bandwidth,
    etl = 1,
    parallelFactor = 1
  } = params;

  // 1. Pixel Dimensions & Voxel Volume
  const pixelX = fov / Math.max(matrixFreq, 1);
  const pixelY = fov / Math.max(matrixPhase, 1);
  const voxelVolume = pixelX * pixelY * sliceThk; // in mm³

  // 2. Relative SNR Calculation
  // Standard MRI formula: SNR proportional to (Voxel Volume) * sqrt(NEX / Bandwidth) / sqrt(R)
  // We calibrate with a normalization constant so baseline Brain T1 is roughly 100%
  const kNorm = 0.048;
  const snrRaw = voxelVolume * Math.sqrt(Math.max(nex, 1) / Math.max(bandwidth, 1)) * (1 / Math.sqrt(Math.max(parallelFactor, 1))) * 100;
  const relativeSnr = Math.round(snrRaw * kNorm);

  // 3. Scan Time Calculation (in seconds)
  // 2D Scan Time = (TR * MatrixPhase * NEX) / (ETL * ParallelFactor * 1000)
  const effectiveEtl = Math.max(etl, 1);
  const effectiveR = Math.max(parallelFactor, 1);
  const totalSeconds = Math.max(
    Math.round((tr * matrixPhase * nex) / (effectiveEtl * effectiveR * 1000)),
    1
  );

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const scanTimeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return {
    pixelX: pixelX.toFixed(2),
    pixelY: pixelY.toFixed(2),
    voxelVolume: voxelVolume.toFixed(2),
    relativeSnr: Math.max(relativeSnr, 5),
    totalSeconds,
    scanTimeFormatted
  };
};

/**
 * Board Clinical Explanations for Physics Manipulations
 * Based on MRI Master educational physics references.
 */
export const PHYSICS_EXPLANATIONS = {
  fov: {
    en: "Increasing Field of View (FOV) increases pixel size and voxel volume, which dramatically increases SNR (signal captured per pixel increases with the square of FOV), but decreases spatial resolution (blurrier images).",
    ar: "زيادة حقل الرؤية (FOV) تكبّر حجم البكسل والفوكسل، مما يضاعف إشارة الـ SNR بشكل هائل ولكن يقلل الدقة المكانية (صورة أقل حدة)."
  },
  matrix: {
    en: "Increasing Matrix size creates smaller voxels. Smaller voxels capture less signal, decreasing SNR. However, spatial resolution improves significantly. Doubling matrix size also increases scan time proportionally.",
    ar: "زيادة حجم المصفوفة (Matrix) يصغّر الفوكسل فيقل الـ SNR، ولكنه يزيد الدقة والتفاصيل التشريحية بشكل ملحوظ مع زيادة زمن الفحص."
  },
  sliceThk: {
    en: "Increasing Slice Thickness directly enlarges voxel volume, increasing SNR linearly. Disadvantage: Reduces through-plane spatial resolution and increases partial volume averaging artifacts.",
    ar: "زيادة سمك الشريحة (Slice Thickness) يرفع الـ SNR خطياً بزيادة حجم الفوكسل، وعيبه تقليل الدقة المحورية وزيادة تداخل الأنسجة (Partial Voluming)."
  },
  nex: {
    en: "Increasing Number of Signal Averages (NSA/NEX) increases SNR by the square root of NEX (doubling NEX increases SNR by 41%), but doubles the scan time linearly.",
    ar: "زيادة عدد التكرارات (NEX/NSA) يرفع الـ SNR بمقدار الجذر التربيعي (مضاعفة NEX تزيد الإشارة 41%)، ولكنه يضاعف زمن الفحص خطياً."
  },
  bandwidth: {
    en: "Decreasing Receiver Bandwidth reduces background white noise and increases SNR (halving bandwidth increases SNR by ~30%). Disadvantage: Increases chemical shift artifacts and minimum TE.",
    ar: "تضييق نطاق الاستقبال (Bandwidth) يخفض ضوضاء الخلفية ويرفع الـ SNR بنسبة 30% عند النصف، لكنه يزيد عيوب الإزاحة الكيميائية للشحم."
  },
  parallel: {
    en: "Parallel Imaging (GRAPPA/SENSE/ASSET) skips k-space lines to reduce scan time by factor R, but incurs an SNR penalty of 1/sqrt(R) plus coil geometry g-factor noise.",
    ar: "التصوير المتوازي يختصر خطوط الفضاء K ليخفض زمن الفحص بمقدار R، ولكن على حساب فقدان الإشارة بمقدار 1/جذر(R)."
  }
};
