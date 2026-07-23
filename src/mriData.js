// MRI Master Complete Protocols (Extracted from MRI_Master_Complete_Protocols.pdf)
// Spatially paired full-width planning images with English captions only.

export const MRI_CATEGORIES = {
  head_neck: { title: "الرأس والعنق", titleEn: "Head & Neck", icon: "🧠" },
  spine: { title: "العمود الفقري", titleEn: "Spine", icon: "🦴" },
  chest: { title: "الصدر والقلب", titleEn: "Chest & Cardiac", icon: "🫁" },
  abdomen: { title: "البطن والحوض", titleEn: "Abdomen & Pelvis", icon: "🫘" },
  msk: { title: "العضلات والعظام", titleEn: "Musculoskeletal", icon: "💪" },
  vascular: { title: "الأوعية الدموية", titleEn: "Vascular (MRA)", icon: "🩸" },
  special: { title: "فحوصات خاصة", titleEn: "Special Studies", icon: "⚡" },
};

export const mriProtocolsData = {
  "brain": {
    "key": "brain",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain/brain_p7_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain/brain_p7_1.jpeg",
        "caption": "Brain MRI localiser image"
      },
      {
        "image": "/images/mri/brain/brain_p7_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain/brain_p7_3.jpeg",
        "caption": "mri brain protocol and planning of coronal scansscans"
      },
      {
        "image": "/images/mri/brain/brain_p7_4.jpeg",
        "caption": "mri brain protocol and planning of sagittal scans"
      },
      {
        "image": "/images/mri/brain/brain_p7_5.jpeg",
        "caption": "mri brain protocol and planning of axial DWI scans"
      }
    ],
    "imageCount": 6
  },
  "brain_1": {
    "key": "brain_1",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_1/brain_1_p10_0.jpeg",
        "caption": "magnetic resonance angiography(MRA) of the brain positioning"
      },
      {
        "image": "/images/mri/brain_1/brain_1_p10_1.jpeg",
        "caption": "Brain MRA localiser image"
      },
      {
        "image": "/images/mri/brain_1/brain_1_p10_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_1/brain_1_p10_3.jpeg",
        "caption": "MRI planning and protocol Angiography of Circle of Willis Magnetic Resonance"
      },
      {
        "image": "/images/mri/brain_1/brain_1_p10_4.jpeg",
        "caption": "MRA Brain MIP images"
      }
    ],
    "imageCount": 5
  },
  "protocol": {
    "key": "protocol",
    "title": "MRI Protocol",
    "titleAr": "MRI Protocol",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocol/protocol_p13_0.jpeg",
        "caption": "MRV brain positioning photo"
      },
      {
        "image": "/images/mri/protocol/protocol_p13_1.jpeg",
        "caption": "Brain MRV localiser image"
      }
    ],
    "imageCount": 2
  },
  "brain_2": {
    "key": "brain_2",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_2/brain_2_p18_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_2/brain_2_p18_1.jpeg",
        "caption": "mri pediatric brain axial planning - MRI"
      },
      {
        "image": "/images/mri/brain_2/brain_2_p18_2.jpeg",
        "caption": "mri pediatric brain coronal planning"
      },
      {
        "image": "/images/mri/brain_2/brain_2_p18_3.jpeg",
        "caption": "mri pediatric brain sagittal 3d planning"
      },
      {
        "image": "/images/mri/brain_2/brain_2_p18_4.jpeg",
        "caption": "mri planning of Brain scan 5 - MRI"
      },
      {
        "image": "/images/mri/brain_2/brain_2_p18_5.jpeg",
        "caption": "mri planning of Brain scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "orbits": {
    "key": "orbits",
    "title": "Orbits",
    "titleAr": "فحص الحجاج والعيون (Orbits)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/orbits/orbits_p22_0.jpeg",
        "caption": "MRI orbits positioning"
      },
      {
        "image": "/images/mri/orbits/orbits_p22_1.jpeg",
        "caption": "Orbits MRI localiser image"
      }
    ],
    "imageCount": 2
  },
  "brain_3": {
    "key": "brain_3",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_3/brain_3_p26_0.jpeg",
        "caption": "MRI Internal Auditory Meatus(IAM'S) scan positioning"
      },
      {
        "image": "/images/mri/brain_3/brain_3_p26_1.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_3/brain_3_p26_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_3/brain_3_p26_3.jpeg",
        "caption": "mri planing and protocol of Internal planning Auditory Meatus (IAMS) coronal"
      }
    ],
    "imageCount": 4
  },
  "brain_4": {
    "key": "brain_4",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_4/brain_4_p30_0.jpeg",
        "caption": "Cholesteatoma MRI apperance"
      },
      {
        "image": "/images/mri/brain_4/brain_4_p30_1.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_4/brain_4_p30_2.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_4/brain_4_p30_3.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_4/brain_4_p30_4.jpeg",
        "caption": "IAM Diffusion Weighted (Cholesteatoma protocol) HASTE DWI planning"
      }
    ],
    "imageCount": 5
  },
  "brain_5": {
    "key": "brain_5",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_5/brain_5_p33_0.jpeg",
        "caption": "MRI Internal Auditory Meatus(IAM'S) scan positioning"
      },
      {
        "image": "/images/mri/brain_5/brain_5_p33_1.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_5/brain_5_p33_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_5/brain_5_p33_3.jpeg",
        "caption": "mri planing and protocol of Internal planning Auditory Meatus (IAMS) coronal"
      }
    ],
    "imageCount": 4
  },
  "paranasal_sinus": {
    "key": "paranasal_sinus",
    "title": "Paranasal Sinus",
    "titleAr": "Paranasal Sinus",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/paranasal_sinus/paranasal_sinus_p41_0.jpeg",
        "caption": "MRI paranasal sinus positioning"
      },
      {
        "image": "/images/mri/paranasal_sinus/paranasal_sinus_p41_1.jpeg",
        "caption": "Localizer - MRI Planning"
      }
    ],
    "imageCount": 2
  },
  "brain_6": {
    "key": "brain_6",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_6/brain_6_p46_0.jpeg",
        "caption": "Cavernous-Sinus 3d anatomy"
      },
      {
        "image": "/images/mri/brain_6/brain_6_p46_1.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_6/brain_6_p46_2.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_6/brain_6_p46_3.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_6/brain_6_p46_4.jpeg",
        "caption": "mri brain protocol and planning of sagittal scans"
      },
      {
        "image": "/images/mri/brain_6/brain_6_p46_5.jpeg",
        "caption": "mri planning of Brain scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "protocol_1": {
    "key": "protocol_1",
    "title": "MRI Protocol",
    "titleAr": "MRI Protocol",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocol_1/protocol_1_p51_0.jpeg",
        "caption": "Re-phased Image of Phase-contrast (PC) sequence used in CSF flow Magnitude Image of Phase-contrast (PC) sequence used in CSF flow"
      },
      {
        "image": "/images/mri/protocol_1/protocol_1_p51_1.jpeg",
        "caption": "imaging"
      }
    ],
    "imageCount": 2
  },
  "cervical_spine": {
    "key": "cervical_spine",
    "title": "Cervical Spine",
    "titleAr": "فحص الفقرات العنقية (Cervical Spine)",
    "category": "spine",
    "items": [
      {
        "image": "/images/mri/cervical_spine/cervical_spine_p58_0.jpeg",
        "caption": "chiari 1 malformation mri T2 and T2 sagittal image"
      },
      {
        "image": "/images/mri/cervical_spine/cervical_spine_p58_1.jpeg",
        "caption": "MRI cervical spine positioning photo"
      }
    ],
    "imageCount": 2
  },
  "protocol_2": {
    "key": "protocol_2",
    "title": "MRI Protocol",
    "titleAr": "MRI Protocol",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocol_2/protocol_2_p64_0.jpeg",
        "caption": "MRI cisternography (csf rhinorrhea) 3D space coronal image 2"
      },
      {
        "image": "/images/mri/protocol_2/protocol_2_p64_1.jpeg",
        "caption": "MRI cisternography (csf rhinorrhea) 3D space coronal image 5"
      }
    ],
    "imageCount": 2
  },
  "brain_7": {
    "key": "brain_7",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_7/brain_7_p71_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_7/brain_7_p71_1.jpeg",
        "caption": "Pituitary MRI localiser image"
      },
      {
        "image": "/images/mri/brain_7/brain_7_p71_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_7/brain_7_p71_3.jpeg",
        "caption": "pituitary fossa mri sagittal planing"
      },
      {
        "image": "/images/mri/brain_7/brain_7_p71_4.jpeg",
        "caption": "pituitary fossa mri coronal planing"
      },
      {
        "image": "/images/mri/brain_7/brain_7_p71_5.jpeg",
        "caption": "pituitary fossa mri sagittal planing"
      }
    ],
    "imageCount": 6
  },
  "brain_8": {
    "key": "brain_8",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_8/brain_8_p74_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_8/brain_8_p74_1.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_8/brain_8_p74_2.jpeg",
        "caption": "mri brain protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/brain_8/brain_8_p74_3.jpeg",
        "caption": "pituitary fossa mri sagittal planing"
      }
    ],
    "imageCount": 4
  },
  "brain_9": {
    "key": "brain_9",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_9/brain_9_p78_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_9/brain_9_p78_1.jpeg",
        "caption": "Localizer - MRI Planning"
      }
    ],
    "imageCount": 2
  },
  "brain_10": {
    "key": "brain_10",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_10/brain_10_p83_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_10/brain_10_p83_1.jpeg",
        "caption": "tmj anatomy - MRI"
      },
      {
        "image": "/images/mri/brain_10/brain_10_p83_2.jpeg",
        "caption": "TMJ MRI localiser image"
      },
      {
        "image": "/images/mri/brain_10/brain_10_p83_3.jpeg",
        "caption": "temporomandibular joint(TMJ) MRI axial T2 planning image"
      }
    ],
    "imageCount": 4
  },
  "brain_11": {
    "key": "brain_11",
    "title": "Brain",
    "titleAr": "فحص الدماغ (Brain)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/brain_11/brain_11_p91_0.jpeg",
        "caption": "mri brain planning and positioning"
      },
      {
        "image": "/images/mri/brain_11/brain_11_p91_1.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/brain_11/brain_11_p91_2.jpeg",
        "caption": "MRI facial nerve protocol and planning of axial scans"
      }
    ],
    "imageCount": 3
  },
  "face": {
    "key": "face",
    "title": "Face",
    "titleAr": "Face",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/face/face_p94_0.jpeg",
        "caption": "MRI face positioning"
      },
      {
        "image": "/images/mri/face/face_p94_1.jpeg",
        "caption": "Localizer - MRI Planning"
      },
      {
        "image": "/images/mri/face/face_p94_2.jpeg",
        "caption": "Planning of MRI face coronal scans"
      },
      {
        "image": "/images/mri/face/face_p94_3.jpeg",
        "caption": "planning of MRI face axial scans"
      }
    ],
    "imageCount": 4
  },
  "neck": {
    "key": "neck",
    "title": "Neck",
    "titleAr": "فحص الرقبة والأنسجة الرخوة (Neck)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/neck/neck_p99_0.jpeg",
        "caption": "MRI neck positioning - MRI"
      },
      {
        "image": "/images/mri/neck/neck_p99_1.jpeg",
        "caption": "MRI NECK localiser image"
      },
      {
        "image": "/images/mri/neck/neck_p99_2.jpeg",
        "caption": "MRI mri soft tissue neck planning and protocol of coronal scans"
      },
      {
        "image": "/images/mri/neck/neck_p99_3.jpeg",
        "caption": "MRI mri soft tissue neck planning and protocol of axial scans"
      },
      {
        "image": "/images/mri/neck/neck_p99_4.jpeg",
        "caption": "MRI mri soft tissue neck planning and protocol of axial 3D scans"
      },
      {
        "image": "/images/mri/neck/neck_p99_5.jpeg",
        "caption": "mri planning of Neck scan 6 - MRI"
      },
      {
        "image": "/images/mri/neck/neck_p99_6.jpeg",
        "caption": "mri planning of Neck scan 7 - MRI"
      },
      {
        "image": "/images/mri/neck/neck_p99_7.jpeg",
        "caption": "mri planning of Neck scan 8 - MRI"
      }
    ],
    "imageCount": 8
  },
  "neck_1": {
    "key": "neck_1",
    "title": "Neck",
    "titleAr": "فحص الرقبة والأنسجة الرخوة (Neck)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/neck_1/neck_1_p102_0.jpeg",
        "caption": "MRI neck positioning - MRI"
      },
      {
        "image": "/images/mri/neck_1/neck_1_p102_1.jpeg",
        "caption": "mri larynx protocol and planning localiser"
      },
      {
        "image": "/images/mri/neck_1/neck_1_p102_2.jpeg",
        "caption": "mri larynx protocol and planning of coronal scans"
      },
      {
        "image": "/images/mri/neck_1/neck_1_p102_3.jpeg",
        "caption": "mri larynx protocol and planning of axial scans"
      }
    ],
    "imageCount": 4
  },
  "sialography": {
    "key": "sialography",
    "title": "Sialography",
    "titleAr": "Sialography",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/sialography/sialography_p108_0.jpeg",
        "caption": "Salivary Glands 3d anatomy"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_1.jpeg",
        "caption": "mri sialography localizer - MRI"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_2.jpeg",
        "caption": "mri parotid sialography axial planning - MRI"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_3.jpeg",
        "caption": "mri parotid sialography axial planning 1 - MRI"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_4.jpeg",
        "caption": "mri parotid sialography sagittal haste localizer planning x2 - MRI"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_5.jpeg",
        "caption": "sialography axial haste 20 mm planing - MRI"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_6.jpeg",
        "caption": "mri parotid sialography sagittal haste planning"
      },
      {
        "image": "/images/mri/sialography/sialography_p108_7.jpeg",
        "caption": "mri planning of Sialography scan 8 - MRI"
      }
    ],
    "imageCount": 8
  },
  "cervical_spine_1": {
    "key": "cervical_spine_1",
    "title": "Cervical Spine",
    "titleAr": "فحص الفقرات العنقية (Cervical Spine)",
    "category": "spine",
    "items": [
      {
        "image": "/images/mri/cervical_spine_1/cervical_spine_1_p116_0.jpeg",
        "caption": "MRI cervical spine positioning photo"
      },
      {
        "image": "/images/mri/cervical_spine_1/cervical_spine_1_p116_1.jpeg",
        "caption": "MRI cervical spine localiser image"
      }
    ],
    "imageCount": 2
  },
  "cervical_spine_2": {
    "key": "cervical_spine_2",
    "title": "Cervical Spine",
    "titleAr": "فحص الفقرات العنقية (Cervical Spine)",
    "category": "spine",
    "items": [
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_0.jpeg",
        "caption": "MRI cervical spine positioning photo"
      },
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_1.jpeg",
        "caption": "mri C spine CSF leak protocol localiser image image"
      },
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_2.jpeg",
        "caption": "mri Cervical Spine CSF leak protocol sagittal T2 SPACE 3D planning and"
      },
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_3.jpeg",
        "caption": "protocol image"
      },
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_4.jpeg",
        "caption": "T2 SPACE sagittal 0.7 mm isotropic with high TE CSF leack protocol"
      },
      {
        "image": "/images/mri/cervical_spine_2/cervical_spine_2_p121_5.jpeg",
        "caption": "image"
      }
    ],
    "imageCount": 6
  },
  "axial_t1_fat_saturated": {
    "key": "axial_t1_fat_saturated",
    "title": "Axial T1 Fat Saturated",
    "titleAr": "Axial T1 Fat Saturated",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/axial_t1_fat_saturated/axial_t1_fat_saturated_p126_0.jpeg",
        "caption": "MRA neck positioning"
      },
      {
        "image": "/images/mri/axial_t1_fat_saturated/axial_t1_fat_saturated_p126_1.jpeg",
        "caption": "Magnetic resonance angiography protocol (MRA) localizer carotid artery planning and"
      },
      {
        "image": "/images/mri/axial_t1_fat_saturated/axial_t1_fat_saturated_p126_2.jpeg",
        "caption": "Magnetic resonance angiography (MRA) carotid artery planning and"
      },
      {
        "image": "/images/mri/axial_t1_fat_saturated/axial_t1_fat_saturated_p126_3.jpeg",
        "caption": "protocol localizer"
      },
      {
        "image": "/images/mri/axial_t1_fat_saturated/axial_t1_fat_saturated_p126_4.jpeg",
        "caption": "Magnetic resonance angiography (MRA) carotid artery planning and protocol of axial T1 fat saturated scans"
      }
    ],
    "imageCount": 5
  },
  "brachial_plexus": {
    "key": "brachial_plexus",
    "title": "Brachial Plexus",
    "titleAr": "Brachial Plexus",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_0.jpeg",
        "caption": "brachial plexus"
      },
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_1.jpeg",
        "caption": "brachial plexus anatomy - MRI"
      },
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_2.jpeg",
        "caption": "brachial plexus localizer - MRI"
      },
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_3.jpeg",
        "caption": "MRI brachial plexus planning of axial scans"
      },
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_4.jpeg",
        "caption": "mri planning of Brachial Plexus scan 5 - MRI"
      },
      {
        "image": "/images/mri/brachial_plexus/brachial_plexus_p130_5.jpeg",
        "caption": "mri planning of Brachial Plexus scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "subclavians": {
    "key": "subclavians",
    "title": "Subclavians",
    "titleAr": "Subclavians",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/subclavians/subclavians_p135_0.jpeg",
        "caption": "MRA (magnetic subclavian resonance and neck angiography) artery positioning and MRV photo (venography) of"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_1.jpeg",
        "caption": "mra subclavians localizer arm down - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_2.jpeg",
        "caption": "magnetic planning resonance of angiography(MRA) chest and neck post whole contrast body scans protocols and MRA(magnetic resonance angiography) Subclavians care bolus - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_3.jpeg",
        "caption": "mra abdomen bolus tracking image - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_4.jpeg",
        "caption": "MRA(magnetic resonance angiography) Subclavians planning of coronal"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_5.jpeg",
        "caption": "3D arm down 2 - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_6.jpeg",
        "caption": "MRA subclavian positioning arm up - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_7.jpeg",
        "caption": "mra subclavians localizer arm up - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_8.jpeg",
        "caption": "MRA(magnetic resonance angiography) 3D arm up - MRI Subclavians planning of coronal MRA(magnetic resonance angiography) Subclavians care bolus - MRI"
      },
      {
        "image": "/images/mri/subclavians/subclavians_p135_9.jpeg",
        "caption": "mri planning of Subclavians scan 10 - MRI"
      }
    ],
    "imageCount": 10
  },
  "chest_and_neck_post_contrast": {
    "key": "chest_and_neck_post_contrast",
    "title": "Chest And Neck Post Contrast",
    "titleAr": "فحص الرقبة والأنسجة الرخوة (Chest And Neck Post Contrast)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/chest_and_neck_post_contrast/chest_and_neck_post_contrast_p139_0.jpeg",
        "caption": "TWIST MRA neck and subclavian arteries positioning photo"
      },
      {
        "image": "/images/mri/chest_and_neck_post_contrast/chest_and_neck_post_contrast_p139_1.jpeg",
        "caption": "mra subclavians localizer arm down - MRI"
      },
      {
        "image": "/images/mri/chest_and_neck_post_contrast/chest_and_neck_post_contrast_p139_2.jpeg",
        "caption": "magnetic resonance angiography(MRA) whole body protocols and"
      },
      {
        "image": "/images/mri/chest_and_neck_post_contrast/chest_and_neck_post_contrast_p139_3.jpeg",
        "caption": "planning of chest and neck post contrast scans"
      }
    ],
    "imageCount": 4
  },
  "chest": {
    "key": "chest",
    "title": "Chest",
    "titleAr": "Chest",
    "category": "chest",
    "items": [
      {
        "image": "/images/mri/chest/chest_p142_0.jpeg",
        "caption": "MRI positioning of chest"
      },
      {
        "image": "/images/mri/chest/chest_p142_1.jpeg",
        "caption": "MRI chest localizer"
      },
      {
        "image": "/images/mri/chest/chest_p142_2.jpeg",
        "caption": "mri chest coronal planning"
      },
      {
        "image": "/images/mri/chest/chest_p142_3.jpeg",
        "caption": "mri planning of Chest scan 4 - MRI"
      },
      {
        "image": "/images/mri/chest/chest_p142_4.jpeg",
        "caption": "mri planning of Chest scan 5 - MRI"
      }
    ],
    "imageCount": 5
  },
  "scapula": {
    "key": "scapula",
    "title": "Scapula",
    "titleAr": "Scapula",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/scapula/scapula_p145_0.jpeg",
        "caption": "MRI scapula positioning"
      },
      {
        "image": "/images/mri/scapula/scapula_p145_1.jpeg",
        "caption": "MRI pectoralis muscle scan localiser"
      },
      {
        "image": "/images/mri/scapula/scapula_p145_2.jpeg",
        "caption": "MRI pectoralis muscle planning of axial scans"
      },
      {
        "image": "/images/mri/scapula/scapula_p145_3.jpeg",
        "caption": "mri planning of Scapula scan 4 - MRI"
      }
    ],
    "imageCount": 4
  },
  "sternum": {
    "key": "sternum",
    "title": "Sternum",
    "titleAr": "Sternum",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/sternum/sternum_p153_0.jpeg",
        "caption": "STERNUM OR STERNOCLAVICULAR JOINT MRI positioning photo"
      },
      {
        "image": "/images/mri/sternum/sternum_p153_1.jpeg",
        "caption": "MRI STERNUM LOCALIZER"
      },
      {
        "image": "/images/mri/sternum/sternum_p153_2.jpeg",
        "caption": "mri sternum localizer planning"
      },
      {
        "image": "/images/mri/sternum/sternum_p153_3.jpeg",
        "caption": "mri planning of Sternum scan 4 - MRI"
      }
    ],
    "imageCount": 4
  },
  "sternum_1": {
    "key": "sternum_1",
    "title": "Sternum",
    "titleAr": "Sternum",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/sternum_1/sternum_1_p157_0.jpeg",
        "caption": "STERNUM OR STERNOCLAVICULAR JOINT MRI positioning photo"
      },
      {
        "image": "/images/mri/sternum_1/sternum_1_p157_1.jpeg",
        "caption": "MRI STERNUM LOCALIZER"
      },
      {
        "image": "/images/mri/sternum_1/sternum_1_p157_2.jpeg",
        "caption": "sternoclavicular joint mri planning localiser"
      },
      {
        "image": "/images/mri/sternum_1/sternum_1_p157_3.jpeg",
        "caption": "mri planning of Sternum scan 4 - MRI"
      }
    ],
    "imageCount": 4
  },
  "clavicle": {
    "key": "clavicle",
    "title": "Clavicle",
    "titleAr": "Clavicle",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/clavicle/clavicle_p161_0.jpeg",
        "caption": "MRI clavicle positioning photo"
      },
      {
        "image": "/images/mri/clavicle/clavicle_p161_1.jpeg",
        "caption": "clavicle localizer 1 - MRI"
      },
      {
        "image": "/images/mri/clavicle/clavicle_p161_2.jpeg",
        "caption": "mri clavicle protocols and planning of axial scans - MRI"
      },
      {
        "image": "/images/mri/clavicle/clavicle_p161_3.jpeg",
        "caption": "clavicle mri localizer 2 - MRI"
      },
      {
        "image": "/images/mri/clavicle/clavicle_p161_4.jpeg",
        "caption": "mri clavicle protocols and planning of axial scans 1 - MRI"
      },
      {
        "image": "/images/mri/clavicle/clavicle_p161_5.jpeg",
        "caption": "mri clavicle protocols and planning of coronal scans - MRI"
      }
    ],
    "imageCount": 6
  },
  "thoracic_spine": {
    "key": "thoracic_spine",
    "title": "Thoracic Spine",
    "titleAr": "فحص الفقرات الصدرية (Thoracic Spine)",
    "category": "spine",
    "items": [
      {
        "image": "/images/mri/thoracic_spine/thoracic_spine_p165_0.jpeg",
        "caption": "MRI thoracic spine positioning photo"
      },
      {
        "image": "/images/mri/thoracic_spine/thoracic_spine_p165_1.jpeg",
        "caption": "mri t spine localizer image - MRI"
      },
      {
        "image": "/images/mri/thoracic_spine/thoracic_spine_p165_2.jpeg",
        "caption": "mri t spine planning of sagittal"
      },
      {
        "image": "/images/mri/thoracic_spine/thoracic_spine_p165_3.jpeg",
        "caption": "mri t spine planning of axial"
      }
    ],
    "imageCount": 4
  },
  "prospective_triggering_mri_cardiac": {
    "key": "prospective_triggering_mri_cardiac",
    "title": "Prospective Triggering Mri Cardiac",
    "titleAr": "فحص القلب (Prospective Triggering Mri Cardiac)",
    "category": "chest",
    "items": [
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_0.jpeg",
        "caption": "Prospective Triggering mri cardiac"
      },
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_1.jpeg",
        "caption": "Heart anatomy"
      },
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_2.jpeg",
        "caption": "Retrospective Triggering"
      },
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_3.jpeg",
        "caption": "Philips VCG electrode positioning mri"
      },
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_4.jpeg",
        "caption": "Cardiac-MRI-siemens-electrode-positioning"
      },
      {
        "image": "/images/mri/prospective_triggering_mri_cardiac/prospective_triggering_mri_cardiac_p192_5.jpeg",
        "caption": "Cardiac (heart) MRI positioning"
      }
    ],
    "imageCount": 6
  },
  "protocols_and": {
    "key": "protocols_and",
    "title": "Protocols And",
    "titleAr": "Protocols And",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_0.jpeg",
        "caption": "Pulmonary and aortic MRI flow quantification image"
      },
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_1.jpeg",
        "caption": "Cardiac (heart) MRI positioning"
      },
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_2.jpeg",
        "caption": "cardiac mri localiser"
      },
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_3.jpeg",
        "caption": "cardiac mri protocols and planning of localizer"
      },
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_4.jpeg",
        "caption": "cardiac mri protocols and planning of axial dark blood"
      },
      {
        "image": "/images/mri/protocols_and/protocols_and_p203_5.jpeg",
        "caption": "cardiac mri protocols and planning of two chamber localizer"
      }
    ],
    "imageCount": 6
  },
  "protocols_and_1": {
    "key": "protocols_and_1",
    "title": "Protocols And",
    "titleAr": "Protocols And",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_0.jpeg",
        "caption": "cardiac MRI native T1 mapping - MRI"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_1.jpeg",
        "caption": "cardiac MRI T2 mapping - MRI"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_2.jpeg",
        "caption": "Cardiac (heart) MRI positioning"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_3.jpeg",
        "caption": "cardiac MRI T2 star mapping - MRI"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_4.jpeg",
        "caption": "cardiac mri localiser"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_5.jpeg",
        "caption": "cardiac mri protocols and planning of localizer"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_6.jpeg",
        "caption": "cardiac mri protocols and planning of axial dark blood"
      },
      {
        "image": "/images/mri/protocols_and_1/protocols_and_1_p211_7.jpeg",
        "caption": "cardiac mri protocols and planning of two chamber localizer"
      }
    ],
    "imageCount": 8
  },
  "kidneys": {
    "key": "kidneys",
    "title": "Kidneys",
    "titleAr": "فحص الكلى (Kidneys)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/kidneys/kidneys_p217_0.jpeg",
        "caption": "MRI kidneys positioning image"
      },
      {
        "image": "/images/mri/kidneys/kidneys_p217_1.jpeg",
        "caption": "mri kidney scan localiser image"
      },
      {
        "image": "/images/mri/kidneys/kidneys_p217_2.jpeg",
        "caption": "mri kidneys planning of coronal images"
      },
      {
        "image": "/images/mri/kidneys/kidneys_p217_3.jpeg",
        "caption": "mri kidney scan coronal planning and protocol image"
      }
    ],
    "imageCount": 4
  },
  "kidneys_1": {
    "key": "kidneys_1",
    "title": "Kidneys",
    "titleAr": "فحص الكلى (Kidneys)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_0.jpeg",
        "caption": "MRI kidneys positioning image"
      },
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_1.jpeg",
        "caption": "mri kidney scan localiser image"
      },
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_2.jpeg",
        "caption": "MRI kidneys (respiratory gated) protocol and planning of coronal scan"
      },
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_3.jpeg",
        "caption": "Phase scout respiratory gating in kidney imaging"
      },
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_4.jpeg",
        "caption": "MRI kidneys (respiratory gated) protocol and planning of axial scan"
      },
      {
        "image": "/images/mri/kidneys_1/kidneys_1_p222_5.jpeg",
        "caption": "mri kidney scan axial planning and protocol image"
      }
    ],
    "imageCount": 6
  },
  "bolus_track_mri": {
    "key": "bolus_track_mri",
    "title": "Bolus Track - Mri",
    "titleAr": "Bolus Track - Mri",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_0.jpeg",
        "caption": "Magnetic resonance angiography (MRA) renal artery positioning photo"
      },
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_1.jpeg",
        "caption": "mra renal angiogram localiser image"
      },
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_2.jpeg",
        "caption": "mra renal planning"
      },
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_3.jpeg",
        "caption": "bolus track - MRI"
      },
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_4.jpeg",
        "caption": "mri planning of Bolus Track - Mri scan 5 - MRI"
      },
      {
        "image": "/images/mri/bolus_track_mri/bolus_track_mri_p226_5.jpeg",
        "caption": "mri planning of Bolus Track - Mri scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "protocol_3": {
    "key": "protocol_3",
    "title": "MRI Protocol",
    "titleAr": "MRI Protocol",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/protocol_3/protocol_3_p230_0.jpeg",
        "caption": "Magnetic resonance angiography (MRA) renal artery positioning photo"
      },
      {
        "image": "/images/mri/protocol_3/protocol_3_p230_1.jpeg",
        "caption": "NATIVE MRA Raw Data Images"
      },
      {
        "image": "/images/mri/protocol_3/protocol_3_p230_2.jpeg",
        "caption": "Advanced MRI scanners are equipped with built-in table sensors"
      },
      {
        "image": "/images/mri/protocol_3/protocol_3_p230_3.jpeg",
        "caption": "MRA NATIVE non contrast renal artery scan localizer image"
      }
    ],
    "imageCount": 4
  },
  "liver": {
    "key": "liver",
    "title": "Liver",
    "titleAr": "فحص الكبد (Liver)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/liver/liver_p241_0.jpeg",
        "caption": "MRI liver Positioning photo"
      },
      {
        "image": "/images/mri/liver/liver_p241_1.jpeg",
        "caption": "Liver MRI localiser planning and protocol image"
      },
      {
        "image": "/images/mri/liver/liver_p241_2.jpeg",
        "caption": "MRI liver planning and protocol of axial respiratory gated scans"
      },
      {
        "image": "/images/mri/liver/liver_p241_3.jpeg",
        "caption": "Phase scout respiratory gating MRI"
      },
      {
        "image": "/images/mri/liver/liver_p241_4.jpeg",
        "caption": "MRI liver planning and protocol of axial DWI images"
      },
      {
        "image": "/images/mri/liver/liver_p241_5.jpeg",
        "caption": "MRI liver planning and protocol of axial 3D T1 images"
      },
      {
        "image": "/images/mri/liver/liver_p241_6.jpeg",
        "caption": "mri planning of Liver scan 7 - MRI"
      },
      {
        "image": "/images/mri/liver/liver_p241_7.jpeg",
        "caption": "mri planning of Liver scan 8 - MRI"
      }
    ],
    "imageCount": 8
  },
  "liver_1": {
    "key": "liver_1",
    "title": "Liver",
    "titleAr": "فحص الكبد (Liver)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/liver_1/liver_1_p246_0.jpeg",
        "caption": "MRI liver Positioning photo"
      },
      {
        "image": "/images/mri/liver_1/liver_1_p246_1.jpeg",
        "caption": "Liver MRI localiser planning and protocol image"
      }
    ],
    "imageCount": 2
  },
  "mrcp": {
    "key": "mrcp",
    "title": "Mrcp",
    "titleAr": "فحص القنوات الصفراوية (Mrcp)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/mrcp/mrcp_p251_0.jpeg",
        "caption": "MRI MRCP positioning photo"
      },
      {
        "image": "/images/mri/mrcp/mrcp_p251_1.jpeg",
        "caption": "Liver,pancreas and biliary system anatomy image"
      },
      {
        "image": "/images/mri/mrcp/mrcp_p251_2.jpeg",
        "caption": "Planning and protocol of Magnetic resonance cholangiopancreatography"
      },
      {
        "image": "/images/mri/mrcp/mrcp_p251_3.jpeg",
        "caption": "(MRCP) localiser"
      },
      {
        "image": "/images/mri/mrcp/mrcp_p251_4.jpeg",
        "caption": "MRCP planning of coronal slices"
      },
      {
        "image": "/images/mri/mrcp/mrcp_p251_5.jpeg",
        "caption": "MRCP planning and protocol of axial slices"
      }
    ],
    "imageCount": 6
  },
  "mrcp_1": {
    "key": "mrcp_1",
    "title": "Mrcp",
    "titleAr": "فحص القنوات الصفراوية (Mrcp)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_0.jpeg",
        "caption": "Planning and protocol of Magnetic (MRCP) resonance localiser cholangiopancreatography"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_1.jpeg",
        "caption": "MRI MRCP positioning photo"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_2.jpeg",
        "caption": "Magnetic resonance cholangiopancreatography (MRCP) MRI protocol"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_3.jpeg",
        "caption": "and planning of coronal respiratory gated scans"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_4.jpeg",
        "caption": "Phase scout respiratory gating MRI"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_5.jpeg",
        "caption": "Magnetic resonance cholangiopancreatography (MRCP) MRI protocol"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_6.jpeg",
        "caption": "and planning of axial respiratory gated scans"
      },
      {
        "image": "/images/mri/mrcp_1/mrcp_1_p256_7.jpeg",
        "caption": "MRCP planning and protocol of axial slices"
      }
    ],
    "imageCount": 8
  },
  "pancreas": {
    "key": "pancreas",
    "title": "Pancreas",
    "titleAr": "فحص البنكرياس (Pancreas)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/pancreas/pancreas_p267_0.jpeg",
        "caption": "MRI pancreas positioning photo"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_1.jpeg",
        "caption": "mri pancreas localizer"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_2.jpeg",
        "caption": "PANCREAS MRI (respiratory gated) coronal scan protocol and planning"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_3.jpeg",
        "caption": "image"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_4.jpeg",
        "caption": "Phase scout respiratory gating how to do"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_5.jpeg",
        "caption": "PANCREAS MRI (respiratory gated) image axial scan protocol and planning"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_6.jpeg",
        "caption": "pancreas mri scan planning and protocol of axial t2 image"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_7.jpeg",
        "caption": "mri planing of coronal gated scans of pancreas"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_8.jpeg",
        "caption": "pancreas mri scan planning and protocol of axial image"
      },
      {
        "image": "/images/mri/pancreas/pancreas_p267_9.jpeg",
        "caption": "pancreas mri scan planning and protocol of coronal images"
      }
    ],
    "imageCount": 10
  },
  "secretin_stimulated_mrcp": {
    "key": "secretin_stimulated_mrcp",
    "title": "Secretin Stimulated Mrcp",
    "titleAr": "فحص القنوات الصفراوية (Secretin Stimulated Mrcp)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_0.jpeg",
        "caption": "MRI secretin stimulated MRCP positioning photo"
      },
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_1.jpeg",
        "caption": "Liver,pancreas and biliary system anatomy image"
      },
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_2.jpeg",
        "caption": "mri pancreas localizer"
      },
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_3.jpeg",
        "caption": "pancreas mri scan planning and protocol of coronal images"
      },
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_4.jpeg",
        "caption": "pancreas mri scan planning and protocol of axial t2 image"
      },
      {
        "image": "/images/mri/secretin_stimulated_mrcp/secretin_stimulated_mrcp_p272_5.jpeg",
        "caption": "mri planning of Secretin Stimulated Mrcp scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "small_bowel": {
    "key": "small_bowel",
    "title": "Small Bowel",
    "titleAr": "فحص الأمعاء (Small Bowel)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_0.jpeg",
        "caption": "MRI small bowel positioning"
      },
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_1.jpeg",
        "caption": "mri small bowel localizer image"
      },
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_2.jpeg",
        "caption": "MRI small bowel (enterography) coronal planning - MRI"
      },
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_3.jpeg",
        "caption": "MRI small bowel (enterography) axial planning"
      },
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_4.jpeg",
        "caption": "MRI small bowel (enterography) coronal flash planning and protocols"
      },
      {
        "image": "/images/mri/small_bowel/small_bowel_p278_5.jpeg",
        "caption": "mri planning of Small Bowel scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "breast_implant": {
    "key": "breast_implant",
    "title": "Breast Implant",
    "titleAr": "فحص الثدي (Breast Implant)",
    "category": "chest",
    "items": [
      {
        "image": "/images/mri/breast_implant/breast_implant_p287_0.jpeg",
        "caption": "MRI breast implant protocol positioning photo"
      },
      {
        "image": "/images/mri/breast_implant/breast_implant_p287_1.jpeg",
        "caption": "MRI breast localizer image"
      }
    ],
    "imageCount": 2
  },
  "urinary_bladder": {
    "key": "urinary_bladder",
    "title": "Urinary Bladder",
    "titleAr": "فحص المثانة (Urinary Bladder)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_0.jpeg",
        "caption": "MRI urinary bladder positioning photo"
      },
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_1.jpeg",
        "caption": "MRI BLADDER LOCALIZER"
      },
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_2.jpeg",
        "caption": "planning of urinary bladder mri sagittal images"
      },
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_3.jpeg",
        "caption": "urinary bladder mri axial acan planning"
      },
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_4.jpeg",
        "caption": "mri planning of Urinary Bladder scan 5 - MRI"
      },
      {
        "image": "/images/mri/urinary_bladder/urinary_bladder_p291_5.jpeg",
        "caption": "mri planning of Urinary Bladder scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "rectal_cancer": {
    "key": "rectal_cancer",
    "title": "Rectal Cancer",
    "titleAr": "فحص المستقيم (Rectal Cancer)",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_0.jpeg",
        "caption": "MRI rectal cancer positioning photo"
      },
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_1.jpeg",
        "caption": "MRI PELVIS LOCALIZER - MRI"
      },
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_2.jpeg",
        "caption": "planning of mri recatal cancer sagittal - MRI"
      },
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_3.jpeg",
        "caption": "planning of mri recatal cancer axial whole pelvis - MRI"
      },
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_4.jpeg",
        "caption": "planning of mri recatal cancer axial (1) - MRI"
      },
      {
        "image": "/images/mri/rectal_cancer/rectal_cancer_p295_5.jpeg",
        "caption": "planning of mri recatal cancer coronal - MRI"
      }
    ],
    "imageCount": 6
  },
  "gynaecology_pelvis": {
    "key": "gynaecology_pelvis",
    "title": "Gynaecology Pelvis",
    "titleAr": "فحص الحوض (Gynaecology Pelvis)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_0.jpeg",
        "caption": "MRI GYNAECOLOGY PELVIS positioning image"
      },
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_1.jpeg",
        "caption": "Adnexal Masses in Pregnancy MRI localiser"
      },
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_2.jpeg",
        "caption": "Adnexal Masses in Pregnancy MRI coronal big fov planning and protocol Adnexal Masses in Pregnancy MRI axial big fov planning and protocol"
      },
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_3.jpeg",
        "caption": "Adnexal Masses in Pregnancy MRI axial SFOV planning and protocol Adnexal Masses in Pregnancy MRI axial SFOV planning and protocol"
      },
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_4.jpeg",
        "caption": "mri planning of Gynaecology Pelvis scan 5 - MRI"
      },
      {
        "image": "/images/mri/gynaecology_pelvis/gynaecology_pelvis_p304_5.jpeg",
        "caption": "mri planning of Gynaecology Pelvis scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "fetal_brain_mri_axial_dwi_images": {
    "key": "fetal_brain_mri_axial_dwi_images",
    "title": "• Fetal Brain Mri Axial Dwi Images",
    "titleAr": "فحص الدماغ (• Fetal Brain Mri Axial Dwi Images)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_0.jpeg",
        "caption": "EPI DWI AXIAL B0 3mm fetal brain image 1 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_1.jpeg",
        "caption": "EPI DWI AXIAL B0 3mm fetal brain image 2 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_2.jpeg",
        "caption": "EPI DWI AXIAL B0 3mm fetal brain image 3 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_3.jpeg",
        "caption": "EPI DWI AXIAL B0 3mm fetal brain image 4 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_4.jpeg",
        "caption": "EPI DWI AXIAL 3mm fetal brain image 1 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_axial_dwi_images/fetal_brain_mri_axial_dwi_images_p306_5.jpeg",
        "caption": "EPI DWI AXIAL 3mm fetal brain image 2 - MRI"
      }
    ],
    "imageCount": 6
  },
  "planning_and": {
    "key": "planning_and",
    "title": "Planning And",
    "titleAr": "Planning And",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/planning_and/planning_and_p311_0.jpeg",
        "caption": "mri positioning of pelvis - MRI"
      },
      {
        "image": "/images/mri/planning_and/planning_and_p311_1.jpeg",
        "caption": "Fetal MRI planning and protocol haste localiser"
      },
      {
        "image": "/images/mri/planning_and/planning_and_p311_2.jpeg",
        "caption": "Fetal mri large FOV sagittal planning"
      },
      {
        "image": "/images/mri/planning_and/planning_and_p311_3.jpeg",
        "caption": "Advanced MRI scanners are equipped with built-in table sensors"
      },
      {
        "image": "/images/mri/planning_and/planning_and_p311_4.jpeg",
        "caption": "Fetal mri large FOV axial planning"
      },
      {
        "image": "/images/mri/planning_and/planning_and_p311_5.jpeg",
        "caption": "mri planning of Planning And scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "fetal_brain_mri_sagittal_large_fov_images": {
    "key": "fetal_brain_mri_sagittal_large_fov_images",
    "title": "• Fetal Brain Mri Sagittal Large Fov Images",
    "titleAr": "فحص الدماغ (• Fetal Brain Mri Sagittal Large Fov Images)",
    "category": "head_neck",
    "items": [
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_0.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 1 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_1.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 2 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_2.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 3 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_3.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 4 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_4.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 5 - MRI"
      },
      {
        "image": "/images/mri/fetal_brain_mri_sagittal_large_fov_images/fetal_brain_mri_sagittal_large_fov_images_p313_5.jpeg",
        "caption": "mri planning of • Fetal Brain Mri Sagittal Large Fov Images scan 6 - MRI"
      }
    ],
    "imageCount": 6
  },
  "pelivis_fistula_sagittal": {
    "key": "pelivis_fistula_sagittal",
    "title": "Pelivis Fistula Sagittal",
    "titleAr": "فحص الناصور (Pelivis Fistula Sagittal)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_0.jpeg",
        "caption": "mri pelivis fistula sagittal planning - MRI"
      },
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_1.jpeg",
        "caption": "mri pelivis fistula axial planning - MRI"
      },
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_2.jpeg",
        "caption": "mri pelivis fistula coronal planning - MRI"
      },
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_3.jpeg",
        "caption": "mri RV fistula sagittal planning - MRI"
      },
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_4.jpeg",
        "caption": "mri RV fistula axialplanning - MRI"
      },
      {
        "image": "/images/mri/pelivis_fistula_sagittal/pelivis_fistula_sagittal_p315_5.jpeg",
        "caption": "mri RV fistula coronal planning - MRI"
      }
    ],
    "imageCount": 6
  },
  "fistula_scan": {
    "key": "fistula_scan",
    "title": "Fistula Scan",
    "titleAr": "فحص الناصور (Fistula Scan)",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_0.jpeg",
        "caption": "MRI fistula scan positioning"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_1.jpeg",
        "caption": "mri fistula localizer image - MRI"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_2.jpeg",
        "caption": "mri fistula localizer image 1 - MRI"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_3.jpeg",
        "caption": "MRI ANAL FISTULA SAGITTAL PLANNING - MRI"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_4.jpeg",
        "caption": "MRI ANAL FISTULA AXIAL PLANNING - MRI"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_5.jpeg",
        "caption": "MRI ANAL FISTULA CORONAL PLANNING - MRI"
      },
      {
        "image": "/images/mri/fistula_scan/fistula_scan_p318_6.jpeg",
        "caption": "mri planning of Fistula Scan scan 7 - MRI"
      }
    ],
    "imageCount": 7
  },
  "planning_and_1": {
    "key": "planning_and_1",
    "title": "Planning And",
    "titleAr": "Planning And",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/planning_and_1/planning_and_1_p321_0.jpeg",
        "caption": "Appendix mri positioning photo"
      },
      {
        "image": "/images/mri/planning_and_1/planning_and_1_p321_1.jpeg",
        "caption": "Appendix mri planning and protocol localiser image"
      }
    ],
    "imageCount": 2
  },
  "lumbar_spine": {
    "key": "lumbar_spine",
    "title": "Lumbar Spine",
    "titleAr": "فحص الفقرات القطنية (Lumbar Spine)",
    "category": "spine",
    "items": [
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_0.jpeg",
        "caption": "MRI Lumbar spine positioning photo"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_1.jpeg",
        "caption": "MRI lumbar spine localiser image"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_2.jpeg",
        "caption": "MRI lumbar spine protocol and planning of sagittal scans"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_3.jpeg",
        "caption": "MRI lumbar spine protocol and planning of axial scans"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_4.jpeg",
        "caption": "MRI lumbar spine protocol and planning of coronal psoas muscle scan"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_5.jpeg",
        "caption": "MRI lumbar spine protocol and planning of coronal scans"
      },
      {
        "image": "/images/mri/lumbar_spine/lumbar_spine_p330_6.jpeg",
        "caption": "MRI planning and protocol of lumbar spine axial block"
      }
    ],
    "imageCount": 7
  },
  "urography": {
    "key": "urography",
    "title": "Urography",
    "titleAr": "Urography",
    "category": "abdomen",
    "items": [
      {
        "image": "/images/mri/urography/urography_p333_0.jpeg",
        "caption": "MRI urography positioning photo"
      },
      {
        "image": "/images/mri/urography/urography_p333_1.jpeg",
        "caption": "MRV abdomen localizer planning image - MRI"
      }
    ],
    "imageCount": 2
  },
  "thigh": {
    "key": "thigh",
    "title": "Thigh",
    "titleAr": "فحص الفخذ (Thigh)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/thigh/thigh_p341_0.jpeg",
        "caption": "MRI thigh positioning photo"
      },
      {
        "image": "/images/mri/thigh/thigh_p341_1.jpeg",
        "caption": "mra upper leg localizer - MRI"
      },
      {
        "image": "/images/mri/thigh/thigh_p341_2.jpeg",
        "caption": "mri planning of thigh coronal scans - MRI"
      },
      {
        "image": "/images/mri/thigh/thigh_p341_3.jpeg",
        "caption": "mri planning of thigh axial scans - MRI"
      },
      {
        "image": "/images/mri/thigh/thigh_p341_4.jpeg",
        "caption": "mri planning of thigh right side sagittal scans - MRI"
      },
      {
        "image": "/images/mri/thigh/thigh_p341_5.jpeg",
        "caption": "mri planning of thigh left side sagittal scans - MRI"
      }
    ],
    "imageCount": 6
  },
  "positioning_of_knee": {
    "key": "positioning_of_knee",
    "title": "Mri Positioning Of Knee",
    "titleAr": "فحص الركبة (Mri Positioning Of Knee)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/positioning_of_knee/positioning_of_knee_p344_0.jpeg",
        "caption": "mri positioning of knee"
      },
      {
        "image": "/images/mri/positioning_of_knee/positioning_of_knee_p344_1.jpeg",
        "caption": "Knee MRI localiser image"
      }
    ],
    "imageCount": 2
  },
  "lower_leg": {
    "key": "lower_leg",
    "title": "Lower Leg",
    "titleAr": "فحص الساق (Lower Leg)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_0.jpeg",
        "caption": "MRI positioning of legs"
      },
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_1.jpeg",
        "caption": "mra legs lower leg localizer - MRI"
      },
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_2.jpeg",
        "caption": "mri planning of lower leg coronal scans - MRI"
      },
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_3.jpeg",
        "caption": "mri planning of lower leg axial scans - MRI"
      },
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_4.jpeg",
        "caption": "mri planning of lower leg coronal scans right side - MRI"
      },
      {
        "image": "/images/mri/lower_leg/lower_leg_p348_5.jpeg",
        "caption": "mri planning of lower leg coronal scans left - MRI"
      }
    ],
    "imageCount": 6
  },
  "ankle": {
    "key": "ankle",
    "title": "Ankle",
    "titleAr": "فحص الكاحل (Ankle)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/ankle/ankle_p351_0.jpeg",
        "caption": "MRI ankle positioning"
      },
      {
        "image": "/images/mri/ankle/ankle_p351_1.jpeg",
        "caption": "ankle mri localizer - MRI"
      },
      {
        "image": "/images/mri/ankle/ankle_p351_2.jpeg",
        "caption": "MRI planning and protocol of ankle sagittal"
      },
      {
        "image": "/images/mri/ankle/ankle_p351_3.jpeg",
        "caption": "mri planning of Ankle scan 4 - MRI"
      },
      {
        "image": "/images/mri/ankle/ankle_p351_4.jpeg",
        "caption": "mri planning of Ankle scan 5 - MRI"
      }
    ],
    "imageCount": 5
  },
  "ankle_1": {
    "key": "ankle_1",
    "title": "Ankle",
    "titleAr": "فحص الكاحل (Ankle)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/ankle_1/ankle_1_p354_0.jpeg",
        "caption": "MRI ankle positioning"
      },
      {
        "image": "/images/mri/ankle_1/ankle_1_p354_1.jpeg",
        "caption": "ankle mri localizer - MRI"
      },
      {
        "image": "/images/mri/ankle_1/ankle_1_p354_2.jpeg",
        "caption": "MRI planning and protocol of ankle sagittal"
      },
      {
        "image": "/images/mri/ankle_1/ankle_1_p354_3.jpeg",
        "caption": "MRI peroneal tendon protocol and planning of axial oblique scans"
      },
      {
        "image": "/images/mri/ankle_1/ankle_1_p354_4.jpeg",
        "caption": "MRI peroneal tendon protocol and planning of coronal oblique scans"
      }
    ],
    "imageCount": 5
  },
  "foot": {
    "key": "foot",
    "title": "Foot",
    "titleAr": "فحص القدم (Foot)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/foot/foot_p357_0.jpeg",
        "caption": "MRI foot positioning"
      },
      {
        "image": "/images/mri/foot/foot_p357_1.jpeg",
        "caption": "foot mri localizer"
      },
      {
        "image": "/images/mri/foot/foot_p357_2.jpeg",
        "caption": "MRI FOOT PLANNING OF AXIAL IMAGES"
      },
      {
        "image": "/images/mri/foot/foot_p357_3.jpeg",
        "caption": "MRI FOOT PLANNING OF CORONAL IMAGES"
      },
      {
        "image": "/images/mri/foot/foot_p357_4.jpeg",
        "caption": "MRI FOOT PLANNING OF SAGITTAL IMAGES"
      }
    ],
    "imageCount": 5
  },
  "shoulder": {
    "key": "shoulder",
    "title": "Shoulder",
    "titleAr": "فحص الكتف (Shoulder)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/shoulder/shoulder_p360_0.jpeg",
        "caption": "MRI shoulder positioning photo"
      },
      {
        "image": "/images/mri/shoulder/shoulder_p360_1.jpeg",
        "caption": "mri shoulder localizer planning image"
      },
      {
        "image": "/images/mri/shoulder/shoulder_p360_2.jpeg",
        "caption": "planning and protocol of shoulder mri axial scans"
      },
      {
        "image": "/images/mri/shoulder/shoulder_p360_3.jpeg",
        "caption": "planning and protocol of shoulder mri coronal scans"
      },
      {
        "image": "/images/mri/shoulder/shoulder_p360_4.jpeg",
        "caption": "planning of shoulder mri sagittal scans - MRI"
      }
    ],
    "imageCount": 5
  },
  "elbow": {
    "key": "elbow",
    "title": "Elbow",
    "titleAr": "فحص المرفق (Elbow)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/elbow/elbow_p363_0.jpeg",
        "caption": "MRI elbow positioning photo"
      },
      {
        "image": "/images/mri/elbow/elbow_p363_1.jpeg",
        "caption": "mri planning of elbow localizer scan - MRI"
      },
      {
        "image": "/images/mri/elbow/elbow_p363_2.jpeg",
        "caption": "mri planning of elbow axial scan - MRI"
      },
      {
        "image": "/images/mri/elbow/elbow_p363_3.jpeg",
        "caption": "mri planning of elbow coronal scan - MRI"
      },
      {
        "image": "/images/mri/elbow/elbow_p363_4.jpeg",
        "caption": "mri planning of elbow sagittal scan - MRI"
      }
    ],
    "imageCount": 5
  },
  "wrist": {
    "key": "wrist",
    "title": "Wrist",
    "titleAr": "فحص المعصم (Wrist)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/wrist/wrist_p366_0.jpeg",
        "caption": "MRI wrist positioning"
      },
      {
        "image": "/images/mri/wrist/wrist_p366_1.jpeg",
        "caption": "mri wrist localizer - MRI"
      },
      {
        "image": "/images/mri/wrist/wrist_p366_2.jpeg",
        "caption": "mri wrist planning of axial images"
      },
      {
        "image": "/images/mri/wrist/wrist_p366_3.jpeg",
        "caption": "mri planning of Wrist scan 4 - MRI"
      },
      {
        "image": "/images/mri/wrist/wrist_p366_4.jpeg",
        "caption": "mri planning of Wrist scan 5 - MRI"
      }
    ],
    "imageCount": 5
  },
  "coronal_pre_contrast_image_1_mri": {
    "key": "coronal_pre_contrast_image_1_mri",
    "title": "Coronal Pre Contrast Image 1 - Mri",
    "titleAr": "Coronal Pre Contrast Image 1 - Mri",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/coronal_pre_contrast_image_1_mri/coronal_pre_contrast_image_1_mri_p367_0.jpeg",
        "caption": "magnetic resonance angiography (MRA) upper arm ( humours ) T1 flash magnetic resonance angiography (MRA) upper arm ( humours ) T1 flash"
      },
      {
        "image": "/images/mri/coronal_pre_contrast_image_1_mri/coronal_pre_contrast_image_1_mri_p367_1.jpeg",
        "caption": "coronal pre contrast image 1 - MRI"
      },
      {
        "image": "/images/mri/coronal_pre_contrast_image_1_mri/coronal_pre_contrast_image_1_mri_p367_2.jpeg",
        "caption": "coronal pre contrast image 2 - MRI"
      },
      {
        "image": "/images/mri/coronal_pre_contrast_image_1_mri/coronal_pre_contrast_image_1_mri_p367_3.jpeg",
        "caption": "magnetic resonance angiography (MRA) upper arm ( humours ) T1 flash magnetic resonance angiography (MRA) upper arm ( humours ) T1 flash"
      }
    ],
    "imageCount": 4
  },
  "coronal_3d": {
    "key": "coronal_3d",
    "title": "Coronal 3D",
    "titleAr": "Coronal 3D",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/coronal_3d/coronal_3d_p371_0.jpeg",
        "caption": "mri upper arm (humerus)positioning"
      },
      {
        "image": "/images/mri/coronal_3d/coronal_3d_p371_1.jpeg",
        "caption": "mra upper arm localizer image - MRI"
      },
      {
        "image": "/images/mri/coronal_3d/coronal_3d_p371_2.jpeg",
        "caption": "magnetic resonance angiography(MRA) upper arm protocols and"
      },
      {
        "image": "/images/mri/coronal_3d/coronal_3d_p371_3.jpeg",
        "caption": "planning of coronal 3d scans - MRI"
      }
    ],
    "imageCount": 4
  },
  "legs_positioning_mri": {
    "key": "legs_positioning_mri",
    "title": "Mra Legs Positioning - Mri",
    "titleAr": "فحص تصوير الأوعية الدموية (Mra Legs Positioning - Mri)",
    "category": "msk",
    "items": [
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_0.jpeg",
        "caption": "mra legs positioning - MRI"
      },
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_1.jpeg",
        "caption": "mra legs lower leg localizer - MRI"
      },
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_2.jpeg",
        "caption": "mra upper leg localizer - MRI"
      },
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_3.jpeg",
        "caption": "planning MRA legs vesal localizer upper leg - MRI"
      },
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_4.jpeg",
        "caption": "mra abdomen localizer - MRI"
      },
      {
        "image": "/images/mri/legs_positioning_mri/legs_positioning_mri_p375_5.jpeg",
        "caption": "planning MRA legs vesal localizer abdomen.jpg3 - MRI"
      }
    ],
    "imageCount": 6
  },
  "localizer_images": {
    "key": "localizer_images",
    "title": "• Mri Localizer Images",
    "titleAr": "• Mri Localizer Images",
    "category": "special",
    "items": [
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_0.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 1 - MRI"
      },
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_1.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 2 - MRI"
      },
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_2.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 3 - MRI"
      },
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_3.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 4 - MRI"
      },
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_4.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 5 - MRI"
      },
      {
        "image": "/images/mri/localizer_images/localizer_images_p377_5.jpeg",
        "caption": "mri planning of • Mri Localizer Images scan 6 - MRI"
      }
    ],
    "imageCount": 6
  }
};