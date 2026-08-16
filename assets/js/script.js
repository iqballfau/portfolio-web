/* =========================================================
   IQBAL FAUZAN — PORTFOLIO SCRIPT
   Sections: UI DICTIONARY, CONTENT DATA, I18N ENGINE,
   RENDER FUNCTIONS, SCROLL REVEAL, NAV, INIT
   Language priority: 1. English  2. Deutsch  3. Indonesia
   ========================================================= */

/* ---------------------------------------------------------
   1. UI DICTIONARY (static interface strings)
--------------------------------------------------------- */
const UI = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "Bridging OT & IT for Industry 4.0",
      status: "Open to new opportunities",
      ctaProjects: "View Projects",
      ctaCV: "Download CV",
    },
    about: {
      label: "REC.01 — ABOUT",
      heading: "About me",
      stackLabel: "Primary stack",
    },
    skills: { label: "REC.02 — SKILLS", heading: "Technical skills" },
    experience: {
      label: "REC.03 — EXPERIENCE",
      heading: "Work history",
      current: "Present",
      stackLabel: "Tech stack",
    },
    projects: {
      label: "REC.04 — PROJECTS",
      heading: "Featured projects",
      headingAll: "All projects",
      subheadingAll:
        "Full documentation of industrial IoT & automation projects I've worked on.",
      viewAll: "View all projects →",
      viewDetail: "View detail →",
      backToProjects: "← All projects",
      nextProject: "Next project →",
      role: "Role",
      company: "Company",
      period: "Period",
      description: "Description",
      responsibilities: "Responsibilities & technical tasks",
      technologies: "Technologies",
    },
    education: { label: "REC.05 — EDUCATION", heading: "Education" },
    certifications: {
      label: "REC.06 — CERTIFICATIONS",
      heading: "Certifications & achievements",
    },
    languages: { label: "REC.07 — LANGUAGES", heading: "Languages" },
    contact: {
      label: "REC.08 — CONTACT",
      heading: "Let's connect",
      body: "Open to discussing IoT, industrial automation, or other collaboration opportunities.",
      emailCta: "Send an email",
    },
    cv: {
      hint: "Use your browser's print function (Ctrl/Cmd + P) to save this as a PDF.",
      print: "Print / save PDF",
    },
    footer: {
      drawnBy: "DRAWN BY",
      date: "DATE",
      rev: "REV",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
      cv: "Lebenslauf",
    },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "OT & IT für Industrie 4.0 verbinden",
      status: "Offen für neue Möglichkeiten",
      ctaProjects: "Projekte ansehen",
      ctaCV: "Lebenslauf herunterladen",
    },
    about: {
      label: "REC.01 — ÜBER MICH",
      heading: "Über mich",
      stackLabel: "Kerntechnologien",
    },
    skills: {
      label: "REC.02 — FÄHIGKEITEN",
      heading: "Technische Fähigkeiten",
    },
    experience: {
      label: "REC.03 — ERFAHRUNG",
      heading: "Berufserfahrung",
      current: "Aktuell",
      stackLabel: "Technologien",
    },
    projects: {
      label: "REC.04 — PROJEKTE",
      heading: "Ausgewählte Projekte",
      headingAll: "Alle Projekte",
      subheadingAll:
        "Vollständige Dokumentation der industriellen IoT- und Automatisierungsprojekte, an denen ich gearbeitet habe.",
      viewAll: "Alle Projekte ansehen →",
      viewDetail: "Details ansehen →",
      backToProjects: "← Alle Projekte",
      nextProject: "Nächstes Projekt →",
      role: "Rolle",
      company: "Unternehmen",
      period: "Zeitraum",
      description: "Beschreibung",
      responsibilities: "Verantwortlichkeiten & technische Aufgaben",
      technologies: "Technologien",
    },
    education: { label: "REC.05 — AUSBILDUNG", heading: "Ausbildung" },
    certifications: {
      label: "REC.06 — ZERTIFIZIERUNGEN",
      heading: "Zertifizierungen & Erfolge",
    },
    languages: { label: "REC.07 — SPRACHEN", heading: "Sprachen" },
    contact: {
      label: "REC.08 — KONTAKT",
      heading: "Lass uns in Kontakt treten",
      body: "Offen für Gespräche über IoT, industrielle Automatisierung oder andere Kooperationsmöglichkeiten.",
      emailCta: "E-Mail senden",
    },
    cv: {
      hint: "Nutzen Sie die Druckfunktion Ihres Browsers (Strg/Cmd + P), um dies als PDF zu speichern.",
      print: "Drucken / als PDF speichern",
    },
    footer: {
      drawnBy: "ERSTELLT VON",
      date: "DATUM",
      rev: "REV",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  id: {
    nav: {
      home: "Home",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Project",
      contact: "Kontak",
      cv: "CV",
    },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "Menjembatani OT & IT untuk Industry 4.0",
      status: "Terbuka untuk peluang baru",
      ctaProjects: "Lihat Project",
      ctaCV: "Unduh CV",
    },
    about: {
      label: "REC.01 — TENTANG",
      heading: "Tentang saya",
      stackLabel: "Primary stack",
    },
    skills: { label: "REC.02 — KEAHLIAN", heading: "Keahlian teknis" },
    experience: {
      label: "REC.03 — PENGALAMAN",
      heading: "Riwayat pekerjaan",
      current: "Saat ini",
      stackLabel: "Tech stack",
    },
    projects: {
      label: "REC.04 — PROJECT",
      heading: "Project unggulan",
      headingAll: "Semua project",
      subheadingAll:
        "Dokumentasi lengkap project industrial IoT & automation yang pernah saya kerjakan.",
      viewAll: "Lihat semua project →",
      viewDetail: "Lihat detail →",
      backToProjects: "← Semua project",
      nextProject: "Project berikutnya →",
      role: "Role",
      company: "Perusahaan",
      period: "Periode",
      description: "Deskripsi",
      responsibilities: "Tanggung jawab & tugas teknis",
      technologies: "Teknologi",
    },
    education: { label: "REC.05 — EDUKASI", heading: "Pendidikan" },
    certifications: {
      label: "REC.06 — SERTIFIKASI",
      heading: "Sertifikasi & prestasi",
    },
    languages: { label: "REC.07 — BAHASA", heading: "Bahasa" },
    contact: {
      label: "REC.08 — KONTAK",
      heading: "Mari terhubung",
      body: "Terbuka untuk diskusi seputar IoT, industrial automation, atau peluang kolaborasi lainnya.",
      emailCta: "Kirim email",
    },
    cv: {
      hint: "Gunakan tombol cetak di browser (Ctrl/Cmd + P) untuk menyimpan sebagai PDF.",
      print: "Cetak / simpan PDF",
    },
    footer: {
      drawnBy: "DRAWN BY",
      date: "DATE",
      rev: "REV",
      rights: "Seluruh hak dilindungi.",
    },
  },
};

/* ---------------------------------------------------------
   2. CONTENT DATA
--------------------------------------------------------- */
const PROFILE = {
  name: "Iqbal Fauzan",
  location: "Bekasi, Indonesia",
  phone: "+62 812 2022 7189",
  email: "iqbaalfau@gmail.com",
  github: "github.com/iqballfau",
  githubUrl: "https://github.com/iqballfau",
  linkedin: "linkedin.com/in/iqbaalfauzan",
  linkedinUrl: "https://linkedin.com/in/iqbaalfauzan",
  website: "iqbalfauzan.my.id",
  dob: "04 January 2000",
  about: {
    en: "IoT and Automation Engineer with a progressive path from hands-on machine operation in a European automotive manufacturing environment to leading industrial IIoT platform integration. Proven track record bridging Operational Technology (OT) and Information Technology (IT): designing plant-wide industrial wireless networks, integrating heterogeneous PLC brands (Siemens, Mitsubishi, Keyence) via OPC UA and Modbus RTU/TCP, and architecting centralized IIoT monitoring platforms that support Industry 4.0 digitalization roadmaps. Experienced across the full automation stack — from AGV/AMR control systems and real-time data acquisition to Power BI-based reporting for production, energy, and quality management.",
    de: "IoT- und Automatisierungsingenieur mit einem stetigen Werdegang – vom praktischen Maschinenbetrieb in einem europäischen Automobil-Fertigungsumfeld bis zur Leitung der Integration industrieller IIoT-Plattformen. Nachgewiesene Erfolgsbilanz in der Verbindung von Operational Technology (OT) und Information Technology (IT): Entwurf werksweiter industrieller Funknetzwerke, Integration heterogener SPS-Marken (Siemens, Mitsubishi, Keyence) über OPC UA und Modbus RTU/TCP sowie die Konzeption zentraler IIoT-Überwachungsplattformen zur Unterstützung von Industrie-4.0-Digitalisierungs-Roadmaps. Erfahren im gesamten Automatisierungs-Stack – von AGV/AMR-Steuerungssystemen und Echtzeit-Datenerfassung bis hin zu Power-BI-basiertem Reporting für Produktion, Energie und Qualitätsmanagement.",
    id: "IoT and Automation Engineer dengan perjalanan karier yang terus berkembang — mulai dari pengoperasian mesin secara langsung di lingkungan manufaktur otomotif berstandar Eropa hingga memimpin integrasi platform IIoT industrial. Memiliki track record dalam menjembatani Operational Technology (OT) dan Information Technology (IT): merancang jaringan wireless industrial plant-wide, mengintegrasikan berbagai merek PLC (Siemens, Mitsubishi, Keyence) melalui OPC UA dan Modbus RTU/TCP, serta merancang platform monitoring IIoT terpusat yang mendukung roadmap digitalisasi Industry 4.0. Berpengalaman di seluruh automation stack — mulai dari sistem kontrol AGV/AMR dan real-time data acquisition hingga reporting berbasis Power BI untuk manajemen produksi, energi, dan kualitas.",
  },
  primaryStack: [
    "OPC UA",
    "Modbus RTU/TCP",
    "Node-RED",
    "Siemens TIA Portal (S7-1200)",
    "Mitsubishi & Keyence PLCs",
    "Moxa Industrial Wireless Networking",
    "Power BI",
    "MSSQL",
    "Python",
  ],
};

