import React, { useState } from 'react';
import { 
  ShieldAlert, ShieldCheck, HeartPulse, AlertTriangle, 
  HelpCircle, CheckCircle2, ChevronRight, Droplet, Activity 
} from 'lucide-react';
import { 
  ACR_CONTRAST_GROUPS, 
  evaluateContrastSafety, 
  MRI_RF_SAFETY_RULES 
} from '../../data/mriSafetyData';

export const MriSafetyCalculator = ({ language = 'ar' }) => {
  const isEn = language === 'en';

  const [egfrInput, setEgfrInput] = useState('45');
  const [selectedGroup, setSelectedGroup] = useState('group_2');
  const [patientWeight, setPatientWeight] = useState('70');

  const safetyResult = evaluateContrastSafety(egfrInput, selectedGroup);

  // Standard Gadolinium Volume Calculation
  // Standard dose: 0.1 mmol/kg (0.2 mL/kg for 0.5M agents like Dotarem, 0.1 mL/kg for 1.0M Gadovist)
  const weight = parseFloat(patientWeight) || 70;
  const standardVolDotarem = (weight * 0.2).toFixed(1); // 0.5M
  const standardVolGadovist = (weight * 0.1).toFixed(1); // 1.0M
  const primovistVol = (weight * 0.1).toFixed(1); // 0.25M

  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl p-5 md:p-6 shadow-2xl border border-slate-800 space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <ShieldAlert size={22} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-wide">
              {isEn ? "MRI Safety & Contrast Decision Engine" : "شجرة قرارات السلامة والصبغات (MRI Safety & Contrast Engine)"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isEn 
                ? "ACR Guidance on Gadolinium contrast media, NSF risk calculator, and SAR vs B1+rms limits" 
                : "معايير الكلية الأمريكية للأشعة ACR لحساب أمان الجادولينيوم ومخاطر NSF وحدود SAR والغرسات"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-xl">
          <span>{isEn ? "ACR Manual on Contrast Media" : "معتمد وفق إرشادات ACR"}</span>
        </div>
      </div>

      {/* Part 1: Interactive Contrast Safety & NSF Risk Calculator */}
      <div className="bg-slate-900/80 rounded-3xl p-5 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Droplet size={16} className="text-cyan-400" />
            <span>{isEn ? "Gadolinium Contrast Media NSF Risk Calculator" : "حاسبة أمان صبغات الجادولينيوم ومخاطر تليف الكلى (NSF Risk)"}</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">
            eGFR: <strong className="text-cyan-300">{egfrInput} mL/min/1.73m²</strong>
          </span>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Input 1: eGFR */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {isEn ? "Patient eGFR (mL/min/1.73m²):" : "معدل ترشيح الكلى (eGFR):"}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="5"
                max="140"
                value={egfrInput}
                onChange={(e) => setEgfrInput(e.target.value)}
                className="w-full bg-slate-900 text-lg font-mono font-bold text-white border border-slate-700 rounded-xl px-3 py-2 outline-none focus:border-cyan-500 text-center"
              />
              <span className="text-xs font-mono text-slate-400">mL/min</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <button onClick={() => setEgfrInput('15')} className="hover:text-cyan-400">15 (Severe)</button>
              <button onClick={() => setEgfrInput('35')} className="hover:text-cyan-400">35 (Moderate)</button>
              <button onClick={() => setEgfrInput('60')} className="hover:text-cyan-400">60+ (Normal)</button>
            </div>
          </div>

          {/* Input 2: ACR Contrast Group */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {isEn ? "Contrast Agent Group (ACR):" : "فئة صبغة الجادولينيوم:"}
            </label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full bg-slate-900 text-xs font-mono font-bold text-white border border-slate-700 rounded-xl px-3 py-2.5 outline-none focus:border-cyan-500"
            >
              <option value="group_2">Group II: Dotarem / Gadovist (Macrocyclic - Standard)</option>
              <option value="group_1">Group I: Omniscan / Magnevist (High Risk)</option>
              <option value="group_3">Group III: Primovist / Eovist (Liver Specific)</option>
            </select>
            <span className="text-[10px] text-slate-400 block">
              {isEn ? "Group II is standard in Saudi Arabia" : "المجموعة الثانية هي المعيار المعتمد في مستشفيات المملكة"}
            </span>
          </div>

          {/* Input 3: Patient Weight & Dosage */}
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {isEn ? "Patient Weight (kg):" : "وزن المريض (كغم):"}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="20"
                max="200"
                value={patientWeight}
                onChange={(e) => setPatientWeight(e.target.value)}
                className="w-full bg-slate-900 text-lg font-mono font-bold text-white border border-slate-700 rounded-xl px-3 py-2 outline-none focus:border-cyan-500 text-center"
              />
              <span className="text-xs font-mono text-slate-400">kg</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-emerald-400 pt-0.5">
              <span>Dotarem: <strong>{standardVolDotarem} mL</strong></span>
              <span>Gadovist: <strong>{standardVolGadovist} mL</strong></span>
            </div>
          </div>

        </div>

        {/* Real-Time Clinical Recommendation Card */}
        {safetyResult && (
          <div 
            className="p-4 rounded-2xl border space-y-2 animate-in zoom-in-95 duration-200"
            style={{ 
              backgroundColor: `${safetyResult.color}15`, 
              borderColor: `${safetyResult.color}40` 
            }}
          >
            <div className="flex items-center justify-between">
              <span 
                className="px-3 py-1 rounded-full text-xs font-black font-mono tracking-wide"
                style={{ backgroundColor: safetyResult.color, color: '#020617' }}
              >
                {isEn ? safetyResult.badgeEn : safetyResult.badgeAr}
              </span>
              <span className="text-xs font-mono text-slate-300">
                {isEn ? "Recommendation Status" : "التوصية السريرية الفورية"}
              </span>
            </div>

            <p className="text-xs text-white leading-relaxed font-medium">
              {isEn ? safetyResult.recommendationEn : safetyResult.recommendationAr}
            </p>
          </div>
        )}
      </div>

      {/* Part 2: SAR vs B1+rms (Crucial for MR-Conditional Implants & Pacemakers) */}
      <div className="bg-slate-900/80 rounded-3xl p-5 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <HeartPulse size={18} className="text-rose-400" />
          <h3 className="text-sm font-bold text-white">
            {isEn ? MRI_RF_SAFETY_RULES.b1rmsGuide.titleEn : MRI_RF_SAFETY_RULES.b1rmsGuide.titleAr}
          </h3>
        </div>

        {/* Educational Pearl */}
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
          💡 {isEn ? MRI_RF_SAFETY_RULES.b1rmsGuide.pearlEn : MRI_RF_SAFETY_RULES.b1rmsGuide.pearlAr}
        </p>

        {/* SAR Limits Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {MRI_RF_SAFETY_RULES.sarLimits.map((mode, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">
                  {isEn ? mode.mode : mode.modeAr}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Body: {mode.wholeBodySar}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isEn ? mode.descriptionEn : mode.descriptionAr}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
