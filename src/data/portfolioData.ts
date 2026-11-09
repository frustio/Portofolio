import type {
  PersonalInfo,
  Project,
  SkillGroup,
  Experience,
  Award,
  Education,
  Certification,
  Metric,
  NavItem,
} from '../types';

/*
 * All content below is sourced from CV_Furqon_Taufiq_Hidayat_ATS.pdf.
 * Fields marked "TODO" are not in the CV and should be confirmed/filled by the owner.
 */

export const personalInfo: PersonalInfo = {
  name: 'Furqon Taufiq Hidayat',
  title: 'Electrical Engineer · Embedded Systems · Software Engineer',
  subtitles: [
    'Software Engineer',
    'Firmware Engineer',
    'Embedded Systems Engineer',
    'UAV Flight Controller Programmer',
    'Control Systems Engineer',
  ],
  bio: 'Electrical Engineering graduate specializing in embedded systems, microcontroller programming, control system algorithms, and software engineering. I program ARM microcontrollers (STM32, Teensy) in C/C++ for real-time operation, design UAV flight controller architectures, and implement unit testing for backend components.',
  status: 'open-to-offers',
  location: 'Yogyakarta, Indonesia',
  socials: {
    // TODO: GitHub is not listed in the CV — confirm this username.
    github: 'https://github.com/frustio',
    linkedin: 'https://linkedin.com/in/furqon-taufiq-hidayat',
    email: 'furqontaufiqh@gmail.com',
    whatsapp: 'https://wa.me/6285329044243',
  },
  resumeUrl: '/CV_Furqon_Taufiq_Hidayat.pdf',
};

export const metrics: Metric[] = [
  { label: 'GPA · Electrical Engineering', value: '3.86', icon: 'GraduationCap' },
  { label: 'National KRTI Awards', value: '3', icon: 'Trophy' },
  { label: 'Industry Roles', value: '2', icon: 'Briefcase' },
  { label: 'Certifications', value: '4', icon: 'Award' },
];