const SKILLS = [
  {
    label: {
      en: "Automation & Industrial Control",
      de: "Automatisierung & industrielle Steuerung",
      id: "Automation & Industrial Control",
    },
    items: [
      "PLC Programming (Siemens S7-1200/TIA Portal, Mitsubishi FX5U, Keyence KV-8000)",
      "OPC UA",
      "SCADA/HMI Data Integration",
      "Machine Vision (Keyence IV-3/IV-Navigator)",
    ],
  },
  {
    label: {
      en: "Industrial Communication & Networking",
      de: "Industrielle Kommunikation & Netzwerktechnik",
      id: "Komunikasi & Jaringan Industrial",
    },
    items: [
      "Modbus RTU/TCP",
      "Industrial Wireless Networking (Moxa AWK Series, Turbo Roaming)",
      "Industrial Ethernet",
      "TCP/IP",
    ],
  },
  {
    label: {
      en: "IIoT & Data Pipeline",
      de: "IIoT & Datenpipeline",
      id: "IIoT & Data Pipeline",
    },
    items: [
      "Node-RED",
      "IoT Data Acquisition",
      "Raspberry Pi 4",
      "NodeMCU",
      "LiDAR (Hokuyo)",
      "AMR/AGV Systems",
      "Linux",
    ],
  },
  {
    label: {
      en: "Visualization & Reporting",
      de: "Visualisierung & Reporting",
      id: "Visualisasi & Reporting",
    },
    items: ["Power BI", "ReactJS", "WebGL"],
  },
  {
    label: {
      en: "Programming Languages",
      de: "Programmiersprachen",
      id: "Bahasa Pemrograman",
    },
    items: ["Python", "JavaScript", "PHP"],
  },
  {
    label: {
      en: "Databases & Cloud",
      de: "Datenbanken & Cloud",
      id: "Database & Cloud",
    },
    items: ["MSSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    label: {
      en: "Engineering & Design Tools",
      de: "Engineering- & Design-Tools",
      id: "Tools Rekayasa & Desain",
    },
    items: ["SolidWorks (CAD)", "Unity 3D"],
  },
  {
    label: {
      en: "Mobile App Development",
      de: "Mobile-App-Entwicklung",
      id: "Pengembangan Mobile App",
    },
    items: ["Flutter", "Dart"],
  },
];

const EXPERIENCE = [
  {
    id: "musashi-iot",
    period: "01/2025 — Present",
    company: "PT. Musashi Auto Parts Indonesia",
    location: "Bekasi, Indonesia",
    current: true,
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    stack: [
      "OPC UA",
      "Node-RED",
      "Modbus RTU/TCP",
      "Siemens TIA Portal (S7-1200)",
      "Moxa AWK Series",
      "Keyence PLCs & Devices",
      "Mitsubishi PLCs",
      "Power BI",
      "MSSQL",
    ],
    bullets: {
      en: [
        "Architected and led implementation of MAC (Musashi Active Connection), a centralized IIoT platform unifying production, machine, AGV/AMR, and energy data into a single real-time dashboard — now the plant's standard reference platform for weekly production evaluation.",
        "Extended monitoring coverage to 13 forging machines (33 parameters each) and 9 heat treatment machines (28 parameters each) across heterogeneous PLC brands, including deployment of a Siemens S7-1200 as an OPC UA Server for standardized machine-to-IT data exchange.",
        "Engineered an AGV control and navigation system (Keyence KV-8000 PLC, Hokuyo LiDAR, Keyence IV-3 vision positioning), reducing daily PPC staff workload by ~20% through automated, line-triggered material dispatch.",
        "Deployed a plant-wide industrial wireless network (25 access points, Moxa Turbo Roaming) and a 130-point energy monitoring system (PM5500/ME96SSHB meters), eliminating ~2 hours/day of manual meter-reading and enabling compliance-ready CO2 emissions reporting.",
        "Supported deployment of an Autonomous Mobile Robot (AMR) for automated QC sample transport, reducing daily QC staff workload by ~10%.",
      ],
      de: [
        "Konzipierte und leitete die Implementierung von MAC (Musashi Active Connection), einer zentralen IIoT-Plattform, die Produktions-, Maschinen-, AGV/AMR- und Energiedaten in einem einzigen Echtzeit-Dashboard vereint – heute die Standard-Referenzplattform des Werks für die wöchentliche Produktionsauswertung.",
        "Erweiterte die Überwachung auf 13 Schmiedemaschinen (je 33 Parameter) und 9 Wärmebehandlungsmaschinen (je 28 Parameter) über heterogene SPS-Marken hinweg, einschließlich des Einsatzes einer Siemens S7-1200 als OPC-UA-Server für standardisierten Maschine-zu-IT-Datenaustausch.",
        "Entwickelte ein AGV-Steuerungs- und Navigationssystem (Keyence-KV-8000-SPS, Hokuyo-LiDAR, Keyence-IV-3-Bildpositionierung) und reduzierte die tägliche Arbeitslast des PPC-Personals um ca. 20 % durch automatisierten, linien-getriggerten Materialversand.",
        "Implementierte ein werksweites industrielles Funknetzwerk (25 Access Points, Moxa Turbo Roaming) sowie ein 130-Punkte-Energiemonitoringsystem (PM5500/ME96SSHB-Messgeräte), wodurch ca. 2 Stunden/Tag manuelle Zählerablesung entfielen und ein compliance-konformes CO2-Emissionsreporting ermöglicht wurde.",
        "Unterstützte den Einsatz eines Autonomous Mobile Robot (AMR) für den automatisierten Transport von QC-Proben und reduzierte die tägliche Arbeitslast des QC-Personals um ca. 10 %.",
      ],
      id: [
        "Merancang dan memimpin implementasi MAC (Musashi Active Connection), platform IIoT terpusat yang menyatukan data produksi, mesin, AGV/AMR, dan energi ke dalam satu dashboard real-time — kini menjadi platform referensi standar pabrik untuk evaluasi produksi mingguan.",
        "Memperluas cakupan monitoring ke 13 mesin forging (33 parameter per mesin) dan 9 mesin heat treatment (28 parameter per mesin) di berbagai merek PLC, termasuk deployment Siemens S7-1200 sebagai OPC UA Server untuk standardisasi pertukaran data machine-to-IT.",
        "Merancang sistem kontrol dan navigasi AGV (PLC Keyence KV-8000, LiDAR Hokuyo, vision positioning Keyence IV-3), mengurangi beban kerja harian staff PPC hingga ~20% melalui dispatch material otomatis yang dipicu oleh line.",
        "Men-deploy jaringan wireless industrial plant-wide (25 access point, Moxa Turbo Roaming) dan sistem energy monitoring 130 titik (power meter PM5500/ME96SSHB), menghilangkan ~2 jam/hari pembacaan meter manual dan memungkinkan pelaporan emisi CO2 yang compliance-ready.",
        "Mendukung deployment Autonomous Mobile Robot (AMR) untuk transport sampel QC otomatis, mengurangi beban kerja harian staff QC hingga ~10%.",
      ],
    },
  },
  {
    id: "iulb-it",
    period: "06/2024 — 12/2024",
    company: "International University of Logistics and Business",
    location: "Bandung, Indonesia",
    current: false,
    role: {
      en: "Information Technology Engineer",
      de: "IT-Ingenieur",
      id: "Information Technology Engineer",
    },
    stack: ["IT Infrastructure", "LAN/WAN Configuration", "Server Maintenance"],
    bullets: {
      en: [
        "Managed IT infrastructure (LAN/WAN, servers, databases) and provided technical support across the institution, ensuring high availability and secure data flow.",
        "Contributed to digitization of administrative workflows, bridging physical operations and IT systems.",
      ],
      de: [
        "Verwaltete die IT-Infrastruktur (LAN/WAN, Server, Datenbanken) und leistete institutionsweiten technischen Support, um hohe Verfügbarkeit und einen sicheren Datenfluss zu gewährleisten.",
        "Trug zur Digitalisierung administrativer Arbeitsabläufe bei und verband physische Abläufe mit IT-Systemen.",
      ],
      id: [
        "Mengelola infrastruktur IT (LAN/WAN, server, database) dan memberikan technical support di seluruh institusi, memastikan high availability dan alur data yang aman.",
        "Berkontribusi pada digitalisasi alur kerja administratif, menjembatani operasional fisik dengan sistem IT.",
      ],
    },
  },
  {
    id: "samudra-iot",
    period: "11/2023 — 05/2024",
    company: "PT. Samudra Teknologi Pertiwi",
    location: "Bandung, Indonesia",
    current: false,
    role: {
      en: "IoT & Automation Engineer",
      de: "IoT- & Automatisierungsingenieur",
      id: "IoT & Automation Engineer",
    },
    stack: [
      "Raspberry Pi 4",
      "Haiwell PLC",
      "UHF RFID",
      "Flutter/Dart",
      "Firebase",
      "PHP/MySQL",
    ],
    bullets: {
      en: [
        "Developed an IoT-based employee attendance and access control system (UHF RFID reader, 280kg electromagnetic lock, Flutter/Dart mobile app, Firebase backend), reducing entry-point queuing and automating work-hour reconciliation.",
        "Built an automated mobile filing cabinet combining a Haiwell PLC-driven stepper shelving mechanism with a PHP/MySQL web interface, reducing document retrieval time and optimizing limited physical storage.",
        "Bridged OT and IT by developing embedded systems (Raspberry Pi 4) integrated with PLC automation logic and cross-platform applications.",
        "Programmed and troubleshot PLC automation systems, and executed end-to-end electrical installations for client projects.",
      ],
      de: [
        "Entwickelte ein IoT-basiertes Anwesenheits- und Zutrittskontrollsystem (UHF-RFID-Lesegerät, 280-kg-Elektromagnetschloss, Flutter/Dart-App, Firebase-Backend), das Warteschlangen am Eingang reduzierte und die Arbeitszeitabrechnung automatisierte.",
        "Baute einen automatisierten mobilen Aktenschrank, der einen von einer Haiwell-SPS gesteuerten Schrittmotor-Regalmechanismus mit einer PHP/MySQL-Weboberfläche kombiniert, wodurch die Dokumentenabrufzeit verkürzt und der begrenzte physische Stauraum optimiert wurde.",
        "Verband OT und IT durch die Entwicklung eingebetteter Systeme (Raspberry Pi 4), integriert mit SPS-Automatisierungslogik und plattformübergreifenden Anwendungen.",
        "Programmierte und behob Fehler in SPS-Automatisierungssystemen und führte durchgängige elektrische Installationen für Kundenprojekte durch.",
      ],
      id: [
        "Mengembangkan sistem attendance & access control berbasis IoT (UHF RFID reader, electromagnetic lock 280kg, mobile app Flutter/Dart, backend Firebase), mengurangi antrean di pintu masuk dan mengotomatisasi rekonsiliasi jam kerja.",
        "Membangun automated mobile filing cabinet yang menggabungkan mekanisme shelving stepper motor berbasis PLC Haiwell dengan web interface PHP/MySQL, mempercepat waktu pengambilan dokumen dan mengoptimalkan penyimpanan fisik yang terbatas.",
        "Menjembatani OT dan IT dengan mengembangkan embedded system (Raspberry Pi 4) yang terintegrasi dengan logika automation PLC dan aplikasi cross-platform.",
        "Memprogram dan troubleshooting sistem automation PLC, serta mengeksekusi instalasi kelistrikan end-to-end untuk proyek klien.",
      ],
    },
  },
  {
    id: "continental-operator",
    period: "12/2022 — 11/2023",
    company: "Continental Kft.",
    location: "Mako, Hungary",
    current: false,
    role: {
      en: "Autoclave Machine Operator",
      de: "Autoklaven-Maschinenbediener",
      id: "Autoclave Machine Operator",
    },
    stack: [
      "European Manufacturing Standards",
      "Quality Control",
      "HSE Protocols",
    ],
    bullets: {
      en: [
        "Operated autoclave production machinery in a high-standard European automotive manufacturing environment, monitoring machine conditions and production parameters for strict quality compliance.",
        "Optimized material usage to maximize production efficiency, reducing manufacturing errors and waste.",
        "Maintained rigorous HSE protocols in the production area.",
      ],
      de: [
        "Bediente Autoklaven-Produktionsmaschinen in einem europäischen Automobil-Fertigungsumfeld mit hohen Standards und überwachte Maschinenzustände sowie Produktionsparameter zur Einhaltung strenger Qualitätsvorgaben.",
        "Optimierte den Materialeinsatz zur Maximierung der Produktionseffizienz und zur Reduzierung von Fertigungsfehlern und Ausschuss.",
        "Hielt strenge HSE-Protokolle im Produktionsbereich ein.",
      ],
      id: [
        "Mengoperasikan mesin produksi autoclave di lingkungan manufaktur otomotif Eropa berstandar tinggi, memonitor kondisi mesin dan parameter produksi untuk kepatuhan kualitas yang ketat.",
        "Mengoptimalkan penggunaan material untuk memaksimalkan efisiensi produksi, mengurangi error dan waste manufaktur.",
        "Menjaga protokol HSE yang ketat di area produksi.",
      ],
    },
  },
  {
    id: "mekar-maintenance",
    period: "02/2021 — 09/2021",
    company: "PT. Mekar Armada Jaya",
    location: "Bekasi, Indonesia",
    current: false,
    role: {
      en: "Maintenance Engineering Intern",
      de: "Praktikant Instandhaltungstechnik",
      id: "Maintenance Engineering Intern",
    },
    stack: ["NodeMCU", "Preventive Maintenance", "Heavy Industrial Machinery"],
    bullets: {
      en: [
        "Designed and deployed an early-warning temperature monitoring system for spot welding machines, reducing risk of weld-quality defects and unplanned downtime.",
        "Automated condensate drainage for 10 Atlas Copco compressors (NodeMCU-based), eliminating ~1 hour/day of manual work.",
        "Performed predictive/preventive maintenance on heavy industrial equipment and initiated digitization of maintenance documentation.",
      ],
      de: [
        "Entwarf und implementierte ein Frühwarn-Temperaturüberwachungssystem für Punktschweißmaschinen, wodurch das Risiko von Schweißqualitätsmängeln und ungeplanten Stillständen reduziert wurde.",
        "Automatisierte die Kondensatentwässerung für 10 Atlas-Copco-Kompressoren (NodeMCU-basiert) und eliminierte dadurch ca. 1 Stunde/Tag manuelle Arbeit.",
        "Führte vorausschauende/vorbeugende Wartung an schweren Industrieanlagen durch und initiierte die Digitalisierung der Wartungsdokumentation.",
      ],
      id: [
        "Merancang dan men-deploy sistem early-warning temperature monitoring untuk mesin spot welding, mengurangi risiko cacat kualitas las dan downtime tak terencana.",
        "Mengotomatisasi drainase kondensat untuk 10 kompresor Atlas Copco (berbasis NodeMCU), menghilangkan ~1 jam/hari kerja manual.",
        "Melakukan predictive/preventive maintenance pada peralatan industrial berat dan menginisiasi digitalisasi dokumentasi maintenance.",
      ],
    },
  },
];

