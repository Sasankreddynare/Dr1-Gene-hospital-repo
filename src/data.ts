import { Doctor, Service, Package, HomeCareService, Testimonial, GalleryItem } from "./types";

export const HOSPITAL_CONTACT = {
  name: "Dr1 Gene Hospital",
  tagline: "We Find. We Treat.",
  address: "Beside One World International School, Goravigere (V), Whitefield, Bangalore – 560067",
  phones: ["+91 9035054532", "+91 9035054533"],
  whatsapp: "+919035054532",
  email: "healthcare@dr1gene.com",
  altEmail: "mohan.srinivas186@gmail.com",
  instagram: "https://www.instagram.com/dr1gene_hospital",
  mapsLink: "https://share.google/EpaolNOvF8i6JT3J6",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8930432326756!2d77.7618035!3d13.0035882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fbce1e7a469%3A0x7d6a5bf2ea8149e2!2sOne%20World%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-jayaprasad",
    name: "Dr (Major) JAYAPRASAD V",
    specialty: "CARDIOLOGIST",
    qualifications: ["MBBS", "MD (General Medicine)", "DNB in Cardiology"],
    skills: ["General Medicine", "Cardiac Diagnostics", "Hypertension Care", "Heart Care"]
  },
  {
    id: "dr-vinay",
    name: "Dr VINAY KUMAR M",
    specialty: "PEDIATRICS",
    qualifications: ["MBBS", "M.D. PEDIATRICS"],
    skills: ["Pediatric Care", "Childhood Nutrition", "Neonatal Care"]
  },
  {
    id: "dr-krishna",
    name: "Dr. G. KRISHNA NARESH GOUD",
    specialty: "ORTHOPEDIC",
    qualifications: ["MBBS", "DNB (Ortho)", "D.ORTHO", "FAMS (New Delhi)", "FIJR (S Korea)"],
    skills: ["Joint Replacement", "Complex Fracture Fixation", "Sports Medicine", "Arthroscopy"]
  },
  {
    id: "dr-jayaram",
    name: "Dr. JAYARAM GOWDA S",
    specialty: "E N T",
    qualifications: ["MBBS", "Diploma in Otorhinolaryngology (DLO)", "ENT / Otorhinolaryngologist"],
    skills: ["Micro-Ear Surgery", "Sinus Treatments", "Allergy Management"]
  },
  {
    id: "dr-srinivas",
    name: "Dr SRINIVAS K S",
    specialty: "DENTIST",
    qualifications: ["BDS", "MDS", "AFLD"],
    skills: ["Cosmetic Dentistry", "Root Canal Treatments", "Dental Implants"]
  },
  {
    id: "dr-anil",
    name: "Dr ANIL KUMAR (PT)",
    specialty: "PHYSIOTHERAPY",
    qualifications: ["BPT", "MPT", "P.G. DIPLOMA FITNESS & SPORTS", "CAPES, CPRS, CMT, CDN, CEDN"],
    skills: ["Sports Physical Therapy", "Post-Surgical Rehab", "Neuromuscular Training"]
  },
  {
    id: "dr-sushma",
    name: "Dr. Sushma A",
    specialty: "Consultant Dermatologist",
    qualifications: ["Consultant Dermatologist"],
    timings: "Monday, Wednesday & Friday: 2PM to 4PM & 6PM to 9PM | Tuesday, Thursday & Saturday: 6PM to 9PM",
    skinProblems: [
      "Psoriasis",
      "Vitiligo",
      "Melasma and Freckles",
      "Hair Fall Problem",
      "Dandruff",
      "Dark Spot on Face",
      "Acne and Acne Scars",
      "Skin problem in Children",
      "Sexually Transmitted Disease",
      "Cosmetic Treatment",
      "Leprosy",
      "Fungal Infection",
      "Scabies and Head Lice"
    ],
    skinProcedures: [
      "LASER HAIR REMOVAL",
      "RADIO FREQUENCY TREATMENT",
      "ELECTRO CAUTERY",
      "CHEMICAL PEELING",
      "PRP/ GFC TREATMENT",
      "NAIL SURGERY",
      "CYST/ LIPOMA EXCISION",
      "SKIN TAG/ WART/ CORN REMOVAL",
      "VITILIGO SURGERY",
      "TATTOO REMOVAL"
    ],
    skills: ["Skin Related Problems", "Skin Related Procedures"]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "general-medicine",
    title: "General Medicine",
    icon: "Stethoscope",
    shortDesc: "Comprehensive diagnostics and care for a wide range of acute and chronic medical conditions.",
    fullDesc: "Our General Medicine department is the first point of contact for patient care, managing seasonal illnesses, hypertension, metabolic disorders, and chronic life-style diseases with custom diagnostics and continuous therapy tracking.",
    symptoms: ["Chronic Fever", "Uncontrolled Blood Pressure", "Unexplained Fatigue", "Digestive Irregularities", "Respiratory Issues"],
    conditions: ["Diabetes Mellitus", "Hypertension", "Thyroid Disorders", "Asthma & COPD", "Infectious Diseases"],
    benefits: ["Early Detection & Prevention", "Holistic Treatment Plans", "Expert Coordination with Specialists", "Continuous Monitoring Support"]
  },
  {
    id: "general-surgery",
    title: "General Surgery",
    icon: "Scissors",
    shortDesc: "Safe, state-of-the-art surgical interventions for simple and complex clinical requirements.",
    fullDesc: "Highly advanced operating theaters equipped for keyhole surgeries, trauma care, tumor removals, and emergency surgical procedures, backed by meticulous pre-op and post-op care cycles.",
    symptoms: ["Severe Abdominal Pain", "Lumps or Hernias", "Gallstone Discomfort", "Chronic Appendicitis Issues"],
    conditions: ["Hernias", "Gallbladder Stones", "Appendicitis", "Lipomas & Cysts", "Diabetic Foot Ulcers"],
    benefits: ["Minimally Invasive Techniques", "Faster Patient Recovery Time", "State-of-the-art OT Facilities", "Experienced Post-Surgical Support Team"]
  },
  {
    id: "cardiology",
    title: "Cardiology",
    icon: "Activity",
    shortDesc: "Advanced screening, preventive diagnostics, and disease management for complete heart health.",
    fullDesc: "Our Cardiology services focus on early cardiac disease detection, hypertension control, lifestyle counseling, ECG screenings, and coordinate therapy for cardiovascular wellness directed by Dr. Jayaprasad V.",
    symptoms: ["Chest Pain or Tightness", "Frequent Palpitations", "Shortness of Breath", "Sudden Dizziness", "Swollen Ankles"],
    conditions: ["Coronary Artery Disease", "Arrhythmias", "Heart Failure", "Hypertensive Heart Disease", "Valvular Disorders"],
    benefits: ["Led by DNB Cardiologist", "Advanced Screening Protocols", "Custom Preventive Care Plans", "Prompt Cardiac Diagnosis"]
  },
  {
    id: "neurology",
    title: "Neurology",
    icon: "Brain",
    shortDesc: "Expert clinical evaluation and medical care for complex brain and nervous system disorders.",
    fullDesc: "Focuses on providing diagnostics, therapeutic plans, and continuous rehabilitation support for nerve, spinal cord, and brain disorders such as migraines, neuropathy, and movement issues.",
    symptoms: ["Chronic Migraines", "Numbness or Tingling", "Loss of Balance", "Tremors or Seizures", "Memory Problems"],
    conditions: ["Stroke Recovery", "Epilepsy", "Parkinson's Disease", "Peripheral Neuropathy", "Multiple Sclerosis"],
    benefits: ["Precise Diagnostics", "Integrated Physiotherapy Support", "Long-term Symptom Control", "Enhanced Quality of Life"]
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    icon: "Bone",
    shortDesc: "Expert bone, joint, and muscle treatments utilizing modern arthroscopy and rehabilitation.",
    fullDesc: "Under Dr G Krishna Naresh Goud, our orthopedics team specializes in joint pain treatments, sports injuries, ligament tears, and bone density management with customized rehab pathways.",
    symptoms: ["Severe Joint Pain", "Stiff Knees or Shoulders", "Mobility Difficulties", "Post-injury swelling", "Muscle Tears"],
    conditions: ["Osteoarthritis", "Ligament Tears (ACL/MCL)", "Fractures & Dislocations", "Spondylosis", "Osteoporosis"],
    benefits: ["Joint Reconstruction Experts", "Korean Fellowship Trained Specialists", "Advanced Non-Surgical Therapies", "Complete Post-Injury Rehabilitation"]
  },
  {
    id: "ent",
    title: "ENT",
    icon: "Ear",
    shortDesc: "Comprehensive diagnosis and micro-surgical options for ear, nose, throat, and allergies.",
    fullDesc: "Led by Dr Jayaram Gowda S, we manage allergic rhinitis, chronic sinusitis, hearing disorders, and throat infections with micro-surgical precision and specialized therapy.",
    symptoms: ["Hearing Loss", "Persistent Sinus Pressure", "Chronic Sore Throat", "Vertigo or Dizziness", "Nasal Blockage"],
    conditions: ["Sinusitis", "Tonsillitis", "Otitis Media", "Allergic Rhinitis", "Sleep Apnea"],
    benefits: ["Micro-Ear/Nose Surgical Setup", "Advanced Allergy Diagnostics", "Expert Pediatric ENT Care", "Rehabilitation for Vertigo"]
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    icon: "Droplet",
    shortDesc: "Advanced therapeutic care for digestive system, liver, and biliary tract disorders.",
    fullDesc: "Our gastroenterology department handles acid reflux, irritable bowel conditions, fatty liver, and pancreatic disorders using modern diagnostic screenings and comprehensive care.",
    symptoms: ["Chronic Indigestion", "Acid Reflux", "Persistent Bloating", "Abdominal Cramping", "Jaundice Symptoms"],
    conditions: ["GERD", "IBS (Irritable Bowel)", "Fatty Liver Disease", "Peptic Ulcers", "Gastritis"],
    benefits: ["In-house Advanced Screening", "Customized Dietary Care", "Fast Symptomatic Relief", "Preventative Colorectal Screening"]
  },
  {
    id: "urology",
    title: "Urology",
    icon: "ShieldAlert",
    shortDesc: "Compassionate, specialist management of urinary tract health and kidney stones.",
    fullDesc: "Addresses prostate issues, recurring urinary tract infections, and offers painless procedures for kidney stone removal and bladder health care.",
    symptoms: ["Painful Urination", "Lower Back Pain", "Blood in Urine", "Frequent Night Urination", "Incontinence"],
    conditions: ["Kidney Stones", "Urinary Tract Infections", "Prostate Enlargement (BPH)", "Overactive Bladder"],
    benefits: ["Painless Treatment Routines", "Highly Confidential Care", "Advanced Urology Screening", "Preventative Stone Protocols"]
  },
  {
    id: "obg",
    title: "Obstetrics & Gynecology (OBG)",
    icon: "HeartHandshake",
    shortDesc: "Comprehensive women's health care spanning pregnancy support, painless delivery, and wellness.",
    fullDesc: "Provides holistic prenatal counseling, advanced ultrasound fetal scans, maternity support, gynecological screenings, and safe, compassionate child birth procedures.",
    symptoms: ["Irregular Periods", "Pelvic Discomfort", "Pregnancy Symptoms", "Hormonal Swings"],
    conditions: ["PCOS & PCOD", "High-Risk Pregnancy", "Endometriosis", "Fibroids", "Menopause Challenges"],
    benefits: ["Compassionate Lady Doctors", "Comprehensive Prenatal Packages", "Modern Maternity Suites", "High-Risk Pregnancy Safety"]
  },
  {
    id: "dermatology",
    title: "Dermatology",
    icon: "Sparkles",
    shortDesc: "Dedicated medical, pediatric, and cosmetic solutions for perfect skin and hair health.",
    fullDesc: "Headed by Dr Sushma A, this department provides state-of-the-art procedures like Laser Hair Removal, PRP, and Chemical Peels along with clinical cures for severe skin infections.",
    symptoms: ["Severe Acne/Scars", "Persistent Skin Rashes", "Sudden Hair Fall", "Skin Pigmentation", "Dry Itchy Skin"],
    conditions: ["Psoriasis", "Vitiligo", "Melasma & Freckles", "Fungal Infections", "STDs & Scabies"],
    benefits: ["Aesthetic Procedures", "Highly Safe Laser Technologies", "Pediatric Skin Experts", "Visible Long-term Results"]
  },
  {
    id: "psychiatry",
    title: "Psychiatrist",
    icon: "Smile",
    shortDesc: "Compassionate mental health consultation, counseling, and therapeutic management.",
    fullDesc: "Professional and supportive mental health therapy managing stress, anxiety, depression, sleep disorders, and pediatric developmental support.",
    symptoms: ["Constant Worry or Anxiety", "Prolonged Sadness", "Severe Insomnia", "Drastic Mood Swings", "Inability to Concentrate"],
    conditions: ["Anxiety & Panic Disorders", "Depression", "OCD", "Insomnia", "ADHD in Children"],
    benefits: ["Absolute Confidentiality", "In-depth counseling sessions", "Evidence-based Medication Care", "Supportive Family Counseling"]
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    icon: "Flame",
    shortDesc: "Targeted mobilization and advanced exercise therapy to restore muscle and bone functions.",
    fullDesc: "Directed by Dr Anil Kumar PT, our advanced physical rehab includes neuromuscular training, laser-guided recovery, and sports physical therapy.",
    symptoms: ["Chronic Back Pain", "Stiff Neck or Back", "Post-Surgical Weakness", "Sports Injury Limp"],
    conditions: ["Slip Disc", "Frozen Shoulder", "Stroke Rehabilitation", "Post-fracture Stiffness", "Ligament Strains"],
    benefits: ["Customized Rehab Layouts", "Modern Electrotherapy Equipment", "Experienced PT Professionals", "Faster Safe Mobility Return"]
  }
];