export const projects: Project[] = [
  {
    id: 'uav-hybrid-tricopter-thesis',
    title: 'Hybrid Tricopter–Flying Wing UAV Attitude Control',
    category: 'control',
    summary:
      'Undergraduate thesis: an attitude (orientation) control system for a hybrid tricopter–flying wing UAV operating in hover mode, built on a cascade PID controller.',
    challenge:
      'A hybrid tricopter–flying wing airframe has to hold a stable attitude while hovering like a multirotor, which demands precise and responsive orientation control.',
    solution:
      'Designed and implemented a cascade PID control structure for the UAV attitude in hover mode, driven by real-time inertial sensor (IMU) and compass data.',
    techStack: ['C/C++', 'Cascade PID', 'IMU', 'Compass', 'Sensor Fusion'],
    highlights: [
      'Undergraduate thesis — Universitas Negeri Yogyakarta',
      'Cascade PID attitude control in hover mode',
      'Real-time IMU & compass data processing',
    ],
    date: '2026',
  },
  {
    id: 'krti-2025-tricopter',
    title: 'Tricopter UAV Flight Control — KRTI 2025',
    category: 'uav',
    summary:
      'Main flight control program for a tricopter UAV built by the Robotika UNY team for the Indonesian Flying Robot Contest (KRTI) 2025.',
    challenge:
      'The tricopter needed to reach a target level of flight stability, relying on accurate real-time sensor data throughout competition preparation.',
    solution:
      'Processed IMU and compass data in real time for the tricopter control system and tuned the controller based on flight data analysis until the target stability was reached.',
    techStack: ['C/C++', 'IMU', 'Compass', 'PID Tuning', 'Data Analysis'],
    highlights: [
      'Real-time IMU & compass sensor processing',
      'Data-driven controller tuning',
      'National-level competition system',
    ],
    date: '2025',
  },
  {
    id: 'krti-2024-tailsitter',
    title: 'Tailsitter UAV Flight Controller on STM32 — KRTI 2024',
    category: 'uav',
    summary:
      'Control program running on STM32 hardware for a tailsitter UAV, developed for the Indonesian Flying Robot Contest (KRTI) 2024.',
    challenge:
      'A tailsitter UAV requires a dependable control loop on embedded hardware that can process inertial sensor data in real time.',
    solution:
      'Wrote the control program on STM32 hardware and processed inertial sensor (IMU) and compass data in real time to drive the tailsitter control system.',
    techStack: ['STM32', 'C/C++', 'IMU', 'Compass', 'Real-Time Control'],
    highlights: [
      'ARM-based STM32 flight control firmware',
      'Real-time inertial sensor processing',
      'Tailsitter UAV configuration',
    ],
    date: '2024',
  },
  {
    id: 'krti-2023-teensy-fc',
    title: 'Teensy-Based UAV Flight Controller — KRTI 2023',
    category: 'uav',
    summary:
      'Programmed a Teensy microcontroller as the flight controller of a UAV system for the Indonesian Flying Robot Contest (KRTI) 2023.',
    challenge:
      'The UAV control algorithm had to be tuned for reliable performance using measured system behaviour rather than guesswork.',
    solution:
      'Programmed the Teensy as the UAV flight controller and analysed system performance data to guide the tuning of the control algorithm.',
    techStack: ['Teensy', 'C/C++', 'Flight Controller', 'PID Tuning'],
    highlights: [
      'Teensy (ARM) as a custom flight controller',
      'Performance-data analysis for tuning',
      'National-level competition system',
    ],
    date: '2023',
  },
  {
    id: 'smart-aquarium-fuzzy',
    title: 'Automated Smart Aquarium with Fuzzy Logic',
    category: 'control',
    summary:
      'An automatic aquarium control system that uses a fuzzy logic algorithm to make control decisions.',
    challenge:
      'Keeping an aquarium in good condition manually is repetitive and inconsistent, so the control decisions needed to be automated.',
    solution:
      'Designed an automatic control system for the aquarium using a fuzzy logic algorithm to decide the control actions.',
    techStack: ['Fuzzy Logic', 'Microcontroller', 'Automatic Control'],
    highlights: [
      'Fuzzy logic decision-making',
      'Automated control loop',
    ],
    date: '2025',
  },
  {
    id: 'polines-transporter-robot',
    title: 'Transporter Robot Control System — POLINES Robotic Competition',
    category: 'robotics',
    summary:
      'Arduino-based control system and design of a transporter robot built for the POLINES Robotic Competition in Semarang.',
    challenge:
      'The robot had to meet the competition challenge specifications and score as many points as possible in the shortest travel time.',
    solution:
      'Designed and developed the transporter robot with an Arduino-based control system tailored to the challenge, and planned the technical and operational strategy to maximise points efficiently.',
    techStack: ['Arduino', 'C/C++', 'Robot Control'],
    highlights: [
      'Arduino-based control system',
      'Competition strategy for points vs. time',
    ],
    date: '2023',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Embedded Programming & Hardware',
    icon: 'Cpu',
    items: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'ARM Microcontrollers (STM32, Teensy)' },
      { name: 'ESP32' },
      { name: 'Arduino' },
      { name: 'Nextion HMI' },
    ],
  },
  {
    category: 'Control Systems & Software Engineering',
    icon: 'CircuitBoard',
    items: [
      { name: 'Cascade PID Controller' },
      { name: 'Sensor Fusion (IMU, Compass)' },
      { name: 'Fuzzy Logic' },
      { name: 'MATLAB' },
      { name: 'Linux' },
      { name: 'Unit Testing' },
      { name: 'Web Development' },
    ],
  },
  {
    category: 'Data Science & Analytics',
    icon: 'Code',
    items: [
      { name: 'Python' },
      { name: 'Data Wrangling' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Data Visualization' },
      { name: 'Machine Learning' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-formulatrix',
    period: 'Aug 2026 — Present',
    role: 'Software Engineer',
    company: 'PT Formulatrix Indonesia',
    location: 'Salatiga, Central Java',
    description:
      'Working on backend software reliability through automated testing and issue resolution.',
    achievements: [
      'Developed and implemented automated unit tests to increase code coverage and ensure functional reliability of backend components.',
      'Analysed root causes and fixed issues/bugs reported by the Software Quality Assurance (SQA) team to keep software releases stable.',
    ],
    techUsed: ['Automated Unit Testing', 'Backend', 'Root Cause Analysis', 'SQA Collaboration'],
  },
  {
    id: 'exp-len',
    period: 'Feb 2026 — Jul 2026',
    role: 'Firmware Engineer',
    company: 'PT LEN Industri (Persero)',
    location: 'Bandung, West Java',
    description:
      'Developed core firmware and controller-to-HMI communication for electronic systems.',
    achievements: [
      'Designed and developed core system firmware in C to ensure reliable operational logic of electronic devices.',
      'Programmed serial data communication linking the core controller with the Human Machine Interface (HMI) in real time.',
      'Built and configured UI/UX designs on Nextion displays for responsive user interaction with the hardware.',
    ],
    techUsed: ['C', 'Embedded Firmware', 'Serial Communication', 'HMI', 'Nextion'],
  },
  {
    id: 'exp-krti',
    period: 'Nov 2022 — Dec 2025',
    role: 'Programmer — UAV Division',
    company: 'Robotika UNY (KRTI Team)',
    location: 'Sleman, D.I. Yogyakarta',
    type: 'organization',
    description:
      'Developed and implemented the main control programs for the team’s UAVs/drones, ensuring system functionality and reliability during preparation for and participation in national competitions.',
    achievements: [
      'KRTI 2025: processed IMU and compass data in real time for a tricopter UAV and tuned the controller through data analysis to reach target flight stability.',
      'KRTI 2024: wrote the control program on STM32 hardware with real-time inertial sensor processing for a tailsitter UAV.',
      'KRTI 2023: programmed a Teensy as the UAV flight controller and analysed performance data to tune the control algorithm.',
      'Trained new team members in hardware and microcontroller programming techniques.',
    ],
    techUsed: ['STM32', 'Teensy', 'C/C++', 'IMU', 'Compass', 'PID Tuning'],
  },
];

export const awards: Award[] = [
  {
    id: 'krti-2023-esc',
    rank: '2nd Place',
    event: 'Kontes Robot Terbang Indonesia (KRTI) 2023',
    category: 'Technology Development',
    theme: 'Propulsion System — Electronic Speed Controller (ESC)',
    location: 'Tulang Bawang, Lampung',
    date: '26 Sep 2023',
  },
  {
    id: 'krti-2023-fc',
    rank: '1st Honorable Mention',
    event: 'Kontes Robot Terbang Indonesia (KRTI) 2023',
    category: 'Technology Development',
    theme: 'Flight Controller (FC)',
    location: 'Tulang Bawang, Lampung',
    date: '26 Sep 2023',
  },
  {
    id: 'krti-2024',
    rank: 'Honorable Mention',
    event: 'Kontes Robot Terbang Indonesia (KRTI) 2024',
    category: 'Technology Development',
    location: 'Lanud Gading, Yogyakarta',
    date: '18 Sep 2024',
  },
];

export const education: Education[] = [
  {
    id: 'edu-uny',
    institution: 'Universitas Negeri Yogyakarta',
    degree: 'Bachelor of Engineering (S1) — Electrical Engineering',
    location: 'Sleman, D.I. Yogyakarta',
    period: 'Aug 2022 — Jun 2026',
    gpa: '3.86 / 4.00',
    thesis:
      'Sistem Kendali Orientasi UAV Hybrid Tricopter-Flying Wing pada Mode Hover menggunakan Cascade PID Controller',
    activities: ['Student Activity Unit for Engineering & Technology (RESTEK) — Robotics'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Software Development Competency Certification',
    issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
    date: '2025',
  },
  {
    name: 'Belajar Matematika untuk Data Science',
    issuer: 'Dicoding Indonesia',
    date: '2026',
  },
  {
    name: 'Belajar Analisis Data dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '2025',
  },
  {
    name: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: '2025',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