const PROJECTS = [
  {
    id: "mac-centralized-platform",
    code: "PRJ-01",
    period: "04/2026 — Present",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Centralized IoT Monitoring & Digitalization Platform (MAC – Musashi Active Connection)",
      de: "Zentralisierte IoT-Überwachungs- und Digitalisierungsplattform (MAC – Musashi Active Connection)",
      id: "Platform Monitoring & Digitalisasi IoT Terpusat (MAC – Musashi Active Connection)",
    },
    summary: {
      en: "Centralized IIoT platform unifying production, machine, AGV/AMR, and energy data into one real-time dashboard for the plant's Industry 4.0 roadmap.",
      de: "Zentrale IIoT-Plattform, die Produktions-, Maschinen-, AGV/AMR- und Energiedaten in einem Echtzeit-Dashboard für die Industrie-4.0-Roadmap des Werks vereint.",
      id: "Platform IIoT terpusat yang menyatukan data produksi, mesin, AGV/AMR, dan energi ke dalam satu dashboard real-time untuk roadmap Industry 4.0 pabrik.",
    },
    description: {
      en: "Designed and led implementation of a centralized IIoT monitoring platform (MAC) that unifies production, machine, AGV/AMR, and energy data from multiple factory systems into a single real-time dashboard, supporting the plant's Industry 4.0 digitalization roadmap.",
      de: "Entwarf und leitete die Implementierung einer zentralen IIoT-Überwachungsplattform (MAC), die Produktions-, Maschinen-, AGV/AMR- und Energiedaten aus mehreren Werkssystemen in einem einzigen Echtzeit-Dashboard vereint und die Industrie-4.0-Digitalisierungs-Roadmap des Werks unterstützt.",
      id: "Merancang dan memimpin implementasi platform monitoring IIoT terpusat (MAC) yang menyatukan data produksi, mesin, AGV/AMR, dan energi dari berbagai sistem pabrik ke dalam satu dashboard real-time, mendukung roadmap digitalisasi Industry 4.0 pabrik.",
    },
    responsibilities: {
      en: [
        "Designed the overall IIoT system architecture integrating machine monitoring, AGV/AMR, and energy systems into one centralized platform.",
        "Integrated real-time production and equipment data from forging, heat treatment, energy monitoring, and material-handling systems.",
        "Developed centralized dashboards for machine status, production parameters, and historical performance analysis.",
        "Coordinated integration of PLCs, sensors, and network infrastructure across multiple sub-projects.",
        "Drove the MAC digitalization roadmap to build a scalable, factory-wide IIoT infrastructure.",
      ],
      de: [
        "Entwarf die gesamte IIoT-Systemarchitektur zur Integration von Maschinenüberwachung, AGV/AMR und Energiesystemen in eine zentrale Plattform.",
        "Integrierte Echtzeit-Produktions- und Anlagendaten aus Schmiede-, Wärmebehandlungs-, Energiemonitoring- und Materialhandhabungssystemen.",
        "Entwickelte zentrale Dashboards für Maschinenstatus, Produktionsparameter und historische Leistungsanalyse.",
        "Koordinierte die Integration von SPS, Sensoren und Netzwerkinfrastruktur über mehrere Teilprojekte hinweg.",
        "Trieb die MAC-Digitalisierungs-Roadmap zum Aufbau einer skalierbaren, werksweiten IIoT-Infrastruktur voran.",
      ],
      id: [
        "Merancang arsitektur sistem IIoT secara keseluruhan yang mengintegrasikan machine monitoring, AGV/AMR, dan sistem energi ke dalam satu platform terpusat.",
        "Mengintegrasikan data produksi dan peralatan real-time dari sistem forging, heat treatment, energy monitoring, dan material handling.",
        "Mengembangkan dashboard terpusat untuk status mesin, parameter produksi, dan analisis performa historis.",
        "Mengoordinasikan integrasi PLC, sensor, dan infrastruktur jaringan di berbagai sub-project.",
        "Mendorong roadmap digitalisasi MAC untuk membangun infrastruktur IIoT yang scalable di seluruh pabrik.",
      ],
    },
    tech: [
      "OPC UA",
      "Modbus",
      "Node-RED",
      "Siemens PLCs",
      "Keyence PLCs & Devices",
      "Power BI",
      "MSSQL",
    ],
  },
  {
    id: "press-forging-monitoring",
    code: "PRJ-02",
    period: "01/2026 — 04/2026",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Real-Time Monitoring System for Press Forging Machines",
      de: "Echtzeit-Überwachungssystem für Press-Schmiedemaschinen",
      id: "Sistem Monitoring Real-Time untuk Mesin Press Forging",
    },
    summary: {
      en: "Extended MAC monitoring to 13 forging machines, integrating 33 parameters per machine into a centralized IIoT pipeline.",
      de: "Erweiterte das MAC-Monitoring auf 13 Schmiedemaschinen und integrierte 33 Parameter pro Maschine in eine zentrale IIoT-Pipeline.",
      id: "Memperluas monitoring MAC ke 13 mesin forging, mengintegrasikan 33 parameter per mesin ke dalam IIoT pipeline terpusat.",
    },
    description: {
      en: "Extended the MAC monitoring platform to 13 forging machines, integrating 33 operational parameters per machine — including data points unavailable via existing machine interfaces — into a centralized IIoT data pipeline.",
      de: "Erweiterte die MAC-Überwachungsplattform auf 13 Schmiedemaschinen und integrierte 33 Betriebsparameter pro Maschine – einschließlich Datenpunkten, die über bestehende Maschinenschnittstellen nicht verfügbar waren – in eine zentrale IIoT-Datenpipeline.",
      id: "Memperluas platform monitoring MAC ke 13 mesin forging, mengintegrasikan 33 parameter operasional per mesin — termasuk data point yang tidak tersedia melalui interface mesin yang ada — ke dalam IIoT data pipeline terpusat.",
    },
    responsibilities: {
      en: [
        "Integrated 13 forging machines with different PLCs/controllers into a centralized MAC monitoring platform.",
        "Standardized data acquisition across heterogeneous machine interfaces, capturing up to 33 operational and production parameters per machine.",
        "Identified and integrated 13 external sensors to capture parameters unavailable through existing machine interfaces.",
        "Designed the machine-to-network data integration architecture for reliable and standardized production data transmission.",
      ],
      de: [
        "Integrierte 13 Schmiedemaschinen mit unterschiedlichen SPS/Controllern in eine zentrale MAC-Überwachungsplattform.",
        "Standardisierte die Datenerfassung über heterogene Maschinenschnittstellen hinweg und erfasste bis zu 33 Betriebs- und Produktionsparameter pro Maschine.",
        "Identifizierte und integrierte 13 externe Sensoren zur Erfassung von Parametern, die über bestehende Maschinenschnittstellen nicht verfügbar waren.",
        "Entwarf die Datenintegrationsarchitektur von Maschine zu Netzwerk für eine zuverlässige und standardisierte Produktionsdatenübertragung.",
      ],
      id: [
        "Mengintegrasikan 13 mesin forging dengan PLC/controller berbeda ke dalam platform monitoring MAC terpusat.",
        "Menstandarisasi data acquisition di berbagai interface mesin yang heterogen, menangkap hingga 33 parameter operasional dan produksi per mesin.",
        "Mengidentifikasi dan mengintegrasikan 13 sensor eksternal untuk menangkap parameter yang tidak tersedia melalui interface mesin yang ada.",
        "Merancang arsitektur integrasi data machine-to-network untuk transmisi data produksi yang reliable dan terstandarisasi.",
      ],
    },
    tech: [
      "Industrial PLCs",
      "Industrial Sensors",
      "Industrial Networking",
      "IoT Data Acquisition",
    ],
  },
  {
    id: "hatebur-opcua-monitoring",
    code: "PRJ-03",
    period: "11/2025 — 01/2026",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "OPC UA-Based Real-Time Monitoring System for Hatebur Forging Machines",
      de: "OPC-UA-basiertes Echtzeit-Überwachungssystem für Hatebur-Schmiedemaschinen",
      id: "Sistem Monitoring Real-Time Berbasis OPC UA untuk Mesin Forging Hatebur",
    },
    summary: {
      en: "Standardized OPC UA machine-to-dashboard data exchange for Hatebur forging machines, enabling real-time OEE visibility.",
      de: "Standardisierter OPC-UA-Datenaustausch von Maschine zu Dashboard für Hatebur-Schmiedemaschinen mit Echtzeit-OEE-Transparenz.",
      id: "Standardisasi pertukaran data machine-to-dashboard berbasis OPC UA untuk mesin forging Hatebur dengan visibilitas OEE real-time.",
    },
    description: {
      en: "Integrated a Siemens S7-1200 PLC as an OPC UA Server with the machine monitoring platform, standardizing machine-to-dashboard data exchange for Hatebur forging machines and enabling real-time visibility of cycle time, production count, fault status, and Overall Equipment Effectiveness (OEE).",
      de: "Integrierte eine Siemens-S7-1200-SPS als OPC-UA-Server in die Maschinenüberwachungsplattform, standardisierte den Datenaustausch von Maschine zu Dashboard für Hatebur-Schmiedemaschinen und ermöglichte Echtzeit-Transparenz über Taktzeit, Produktionsanzahl, Fehlerstatus und Gesamtanlageneffektivität (OEE).",
      id: "Mengintegrasikan Siemens S7-1200 PLC sebagai OPC UA Server dengan platform machine monitoring, menstandarisasi pertukaran data machine-to-dashboard untuk mesin forging Hatebur dan memungkinkan visibilitas real-time terhadap cycle time, production count, fault status, dan Overall Equipment Effectiveness (OEE).",
    },
    responsibilities: {
      en: [
        "Integrated a Siemens S7-1200 PLC as an OPC UA Server with the machine monitoring platform, standardizing machine-to-dashboard data exchange and enabling real-time visibility of cycle time, production count, fault status, and OEE.",
        "Standardized machine-to-IT data exchange using OPC UA to enable interoperable and reliable integration between forging machines and the MAC monitoring platform.",
        "Integrated heterogeneous machine devices, including recorders and PLCs, and troubleshot communication issues using TIA Portal to ensure reliable machine-to-network connectivity.",
        "Contributed to the MAC digitalization roadmap, supporting the plant's Industry 4.0 objectives.",
      ],
      de: [
        "Integrierte eine Siemens-S7-1200-SPS als OPC-UA-Server in die Maschinenüberwachungsplattform, standardisierte den Datenaustausch von Maschine zu Dashboard und ermöglichte Echtzeit-Transparenz über Taktzeit, Produktionsanzahl, Fehlerstatus und OEE.",
        "Standardisierte den Maschine-zu-IT-Datenaustausch mittels OPC UA für eine interoperable und zuverlässige Integration zwischen Schmiedemaschinen und der MAC-Überwachungsplattform.",
        "Integrierte heterogene Maschinengeräte, einschließlich Recorder und SPS, und behob Kommunikationsprobleme über TIA Portal zur Sicherstellung einer zuverlässigen Maschine-zu-Netzwerk-Konnektivität.",
        "Trug zur MAC-Digitalisierungs-Roadmap bei und unterstützte die Industrie-4.0-Ziele des Werks.",
      ],
      id: [
        "Mengintegrasikan Siemens S7-1200 PLC sebagai OPC UA Server dengan platform machine monitoring, menstandarisasi pertukaran data machine-to-dashboard, dan memungkinkan visibilitas real-time cycle time, production count, fault status, dan OEE.",
        "Menstandarisasi pertukaran data machine-to-IT menggunakan OPC UA untuk integrasi yang interoperable dan reliable antara mesin forging dan platform monitoring MAC.",
        "Mengintegrasikan perangkat mesin yang heterogen, termasuk recorder dan PLC, serta troubleshooting masalah komunikasi menggunakan TIA Portal untuk memastikan konektivitas machine-to-network yang reliable.",
        "Berkontribusi pada roadmap digitalisasi MAC, mendukung tujuan Industry 4.0 pabrik.",
      ],
    },
    tech: [
      "Siemens S7-1200",
      "TIA Portal",
      "OPC UA",
      "Node-RED",
      "USR IoT Gateway",
      "Power BI",
    ],
  },
  {
    id: "energy-monitoring-digitalization",
    code: "PRJ-04",
    period: "08/2025 — 11/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Industrial Energy Monitoring & Digitalization System",
      de: "Industrielles Energiemonitoring- & Digitalisierungssystem",
      id: "Sistem Monitoring Energi Industrial & Digitalisasi",
    },
    summary: {
      en: "Plant-wide energy monitoring across 130 measurement points, supporting cost analysis and CO2 emissions reporting.",
      de: "Werksweites Energiemonitoring über 130 Messpunkte zur Unterstützung von Kostenanalysen und CO2-Emissionsreporting.",
      id: "Monitoring energi plant-wide di 130 titik pengukuran, mendukung analisis biaya dan pelaporan emisi CO2.",
    },
    description: {
      en: "Designed and deployed a plant-wide energy monitoring system across 130 measurement points, using PM5500 meters for incoming utility power and Mitsubishi ME96SSHB meters for machine-level power monitoring, integrated via a hybrid Ethernet/wireless network to support electrical consumption tracking, cost-per-part analysis, and government-mandated CO2 emissions reporting.",
      de: "Entwarf und implementierte ein werksweites Energiemonitoringsystem über 130 Messpunkte, unter Verwendung von PM5500-Messgeräten für die eingehende Versorgungsleistung und Mitsubishi-ME96SSHB-Messgeräten für die Leistungsüberwachung auf Maschinenebene, integriert über ein hybrides Ethernet-/Funknetzwerk zur Unterstützung der Stromverbrauchsverfolgung, Kosten-pro-Teil-Analyse und behördlich vorgeschriebenen CO2-Emissionsberichterstattung.",
      id: "Merancang dan men-deploy sistem energy monitoring plant-wide di 130 titik pengukuran, menggunakan meter PM5500 untuk incoming utility power dan meter Mitsubishi ME96SSHB untuk machine-level power monitoring, terintegrasi melalui jaringan hybrid Ethernet/wireless untuk mendukung tracking konsumsi listrik, analisis cost-per-part, dan pelaporan emisi CO2 sesuai regulasi pemerintah.",
    },
    responsibilities: {
      en: [
        "Integrated 130 power meters across the plant — PM5500 for incoming utility panel monitoring and Mitsubishi ME96SSHB for machine-level power monitoring.",
        "Designed a hybrid network architecture using wired Ethernet along production lines and wireless connectivity at line endpoints for efficient data aggregation.",
        "Configured Modbus RTU/TCP to collect voltage, current, power factor, and energy consumption data across all measurement points.",
        "Built the Power BI data pipeline and dashboards for real-time usage monitoring, anomaly detection, cost-per-part analysis, and government-compliant CO2 emissions reporting.",
      ],
      de: [
        "Integrierte 130 Energiemessgeräte im gesamten Werk – PM5500 für die Überwachung der Einspeise-Verteilerschränke und Mitsubishi ME96SSHB für die Leistungsüberwachung auf Maschinenebene.",
        "Entwarf eine hybride Netzwerkarchitektur mit kabelgebundenem Ethernet entlang der Produktionslinien und drahtloser Konnektivität an den Linienenden für eine effiziente Datenaggregation.",
        "Konfigurierte Modbus RTU/TCP zur Erfassung von Spannungs-, Strom-, Leistungsfaktor- und Energieverbrauchsdaten an allen Messpunkten.",
        "Baute die Power-BI-Datenpipeline und Dashboards für Echtzeit-Verbrauchsüberwachung, Anomalieerkennung, Kosten-pro-Teil-Analyse und behördenkonformes CO2-Emissionsreporting.",
      ],
      id: [
        "Mengintegrasikan 130 power meter di seluruh pabrik — PM5500 untuk monitoring panel utilitas incoming dan Mitsubishi ME96SSHB untuk machine-level power monitoring.",
        "Merancang arsitektur jaringan hybrid menggunakan Ethernet berkabel di sepanjang lini produksi dan konektivitas wireless di ujung lini untuk agregasi data yang efisien.",
        "Mengonfigurasi Modbus RTU/TCP untuk mengumpulkan data voltage, current, power factor, dan konsumsi energi di seluruh titik pengukuran.",
        "Membangun data pipeline dan dashboard Power BI untuk monitoring penggunaan real-time, deteksi anomali, analisis cost-per-part, dan pelaporan emisi CO2 yang compliant regulasi pemerintah.",
      ],
    },
    tech: [
      "PM5500 Power Meter",
      "Mitsubishi ME96SSHB",
      "Modbus RTU/TCP",
      "Hybrid Ethernet/Wireless Networking",
      "Power BI",
    ],
  },
  {
    id: "heat-treatment-monitoring",
    code: "PRJ-05",
    period: "06/2025 — 09/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Real-Time Monitoring System for Heat Treatment Machines",
      de: "Echtzeit-Überwachungssystem für Wärmebehandlungsmaschinen",
      id: "Sistem Monitoring Real-Time untuk Mesin Heat Treatment",
    },
    summary: {
      en: "Edge-to-IT data pipeline for 9 heat treatment machines, enabling continuous acquisition and historical trend analysis.",
      de: "Edge-to-IT-Datenpipeline für 9 Wärmebehandlungsmaschinen mit kontinuierlicher Erfassung und historischer Trendanalyse.",
      id: "Data pipeline edge-to-IT untuk 9 mesin heat treatment, memungkinkan akuisisi berkelanjutan dan analisis tren historis.",
    },
    description: {
      en: "Built an edge (OT)-to-IT data pipeline for heat treatment machines, integrating Mitsubishi and Keyence PLCs over an industrial wireless network to enable continuous data acquisition, centralized monitoring, and historical trend analysis.",
      de: "Baute eine Edge(OT)-zu-IT-Datenpipeline für Wärmebehandlungsmaschinen auf und integrierte Mitsubishi- und Keyence-SPS über ein industrielles Funknetzwerk, um kontinuierliche Datenerfassung, zentrale Überwachung und historische Trendanalyse zu ermöglichen.",
      id: "Membangun data pipeline edge (OT)-to-IT untuk mesin heat treatment, mengintegrasikan PLC Mitsubishi dan Keyence melalui jaringan wireless industrial untuk memungkinkan data acquisition berkelanjutan, monitoring terpusat, dan analisis tren historis.",
    },
    responsibilities: {
      en: [
        "Integrated 9 heat treatment machines running varying Mitsubishi Ethernet-enabled PLC models, plus Keyence TR-W1000 recorders, into the factory network via USR-EG628-GL/USR-W660 gateways.",
        "Standardized data acquisition across heterogeneous PLC models, capturing 28 operational parameters per machine, and integrated external sensors where machine interfaces couldn't expose the required data.",
        "Programmed a Keyence KV-8000 PLC as a centralized polling station and deployed Moxa AWK-3252A wireless access points for reliable data transmission in a high-interference manufacturing environment.",
        "Developed Node-RED middleware to route machine data into MSSQL, powering real-time MAC and Power BI dashboards for temperature trend and machine-status monitoring.",
      ],
      de: [
        "Integrierte 9 Wärmebehandlungsmaschinen mit unterschiedlichen Mitsubishi-Ethernet-fähigen SPS-Modellen sowie Keyence-TR-W1000-Recorder über USR-EG628-GL/USR-W660-Gateways in das Werksnetzwerk.",
        "Standardisierte die Datenerfassung über heterogene SPS-Modelle hinweg, erfasste 28 Betriebsparameter pro Maschine und integrierte externe Sensoren dort, wo Maschinenschnittstellen die erforderlichen Daten nicht bereitstellen konnten.",
        "Programmierte eine Keyence-KV-8000-SPS als zentrale Abfragestation und setzte Moxa-AWK-3252A-Access-Points für eine zuverlässige Datenübertragung in einer störungsintensiven Fertigungsumgebung ein.",
        "Entwickelte Node-RED-Middleware zur Weiterleitung von Maschinendaten in MSSQL, die Echtzeit-MAC- und Power-BI-Dashboards für Temperaturtrend- und Maschinenstatusüberwachung antreibt.",
      ],
      id: [
        "Mengintegrasikan 9 mesin heat treatment dengan berbagai model PLC Mitsubishi berbasis Ethernet, ditambah recorder Keyence TR-W1000, ke dalam jaringan pabrik melalui gateway USR-EG628-GL/USR-W660.",
        "Menstandarisasi data acquisition di berbagai model PLC yang heterogen, menangkap 28 parameter operasional per mesin, dan mengintegrasikan sensor eksternal ketika interface mesin tidak dapat mengekspos data yang dibutuhkan.",
        "Memprogram PLC Keyence KV-8000 sebagai polling station terpusat dan men-deploy access point wireless Moxa AWK-3252A untuk transmisi data yang reliable di lingkungan manufaktur dengan interferensi tinggi.",
        "Mengembangkan middleware Node-RED untuk mengalirkan data mesin ke MSSQL, mendukung dashboard MAC dan Power BI real-time untuk monitoring tren temperatur dan status mesin.",
      ],
    },
    tech: [
      "Mitsubishi PLCs (Ethernet-enabled)",
      "Keyence KV-8000",
      "Keyence TR-W1000",
      "Moxa AWK-3252A",
      "Node-RED",
      "MSSQL",
      "Power BI",
    ],
  },
  {
    id: "amr-system",
    code: "PRJ-06",
    period: "03/2025 — 06/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Autonomous Mobile Robot (AMR) System",
      de: "Autonomous-Mobile-Robot-System (AMR)",
      id: "Sistem Autonomous Mobile Robot (AMR)",
    },
    summary: {
      en: "Deployed an AMR for automated QC sample transport, including site calibration, mapping, and navigation configuration.",
      de: "Implementierte einen AMR für den automatisierten Transport von QC-Proben, einschließlich Standortkalibrierung, Mapping und Navigationskonfiguration.",
      id: "Men-deploy AMR untuk transport sampel QC otomatis, termasuk kalibrasi lokasi, mapping, dan konfigurasi navigasi.",
    },
    description: {
      en: "Supported deployment of an Autonomous Mobile Robot (AMR) for automated transport of QC samples between production lines and the Quality Room, including site calibration, mapping, and navigation configuration.",
      de: "Unterstützte den Einsatz eines Autonomous Mobile Robot (AMR) für den automatisierten Transport von QC-Proben zwischen Produktionslinien und dem Qualitätsraum, einschließlich Standortkalibrierung, Mapping und Navigationskonfiguration.",
      id: "Mendukung deployment Autonomous Mobile Robot (AMR) untuk transport otomatis sampel QC antara lini produksi dan Quality Room, termasuk kalibrasi lokasi, mapping, dan konfigurasi navigasi.",
    },
    responsibilities: {
      en: [
        "Performed environmental calibration and site preparation for AMR navigation and mapping.",
        "Configured AMR mapping and navigation within the factory environment.",
        "Validated AMR movement routes and operational conditions.",
        "Supported integration of AMR operations with the production environment.",
      ],
      de: [
        "Führte Umgebungskalibrierung und Standortvorbereitung für AMR-Navigation und -Mapping durch.",
        "Konfigurierte AMR-Mapping und -Navigation innerhalb der Werksumgebung.",
        "Validierte AMR-Bewegungsrouten und Betriebsbedingungen.",
        "Unterstützte die Integration des AMR-Betriebs in die Produktionsumgebung.",
      ],
      id: [
        "Melakukan kalibrasi lingkungan dan persiapan lokasi untuk navigasi dan mapping AMR.",
        "Mengonfigurasi mapping dan navigasi AMR di dalam lingkungan pabrik.",
        "Memvalidasi rute pergerakan AMR dan kondisi operasional.",
        "Mendukung integrasi operasional AMR dengan lingkungan produksi.",
      ],
    },
    tech: ["AMR", "Linux", "LiDAR", "Industrial Networking"],
  },
  {
    id: "wireless-network-infrastructure",
    code: "PRJ-07",
    period: "01/2025 — 04/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Industrial Wireless Network Infrastructure",
      de: "Industrielle drahtlose Netzwerkinfrastruktur",
      id: "Infrastruktur Jaringan Wireless Industrial",
    },
    summary: {
      en: "Plant-wide wireless network with 25 access points and Turbo Roaming to support machine, AGV, and AMR communication.",
      de: "Werksweites Funknetzwerk mit 25 Access Points und Turbo Roaming zur Unterstützung der Kommunikation von Maschinen, AGV und AMR.",
      id: "Jaringan wireless plant-wide dengan 25 access point dan Turbo Roaming untuk mendukung komunikasi mesin, AGV, dan AMR.",
    },
    description: {
      en: "Designed and deployed the plant's industrial wireless network infrastructure to support factory-wide machine, AGV, and AMR communication, ensuring stable connectivity across production areas including mobile-equipment roaming zones.",
      de: "Entwarf und implementierte die industrielle drahtlose Netzwerkinfrastruktur des Werks zur Unterstützung werksweiter Kommunikation von Maschinen, AGV und AMR und gewährleistete eine stabile Konnektivität in den Produktionsbereichen, einschließlich Roaming-Zonen für mobile Anlagen.",
      id: "Merancang dan men-deploy infrastruktur jaringan wireless industrial pabrik untuk mendukung komunikasi mesin, AGV, dan AMR di seluruh pabrik, memastikan konektivitas yang stabil di seluruh area produksi termasuk zona roaming peralatan mobile.",
    },
    responsibilities: {
      en: [
        "Designed the industrial wireless network topology for machine, AGV, and AMR communication.",
        "Installed and configured 25 industrial wireless access points across the factory.",
        "Configured wireless clients for individual machines and mobile equipment.",
        "Implemented Moxa Turbo Roaming for stable connectivity during AGV movement and access-point handovers.",
      ],
      de: [
        "Entwarf die Topologie des industriellen Funknetzwerks für die Kommunikation von Maschinen, AGV und AMR.",
        "Installierte und konfigurierte 25 industrielle WLAN-Access-Points im gesamten Werk.",
        "Konfigurierte drahtlose Clients für einzelne Maschinen und mobile Anlagen.",
        "Implementierte Moxa Turbo Roaming für eine stabile Konnektivität während der AGV-Bewegung und bei Access-Point-Übergaben.",
      ],
      id: [
        "Merancang topologi jaringan wireless industrial untuk komunikasi mesin, AGV, dan AMR.",
        "Memasang dan mengonfigurasi 25 access point wireless industrial di seluruh pabrik.",
        "Mengonfigurasi wireless client untuk mesin individual dan peralatan mobile.",
        "Mengimplementasikan Moxa Turbo Roaming untuk konektivitas yang stabil selama pergerakan AGV dan handover antar access point.",
      ],
    },
    tech: [
      "Moxa AWK-3252A",
      "Moxa AWK-1137C",
      "Industrial Ethernet",
      "Turbo Roaming",
    ],
  },
  {
    id: "agv-control-navigation",
    code: "PRJ-08",
    period: "01/2025 — 04/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: {
      en: "IoT Engineer (Lead Integrator)",
      de: "IoT-Ingenieur (Lead Integrator)",
      id: "IoT Engineer (Lead Integrator)",
    },
    title: {
      en: "Automated Guided Vehicle (AGV) Control & Navigation System",
      de: "Steuerungs- und Navigationssystem für fahrerlose Transportsysteme (AGV)",
      id: "Sistem Kontrol & Navigasi Automated Guided Vehicle (AGV)",
    },
    summary: {
      en: "Control, navigation, positioning, and communication system enabling autonomous material handling triggered by production signals.",
      de: "Steuerungs-, Navigations-, Positionierungs- und Kommunikationssystem für autonome, durch Produktionssignale ausgelöste Materialhandhabung.",
      id: "Sistem kontrol, navigasi, positioning, dan komunikasi untuk penanganan material otomatis yang dipicu oleh sinyal produksi.",
    },
    description: {
      en: "Engineered the control, navigation, positioning, and communication system for factory AGVs, enabling autonomous material handling directly triggered by production-line signals.",
      de: "Entwickelte das Steuerungs-, Navigations-, Positionierungs- und Kommunikationssystem für werksinterne AGVs und ermöglichte eine autonome Materialhandhabung, die direkt durch Signale der Produktionslinie ausgelöst wird.",
      id: "Merancang sistem kontrol, navigasi, positioning, dan komunikasi untuk AGV pabrik, memungkinkan penanganan material otomatis yang dipicu langsung oleh sinyal lini produksi.",
    },
    responsibilities: {
      en: [
        "Engineered the AGV control architecture using a Keyence KV-8000 PLC as the central controller.",
        "Integrated Hokuyo UST-30LC-X01 LiDAR for environmental scanning and obstacle detection.",
        "Configured Keyence IV-3 smart cameras (IV-Navigator) for vision-based positioning and route guidance.",
        "Programmed Mitsubishi FX5U PLCs at production lines to trigger AGV dispatch via the Line Call system.",
        "Integrated AGV communication with the factory's industrial wireless network.",
      ],
      de: [
        "Entwickelte die AGV-Steuerungsarchitektur mit einer Keyence-KV-8000-SPS als zentralem Controller.",
        "Integrierte Hokuyo-UST-30LC-X01-LiDAR zur Umgebungserfassung und Hinderniserkennung.",
        "Konfigurierte Keyence-IV-3-Smart-Kameras (IV-Navigator) für bildbasierte Positionierung und Routenführung.",
        "Programmierte Mitsubishi-FX5U-SPS an den Produktionslinien zur Auslösung des AGV-Dispatch über das Line-Call-System.",
        "Integrierte die AGV-Kommunikation in das industrielle Funknetzwerk des Werks.",
      ],
      id: [
        "Merancang arsitektur kontrol AGV menggunakan PLC Keyence KV-8000 sebagai controller utama.",
        "Mengintegrasikan LiDAR Hokuyo UST-30LC-X01 untuk environmental scanning dan obstacle detection.",
        "Mengonfigurasi smart camera Keyence IV-3 (IV-Navigator) untuk positioning berbasis vision dan route guidance.",
        "Memprogram PLC Mitsubishi FX5U di lini produksi untuk memicu dispatch AGV melalui sistem Line Call.",
        "Mengintegrasikan komunikasi AGV dengan jaringan wireless industrial pabrik.",
      ],
    },
    tech: [
      "Keyence KV-8000",
      "Mitsubishi FX5U",
      "Hokuyo LiDAR",
      "Keyence IV-3/IV-Navigator",
      "Industrial Wireless Networking",
    ],
  },
  {
    id: "smart-building-access-control",
    code: "PRJ-09",
    period: "02/2024 — 05/2024",
    company: "PT Samudra Teknologi Pertiwi",
    role: {
      en: "IoT & Automation Engineer",
      de: "IoT- & Automatisierungsingenieur",
      id: "IoT & Automation Engineer",
    },
    title: {
      en: "IoT-Based Smart Building Attendance & Access Control System",
      de: "IoT-basiertes Anwesenheits- und Zutrittskontrollsystem für Smart Buildings",
      id: "Sistem Attendance & Access Control Smart Building Berbasis IoT",
    },
    summary: {
      en: "UHF RFID-based attendance and access control system with a Flutter mobile app and Firebase backend.",
      de: "UHF-RFID-basiertes Anwesenheits- und Zutrittskontrollsystem mit Flutter-App und Firebase-Backend.",
      id: "Sistem attendance & access control berbasis UHF RFID dengan mobile app Flutter dan backend Firebase.",
    },
    description: {
      en: "Developed an IoT-based employee attendance and access control system using UHF RFID, an electromagnetic lock, a mobile app, and a cloud backend for automated employee identification and real-time attendance tracking.",
      de: "Entwickelte ein IoT-basiertes Mitarbeiter-Anwesenheits- und Zutrittskontrollsystem mit UHF-RFID, einem Elektromagnetschloss, einer mobilen App und einem Cloud-Backend zur automatisierten Mitarbeiteridentifikation und Echtzeit-Anwesenheitserfassung.",
      id: "Mengembangkan sistem attendance & access control karyawan berbasis IoT menggunakan UHF RFID, electromagnetic lock, mobile app, dan cloud backend untuk identifikasi karyawan otomatis dan pelacakan attendance real-time.",
    },
    responsibilities: {
      en: [
        "Engineered the access control gateway on a Raspberry Pi 4 with a UHF RFID reader (TCP/IP) for touchless employee badge detection.",
        "Configured a 280kg electromagnetic lock with proximity exit buttons for automated door control.",
        "Developed a cross-platform mobile app (Flutter/Dart) for real-time attendance tracking.",
        "Built a Firebase cloud backend for instant, low-latency synchronization of attendance logs.",
      ],
      de: [
        "Entwickelte das Zutrittskontroll-Gateway auf einem Raspberry Pi 4 mit einem UHF-RFID-Lesegerät (TCP/IP) zur berührungslosen Mitarbeiterausweis-Erkennung.",
        "Konfigurierte ein 280-kg-Elektromagnetschloss mit Näherungs-Austasten für die automatisierte Türsteuerung.",
        "Entwickelte eine plattformübergreifende mobile App (Flutter/Dart) zur Echtzeit-Anwesenheitserfassung.",
        "Baute ein Firebase-Cloud-Backend für die sofortige, latenzarme Synchronisierung der Anwesenheitsprotokolle.",
      ],
      id: [
        "Merancang access control gateway pada Raspberry Pi 4 dengan UHF RFID reader (TCP/IP) untuk deteksi badge karyawan secara touchless.",
        "Mengonfigurasi electromagnetic lock 280kg dengan tombol exit proximity untuk kontrol pintu otomatis.",
        "Mengembangkan mobile app cross-platform (Flutter/Dart) untuk pelacakan attendance real-time.",
        "Membangun cloud backend Firebase untuk sinkronisasi log attendance secara instan dan low-latency.",
      ],
    },
    tech: [
      "Raspberry Pi 4",
      "UHF RFID Reader",
      "TCP/IP",
      "Electromagnetic Lock",
      "Flutter/Dart",
      "Firebase",
    ],
  },
  {
    id: "automated-mobile-filing-cabinet",
    code: "PRJ-10",
    period: "11/2023 — 02/2024",
    company: "PT Samudra Teknologi Pertiwi",
    role: {
      en: "IoT & Automation Engineer",
      de: "IoT- & Automatisierungsingenieur",
      id: "IoT & Automation Engineer",
    },
    title: {
      en: "IoT-Based Automated Mobile Filing Cabinet",
      de: "IoT-basierter automatisierter mobiler Aktenschrank",
      id: "Automated Mobile Filing Cabinet Berbasis IoT",
    },
    summary: {
      en: "PLC-driven automated shelving system with a web interface for document storage and retrieval.",
      de: "SPS-gesteuertes automatisiertes Regalsystem mit Weboberfläche für Dokumentenablage und -abruf.",
      id: "Sistem shelving otomatis berbasis PLC dengan web interface untuk penyimpanan dan pengambilan dokumen.",
    },
    description: {
      en: "Developed an automated mobile filing cabinet combining PLC-based motion control and a web-based interface for document storage and retrieval.",
      de: "Entwickelte einen automatisierten mobilen Aktenschrank, der SPS-basierte Bewegungssteuerung mit einer webbasierten Oberfläche für Dokumentenablage und -abruf kombiniert.",
      id: "Mengembangkan automated mobile filing cabinet yang menggabungkan kontrol pergerakan berbasis PLC dengan web interface untuk penyimpanan dan pengambilan dokumen.",
    },
    responsibilities: {
      en: [
        "Bridged a Raspberry Pi 4 (IoT gateway) with a Haiwell AC16S0R PLC for automation logic.",
        "Programmed the PLC to control NEMA 23 stepper motors for automated shelving, using proximity sensors for positioning and safety limits.",
        "Integrated electronic door locks and status indicators with digital access commands.",
        "Built a Python edge-computing backend and a PHP/MySQL web interface for remote document tracking.",
      ],
      de: [
        "Verband einen Raspberry Pi 4 (IoT-Gateway) mit einer Haiwell-AC16S0R-SPS für die Automatisierungslogik.",
        "Programmierte die SPS zur Steuerung von NEMA-23-Schrittmotoren für das automatisierte Regalsystem, unter Verwendung von Näherungssensoren für Positionierung und Sicherheitsgrenzen.",
        "Integrierte elektronische Türschlösser und Statusanzeigen mit digitalen Zugriffsbefehlen.",
        "Baute ein Python-Edge-Computing-Backend und eine PHP/MySQL-Weboberfläche für die Fernverfolgung von Dokumenten.",
      ],
      id: [
        "Menghubungkan Raspberry Pi 4 (IoT gateway) dengan PLC Haiwell AC16S0R untuk logika automation.",
        "Memprogram PLC untuk mengontrol stepper motor NEMA 23 pada automated shelving, menggunakan proximity sensor untuk positioning dan safety limit.",
        "Mengintegrasikan electronic door lock dan status indicator dengan perintah akses digital.",
        "Membangun backend edge-computing berbasis Python dan web interface PHP/MySQL untuk remote document tracking.",
      ],
    },
    tech: [
      "Raspberry Pi 4",
      "Haiwell AC16S0R PLC",
      "NEMA 23 Stepper Motors",
      "Proximity Sensors",
      "Python",
      "PHP",
      "MySQL",
    ],
  },
  {
    id: "digital-twin-injection-molding",
    code: "PRJ-11",
    period: "01/2022 — 08/2022",
    company: "PT Biggy Cemerlang (Academic Final Project)",
    role: {
      en: "Automation Engineering Student (Lead Software Developer)",
      de: "Student der Automatisierungstechnik (Lead Software Developer)",
      id: "Automation Engineering Student (Lead Software Developer)",
    },
    title: {
      en: "IIoT-Based Digital Twin Monitoring System for Injection Molding Machines",
      de: "IIoT-basiertes Digital-Twin-Überwachungssystem für Spritzgussmaschinen",
      id: "Sistem Digital Twin Berbasis IIoT untuk Mesin Injection Molding",
    },
    summary: {
      en: "Web-based digital twin combining 3D visualization and real-time telemetry for a FANUC ROBOSHOT injection molding machine.",
      de: "Webbasierter digitaler Zwilling, der 3D-Visualisierung und Echtzeit-Telemetrie für eine FANUC-ROBOSHOT-Spritzgussmaschine kombiniert.",
      id: "Digital twin berbasis web yang menggabungkan visualisasi 3D dan telemetri real-time untuk mesin injection molding FANUC ROBOSHOT.",
    },
    description: {
      en: "Developed a web-based Digital Twin for a FANUC ROBOSHOT injection molding machine, combining 3D visualization and real-time telemetry to improve machine transparency and operational analysis.",
      de: "Entwickelte einen webbasierten Digital Twin für eine FANUC-ROBOSHOT-Spritzgussmaschine, der 3D-Visualisierung und Echtzeit-Telemetrie kombiniert, um Maschinentransparenz und Betriebsanalyse zu verbessern.",
      id: "Mengembangkan Digital Twin berbasis web untuk mesin injection molding FANUC ROBOSHOT, menggabungkan visualisasi 3D dan telemetri real-time untuk meningkatkan transparansi mesin dan analisis operasional.",
    },
    responsibilities: {
      en: [
        "Modeled injection molding machine components in SolidWorks and simulated real-world kinematics in Unity 3D.",
        "Exported the Unity 3D model to WebGL for integration into a web-based monitoring dashboard.",
        "Built the frontend dashboard in ReactJS for real-time visual analysis.",
        "Architected the IIoT backend using REST APIs/JSON to stream telemetry, with MongoDB for historical data storage.",
      ],
      de: [
        "Modellierte Komponenten der Spritzgussmaschine in SolidWorks und simulierte reale Kinematik in Unity 3D.",
        "Exportierte das Unity-3D-Modell nach WebGL zur Integration in ein webbasiertes Überwachungsdashboard.",
        "Baute das Frontend-Dashboard in ReactJS für die visuelle Echtzeitanalyse.",
        "Konzipierte das IIoT-Backend mit REST-APIs/JSON zum Streamen von Telemetriedaten, mit MongoDB zur historischen Datenspeicherung.",
      ],
      id: [
        "Memodelkan komponen mesin injection molding di SolidWorks dan mensimulasikan kinematika dunia nyata di Unity 3D.",
        "Meng-export model Unity 3D ke WebGL untuk integrasi ke dashboard monitoring berbasis web.",
        "Membangun dashboard frontend di ReactJS untuk analisis visual real-time.",
        "Merancang backend IIoT menggunakan REST API/JSON untuk streaming telemetri, dengan MongoDB untuk penyimpanan data historis.",
      ],
    },
    tech: [
      "FANUC ROBOSHOT α-SiA",
      "SolidWorks",
      "Unity 3D",
      "WebGL",
      "ReactJS",
      "MongoDB",
      "REST API",
    ],
  },
  {
    id: "centralized-drainage-system",
    code: "PRJ-12",
    period: "06/2021 — 09/2021",
    company: "PT Mekar Armada Jaya",
    role: { en: "Internship", de: "Praktikum", id: "Internship" },
    title: {
      en: "Centralized Automatic Drainage System (Atlas Copco Compressors)",
      de: "Zentrales automatisches Entwässerungssystem (Atlas-Copco-Kompressoren)",
      id: "Sistem Drainase Otomatis Terpusat (Kompresor Atlas Copco)",
    },
    summary: {
      en: "NodeMCU-based automated condensate drainage for 10 compressors, replacing manual daily drainage.",
      de: "NodeMCU-basierte automatisierte Kondensatentwässerung für 10 Kompressoren anstelle der manuellen täglichen Entwässerung.",
      id: "Drainase kondensat otomatis berbasis NodeMCU untuk 10 kompresor, menggantikan drainase manual harian.",
    },
    description: {
      en: "Automated condensate drainage for 10 Atlas Copco compressors using a NodeMCU-based control system, replacing manual daily drainage with timer-controlled solenoid valves.",
      de: "Automatisierte die Kondensatentwässerung für 10 Atlas-Copco-Kompressoren mit einem NodeMCU-basierten Steuerungssystem und ersetzte die manuelle tägliche Entwässerung durch zeitgesteuerte Magnetventile.",
      id: "Mengotomatisasi drainase kondensat untuk 10 kompresor Atlas Copco menggunakan sistem kontrol berbasis NodeMCU, menggantikan drainase manual harian dengan solenoid valve yang dikontrol timer.",
    },
    responsibilities: {
      en: [
        "Designed and assembled a NodeMCU-based control system for centralized drainage automation.",
        "Integrated normally-closed solenoid valves across 10 compressor units.",
        "Programmed automatic drainage scheduling and timer-based control logic.",
        "Conducted system testing to verify accurate, reliable valve operation.",
      ],
      de: [
        "Entwarf und baute ein NodeMCU-basiertes Steuerungssystem für die zentrale Entwässerungsautomatisierung.",
        "Integrierte stromlos geschlossene Magnetventile an 10 Kompressoreinheiten.",
        "Programmierte die automatische Entwässerungsplanung und zeitgesteuerte Regelungslogik.",
        "Führte Systemtests zur Überprüfung eines präzisen, zuverlässigen Ventilbetriebs durch.",
      ],
      id: [
        "Merancang dan merakit sistem kontrol berbasis NodeMCU untuk otomatisasi drainase terpusat.",
        "Mengintegrasikan solenoid valve normally-closed pada 10 unit kompresor.",
        "Memprogram penjadwalan drainase otomatis dan logika kontrol berbasis timer.",
        "Melakukan pengujian sistem untuk memverifikasi operasi valve yang akurat dan reliable.",
      ],
    },
    tech: ["NodeMCU", "NC Solenoid Valves", "Electrical Circuits"],
  },
  {
    id: "spot-welding-temperature-monitoring",
    code: "PRJ-13",
    period: "02/2021 — 06/2021",
    company: "PT Mekar Armada Jaya",
    role: { en: "Internship", de: "Praktikum", id: "Internship" },
    title: {
      en: "Early-Warning Temperature Monitoring for Spot Welding Machines",
      de: "Frühwarn-Temperaturüberwachung für Punktschweißmaschinen",
      id: "Monitoring Temperatur Early-Warning untuk Mesin Spot Welding",
    },
    summary: {
      en: "Threshold-based temperature monitoring with audible alerts to prevent overheating-related weld failures.",
      de: "Schwellenwertbasierte Temperaturüberwachung mit akustischen Warnungen zur Vermeidung überhitzungsbedingter Schweißfehler.",
      id: "Monitoring temperatur berbasis threshold dengan alert audible untuk mencegah kegagalan las akibat overheating.",
    },
    description: {
      en: "Developed an early-warning temperature monitoring system for hanging-type spot welding machines to detect excessive heat and prevent overheating-related failures.",
      de: "Entwickelte ein Frühwarn-Temperaturüberwachungssystem für hängende Punktschweißmaschinen zur Erkennung übermäßiger Hitze und zur Vermeidung überhitzungsbedingter Ausfälle.",
      id: "Mengembangkan sistem monitoring temperatur early-warning untuk mesin spot welding tipe gantung guna mendeteksi panas berlebih dan mencegah kegagalan akibat overheating.",
    },
    responsibilities: {
      en: [
        "Designed and assembled a microcontroller-based temperature monitoring system.",
        "Integrated temperature sensors into critical areas of the welding machine.",
        "Programmed threshold logic to trigger an audible buzzer alert when safe limits were exceeded.",
        "Performed sensor calibration and system testing for accurate, responsive alerts.",
      ],
      de: [
        "Entwarf und baute ein mikrocontrollerbasiertes Temperaturüberwachungssystem.",
        "Integrierte Temperatursensoren in kritische Bereiche der Schweißmaschine.",
        "Programmierte eine Schwellenwertlogik zur Auslösung eines akustischen Summeralarms bei Überschreitung sicherer Grenzwerte.",
        "Führte Sensorkalibrierung und Systemtests für präzise, reaktionsschnelle Warnungen durch.",
      ],
      id: [
        "Merancang dan merakit sistem monitoring temperatur berbasis microcontroller.",
        "Mengintegrasikan sensor temperatur pada area kritis mesin welding.",
        "Memprogram logika threshold untuk memicu alert buzzer audible saat batas aman terlampaui.",
        "Melakukan kalibrasi sensor dan pengujian sistem untuk alert yang akurat dan responsif.",
      ],
    },
    tech: ["NodeMCU", "Temperature Sensors", "Buzzer", "Electrical Circuits"],
  },
];

