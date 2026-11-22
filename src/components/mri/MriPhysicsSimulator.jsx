import React, { useState } from 'react';
import { 
  Sliders, Gauge, Clock, Eye, Sparkles, RefreshCw, Zap, 
  HelpCircle, ChevronRight, Layers, Cpu, Compass
} from 'lucide-react';
import { 
  MRIMASTER_PHYSICS_PRESETS, 
  calculateMriPhysics, 
  PHYSICS_EXPLANATIONS 
} from '../../data/mriPhysicsPresets';

export const MriPhysicsSimulator = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  // Active Preset state
  const [selectedPresetId, setSelectedPresetId] = useState('brain_t2_fse');

  // Sliders state (initialized with Brain T2 FSE preset)
  const initialPreset = MRIMASTER_PHYSICS_PRESETS.find(p => p.id === 'brain_t2_fse') || MRIMASTER_PHYSICS_PRESETS[0];
  const [params, setParams] = useState(initialPreset.params);

  // Active physics highlight explanation
  const [activeExplainKey, setActiveExplainKey] = useState('matrix');

  // Handle Preset Selection (Auto-load from MRI Master)
  const handleSelectPreset = (presetId) => {
    setSelectedPresetId(presetId);
    const found = MRIMASTER_PHYSICS_PRESETS.find(p => p.id === presetId);
    if (found) {
      setParams({ ...found.params });
    }
  };

  // Handle Parameter Slider Change
  const updateParam = (key, value) => {
    setParams(prev => ({ ...prev, [key]: Number(value) }));
    if (['fov', 'matrixPhase', 'matrixFreq'].includes(key)) setActiveExplainKey('matrix');
    else if (key === 'sliceThk') setActiveExplainKey('sliceThk');
    else if (key === 'nex') setActiveExplainKey('nex');
    else if (key === 'bandwidth') setActiveExplainKey('bandwidth');
    else if (key === 'parallelFactor') setActiveExplainKey('parallel');
  };

  // Calculate live physics outputs
  const physics = calculateMriPhysics(params);
  const currentPreset = MRIMASTER_PHYSICS_PRESETS.find(p => p.id === selectedPresetId);

  // Determine SNR status badge color
  const getSnrBadge = (snr) => {
    if (snr >= 100) return { color: '#10b981', text: isEn ? 'OPTIMAL' : 'مثالي (ممتاز)' };
    if (snr >= 65) return { color: '#06b6d4', text: isEn ? 'DIAGNOSTIC' : 'تشخيصي مقبول' };
    if (snr >= 40) return { color: '#f59e0b', text: isEn ? 'LOW SNR / GRAINY' : 'إشارة منخفضة (محبب)' };
    return { color: '#ef4444', text: isEn ? 'UNACCEPTABLE NOISE' : 'ضوضاء غير مقبولة' };
  };

  const snrStatus = getSnrBadge(physics.relativeSnr);

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-5 md:p-6 shadow-2xl border border-slate-800 space-y-6 animate-in fade-in duration-300">
      
      {/* 1. Header & Preset Selector (Auto-Load from MRI Master) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Sliders size={22} className="animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-wide">
                {isEn ? "Interactive MRI Parameter Trade-Off Simulator" : "محاكي فيزياء ومفاضلة متغيرات الرنين (Console Physics)"}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEn 
                  ? "Real-time mathematical console engine calculating SNR, Voxel Volume, and Scan Time" 
                  : "محرك كونسول رياضي لحظي لحساب نسبة الإشارة، حجم الفوكسل، وزمن الفحص"}
              </p>
            </div>
          </div>
        </div>

        {/* Auto-Load from MRI Master Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 px-2">
            <Zap size={14} />
            <span>{isEn ? "Auto-Load Presets (mrimaster):" : "تحميل تلقائي من mrimaster:"}</span>
          </span>

          <select
            value={selectedPresetId}
            onChange={(e) => handleSelectPreset(e.target.value)}
            className="bg-slate-950 text-xs font-mono font-bold text-white border border-slate-700 rounded-xl px-3 py-2 outline-none focus:border-purple-500 transition-colors cursor-pointer"
          >
            {MRIMASTER_PHYSICS_PRESETS.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {isEn ? preset.nameEn : preset.nameAr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preset Description Banner */}
      {currentPreset && (
        <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-3 text-xs flex items-center justify-between gap-3 text-slate-300">
          <p className="leading-relaxed">
            💡 <strong className="text-purple-200">{isEn ? currentPreset.nameEn : currentPreset.nameAr}: </strong>
            {isEn ? currentPreset.descriptionEn : currentPreset.descriptionAr}
          </p>
          <button
            onClick={() => handleSelectPreset(selectedPresetId)}
            className="flex items-center gap-1 text-[10px] font-mono text-purple-300 hover:text-white bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 whitespace-nowrap"
            title="إعادة ضبط المتغيرات للقيم الأصلية"
          >
            <RefreshCw size={11} />
            <span>{isEn ? "Reset" : "إعادة ضبط"}</span>
          </button>
        </div>
      )}

      {/* 2. Real-Time Output Dashboard (SNR, Resolution, Scan Time) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Metric 1: Relative SNR */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{isEn ? "RELATIVE SNR" : "نسبة الإشارة إلى الضوضاء"}</span>
            <Gauge size={15} className="text-emerald-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-mono">
              {physics.relativeSnr}%
            </span>
            <span 
              className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
              style={{ color: snrStatus.color, borderColor: `${snrStatus.color}40`, backgroundColor: `${snrStatus.color}15` }}
            >
              {snrStatus.text}
            </span>
          </div>

          {/* Progress bar visual */}
          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full transition-all duration-300 rounded-full"
              style={{ 
                width: `${Math.min(physics.relativeSnr, 200) / 2}%`,
                backgroundColor: snrStatus.color 
              }}
            />
          </div>

          <span className="text-[10px] text-slate-500 block">
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
              {physics.voxelVolume}
            </span>
            <span className="text-xs text-slate-400 font-mono">mm³</span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
            <span>البكسل: <strong className="text-slate-200">{physics.pixelX} × {physics.pixelY} mm</strong></span>
            <span>السمك: <strong className="text-slate-200">{params.sliceThk} mm</strong></span>
          </div>

          <span className="text-[10px] text-slate-500 block">
            {physics.voxelVolume < 1.0 
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
              {physics.scanTimeFormatted}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ({physics.totalSeconds}s)
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
            <span>NEX: <strong className="text-slate-200">{params.nex}</strong></span>
            <span>ETL: <strong className="text-slate-200">{params.etl || 1}</strong></span>
            <span>R: <strong className="text-slate-200">{params.parallelFactor || 1}x</strong></span>
          </div>

          <span className="text-[10px] text-slate-500 block">
            {physics.totalSeconds < 30 
              ? (isEn ? "Breath-Hold Fast Protocol" : "سرعة مناسبة لكتم النفس (< 30s)") 
              : (isEn ? "Standard Multislice Acquisition" : "تسلسل روتيني متعدد الشرائح")}
          </span>
        </div>

      </div>

      {/* 3. Interactive Console Sliders Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        
        {/* Slider 1: Field of View (FOV) */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">حقل الرؤية (FOV)</span>
            <span className="font-mono text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.fov} mm
            </span>
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
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>100mm (مفصل صغير)</span>
            <span>480mm (بطن كامل)</span>
          </div>
        </div>

        {/* Slider 2: Phase Matrix */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">مصفوفة الطور (Phase Matrix)</span>
            <span className="font-mono text-purple-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.matrixPhase} px
            </span>
          </div>
          <input
            type="range"
            min="64"
            max="512"
            step="32"
            value={params.matrixPhase}
            onChange={(e) => updateParam('matrixPhase', e.target.value)}
            className="w-full accent-purple-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>64 (سريع/إشارة عالية)</span>
            <span>512 (دقة فائقة/وقت أطول)</span>
          </div>
        </div>

        {/* Slider 3: Slice Thickness */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">سمك الشريحة (Slice Thickness)</span>
            <span className="font-mono text-cyan-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.sliceThk} mm
            </span>
          </div>
          <input
            type="range"
            min="1.0"
            max="10.0"
            step="0.5"
            value={params.sliceThk}
            onChange={(e) => updateParam('sliceThk', e.target.value)}
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>1.0mm (شريحة رقيقة)</span>
            <span>10.0mm (شريحة سميكة)</span>
          </div>
        </div>

        {/* Slider 4: NEX / NSA (Averages) */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">عدد التكرارات (NEX / NSA)</span>
            <span className="font-mono text-amber-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.nex} NEX
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={params.nex}
            onChange={(e) => updateParam('nex', e.target.value)}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>1 (أسرع زمن)</span>
            <span>6 (إشارة مضاعفة √NEX)</span>
          </div>
        </div>

        {/* Slider 5: Receiver Bandwidth */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">نطاق الاستقبال (Bandwidth)</span>
            <span className="font-mono text-rose-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.bandwidth} Hz/Px
            </span>
          </div>
          <input
            type="range"
            min="80"
            max="800"
            step="20"
            value={params.bandwidth}
            onChange={(e) => updateParam('bandwidth', e.target.value)}
            className="w-full accent-rose-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>80 (إشارة أعلى/عيوب دهن)</span>
            <span>800 (تقليل عيوب المعادن)</span>
          </div>
        </div>

        {/* Slider 6: Parallel Imaging Factor (R) */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300">التصوير المتوازي (GRAPPA / SENSE)</span>
            <span className="font-mono text-indigo-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {params.parallelFactor}x Factor
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="3"
            step="1"
            value={params.parallelFactor}
            onChange={(e) => updateParam('parallelFactor', e.target.value)}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>1x (بدون تسريع)</span>
            <span>3x (ثلث زمن الفحص)</span>
          </div>
        </div>

      </div>

      {/* 4. Board Physics Clinical Explanation Box */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-white">
          <Sparkles size={16} className="text-amber-400" />
          <span>{isEn ? "Board Physics Principle & Clinical Rationale" : "القاعدة الفيزيائية للبورد والتفسير السريري:"}</span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {isEn ? PHYSICS_EXPLANATIONS[activeExplainKey].en : PHYSICS_EXPLANATIONS[activeExplainKey].ar}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {Object.keys(PHYSICS_EXPLANATIONS).map((key) => (
            <button
              key={key}
              onClick={() => setActiveExplainKey(key)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                activeExplainKey === key
                  ? 'bg-purple-600 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
