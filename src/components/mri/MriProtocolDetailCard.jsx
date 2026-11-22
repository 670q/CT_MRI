import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ChevronDown, ChevronUp, Eye, EyeOff, 
  Layers, Sliders, AlertTriangle, ArrowRight, CheckCircle2, 
  Cpu, Compass, User, Zap, ImageIcon, Clock, Maximize2
} from 'lucide-react';
import { getProtocolClinicalData } from '../../data/mriProtocolsMaster';

export const MriProtocolDetailCard = ({ 
  protocol, 
  onClose, 
  selectedVendor = 'all', 
  onSelectVendor,
  language = 'ar' 
}) => {
  if (!protocol) return null;

  // On-Demand Disclosure States (User requested not to clutter the page unless clicked)
  const [showSetup, setShowSetup] = useState(false);
  const [showAngulation, setShowAngulation] = useState(false);
  const [showTriggers, setShowTriggers] = useState(false);
  const [showSequences, setShowSequences] = useState(false);
  const [showPlanningImages, setShowPlanningImages] = useState(false);
  const [activeSequenceId, setActiveSequenceId] = useState(null);
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  // Check if we have flagship or clinical resolved data for this protocol
  const flagship = getProtocolClinicalData(protocol);
  const items = protocol.items || [];

  // Function to translate sequence acronyms based on selected vendor
  const getVendorSequenceName = (seq) => {
    if (!seq) return '';
    if (selectedVendor === 'siemens') return seq.siemens;
    if (selectedVendor === 'ge') return seq.ge;
    if (selectedVendor === 'philips') return seq.philips;
    return `${seq.generic} [${seq.siemens} | ${seq.ge} | ${seq.philips}]`;
  };

  const isEn = language === 'en';

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-full animate-in fade-in duration-300">
      
      {/* 1. Header Banner & Board Certification Badge */}
      <div className="p-5 bg-gradient-to-l from-indigo-950 via-purple-950 to-slate-950 border-b border-purple-500/20 relative shadow-md">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>{isEn ? "Clinically Reviewed: MRI Board Certified" : "معتمد سريرياً: معايير البورد الدولي للرنين"}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-900/80 text-purple-300 border border-slate-800">
              <span>{isEn ? "Ref: mrimaster.com methodology" : "مرجع التخطيط: mrimaster.com"}</span>
            </span>
          </div>

          {/* Back/Close button for mobile and tablets */}
          {onClose && (
            <button 
              onClick={onClose}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 active:scale-95 border border-purple-500/40 text-xs font-bold text-purple-200 shadow-md transition-all"
              title={isEn ? "Back to Protocols" : "العودة لقائمة الفحوصات"}
            >
              <ArrowRight size={14} className="rtl:rotate-0 ltr:rotate-180 text-purple-400" />
              <span>{isEn ? "Back" : "العودة للقائمة"}</span>
            </button>
          )}
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
          <div>
            <h2 className="text-2xl font-black text-white tracking-wide">
              {isEn ? protocol.title : protocol.titleAr}
            </h2>
            <p className="text-xs font-mono text-purple-300/80 mt-0.5 dir-ltr text-right">
              {protocol.title} • {items.length} {isEn ? "planning cards & localizers" : "صور تخطيط وتوجيه"}
            </p>
          </div>

          {/* Cross-Vendor Switcher Pills (Siemens / GE / Philips / All) */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs font-mono select-none">
            {['all', 'siemens', 'ge', 'philips'].map((vend) => (
              <button
                key={vend}
                onClick={() => onSelectVendor(vend)}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedVendor === vend
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {vend === 'all' ? (isEn ? 'All' : 'الكل') : vend.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Board Specialist Pearl Box */}
        {flagship?.boardReview && (
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/70 to-indigo-950/70 border border-purple-500/30 text-xs leading-relaxed flex items-start gap-3 shadow-inner">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 mt-0.5">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="font-bold text-purple-200 flex items-center gap-1.5 mb-0.5">
                <span>{isEn ? "Board Specialist Pearl (Console Tip)" : "لؤلؤة البورد الاستشارية (نصيحة كونسول)"}:</span>
              </div>
              <p className="text-slate-300">
                {isEn ? flagship.boardReview.pearlEn : flagship.boardReview.pearlAr}
              </p>
            </div>
          </div>
        )}

      </div>

      {/* 2. On-Demand Expandable Drawers (Patient Setup, Angulation, Pathology Triggers) */}
      <div className="p-4 space-y-3 bg-slate-900/40 border-b border-slate-800">
        
        {/* Drawer 1: Patient Setup & Coils */}
        {flagship?.setup && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all">
            <button
              onClick={() => setShowSetup(!showSetup)}
              className="w-full p-3.5 flex items-center justify-between text-right text-xs font-bold text-slate-200 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <User size={15} className="text-cyan-400" />
                <span>{isEn ? "Patient Setup & Coil Selection" : "تجهيز المريض واختيار الملف (Patient & Coil Setup)"}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <span>{showSetup ? (isEn ? "Hide" : "إخفاء") : (isEn ? "Show" : "عرض")}</span>
                {showSetup ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </button>

            {showSetup && (
              <div className="p-4 pt-1 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 animate-in fade-in duration-200">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono block">
                    {isEn ? "PATIENT POSITION" : "وضعية المريض"}
                  </span>
                  <strong className="text-white">
                    {isEn ? flagship.setup.patientPosition.en : flagship.setup.patientPosition.ar}
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono block">
                    {isEn ? "COIL SELECTION" : "نوع الملف المستخدم"}
                  </span>
                  <strong className="text-emerald-400">
                    {isEn ? flagship.setup.coil.en : flagship.setup.coil.ar}
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono block">
                    {isEn ? "CENTERING LANDMARK" : "نقطة المحاذاة (Isocenter)"}
                  </span>
                  <strong className="text-cyan-300">
                    {isEn ? flagship.setup.landmark.en : flagship.setup.landmark.ar}
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono block">
                    {isEn ? "GATING & PREPARATIONS" : "التحضير وحساسات التنفس والنبض"}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {isEn ? flagship.setup.preparations.en : flagship.setup.preparations.ar}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Drawer 2: 3-Plane Slice Planning & Angulation Rules (On-Demand Reveal Button) */}
        {flagship?.angulationRules && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all">
            <button
              onClick={() => setShowAngulation(!showAngulation)}
              className="w-full p-3.5 flex items-center justify-between text-right text-xs font-bold text-slate-200 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Compass size={15} className="text-emerald-400" />
                <span>{isEn ? "3-Plane Slice Planning & Angulation Rules" : "قواعد التوجيه الزاوي للمستويات الثلاثة (3-Plane Angulation)"}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                <Eye size={12} />
                <span>{showAngulation ? (isEn ? "Hide Rules" : "إخفاء القواعد") : (isEn ? "Reveal Rules" : "كشف قواعد الزوايا")}</span>
              </div>
            </button>

            {showAngulation && (
              <div className="p-4 pt-1 border-t border-slate-800/80 space-y-3 text-xs animate-in fade-in duration-200">
                {flagship.angulationRules.axial && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-block mb-1">
                      {isEn ? "AXIAL PLANE ANGULATION" : "قاعدة التوجيه المحوري (Axial Plane)"}
                    </span>
                    <p className="text-slate-200 leading-relaxed text-[11px]">
                      {isEn ? flagship.angulationRules.axial.en : flagship.angulationRules.axial.ar}
                    </p>
                  </div>
                )}

                {flagship.angulationRules.coronal && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block mb-1">
                      {isEn ? "CORONAL PLANE ANGULATION" : "قاعدة التوجيه الإكليلي (Coronal Plane)"}
                    </span>
                    <p className="text-slate-200 leading-relaxed text-[11px]">
                      {isEn ? flagship.angulationRules.coronal.en : flagship.angulationRules.coronal.ar}
                    </p>
                  </div>
                )}

                {flagship.angulationRules.sagittal && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block mb-1">
                      {isEn ? "SAGITTAL PLANE ANGULATION" : "قاعدة التوجيه السهمي (Sagittal Plane)"}
                    </span>
                    <p className="text-slate-200 leading-relaxed text-[11px]">
                      {isEn ? flagship.angulationRules.sagittal.en : flagship.angulationRules.sagittal.ar}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Drawer 3: Emergency & Pathology Add-On Triggers */}
        {flagship?.pathologyTriggers && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all">
            <button
              onClick={() => setShowTriggers(!showTriggers)}
              className="w-full p-3.5 flex items-center justify-between text-right text-xs font-bold text-slate-200 hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-amber-400" />
                <span>{isEn ? "Pathology Add-On Sequences & Emergency Triggers" : "مصفوفة الحالات الطارئة والباثولوجيا (Pathology Triggers)"}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                <span>{showTriggers ? (isEn ? "Hide" : "إخفاء") : (isEn ? "View Triggers" : "عرض الحالات")}</span>
                {showTriggers ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </button>

            {showTriggers && (
              <div className="p-4 pt-1 border-t border-slate-800/80 space-y-2.5 text-xs animate-in fade-in duration-200">
                {flagship.pathologyTriggers.map((trig, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center justify-between text-amber-300 font-bold">
                      <span>⚡ {isEn ? trig.conditionEn : trig.conditionAr}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30">
                        {trig.sequenceToAdd}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {isEn ? trig.actionEn : trig.actionAr}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* 3. Sequence Navigator Linked to Image Cards — COLLAPSIBLE (User requested: hidden until clicked) */}
      {flagship?.sequences && (
        <div className="border-b border-slate-800 bg-slate-900/80">
          <button
            onClick={() => setShowSequences(!showSequences)}
            className="w-full p-4 flex items-center justify-between text-right text-xs font-bold text-slate-200 hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Layers size={14} className="text-purple-400" />
              <span>{isEn ? "Clinical Sequence Matrix (Click to locate slice)" : "تسلسلات الفحص السريرية (انقر للانتقال لصورة التخطيط)"}:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400">
                {flagship.sequences.length} {isEn ? "sequences" : "تسلسل"} • {isEn ? selectedVendor.toUpperCase() : selectedVendor.toUpperCase()}
              </span>
              {showSequences ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
            </div>
          </button>

          {showSequences && (
            <div className="p-4 pt-1 border-t border-slate-800/80 space-y-2 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {flagship.sequences.map((seq) => (
                  <button
                    key={seq.id}
                    onClick={() => {
                      setActiveSequenceId(seq.id);
                      setShowPlanningImages(true);
                      setTimeout(() => {
                        const el = document.getElementById(`mri-card-${seq.imageIndex}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }}
                    className={`p-2.5 rounded-xl text-right border text-xs transition-all flex flex-col justify-between ${
                      activeSequenceId === seq.id
                        ? 'bg-purple-950/80 border-purple-500 text-white shadow-md shadow-purple-500/20'
                        : 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 w-full mb-1">
                      <span className="font-bold text-purple-200 truncate">
                        {isEn ? seq.nameEn : seq.nameAr}
                      </span>
                      <span className="text-[9px] font-mono text-purple-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                        {isEn ? `Image #${seq.imageIndex + 1}` : `صورة #${seq.imageIndex + 1}`}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-emerald-400 truncate dir-ltr text-right">
                      {getVendorSequenceName(seq)}
                    </div>

                    {seq.params && (
                      <div className="mt-1 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>TR: {seq.params.tr}</span>
                        <span>TE: {seq.params.te}</span>
                        <span>FOV: {seq.params.fov}</span>
                        <span>THK: {seq.params.thk}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Stream of Full-Width Image Cards — COLLAPSIBLE */}
      <div className="border-b border-slate-800 bg-slate-950">
        <button
          onClick={() => setShowPlanningImages(!showPlanningImages)}
          className="w-full p-4 flex items-center justify-between text-right text-xs font-bold text-slate-200 hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-cyan-400" />
            <span>{isEn ? "MRI Master Planning Images" : "صور التخطيط والوضعية التشريحية"}:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400">
              {items.length} {isEn ? "views" : "صورة"}
            </span>
            {showPlanningImages ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
          </div>
        </button>

        {showPlanningImages && (
          <div className="p-5 overflow-y-auto flex-1 space-y-6 animate-in fade-in duration-200">
            {items.map((item, idx) => (
          <div 
            key={idx}
            id={`mri-card-${idx}`}
            className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl hover:border-purple-500/50 transition-all duration-200"
          >
            {/* Top Image Label Bar */}
            <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 select-none">
              <span className="text-purple-300 font-bold flex items-center gap-1.5">
                <ImageIcon size={13} />
                <span>{isEn ? `Planning View #${idx + 1}` : `مقطع التخطيط رقم #${idx + 1}`}</span>
              </span>
              <span className="text-slate-500 text-[11px]">{item.image}</span>
            </div>

            {/* Image View */}
            <div 
              className="relative group cursor-pointer bg-black/95 flex items-center justify-center p-2 min-h-[360px]"
              onClick={() => setSelectedImageModal(item)}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full max-h-[550px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition-opacity gap-2">
                <Maximize2 size={18} />
                <span>{isEn ? "Click to Enlarge" : "تكبير الصورة بالحجم الكامل"}</span>
              </div>
            </div>

            {/* Caption underneath image - ENGLISH ONLY matching MRI Master */}
            <div className="p-3.5 bg-slate-900 text-purple-200 text-center font-mono text-xs sm:text-sm font-semibold dir-ltr border-t border-purple-900/30 select-all tracking-wide">
              {item.caption}
            </div>
          </div>
        ))}
          </div>
        )}
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageModal(null)}
        >
          <div className="relative max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-xs font-mono text-purple-300 font-bold dir-ltr">
                {selectedImageModal.caption}
              </h4>
              <button 
                onClick={() => setSelectedImageModal(null)}
                className="text-slate-400 hover:text-white px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs"
              >
                ✕ {isEn ? "Close" : "إغلاق"}
              </button>
            </div>
            <img 
              src={selectedImageModal.image} 
              alt={selectedImageModal.caption}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