const EDUCATION = {
  degree: {
    en: "Bachelor of Applied Science (D4) in Automation Engineering",
    de: "Bachelor of Applied Science (D4) in Automatisierungstechnik",
    id: "Sarjana Terapan (D4) Teknik Otomasi",
  },
  school: "Bandung Manufacturing Polytechnic",
  location: "Bandung, Indonesia",
  period: "08/2018 — 08/2022",
  stack: ["SolidWorks", "Unity 3D", "WebGL", "ReactJS", "MongoDB", "REST API"],
  bullets: {
    en: [
      "Final project: Designed and built a web-based Digital Twin (SolidWorks/Unity 3D kinematics exported to WebGL, ReactJS dashboard) for a FANUC ROBOSHOT injection molding machine — Case Study: PT. Biggy Cemerlang — streaming live telemetry via REST API to MongoDB.",
      "Used as a training tool for understanding injection molding machine operation without requiring physical machine access.",
    ],
    de: [
      "Abschlussprojekt: Entwarf und baute einen webbasierten Digital Twin (SolidWorks/Unity-3D-Kinematik, exportiert nach WebGL, ReactJS-Dashboard) für eine FANUC-ROBOSHOT-Spritzgussmaschine – Fallstudie: PT. Biggy Cemerlang – mit Live-Telemetrie-Streaming via REST API nach MongoDB.",
      "Diente als Trainingswerkzeug zum Verständnis des Betriebs von Spritzgussmaschinen ohne physischen Maschinenzugang.",
    ],
    id: [
      "Proyek akhir: Merancang dan membangun Digital Twin berbasis web (kinematika SolidWorks/Unity 3D di-export ke WebGL, dashboard ReactJS) untuk mesin injection molding FANUC ROBOSHOT — Studi Kasus: PT. Biggy Cemerlang — streaming telemetri live via REST API ke MongoDB.",
      "Digunakan sebagai alat pelatihan untuk memahami operasional mesin injection molding tanpa memerlukan akses fisik ke mesin.",
    ],
  },
};