export const PACKAGES_DATA: Package[] = [
  {
    id: "pkg-advanced",
    name: "Advanced Full Body Checkup",
    price: 2499,
    originalPrice: 4999,
    isPopular: true,
    includes: [
      "CBC (Complete Blood Count)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Iron Profile",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c (Average Blood Sugar)",
      "Calcium",
      "Vitamin B12",
      "Vitamin D",
      "Testosterone (Total)",
      "Homocysteine",
      "Lipoprotein LP-A",
      "APO-B/APO-A1",
      "HS CRP (Cardiac Risk Indicator)",
      "Lipase",
      "Amylase"
    ]
  },
  {
    id: "pkg-full",
    name: "Full Body Checkup",
    price: 1999,
    originalPrice: 3500,
    isPopular: false,
    includes: [
      "CBC (Complete Blood Count)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Iron Profile",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c (Average Blood Sugar)",
      "Calcium",
      "Vitamin B12",
      "Vitamin D",
      "Complete Urine Examination",
      "Testosterone (Total)"
    ]
  },
  {
    id: "pkg-basic",
    name: "Basic Health Checkup",
    price: 1250,
    originalPrice: 2200,
    isPopular: false,
    includes: [
      "CBC (Complete Blood Count)",
      "Kidney Function Test (KFT)",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Complete Urine Examination",
      "Thyroid Profile (TSH)",
      "HbA1c (Average Blood Sugar)",
      "Fasting Glucose"
    ]
  },
  {
    id: "pkg-diabetic",
    name: "Diabetic Package",
    price: 549,
    originalPrice: 1200,
    isPopular: false,
    includes: [
      "Fasting Glucose",
      "FUS (Fasting Urine Sugar)",
      "HbA1c (Average Blood Sugar)",
      "Micro Albumin",
      "Creatinine",
      "Micro Albumin / Creatinine Ratio"
    ]
  }
];

