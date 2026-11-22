import React, { useState } from 'react';
import { 
  AlertTriangle, Wrench, Search, X, CheckCircle2, ShieldAlert, 
  Sparkles, Layers, Cpu, ArrowRight, Maximize2, ImageIcon
} from 'lucide-react';
import { MRI_ARTIFACTS, ARTIFACT_CATEGORIES } from '../../data/mriArtifactsData';

export const MriArtifactRescue = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  const filteredArtifacts = MRI_ARTIFACTS.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;

    const matchesSearch = 
      art.nameEn.toLowerCase().includes(q) ||
      (art.nameAr && art.nameAr.includes(q)) ||
      art.visualClue.en.toLowerCase().includes(q) ||
      art.physicalCause.en.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-5 md:p-6 shadow-2xl border border-slate-800 space-y-5 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Wrench size={22} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-wide">
              {isEn ? "Scan Rescue: Artifact Troubleshooting Matrix" : "دليل إنقاذ الفحص ومعالجة عيوب الصور (Scan Rescue Matrix)"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn 
                ? "Immediate clinical console fixes for artifacts encountered during live MRI scanning" 
                : "خطوات تصحيح فورية من داخل غرفة التحكم لحل مشكلات الصور المشوهة أثناء الفحص"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-xl">
          <span>{filteredArtifacts.length} {isEn ? "Artifact Guides" : "دليلاً سريرياً مصوراً"}</span>
        </div>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "Search artifact by clue or name (e.g. metal, wrap, ghosting, india ink, magic angle)..." : "ابحث عن العيب بالعلامة أو الاسم (مثال: معادن، التفاف، شبحية، زاوية سحرية، دهون)..."}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 pr-11 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono"
            dir="auto"
          />
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {isEn ? "All Artifacts" : "كافة العيوب"}
          </button>

          {Object.entries(ARTIFACT_CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30 font-black'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? cat.en : cat.ar}
            </button>
          ))}
        </div>
      </div>

      {/* Artifact Cards Matrix */}
      <div className="space-y-5">
        {filteredArtifacts.map((art) => (
          <div
            key={art.id}
            className="bg-slate-900/80 rounded-3xl border border-slate-800 p-5 space-y-4 hover:border-amber-500/40 transition-all shadow-lg"
          >
            {/* Title & Severity Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <h3 className="text-base font-bold text-white">
                  {isEn ? art.nameEn : art.nameAr}
                </h3>
                <span className="text-xs font-mono text-slate-400">({art.nameEn})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                  {ARTIFACT_CATEGORIES[art.category]?.[isEn ? 'en' : 'ar']}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  art.severity === 'High' 
                    ? 'bg-rose-500/15 text-rose-300 border-rose-500/30' 
                    : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                }`}>
                  {art.severity} Impact
                </span>
              </div>
            </div>

            {/* Medical Illustration Image */}
            <div 
              className="rounded-2xl overflow-hidden border border-slate-800 bg-black/95 group relative cursor-pointer"
              onClick={() => setSelectedImageModal({ image: `/artifacts/${art.id}.png`, title: isEn ? art.nameEn : art.nameAr })}
            >
              <img 
                src={`/artifacts/${art.id}.png`} 
                alt={art.nameEn} 
                className="w-full h-48 sm:h-64 object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition-opacity gap-2">
                <Maximize2 size={16} />
                <span>{isEn ? "Click to Enlarge Diagram" : "تكبير المخطط التوضيحي"}</span>
              </div>
            </div>

            {/* Step 1: Visual Clinical Clue */}
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] text-amber-400 font-mono font-bold flex items-center gap-1.5 uppercase">
                <AlertTriangle size={12} />
                <span>{isEn ? "1. Visual Clinical Clue (How it appears)" : "1. العلامة السريرية المرئية (كيف يظهر العيب على الصورة)"}</span>
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {isEn ? art.visualClue.en : art.visualClue.ar}
              </p>
            </div>

            {/* Step 2: Physical Cause */}
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] text-cyan-400 font-mono font-bold flex items-center gap-1.5 uppercase">
                <Sparkles size={12} />
                <span>{isEn ? "2. Root Physical Cause (The Mechanism)" : "2. السبب الفيزيائي (آلية حدوث العيب)"}</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? art.physicalCause.en : art.physicalCause.ar}
              </p>
            </div>

            {/* Step 3: Immediate Console Fix (Actionable Steps) */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1.5 uppercase">
                <CheckCircle2 size={13} />
                <span>{isEn ? "3. Immediate Console Fix (Actionable Steps)" : "3. خطوات الإصلاح الفوري بالكونسول (ماذا تفعل الآن)"}</span>
              </span>
              <div className="space-y-1.5 text-xs text-slate-300">
                {(isEn ? art.immediateFix.en : art.immediateFix.ar).map((step, sIdx) => (
                  <p key={sIdx} className="leading-relaxed flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">•</span>
                    <span>{step}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Step 4: Dedicated Vendor Fixes (Siemens / GE / Philips) */}
            {art.vendorTools && (
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-xs flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                  <Cpu size={12} className="text-purple-400" />
                  <span>{isEn ? "Vendor-Specific Advanced Tools:" : "أدوات مخصصة بالأجهزة:"}</span>
                </span>

                <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
                  {art.vendorTools.siemens && (
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/60">
                      Siemens: {art.vendorTools.siemens}
                    </span>
                  )}
                  {art.vendorTools.ge && (
                    <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                      GE: {art.vendorTools.ge}
                    </span>
                  )}
                  {art.vendorTools.philips && (
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                      Philips: {art.vendorTools.philips}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageModal(null)}
        >
          <div className="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-amber-300">
                {selectedImageModal.title}
              </h4>
              <button 
                onClick={() => setSelectedImageModal(null)}
                className="text-slate-400 hover:text-white px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold"
              >
                ✕ {isEn ? "Close" : "إغلاق"}
              </button>
            </div>
            <img 
              src={selectedImageModal.image} 
              alt={selectedImageModal.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