const CERTIFICATIONS = [
  {
    year: "2022",
    title: {
      en: "Certified Electrical Installation and Maintenance Engineer",
      de: "Zertifizierter Ingenieur für Elektroinstallation und -wartung",
      id: "Certified Electrical Installation and Maintenance Engineer",
    },
    org: "BNSP",
  },
  {
    year: "2020",
    title: {
      en: "Certified Complex Industrial Electrical Maintenance",
      de: "Zertifiziert in komplexer industrieller Elektrowartung",
      id: "Certified Complex Industrial Electrical Maintenance",
    },
    org: "BNSP",
  },
  {
    year: "2020",
    title: {
      en: "Runner-Up, Indonesian ABU Robot Contest (KRAI) — Regional Level II",
      de: "Zweiter Platz, Indonesischer ABU-Roboterwettbewerb (KRAI) — Regionalebene II",
      id: "Runner-Up, Indonesian ABU Robot Contest (KRAI) — Regional Level II",
    },
    org: "KRAI",
  },
];

const LANGUAGES = [
  {
    name: { en: "Indonesian", de: "Indonesisch", id: "Indonesian" },
    level: { en: "Native", de: "Muttersprache", id: "Native" },
  },
  {
    name: { en: "English", de: "Englisch", id: "English" },
    level: {
      en: "Intermediate (B1)",
      de: "Mittelstufe (B1)",
      id: "Intermediate (B1)",
    },
  },
  {
    name: { en: "German", de: "Deutsch", id: "German" },
    level: {
      en: "A2 (Reading comprehension closer to B1)",
      de: "A2 (Leseverständnis nahe B1)",
      id: "A2 (Kemampuan membaca mendekati B1)",
    },
  },
  {
    name: {
      en: "Hungarian (Magyar)",
      de: "Ungarisch (Magyar)",
      id: "Hungarian (Magyar)",
    },
    level: {
      en: "Elementary (A1)",
      de: "Anfänger (A1)",
      id: "Pemula (A1)",
    },
  },
];