export const HOME_CARE_DATA: HomeCareService[] = [
  {
    id: "hc-injection",
    title: "Injection at Home",
    description: "Experienced nursing staff will administer subcutaneous, intramuscular, or intravenous (IV) injections comfortably at your bedside.",
    icon: "Syringe"
  },
  {
    id: "hc-dressing",
    title: "Dressing & Wound Care",
    description: "Hygienic wound cleaning, stitches removal, surgical dressing, and specialized diabetic foot care by certified professionals.",
    icon: "Layers"
  },
  {
    id: "hc-vaccine",
    title: "Vaccination at Home",
    description: "Timely administration of flu, cervical cancer, pneumonia, and pediatric immunization vaccines safely at home.",
    icon: "ShieldCheck"
  },
  {
    id: "hc-ecg",
    title: "ECG at Home",
    description: "Quick, portable electrocardiogram (ECG) setup at home with immediate digital reports sent directly to your cardiologist.",
    icon: "Heart"
  },
  {
    id: "hc-blood",
    title: "Blood Test & Home Sample Collection",
    description: "Highly sanitary sample extraction from the convenience of your living room, with free home pick-up on qualifying packages.",
    icon: "TestTube"
  },
  {
    id: "hc-pft",
    title: "Pulmonary Function Test (PFT)",
    description: "Home-administered breathing test using mobile spirometer tools to evaluate lung volume and respiratory disorders easily.",
    icon: "Wind"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Karan Sharma",
    rating: 5,
    date: "1 Month Ago",
    text: "The doctors here are exceptionally helpful. Visited Dr. Krishna for my father's severe knee arthritis. Within 3 weeks of custom physiotherapy and treatment, he is now walking comfortably. Very neat and premium clinical atmosphere beside Goravigere.",
    source: "Google",
    department: "Orthopedics"
  },
  {
    id: "t2",
    name: "Priya Murthy",
    rating: 5,
    date: "2 Weeks Ago",
    text: "Amazing full-body checkup packages! The ₹2499 Advanced Full Body package includes comprehensive blood tests like Vitamin D, Homocysteine, Lipoprotein, etc. They provided free home sample collection right early morning and sent verified online reports by evening.",
    source: "Google",
    department: "Diagnostics"
  },
  {
    id: "t3",
    name: "Mohit Deshmukh",
    rating: 5,
    date: "3 Weeks Ago",
    text: "Visited Dr. Sushma A for my daughter's persistent vitiligo and dry skin patches. Her treatment was highly structured, explaining every detail with great patience. The skin procedure rooms are highly sterile and modern. Dr1 Gene Hospital is a boon for Whitefield area.",
    source: "Patient Story",
    department: "Dermatology"
  },
  {
    id: "t4",
    name: "Anand R.",
    rating: 5,
    date: "2 Months Ago",
    text: "Exceptional emergency support! My grandfather had breathing distress at night, they immediately arranged oxygen and ambulance support. Dr. Jayaprasad evaluated him at 3 AM with complete precision. Extremely trustable.",
    source: "Patient Story",
    department: "Cardiology"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Premium Reception Counter & Waiting Lounge",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g2",
    title: "Main Hospital Facade & Decorated Entrance",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g3",
    title: "Consultation Suite with Modern Seating",
    category: "Consultation",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g4",
    title: "Cardio Diagnostics & ECG Lounge",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g5",
    title: "Fully Equipped Laboratory and Pharmacy Desk",
    category: "Pharmacy",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g6",
    title: "Pediatric Friendly Waiting Section",
    category: "Patient Care",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g7",
    title: "Dr G Krishna Naresh Goud Ortho Consultation",
    category: "Doctors",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "g8",
    title: "Dermatology Procedures Laser Center",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=450"
  }
];

