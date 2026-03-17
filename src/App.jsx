import React, { useState, useEffect } from 'react';
import { Activity, Database, Info, Settings, Syringe, User, XCircle, Share, Download, Wifi, WifiOff, Smartphone, Calculator, Magnet, Layers, AlertCircle } from 'lucide-react';

const MedicalProtocolsApp = () => {
  // Mode: 'ct' or 'mri'
  const [activeMode, setActiveMode] = useState('ct');
  const [selectedPart, setSelectedPart] = useState(null);
  
  // PWA States
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // --- PWA & Offline Logic ---
  useEffect(() => {
    const handleStatusChange = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIosDevice);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    });

    setupPWAEnvironment();
    registerServiceWorker();

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [activeMode]); // Re-run when mode changes to update theme color

  const setupPWAEnvironment = () => {
    const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="${activeMode === 'ct' ? '%232563eb' : '%237c3aed'}"><rect x="0" y="0" width="512" height="512" rx="100" fill="white"/><path d="M368 224H288V144H224V224H144V288H224V368H288V288H368V224Z" fill="${activeMode === 'ct' ? '%232563eb' : '%237c3aed'}"/></svg>`;
    const iconUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(iconSvg)}`;

    // Update Meta Tags
    const metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'theme-color', content: activeMode === 'ct' ? '#2563eb' : '#7c3aed' },
      { name: 'apple-mobile-web-app-title', content: 'مستشفى خميس مشيط' },
    ];

    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Update Links
    const linkRel = ['icon', 'apple-touch-icon'];
    linkRel.forEach(rel => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = iconUrl;
    });

    // Inject/Update Manifest
    const manifest = {
      name: "مستشفى خميس مشيط المدني",
      short_name: "مستشفى خميس مشيط",
      start_url: ".",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: activeMode === 'ct' ? '#2563eb' : '#7c3aed',
      icons: [{ src: iconUrl, sizes: "512x512", type: "image/svg+xml" }]
    };
    
    const stringManifest = JSON.stringify(manifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    
    let manifestLink = document.querySelector('#dynamic-manifest');
    if (!manifestLink) {
      manifestLink = document.createElement('link');
      manifestLink.id = 'dynamic-manifest';
      manifestLink.rel = 'manifest';
      document.head.appendChild(manifestLink);
    }
    manifestLink.href = manifestURL;
  };

  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      const swCode = `
        const CACHE_NAME = 'khamis-mushait-protocols-v7';
        self.addEventListener('install', (event) => {
          self.skipWaiting();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.addAll(['./', window.location.href]);
            })
          );
        });
        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request).then((response) => {
              return response || fetch(event.request);
            })
          );
        });
      `;
      const blob = new Blob([swCode], {type: 'text/javascript'});
      const swUrl = URL.createObjectURL(blob);
      navigator.serviceWorker.register(swUrl).catch(() => {});
    }
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      });
    }
  };
  // --- End PWA Logic ---

  // --- CT DATA ---
  const ctProtocols = {
    head: {
      title: "الرأس والدماغ (CT Brain)",
      exams: [
        {
          name: "Brain Angiogram",
          source: "ملفات حنين",
          position: "Head First",
          center: "منتصف الصدر تقريباً (Middle of chest)",
          contrast: true,
          steps: [
            "اختر بروتوكول Brain Routine وزد End إلى 500.",
            "Scan Range: من أعلى الرأس (Vertex) إلى أسفل قوس الأبهر (Aorta Arch).",
            "أضف GG-Hel وحوله من P إلى A.",
            "التوقيت: Arterial = 18s | Venous = 70s (إذا طلب).",
          ],
          injector: { flow: "5.0", volume: "100", note: "الكمية تعتمد على وزن المريض" }
        },
        {
          name: "Pan CT (Head Part)",
          source: "ملفات حنين",
          position: "Head First",
          center: "Mid thigh",
          contrast: false,
          steps: [
            "بروتوكول: Brain Routine.",
            "End: 1000 أو 1100.",
            "التخطيط والمسح الأول: من الكلمة (Vertex) إلى أسفل الرأس (Occipital).",
            "بعد انتهاء المسح اختر Quit Exam للانتقال للفقرات العنقيه."
          ],
          notes: [
            "Normal creatine: 0.6 to 1.3",
            "إذا كان الكرياتينين مرتفع: تواصل مع الطبيب ويجب توقيع المريض لورقة High risk",
            "إذا كان مريض ربو وحساسية: يعطى كورتيزون من قبل الممرض"
          ]
        }
      ]
    },
    neck: {
      title: "الرقبة (CT Neck/Cervical)",
      exams: [
        {
          name: "Pan CT (Cervical Spine Part)",
          source: "ملفات حنين",
          contrast: false,
          steps: [
            "بعد الانتهاء من تصوير الرأس واختيار Quit exam، نعود للبحث.",
            "اختر بروتوكول Cervical spin.",
            "قم بالتخطيط والتأكد من تغطية الفقرات المطلوبة.",
            "قم بالمسح (Scan) ثم اختر Quit exam للانتقال لتصوير البطن.",
            "ملاحظة: البروتوكول يحتوي على وقت انتظار 70 ثانية جاهز للصبغة."
          ]
        }
      ]
    },
    chest: {
      title: "الصدر (CT Chest)",
      exams: [
        {
          name: "PE (Pulmonary Embolism)",
          source: "ملفات حنين",
          position: "Feet First",
          center: "Inner line on Neck (The inner line rests in the neck)",
          contrast: true,
          steps: [
            "اختر بروتوكول: Chest.",
            "أضف مرتين GG-Hel للتخطيط.",
            "الـ GG-Hel الثانية: الوقت 13 ثانية.",
            "نبدأ وناخذ الـ Scan الأول.",
            "التخطيط: من قمة الرئة (Apex) إلى الحجاب الحاجز (Diaphragm).",
            "نعدل الـ Multi view للصور الناتجة:",
            "Axial 1: نتركه كما هو (Standard).",
            "Axial 2: نجعله (Body) ونعدل السماكة (Thickness) إلى 1."
          ],
          injector: { flow: "5.0", volume: "120" }
        }
      ]
    },
    abdomen: {
      title: "البطن والحوض (CT Abdomen/Pelvis)",
      exams: [
        {
          name: "Tri-Phase (Liver)",
          source: "ملفات حنين",
          position: "Feet First",
          center: "Mid of chest",
          contrast: true,
          steps: [
            "بروتوكول: Abdominal (-).",
            "أضف GG-Hel وحوله من P إلى A.",
            "المراحل:",
            "Arterial (25s)",
            "Venous (70s)",
            "Delayed (3 minutes)"
          ],
          injector: { flow: "4.5", volume: "100" }
        },
        {
          name: "Renal Cases",
          source: "ملفات حنين",
          position: "Feet First",
          center: "Mid of chest",
          contrast: true,
          steps: [
            "بروتوكول: Abdominal (-).",
            "أضف GG-Hel وحوله من P إلى A.",
            "المراحل:",
            "Arterial (25s)",
            "Venous (70s)",
            "Delayed (15 minutes)"
          ],
          injector: { flow: "4.5", volume: "100" }
        },
        {
          name: "Pan CT (Abdomen Part)",
          source: "ملفات حنين",
          contrast: true,
          steps: [
            "بروتوكول: Abdominal with contrast.",
            "التخطيط: من فوق الأكتاف (Above shoulders) إلى أسفل العانة (Pubic symphysis).",
            "يوجد Wait جاهز (70 ثانية)."
          ],
          injector: { flow: "3.5", volume: "100", note: "تدفق مخفض لحالات Pan CT (مثلاً 3.5 بدلاً عن المعتاد)" }
        }
      ]
    },
    limbs: {
      title: "الأطراف (CT Limbs)",
      exams: [
        {
          name: "Upper Limbs (Hands, Forearm, Elbow, Humerus, Shoulders)",
          source: "ملفات حنين",
          position: "Head First",
          center: "قبل العضو المطلوب بالـ Inner Line",
          contrast: false,
          steps: [
            "اختر البروتوكول المطلوب (مثلاً Hand Left).",
            "السنتر يكون قبل العضو المطلوب.",
            "التصوير يكون على العضو المطلوب بالكامل.",
            "يطلب عادة في الأطراف صور 3D."
          ]
        },
        {
          name: "Lower Limbs (Feet, Legs, Knees, Femoral)",
          source: "ملفات حنين",
          position: "Feet First",
          center: "قبل العضو المطلوب بالـ Inner Line",
          contrast: false,
          steps: [
            "اختر البروتوكول المطلوب (مثلاً Foot Left).",
            "السنتر يكون قبل العضو المطلوب.",
            "التصوير يكون على العضو المطلوب بالكامل.",
            "يطلب عادة في الأطراف صور 3D."
          ]
        }
      ]
    }
  };

  // --- MRI DATA (Analyzed from Videos) ---
  const mriProtocols = {
    spine: {
      title: "العمود الفقري (MRI Spine)",
      exams: [
        {
          name: "Lumbar Spine (الفقرات القطنية)",
          source: "تحليل فيديو سيمنز",
          position: "Head First - Supine",
          coil: "Spine Coil (Built-in table)",
          contrast: false,
          steps: [
            { title: "تسجيل المريض (Registration)", details: [
              "ابحث عن ID المريض وتأكد من الاسم.",
              "هام جداً: يجب إدخال الطول (Height) والوزن (Weight). الجهاز لن يبدأ بدونهما (لحساب SAR).",
              "حدد الوضعية: Head First - Supine.",
              "اضغط Exam لتحميل البروتوكول."
            ]},
            { title: "اختيار البروتوكول (Protocol Selection)", details: [
              "من Patient Browser اختر Study.",
              "الجهاز يقوم بتحميل السيكونسات (Sequences) تلقائياً.",
              "السيكونسات الأساسية (عادة 5): Sagittal T2, T1, STIR, و Axial T2.",
              "حذف الزائد: قم بتحديد أي سيكونس 'Optional' واضغط كليك يمين -> Delete/Cut."
            ]},
            { title: "التخطيط والمسح (Planning & Scanning)", details: [
              "اضغط GO. الجهاز غالباً يقوم بالتخطيط التلقائي (Auto Align).",
              "التأكد من التغطية: تأكد أن المربع الأصفر يغطي الفقرات القطنية كاملة.",
              "إزالة الـ Artifacts: ابعد الـ Saturation Bands عن منطقة الاهتمام اذا كانت تغطيها.",
              "وقت الفحص: كل سيكونس يأخذ حوالي 2-4 دقائق.",
              "التخطيط المحوري (Axial): يخطط على الديسكات (Discs) من صور الـ Sagittal."
            ]},
            { title: "الأرشفة (Archiving)", details: [
              "بعد اكتمال الفحص، اختر السلسلة (Series) المطلوبة.",
              "لا ترسل صور الـ Scout (Localizer) عادة.",
              "اضغط Transfer/Send to Archive (PACS)."
            ]}
          ],
          notes: [
            "تأكد من إزالة أي معادن مع المريض.",
            "إذا كان الفحص Lumbar فقط، تأكد من إزالة العلامة عن الفقرات الصدرية اذا ظهرت في التخطيط التلقائي."
          ]
        }
      ]
    }
  };

  // --- Components ---

  const ModeSwitcher = () => (
    <div className="flex bg-gray-100 p-1 rounded-xl mb-6 shadow-inner mx-4 sm:mx-0">
      <button 
        onClick={() => { setActiveMode('ct'); setSelectedPart(null); }}
        className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeMode === 'ct' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
      >
        <Activity size={18} /> الأشعة المقطعية (CT)
      </button>
      <button 
        onClick={() => { setActiveMode('mri'); setSelectedPart(null); }}
        className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${activeMode === 'mri' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
      >
        <Magnet size={18} /> الرنين المغناطيسي (MRI)
      </button>
    </div>
  );

  const InjectorSettings = ({ defaultVolume, defaultFlow, note }) => {
    const [weight, setWeight] = useState('');
    const getCalculatedValues = () => {
      if (!weight || isNaN(weight)) return { vol: defaultVolume || "100", flow: defaultFlow || "N/A" };
      const w = parseFloat(weight);
      let calcVol = Math.round(w * 1.5);
      if (calcVol > 150) calcVol = 150; if (calcVol < 20) calcVol = 20;
      let calcFlow = parseFloat(defaultFlow);
      if (w < 30) { calcFlow = 1.5 + (w * 0.05); if (calcFlow > 3.0) calcFlow = 3.0; }
      return { vol: calcVol, flow: isNaN(calcFlow) ? defaultFlow : calcFlow.toFixed(1) };
    };
    const { vol, flow } = getCalculatedValues();

    return (
      <div className={`p-5 rounded-xl border shadow-sm mt-4 ${activeMode === 'ct' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'}`}>
        <h4 className={`font-bold mb-4 flex items-center justify-center text-lg ${activeMode === 'ct' ? 'text-blue-900' : 'text-purple-900'}`}>
           <Syringe size={20} className="ml-2" /> إعدادات الحقن (Injector):
        </h4>
        <div className="mb-4 flex justify-center">
           <div className="relative w-full max-w-[200px]">
             <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full text-center bg-white border rounded-full px-4 py-1 text-sm outline-none focus:ring-2 transition-all" />
             {!weight && <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-400 text-xs whitespace-nowrap"><Calculator size={12} className="ml-1" /> أدخل الوزن (kg) (اختياري)</div>}
           </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-center min-w-[110px]">
            <span className="text-gray-500 text-xs font-medium block mb-0.5">Volume</span>
            <div className={`font-bold text-xl dir-ltr flex items-center justify-center gap-1 ${activeMode === 'ct' ? 'text-blue-600' : 'text-purple-600'}`}>
              <span className="text-lg">ml</span><span className="text-2xl">{vol}</span>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-center min-w-[110px]">
             <span className="text-gray-500 text-xs font-medium block mb-0.5">Flow Rate</span>
             <div className={`font-bold text-2xl dir-ltr ${activeMode === 'ct' ? 'text-blue-600' : 'text-purple-600'}`}>{flow}</div>
          </div>
        </div>
        {note && <div className={`mt-4 pt-2 border-t text-xs text-center px-4 ${activeMode === 'ct' ? 'border-blue-200/30 text-blue-800' : 'border-purple-200/30 text-purple-800'}`}>{note}</div>}
      </div>
    );
  };

  const ProtocolCard = ({ data }) => {
    if (!data) return (
      <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
        {activeMode === 'ct' ? <Activity size={48} className="mb-4 text-blue-300" /> : <Magnet size={48} className="mb-4 text-purple-300" />}
        <p className="text-xl font-medium text-center">اختر الفحص المطلوب</p>
        <p className="text-sm mt-2 text-center text-gray-500">اضغط على المنطقة في الجسم لعرض التفاصيل</p>
      </div>
    );

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className={`p-4 text-white relative bg-gradient-to-l ${activeMode === 'ct' ? 'from-blue-600 to-blue-800' : 'from-purple-600 to-purple-800'}`}>
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <button onClick={() => setSelectedPart(null)} className="absolute left-4 top-4 text-white/80 hover:text-white lg:hidden">✕ إغلاق</button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          {data.exams.map((exam, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-5 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4 border-b pb-2 border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Database size={20} className={activeMode === 'ct' ? 'text-blue-600' : 'text-purple-600'} />
                    {exam.name}
                  </h3>
                  <span className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded mt-1 inline-block">المصدر: {exam.source}</span>
                </div>
                {exam.contrast ? 
                  <span className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap"><Syringe size={16} /> مع صبغة</span> : 
                  <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap"><XCircle size={16} /> بدون صبغة</span>
                }
              </div>

              {/* Position & Coil Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded border border-slate-100">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Position</span>
                  <div className="flex items-center gap-2 font-medium text-slate-700"><User size={18} /> {exam.position || "غير محدد"}</div>
                </div>
                {activeMode === 'ct' ? (
                   <div className="bg-white p-3 rounded border border-slate-100">
                     <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Center / Laser</span>
                     <div className="flex items-center gap-2 font-medium text-slate-700"><Info size={18} /> {exam.center || "غير محدد"}</div>
                   </div>
                ) : (
                   <div className="bg-white p-3 rounded border border-slate-100">
                     <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Coil</span>
                     <div className="flex items-center gap-2 font-medium text-slate-700"><Layers size={18} /> {exam.coil || "Body Coil"}</div>
                   </div>
                )}
              </div>

              {/* Steps */}
              <div className="mb-4">
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Settings size={18} /> الخطوات والبروتوكول:</h4>
                <div className="space-y-3 mr-2">
                  {/* Handling simple string steps (CT) vs Complex Object steps (MRI) */}
                  {exam.steps.map((step, sIdx) => {
                    if (typeof step === 'string') {
                      return (
                        <div key={sIdx} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeMode === 'ct' ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
                          <span>{step}</span>
                        </div>
                      );
                    } else {
                      // MRI Complex Steps
                      return (
                        <div key={sIdx} className="bg-white p-3 rounded-lg border border-slate-100 mb-2">
                          <strong className={`block mb-1 text-sm ${activeMode === 'ct' ? 'text-blue-700' : 'text-purple-700'}`}>{step.title}</strong>
                          <ul className="space-y-1 pr-4 list-disc text-slate-600 text-sm">
                            {step.details.map((d, dIdx) => <li key={dIdx}>{d}</li>)}
                          </ul>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              {exam.injector && <InjectorSettings defaultVolume={exam.injector.volume} defaultFlow={exam.injector.flow} note={exam.injector.note} />}
              
              {exam.notes && (
                <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200 text-sm text-yellow-800">
                  <div className="font-bold flex items-center gap-2 mb-1"><AlertCircle size={16} /> تنبيهات هامة:</div>
                  <ul className="list-disc list-inside">{exam.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const InteractiveBody = ({ onSelect, selected }) => {
    const themeColor = activeMode === 'ct' ? '#3b82f6' : '#9333ea';
    const getFill = (part) => selected === part ? themeColor : "#cbd5e1"; 
    const hoverClass = `cursor-pointer transition-colors duration-200 tap-highlight-transparent ${activeMode === 'ct' ? 'hover:fill-blue-400' : 'hover:fill-purple-400'}`;

    return (
      <svg viewBox="0 0 200 400" className="w-full h-full max-h-[600px] drop-shadow-xl select-none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <g onClick={() => onSelect('head')} className={hoverClass}>
          <circle cx="100" cy="40" r="25" fill={getFill('head')} stroke="white" strokeWidth="2" />
          <text x="135" y="40" className="text-[10px] fill-slate-500 pointer-events-none" textAnchor="start">الرأس</text>
          <line x1="125" y1="40" x2="132" y2="40" stroke="#94a3b8" strokeWidth="1" />
        </g>
        {/* Neck (Only CT has specific neck protocol listed, but usable for both structure) */}
        {activeMode === 'ct' && (
          <g onClick={() => onSelect('neck')} className={hoverClass}>
            <rect x="90" y="66" width="20" height="14" fill={getFill('neck')} stroke="white" strokeWidth="1" rx="2" />
          </g>
        )}
        {/* Chest */}
        {activeMode === 'ct' && (
          <g onClick={() => onSelect('chest')} className={hoverClass}>
            <path d="M75,82 Q100,82 125,82 L130,140 Q100,150 70,140 Z" fill={getFill('chest')} stroke="white" strokeWidth="2" />
            <text x="145" y="110" className="text-[10px] fill-slate-500 pointer-events-none" textAnchor="start">الصدر</text>
            <line x1="130" y1="110" x2="142" y2="110" stroke="#94a3b8" strokeWidth="1" />
          </g>
        )}
        {/* Abdomen / Spine Area */}
        <g onClick={() => onSelect(activeMode === 'ct' ? 'abdomen' : 'spine')} className={hoverClass}>
          <path d="M70,142 Q100,152 130,142 L125,200 Q100,210 75,200 Z" fill={getFill(activeMode === 'ct' ? 'abdomen' : 'spine')} stroke="white" strokeWidth="2" />
          <text x="140" y="170" className="text-[10px] fill-slate-500 pointer-events-none" textAnchor="start">
            {activeMode === 'ct' ? 'البطن والحوض' : 'العمود الفقري'}
          </text>
          <line x1="128" y1="170" x2="137" y2="170" stroke="#94a3b8" strokeWidth="1" />
        </g>
        {/* Limbs - Only if CT for now based on files */}
        {activeMode === 'ct' && (
          <>
            <g onClick={() => onSelect('limbs')} className={hoverClass}>
              <path d="M130,85 L160,120 L175,110 L145,75 Z" fill={getFill('limbs')} stroke="white" strokeWidth="2" />
              <path d="M70,85 L40,120 L25,110 L55,75 Z" fill={getFill('limbs')} stroke="white" strokeWidth="2" />
            </g>
            <g onClick={() => onSelect('limbs')} className={hoverClass}>
              <path d="M115,205 L110,300 L125,300 L130,205 Z" fill={getFill('limbs')} stroke="white" strokeWidth="2" />
              <path d="M85,205 L90,300 L75,300 L70,205 Z" fill={getFill('limbs')} stroke="white" strokeWidth="2" />
            </g>
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 lg:pb-0" dir="rtl">
      {/* IOS Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm animate-in slide-in-from-bottom">
            <h3 className="font-bold text-lg mb-2">تثبيت على iPhone</h3>
            <button onClick={() => setShowIOSGuide(false)} className="absolute top-4 left-4 text-gray-500">✕</button>
            <p className="text-sm text-gray-600">اضغط مشاركة -{'>'} إضافة للصفحة الرئيسية</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10 safe-area-top">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg text-white transition-colors duration-500 ${activeMode === 'ct' ? 'bg-blue-600' : 'bg-purple-600'}`}>
              {activeMode === 'ct' ? <Activity size={24} /> : <Magnet size={24} />}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 line-clamp-1">مستشفى خميس مشيط المدني</h1>
              <div className="flex items-center gap-2">
                 {isOffline ? <span className="text-xs text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full flex gap-1"><WifiOff size={12}/> أوفلاين</span> : <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex gap-1"><Wifi size={12}/> متصل</span>}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {showInstallPrompt && <button onClick={handleInstallClick} className={`text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 ${activeMode === 'ct' ? 'bg-blue-600' : 'bg-purple-600'}`}><Download size={16} /> تثبيت</button>}
            {isIOS && <button onClick={() => setShowIOSGuide(true)} className="bg-gray-100 text-blue-600 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2"><Smartphone size={16} /> تثبيت</button>}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        
        <ModeSwitcher />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Left: Body */}
          <div className={`${selectedPart ? 'hidden lg:flex' : 'flex'} lg:col-span-4 flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[500px]`}>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">اضغط على المنطقة المطلوبة</h2>
            <div className="w-full max-w-[300px] flex-1 flex items-center justify-center">
              <InteractiveBody onSelect={setSelectedPart} selected={selectedPart} />
            </div>
            <div className="mt-6 text-sm text-center text-gray-400 bg-gray-50 p-3 rounded-lg w-full">
              {activeMode === 'ct' ? 'يشمل بروتوكولات Pan CT وحالات الحقن' : 'يركز على تخطيط الفقرات وحساب الـ SAR'}
            </div>
          </div>

          {/* Right: Info */}
          <div className={`${selectedPart ? 'block' : 'hidden lg:block'} lg:col-span-8 min-h-[500px]`}>
            <ProtocolCard 
              data={selectedPart ? (activeMode === 'ct' ? ctProtocols[selectedPart] : mriProtocols[selectedPart]) : null} 
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mb-10 lg:mb-0">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p className="font-medium">جميع المعلومات مستخرجة من ملفات حنين</p>
          <p className={`mt-2 font-bold text-lg ${activeMode === 'ct' ? 'text-blue-600' : 'text-purple-600'}`}>أنس</p>
        </div>
      </footer>
    </div>
  );
};

export default MedicalProtocolsApp;