/* ---------------------------------------------------------
   3. I18N ENGINE
   Priority order: English → Deutsch → Indonesia
--------------------------------------------------------- */
let currentLang = localStorage.getItem("lang") || "en";

function t(path) {
  return path
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
      UI[currentLang],
    );
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n"));
    if (value !== null) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, path] = el.getAttribute("data-i18n-attr").split(":");
    const value = t(path);
    if (value !== null) el.setAttribute(attr, value);
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  applyStaticI18n();
  renderPage();
  updateLangButtons();
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  updateLangButtons();
}

/* ---------------------------------------------------------
   4. RENDER FUNCTIONS
--------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderSkills() {
  const el = document.getElementById("skills-groups");
  if (!el) return;
  el.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-group reveal">
      <h3 class="skill-group-label">${escapeHtml(group.label[currentLang])}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
      </div>
    </div>`,
  ).join("");
}

function renderExperienceTimeline() {
  const el = document.getElementById("experience-timeline");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map(
    (job) => `
    <div class="timeline-item reveal">
      <div class="timeline-node ${job.current ? "is-current" : ""}"></div>
      <div class="timeline-content">
        <div class="timeline-meta">
          <span class="mono-tag">${job.period}</span>
          ${job.current ? `<span class="badge-current">${t("experience.current")}</span>` : ""}
        </div>
        <h3 class="timeline-role">${escapeHtml(job.role[currentLang])}</h3>
        <p class="timeline-company">${escapeHtml(job.company)} — ${escapeHtml(job.location)}</p>
        <ul class="timeline-bullets">
          ${job.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        <div class="skill-tags">
          ${job.stack.map((s) => `<span class="tag tag-sm">${escapeHtml(s)}</span>`).join("")}
        </div>
      </div>
    </div>`,
  ).join("");
}

function projectCard(p) {
  return `
    <a href="project.html?id=${p.id}" class="card-project reveal">
      <span class="card-tag">${p.code}</span>
      <span class="mono-tag card-period">${p.period}</span>
      <h3 class="card-title">${escapeHtml(p.title[currentLang])}</h3>
      <p class="card-summary">${escapeHtml(p.summary[currentLang])}</p>
      <div class="skill-tags">
        ${p.tech
          .slice(0, 4)
          .map((s) => `<span class="tag tag-sm">${escapeHtml(s)}</span>`)
          .join("")}
      </div>
      <span class="card-link">${t("projects.viewDetail")}</span>
    </a>`;
}

function renderFeaturedProjects() {
  const el = document.getElementById("featured-projects");
  if (!el) return;
  el.innerHTML = PROJECTS.slice(0, 4).map(projectCard).join("");
}

function renderProjectsList() {
  const el = document.getElementById("projects-list");
  if (!el) return;
  el.innerHTML = PROJECTS.map(projectCard).join("");
}

function renderProjectDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];

  if (!project) {
    el.innerHTML = `<p class="text-inkmuted">Project not found.</p>`;
    return;
  }

  const next = PROJECTS[(index + 1) % PROJECTS.length];

  document.title = `${project.title[currentLang]} — Iqbal Fauzan`;

  el.innerHTML = `
    <span class="card-tag">${project.code}</span>
    <h1 class="detail-title reveal">${escapeHtml(project.title[currentLang])}</h1>

    <div class="detail-meta reveal">
      <div><span class="meta-label">${t("projects.company")}</span><span>${escapeHtml(project.company)}</span></div>
      <div><span class="meta-label">${t("projects.role")}</span><span>${escapeHtml(project.role[currentLang])}</span></div>
      <div><span class="meta-label">${t("projects.period")}</span><span class="mono-tag">${project.period}</span></div>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.description")}</h2>
      <p>${escapeHtml(project.description[currentLang])}</p>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.responsibilities")}</h2>
      <ul class="timeline-bullets">
        ${project.responsibilities[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.technologies")}</h2>
      <div class="skill-tags">
        ${project.tech.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
      </div>
    </div>

    <div class="detail-nav reveal">
      <a href="projects.html" class="link-arrow">${t("projects.backToProjects")}</a>
      <a href="project.html?id=${next.id}" class="link-arrow">${t("projects.nextProject")}</a>
    </div>
  `;
}

function renderCV() {
  const el = document.getElementById("cv-content");
  if (!el) return;

  el.innerHTML = `
    <section class="cv-block">
      <h2 class="section-sublabel">${t("about.heading")}</h2>
      <p>${escapeHtml(PROFILE.about[currentLang])}</p>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("experience.heading")}</h2>
      ${EXPERIENCE.map(
        (job) => `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <strong>${escapeHtml(job.role[currentLang])}</strong>
            <span class="mono-tag">${job.period}</span>
          </div>
          <p class="cv-entry-sub">${escapeHtml(job.company)} — ${escapeHtml(job.location)}</p>
          <ul>${job.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>`,
      ).join("")}
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("education.heading")}</h2>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <strong>${escapeHtml(EDUCATION.degree[currentLang])}</strong>
          <span class="mono-tag">${EDUCATION.period}</span>
        </div>
        <p class="cv-entry-sub">${escapeHtml(EDUCATION.school)} — ${escapeHtml(EDUCATION.location)}</p>
        <ul>${EDUCATION.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("certifications.heading")}</h2>
      <ul class="cv-list">
        ${CERTIFICATIONS.map((c) => `<li><span class="mono-tag">${c.year}</span> ${escapeHtml(c.title[currentLang])} — ${escapeHtml(c.org)}</li>`).join("")}
      </ul>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("skills.heading")}</h2>
      ${SKILLS.map((g) => `<p><strong>${escapeHtml(g.label[currentLang])}:</strong> ${g.items.join(", ")}</p>`).join("")}
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("languages.heading")}</h2>
      <ul class="cv-list">
        ${LANGUAGES.map((l) => `<li>${escapeHtml(l.name[currentLang])} — ${escapeHtml(l.level[currentLang])}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderAbout() {
  document
    .querySelectorAll(".js-about-text")
    .forEach((el) => (el.textContent = PROFILE.about[currentLang]));
  document.querySelectorAll(".js-primary-stack").forEach((el) => {
    el.innerHTML = PROFILE.primaryStack
      .map((s) => `<span class="tag">${escapeHtml(s)}</span>`)
      .join("");
  });
}

function renderContactInfo() {
  document
    .querySelectorAll(".js-email")
    .forEach((elx) => (elx.textContent = PROFILE.email));
  document
    .querySelectorAll(".js-email-href")
    .forEach((elx) => elx.setAttribute("href", `mailto:${PROFILE.email}`));
  document
    .querySelectorAll(".js-phone")
    .forEach((elx) => (elx.textContent = PROFILE.phone));
  document
    .querySelectorAll(".js-github-href")
    .forEach((elx) => elx.setAttribute("href", PROFILE.githubUrl));
  document
    .querySelectorAll(".js-linkedin-href")
    .forEach((elx) => elx.setAttribute("href", PROFILE.linkedinUrl));
}

function renderPage() {
  renderAbout();
  renderSkills();
  renderExperienceTimeline();
  renderFeaturedProjects();
  renderProjectsList();
  renderProjectDetail();
  renderCV();
  renderContactInfo();
  initReveal();
}

/* ---------------------------------------------------------
   5. SCROLL REVEAL
--------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   6. NAV
--------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
}

function setFooterMeta() {
  document.querySelectorAll(".js-footer-date").forEach((elx) => {
    elx.textContent = new Date().toISOString().slice(0, 10);
  });
  document.querySelectorAll(".js-footer-year").forEach((elx) => {
    elx.textContent = new Date().getFullYear();
  });
}

/* ---------------------------------------------------------
   7. INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticI18n();
  renderPage();
  updateLangButtons();
  initLangButtons();
  initNav();
  setFooterMeta();
});