export const DERMATOLOGY_PAGES_DATA = {
  skinProblems: [
    { name: "Psoriasis", desc: "Chronic autoimmune skin disorder causing dry, itchy scales." },
    { name: "Vitiligo", desc: "Loss of skin pigment causing light or white patches." },
    { name: "Melasma & Freckles", desc: "Dark hyperpigmented patches on cheeks and nose." },
    { name: "Hair Fall Problem", desc: "Expert assessment for pattern baldness and diffuse hair shedding." },
    { name: "Dandruff & Head Lice", desc: "Therapeutic scale cleansing and long-term scalp cures." },
    { name: "Dark Spot on Face", desc: "Post-inflammatory spot correction and brighteners." },
    { name: "Acne & Acne Scars", desc: "Clinical grading control and RF micro-needling for deep scars." },
    { name: "Skin problems in Children", desc: "Gentle cures for pediatric eczema, rashes, and ringworms." },
    { name: "Sexually Transmitted Diseases (STDs)", desc: "Private, highly confidential, empathetic diagnostic cures." },
    { name: "Cosmetic Dermatology", desc: "Advanced glow therapies, facial rejuvenation, and chemical peels." },
    { name: "Leprosy Cure & Evaluation", desc: "Specialist evaluation, multi-drug therapy guides, and support." },
    { name: "Fungal Infections", desc: "Antifungal medication courses and recurrences protection." },
    { name: "Scabies & Head Lice", desc: "Fast community-based anti-parasitic treatment programs." }
  ],
  procedures: [
    { name: "Laser Hair Removal", desc: "High-grade painless laser targets hair roots for permanent reduction." },
    { name: "Radio Frequency Treatment", desc: "Non-surgical skin firming and scar resurfacing therapy." },
    { name: "Electro Cautery", desc: "Safe removal of unwanted skin bumps, moles, and cherry angiomas." },
    { name: "Chemical Peeling", desc: "Gentle medical exfoliators for acne scars, pigmentation, and glowing skin." },
    { name: "PRP / GFC Treatment", desc: "Platelet-Rich Plasma & Growth Factor Concentrate for skin rejuvenation and hair re-growth." },
    { name: "Nail Surgery", desc: "Painless relief for ingrown toenails and advanced nail bed deformities." },
    { name: "Cyst / Lipoma Excision", desc: "In-office minor surgical removal under local anesthesia." },
    { name: "Skin Tag / Wart / Corn Removal", desc: "Instant cryo or electro-cautery procedures for clear skin." },
    { name: "Vitiligo Surgery", desc: "Skin melanocyte transplantation for stable white spot coverage." },
    { name: "Tattoo Removal", desc: "Laser targeting breaks down tattoo ink pigments cleanly with no scarring." }
  ]
};
