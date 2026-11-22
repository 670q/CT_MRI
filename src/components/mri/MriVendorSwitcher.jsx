import React, { useState } from 'react';
import { 
  Search, RefreshCw, X, Filter, Cpu, Check, Layers, ArrowRight, ExternalLink 
} from 'lucide-react';
import { VENDOR_ACRONYMS, VENDOR_CATEGORIES } from '../../data/mriVendorMap';

export const MriVendorSwitcher = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAcronyms = VENDOR_ACRONYMS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;

    const matchesSearch = 
      item.generic.toLowerCase().includes(q) ||
      (item.genericAr && item.genericAr.includes(q)) ||
      item.siemens.toLowerCase().includes(q) ||
      item.ge.toLowerCase().includes(q) ||
      item.philips.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-5 md:p-6 shadow-2xl border border-slate-800 space-y-5 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Cpu size={22} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-wide">
              {isEn ? "Cross-Vendor Sequence Mapper" : "محول مصطلحات وتسلسلات الرنين بين الشركات الثلاث"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn 
                ? "Direct translation across Siemens Healthineers, GE Healthcare, and Philips Healthcare" 
                : "مطابقة وترجمة أسماء التسلسلات بين سيمنز، جي إي، وفيليبس وفق مرجع mrimaster.com"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-3 py-1.5 rounded-xl">
          <span>{filteredAcronyms.length} {isEn ? "Acronym Mappings" : "مصطلحاً معتمداً"}</span>
        </div>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "🔍 Search acronym (e.g. HASTE, FSE, VIBE, LAVA, SWI, PROPELLER)..." : "🔍 ابحث عن أي تسلسل (مثال: HASTE, FSE, VIBE, LAVA, SWI, PROPELLER)..."}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 pr-11 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
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
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {isEn ? "All Sequences" : "كافة التسلسلات"}
          </button>

          {Object.entries(VENDOR_CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? cat.en : cat.ar}
            </button>
          ))}
        </div>
      </div>

      {/* Cross-Vendor Results Table / Cards */}
      <div className="space-y-3">
        {filteredAcronyms.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 rounded-2xl border border-slate-800/80 p-4 hover:border-indigo-500/40 transition-all space-y-3"
          >
            {/* Generic Heading & Category */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono">●</span>
                  <span>{item.generic}</span>
                  {item.genericAr && (
                    <span className="text-xs text-slate-400 font-normal">
                      ({item.genericAr})
                    </span>
                  )}
                </h4>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                {VENDOR_CATEGORIES[item.category]?.[isEn ? 'en' : 'ar'] || item.category}
              </span>
            </div>

            {/* 3 Vendor Comparison Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              
              {/* Siemens */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 space-y-1">
                <span className="text-[10px] text-cyan-400 font-bold block">
                  SIEMENS HEALTHINEERS
                </span>
                <strong className="text-sm text-cyan-200 block truncate">
                  {item.siemens}
                </strong>
              </div>

              {/* GE */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 space-y-1">
                <span className="text-[10px] text-blue-400 font-bold block">
                  GE HEALTHCARE
                </span>
                <strong className="text-sm text-blue-200 block truncate">
                  {item.ge}
                </strong>
              </div>

              {/* Philips */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 space-y-1">
                <span className="text-[10px] text-purple-400 font-bold block">
                  PHILIPS HEALTHCARE
                </span>
                <strong className="text-sm text-purple-200 block truncate">
                  {item.philips}
                </strong>
              </div>

            </div>

            {/* Clinical Explanation */}
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              {isEn ? item.descriptionEn : item.descriptionAr}
            </p>
          </div>
        ))}

        {filteredAcronyms.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs">
            {isEn ? "No sequence acronyms found matching your query." : "لم يتم العثور على مصطلح يطابق بحثك."}
          </div>
        )}
      </div>

    </div>
  );
};
