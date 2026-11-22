import React, { useState } from 'react';
import { 
  Sliders, Gauge, Clock, Eye, Sparkles, RefreshCw, Zap, 
  HelpCircle, ChevronRight, Layers, Cpu, Compass, Search, X, Info
} from 'lucide-react';
import { 
  MRIMASTER_PHYSICS_PRESETS, 
  PHYSICS_CATEGORIES,
  calculateMriPhysics, 
  PHYSICS_EXPLANATIONS 
} from '../../data/mriPhysicsPresets';

export const MriPhysicsSimulator = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Active Preset state
  const defaultPreset = MRIMASTER_PHYSICS_PRESETS[0];
  const [selectedPresetId, setSelectedPresetId] = useState(defaultPreset.id);
  const [params, setParams] = useState({
    fov: defaultPreset.params.fov,
    matrixFreq: defaultPreset.params.matrixFreq,
    matrixPhase: defaultPreset.params.matrixPhase,
    sliceThk: defaultPreset.params.sliceThk,
    tr: defaultPreset.params.tr,
    te: defaultPreset.params.te,
    nex: defaultPreset.params.nex,
    bandwidth: defaultPreset.params.bandwidth,
    parallelFactor: defaultPreset.params.parallelFactor || 1,
    etl: defaultPreset.params.etl || 1,
  });

  // Filter presets
  const filteredPresets = MRIMASTER_PHYSICS_PRESETS.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    return matchesCat && (
      item.nameEn.toLowerCase().includes(q) ||
      item.nameAr.includes(q) ||
      item.descriptionEn.toLowerCase().includes(q) ||
      item.descriptionAr.includes(q)
    );
  });

  // Handle Preset Selection (Auto-load from MRI Master)
  const handleSelectPreset = (preset) => {
    setSelectedPresetId(preset.id);
    const p = preset.params;
    setParams({
      fov: p.fov,
      matrixFreq: p.matrixFreq,
      matrixPhase: p.matrixPhase,
      sliceThk: p.sliceThk,
      tr: p.tr,
      te: p.te,
      nex: p.nex,
      bandwidth: p.bandwidth,
      parallelFactor: p.parallelFactor || 1,
      etl: p.etl || 1,
    });
  };

  // Handle Parameter Slider Change
  const updateParam = (key, value) => {
    setParams(prev => ({ ...prev, [key]: Number(value) }));
  };

  // Calculate live physics outputs
  const pixelFreq = params.fov / params.matrixFreq;
  const pixelPhase = params.fov / params.matrixPhase;
  const voxelVolume = (pixelFreq * pixelPhase * params.sliceThk).toFixed(2);

  const baseVoxel = (220 / 256) * (220 / 256) * 4.0;
  const voxelRatio = Number(voxelVolume) / (baseVoxel || 1);
  const nexFactor = Math.sqrt(Math.max(1, params.nex));
  const bwFactor = Math.sqrt(130 / Math.max(10, params.bandwidth));
  const parallelPenalty = 1 / Math.sqrt(Math.max(1, params.parallelFactor));
  const snrRelative = Math.round(100 * voxelRatio * nexFactor * bwFactor * parallelPenalty);

  const totalLines = params.matrixPhase;
  const effectiveLines = totalLines / Math.max(1, params.etl);
  const totalSeconds = Math.round(((params.tr / 1000) * effectiveLines * params.nex) / Math.max(1, params.parallelFactor));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const scanTimeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const currentPreset = MRIMASTER_PHYSICS_PRESETS.find(p => p.id === selectedPresetId) || defaultPreset;

  // Determine SNR status badge color
  const getSnrBadge = (snr) => {
    if (snr >= 100) return { color: '#10b981', text: isEn ? 'OPTIMAL SNR' : 'إشارة ممتازة (Optimal)' };
    if (snr >= 65) return { color: '#06b6d4', text: isEn ? 'DIAGNOSTIC' : 'تشخيصي مقبول' };
    if (snr >= 40) return { color: '#f59e0b', text: isEn ? 'LOW SNR' : 'إشارة منخفضة' };
    return { color: '#ef4444', text: isEn ? 'UNACCEPTABLE NOISE' : 'ضوضاء غير مقبولة' };
  };

  const snrStatus = getSnrBadge(snrRelative);

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-5 md:p-6 shadow-2xl border border-slate-800 space-y-6 animate-in fade-in duration-300">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Sliders size={22} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-wide">
              {isEn ? "Interactive MRI Parameter Trade-Off Simulator" : "محاكي فيزياء ومفاضلة متغيرات الرنين (Console Physics)"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn 
                ? `${MRIMASTER_PHYSICS_PRESETS.length} Authentic Clinical Presets from mrimaster.com` 
                : `${MRIMASTER_PHYSICS_PRESETS.length} تسلسلاً سريرياً معتمداً من mrimaster للحسابات الرياضية المباشرة`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-3 py-1.5 rounded-xl">
          <Zap size={14} className="text-purple-400" />
          <span>{filteredPresets.length} {isEn ? "Sequences Available" : "تسلسلاً متاحاً"}</span>
        </div>
      </div>

      {/* 2. Sequence Search & Category Filter */}
      <div className="space-y-3">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "Search sequence (e.g. FLAIR, DWI, VIBE, Knee, MRCP, STIR)..." : "ابحث عن أي تسلسل (مثال: FLAIR, DWI, VIBE, الركبة, MRCP, STIR)..."}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 pr-10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
            dir="auto"
          />
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {Object.entries(PHYSICS_CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setSelectedCat(key)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold transition-all ${
                selectedCat === key
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-black'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? cat.en : cat.ar}
            </button>
          ))}
        </div>

        {/* Presets Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filteredPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedPresetId === preset.id
                  ? 'bg-purple-950 border-purple-500 text-purple-200 shadow-md shadow-purple-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {isEn ? preset.nameEn : preset.nameAr}
            </button>
          ))}
        </div>
      </div>

      {/* Active Preset Description Banner */}
      {currentPreset && (
        <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-3.5 text-xs flex items-center justify-between gap-3 text-slate-300">
          <p className="leading-relaxed flex items-center gap-2">
            <Info size={16} className="text-cyan-400 shrink-0" />
            <span>
              <strong className="text-purple-200">{isEn ? currentPreset.nameEn : currentPreset.nameAr}: </strong>
              {isEn ? currentPreset.descriptionEn : currentPreset.descriptionAr}
            </span>
          </p>
          <button
            onClick={() => handleSelectPreset(currentPreset)}
            className="flex items-center gap-1 text-[10px] font-mono text-purple-300 hover:text-white bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800 whitespace-nowrap"
            title="إعادة ضبط المتغيرات للقيم الأصلية"
          >
            <RefreshCw size={11} />
            <span>{isEn ? "Reset" : "إعادة ضبط"}</span>
          </button>
        </div>
      )}

      {/* 3. Real-Time Telemetry Dashboard (SNR, Resolution, Scan Time) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Relative SNR */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{isEn ? "RELATIVE SNR" : "نسبة الإشارة إلى الضوضاء"}</span>
            <Gauge size={15} className="text-emerald-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-mono">
              {snrRelative}%
            </span>
            <span 
              className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
              style={{ color: snrStatus.color, borderColor: `${snrStatus.color}40`, backgroundColor: `${snrStatus.color}15` }}
            >
              {snrStatus.text}
            </span>
          </div>

          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full transition-all duration-300 rounded-full"
              style={{ 
                width: `${Math.min(snrRelative, 200) / 2}%`,
                backgroundColor: snrStatus.color 
              }}
            />
          </div>

          <span className="text-[10px] text-slate-500 block font-mono">
            {isEn ? "Calibrated against 100% baseline standard" : "معايرة بالنسبة للمعيار المرجعي 100%"}
          </span>
        </div>

        {/* Metric 2: Spatial Resolution & Voxel Size */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{isEn ? "VOXEL VOLUME" : "حجم الفوكسل والدقة المكانية"}</span>
            <Layers size={15} className="text-cyan-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-cyan-300 font-mono">
              {voxelVolume}
            </span>
            <span className="text-xs text-slate-400 font-mono">mm³</span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
            <span>البكسل: <strong className="text-slate-200">{pixelFreq.toFixed(2)} × {pixelPhase.toFixed(2)} mm</strong></span>
            <span>السمك: <strong className="text-slate-200">{params.sliceThk} mm</strong></span>
          </div>

          <span className="text-[10px] text-slate-500 block font-mono">
            {Number(voxelVolume) < 1.0 
              ? (isEn ? "Ultra High Spatial Resolution" : "دقة تشريحية فائقة الحجم (< 1.0 mm³)") 
              : (isEn ? "Standard Clinical Resolution" : "دقة سريرية قياسية")}
          </span>
        </div>

        {/* Metric 3: Scan Time */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{isEn ? "ACQUISITION SCAN TIME" : "زمن التقاط الفحص"}</span>
            <Clock size={15} className="text-purple-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-purple-300 font-mono">
              {scanTimeFormatted}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ({totalSeconds}s)
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
            <span>ETL/Turbo: <strong className="text-slate-200">{params.etl}</strong></span>
            <span>PAT/Accel: <strong className="text-slate-200">{params.parallelFactor}x</strong></span>
          </div>

          <span className="text-[10px] text-slate-500 block font-mono">
            {isEn ? "Direct calculation based on phase steps and TR" : "حساب رياضي مباشر مبني على خطوات الطور والـ TR"}
          </span>
        </div>
      </div>

      {/* 4. Interactive Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Slider 1: FOV */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Field of View (FOV)" : "حقل الرؤية (FOV)"}</span>
            <span className="text-emerald-400 font-black">{params.fov} mm</span>
          </div>
          <input
            type="range"
            min="100"
            max="480"
            step="10"
            value={params.fov}
            onChange={(e) => updateParam('fov', e.target.value)}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Slider 2: Phase Matrix */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Phase Matrix" : "مصفوفة الطور (Phase Matrix)"}</span>
            <span className="text-purple-400 font-black">{params.matrixPhase} px</span>
          </div>
          <input
            type="range"
            min="128"
            max="512"
            step="16"
            value={params.matrixPhase}
            onChange={(e) => updateParam('matrixPhase', e.target.value)}
            className="w-full accent-purple-500 cursor-pointer"
          />
        </div>

        {/* Slider 3: Slice Thickness */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Slice Thickness" : "سماكة الشريحة (Slice Thickness)"}</span>
            <span className="text-cyan-400 font-black">{params.sliceThk} mm</span>
          </div>
          <input
            type="range"
            min="0.8"
            max="10.0"
            step="0.2"
            value={params.sliceThk}
            onChange={(e) => updateParam('sliceThk', e.target.value)}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        {/* Slider 4: TR */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Repetition Time (TR)" : "زمن التكرار (TR)"}</span>
            <span className="text-amber-400 font-black">{params.tr} ms</span>
          </div>
          <input
            type="range"
            min="3"
            max="9000"
            step="10"
            value={params.tr}
            onChange={(e) => updateParam('tr', e.target.value)}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* Slider 5: NEX / NSA */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Number of Averages (NEX / NSA)" : "مرات جمع الإشارة (NEX)"}</span>
            <span className="text-amber-300 font-black">{params.nex} NEX</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={params.nex}
            onChange={(e) => updateParam('nex', e.target.value)}
            className="w-full accent-amber-400 cursor-pointer"
          />
        </div>

        {/* Slider 6: Receiver Bandwidth */}
        <div className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">{isEn ? "Receiver Bandwidth (rBW)" : "نطاق استقبال التردد (Bandwidth)"}</span>
            <span className="text-emerald-300 font-black">{params.bandwidth} Hz/px</span>
          </div>
          <input
            type="range"
            min="50"
            max="1200"
            step="25"
            value={params.bandwidth}
            onChange={(e) => updateParam('bandwidth', e.target.value)}
            className="w-full accent-emerald-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
