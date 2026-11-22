import React, { useState } from 'react';
import { 
  AlertTriangle, Wrench, Search, X, CheckCircle2, ShieldAlert, 
  Sparkles, Layers, Cpu, ArrowRight 
} from 'lucide-react';
import { MRI_ARTIFACTS, ARTIFACT_CATEGORIES } from '../../data/mriArtifactsData';

export const MriArtifactRescue = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
          <span>{filteredArtifacts.length} {isEn ? "Artifact Guides" : "دليلاً سريرياً"}</span>
        </div>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "🔍 Search artifact by clue or name (e.g. metal, wrap, ghosting, india ink, magic angle)..." : "🔍 ابحث عن العيب بالعلامة أو الاسم (مثال: معادن، التفاف، شبحية، زاوية سحرية، دهون)..."}
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
      <div className="space-y-4">
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
                <span>{isEn ? "3. Immediate Console Fix (What to do on the scanner)" : "3. حل الكونسول الفوري (الخطوات العملية على الجهاز)"}</span>
              </span>
              
              <ul className="space-y-1.5 text-xs text-slate-200">
                {(isEn ? art.immediateFix.en : art.immediateFix.ar).map((step, sIdx) => (
                  <li key={sIdx} className="leading-relaxed flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vendor Specific Solutions */}
            {art.vendorTools && (
              <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="font-bold text-slate-300">{isEn ? "Vendor Features:" : "الأدوات البرمجية للشركات:"}</span>
                <span className="bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                  <strong className="text-cyan-400">Siemens:</strong> {art.vendorTools.siemens}
                </span>
                <span className="bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                  <strong className="text-blue-400">GE:</strong> {art.vendorTools.ge}
                </span>
                <span className="bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                  <strong className="text-purple-400">Philips:</strong> {art.vendorTools.philips}
                </span>
              </div>
            )}

          </div>
        ))}

        {filteredArtifacts.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs">
            {isEn ? "No artifacts found matching your query." : "لم يتم العثور على عيوب تطابق بحثك."}
          </div>
        )}
      </div>

    </div>
  );
};
