import type {
  PersonalInfo,
  Project,
  SkillGroup,
  Experience,
  Certification,
  Metric,
  NavItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Furqon Taufiq Hidayat',
  title: 'Electrical Engineer · Embedded Systems · Software Engineer',
  subtitles: [
    'Electrical Engineer',
    'Embedded Systems Developer',
    'Software Engineer',
    'IoT Solutions Architect',
    'Control Systems Designer',
  ],
  bio: 'Passionate engineer bridging the gap between hardware and software. I design embedded systems, build industrial control solutions, and craft clean software — from microcontroller firmware to full-stack web applications. Every project is an opportunity to solve real-world problems with elegant engineering.',
  status: 'open-to-offers',
  location: 'Indonesia',
  socials: {
    github: 'https://github.com/frustio',
    linkedin: 'https://linkedin.com/in/furqon-taufiq-hidayat',
    email: 'furqontaufiqh@gmail.com',
  },
};

export const metrics: Metric[] = [
  { label: 'Years Experience', value: '3+', icon: 'Calendar' },
  { label: 'Projects Completed', value: '15+', icon: 'FolderCode' },
  { label: 'Technologies', value: '20+', icon: 'Cpu' },
  { label: 'Certifications', value: '4+', icon: 'Award' },
];

export const projects: Project[] = [
  {
    id: 'scada-monitoring',
    title: 'Industrial SCADA Monitoring System',
    category: 'iot',
    summary:
      'Real-time supervisory control and data acquisition system for monitoring industrial plant parameters including temperature, pressure, flow rate, and power consumption.',
    challenge:
      'The existing manual monitoring process caused delayed responses to critical parameter deviations, resulting in equipment damage and production downtime.',
    solution:
      'Designed a distributed sensor network using Modbus RTU/TCP protocol with a centralized dashboard. Implemented real-time data logging, threshold-based alarming, and trend analysis with historical data visualization.',
    impact: 'Reduced equipment downtime by 40% and response time to critical events from 15 minutes to under 30 seconds.',
    techStack: ['STM32', 'Modbus RTU/TCP', 'Python', 'Node.js', 'PostgreSQL', 'Grafana', 'MQTT'],
    highlights: [
      'Multi-protocol gateway bridging Modbus RTU to MQTT',
      'Sub-second data polling with 99.9% uptime',
      'Custom alarm engine with SMS/email notifications',
    ],
    githubUrl: 'https://github.com/furqontaufiq/scada-monitoring',
    date: '2024-08',
  },
  {
    id: 'smart-power-meter',
    title: 'Smart Power Meter with IoT Dashboard',
    category: 'embedded',
    summary:
      'ESP32-based power monitoring device that measures voltage, current, power factor, and energy consumption with cloud data logging and web dashboard.',
    challenge:
      'Conventional energy meters lack remote monitoring capabilities and detailed consumption analytics needed for energy optimization in commercial buildings.',
    solution:
      'Built a custom PCB with PZEM-004T sensor module and ESP32 microcontroller. Firmware handles precise AC measurement sampling, WiFi connectivity, and MQTT publishing to a cloud broker with a React-based analytics dashboard.',
    impact: 'Enabled 25% energy cost reduction through detailed consumption pattern analysis.',
    techStack: ['ESP32', 'C/C++', 'FreeRTOS', 'MQTT', 'React', 'InfluxDB', 'KiCad'],
    highlights: [
      'Custom PCB design with isolated measurement circuit',
      'FreeRTOS multi-task firmware architecture',
      'Real-time WebSocket dashboard updates',
    ],
    githubUrl: 'https://github.com/furqontaufiq/smart-power-meter',
    date: '2024-05',
  },
  {
    id: 'motor-control',
    title: 'PID Motor Speed Controller',
    category: 'electrical',
    summary:
      'Precision DC motor speed control system using PID algorithm with encoder feedback, featuring auto-tuning capability and serial monitoring interface.',
    challenge:
      'Achieving precise speed control with varying mechanical loads while maintaining smooth acceleration/deceleration profiles for a conveyor belt application.',
    solution:
      'Implemented a digital PID controller on Arduino Mega with quadrature encoder feedback. Added Ziegler-Nichols auto-tuning routine and a serial command interface for real-time parameter adjustment and data logging.',
    impact: 'Achieved ±1% speed accuracy under dynamic load conditions.',
    techStack: ['Arduino', 'C++', 'MATLAB/Simulink', 'Python', 'PWM', 'H-Bridge Driver'],
    highlights: [
      'Auto-tuning PID with Ziegler-Nichols method',
      'Real-time serial plotter for PID response visualization',
      'Smooth S-curve acceleration profiles',
    ],
    githubUrl: 'https://github.com/furqontaufiq/pid-motor-control',
    date: '2024-02',
  },
  {
    id: 'inventory-system',
    title: 'Warehouse Inventory Management System',
    category: 'fullstack',
    summary:
      'Full-stack web application for real-time inventory tracking with barcode scanning, automated reorder notifications, and comprehensive reporting dashboard.',
    challenge:
      'Manual inventory tracking in a multi-warehouse environment led to stock discrepancies, delayed reorders, and significant operational overhead.',
    solution:
      'Built a responsive web application with React frontend and Express.js REST API backend. Integrated barcode scanner input, implemented real-time stock level monitoring, and automated purchase order generation when stock falls below configurable thresholds.',
    impact: 'Eliminated 95% of stock discrepancies and reduced manual data entry time by 80%.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'Real-time WebSocket stock level updates',
      'Role-based access control (RBAC)',
      'Automated PDF report generation',
    ],
    githubUrl: 'https://github.com/furqontaufiq/inventory-system',
    date: '2023-11',
  },
  {
    id: 'smart-greenhouse',
    title: 'Automated Smart Greenhouse Controller',
    category: 'iot',
    summary:
      'IoT-based greenhouse automation system that monitors and controls temperature, humidity, soil moisture, and lighting for optimal plant growth conditions.',
    challenge:
      'Manual greenhouse management was labor-intensive and inconsistent, leading to sub-optimal growing conditions and crop yield variability.',
    solution:
      'Designed a multi-node sensor network using ESP32 controllers communicating via ESP-NOW protocol. Central controller runs fuzzy logic algorithms for actuator decisions (fans, heaters, irrigation valves, grow lights) with a mobile-friendly monitoring dashboard.',
    impact: 'Improved crop yield consistency by 30% while reducing water usage by 35%.',
    techStack: ['ESP32', 'ESP-NOW', 'C++', 'Fuzzy Logic', 'Node-RED', 'MQTT', 'React Native'],
    highlights: [
      'Mesh network of 8 sensor nodes with <100ms latency',
      'Fuzzy logic controller for multi-variable optimization',
      'Mobile app with push notification alerts',
    ],
    githubUrl: 'https://github.com/furqontaufiq/smart-greenhouse',
    date: '2023-08',
  },
  {
    id: 'pcb-design-tool',
    title: 'PCB Component Library Manager',
    category: 'software',
    summary:
      'Desktop utility application for managing and organizing KiCad component libraries with search, categorization, and datasheet linking capabilities.',
    challenge:
      'Growing PCB projects with hundreds of custom components made it difficult to maintain consistent library organization and find reusable footprints.',
    solution:
      'Built a Python desktop application using PyQt5 with SQLite backend. Features include full-text search across component parameters, visual footprint preview, automated library file parsing, and datasheet URL management.',
    techStack: ['Python', 'PyQt5', 'SQLite', 'KiCad', 'Git'],
    highlights: [
      'Parses KiCad .kicad_sym and .kicad_mod files',
      'Visual component preview with pin mapping',
      'Git integration for library version control',
    ],
    githubUrl: 'https://github.com/furqontaufiq/pcb-lib-manager',
    date: '2023-05',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Embedded & Microcontrollers',
    icon: 'Cpu',
    items: [
      { name: 'STM32 (HAL/LL)', proficiency: 85 },
      { name: 'ESP32 / ESP-IDF', proficiency: 90 },
      { name: 'Arduino', proficiency: 95 },
      { name: 'FreeRTOS', proficiency: 80 },
      { name: 'Raspberry Pi', proficiency: 85 },
    ],
  },
  {
    category: 'Programming Languages',
    icon: 'Code',
    items: [
      { name: 'C / C++', proficiency: 88 },
      { name: 'Python', proficiency: 90 },
      { name: 'TypeScript', proficiency: 82 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'MATLAB', proficiency: 75 },
    ],
  },
  {
    category: 'Electrical & PCB Design',
    icon: 'CircuitBoard',
    items: [
      { name: 'KiCad', proficiency: 88 },
      { name: 'Proteus', proficiency: 80 },
      { name: 'LTSpice', proficiency: 75 },
      { name: 'AutoCAD Electrical', proficiency: 70 },
      { name: 'Power Electronics', proficiency: 78 },
    ],
  },
  {
    category: 'Communication Protocols',
    icon: 'Wifi',
    items: [
      { name: 'MQTT', proficiency: 90 },
      { name: 'Modbus RTU/TCP', proficiency: 85 },
      { name: 'I2C / SPI / UART', proficiency: 92 },
      { name: 'HTTP / WebSocket', proficiency: 88 },
      { name: 'BLE / ESP-NOW', proficiency: 78 },
    ],
  },
  {
    category: 'Web & Software Development',
    icon: 'Globe',
    items: [
      { name: 'React', proficiency: 82 },
      { name: 'Node.js / Express', proficiency: 80 },
      { name: 'PostgreSQL', proficiency: 78 },
      { name: 'Docker', proficiency: 72 },
      { name: 'Git / GitHub', proficiency: 90 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    items: [
      { name: 'Linux (Ubuntu)', proficiency: 85 },
      { name: 'VS Code / PlatformIO', proficiency: 92 },
      { name: 'Node-RED', proficiency: 80 },
      { name: 'Grafana / InfluxDB', proficiency: 78 },
      { name: 'Jira / Confluence', proficiency: 70 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    period: 'Mar 2024 — Present',
    role: 'Embedded Systems Engineer',
    company: 'PT. Teknologi Nusantara',
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    description:
      'Lead embedded firmware development for industrial IoT products. Design PCB schematics, develop microcontroller firmware, and implement communication protocols for factory automation systems.',
    achievements: [
      'Developed SCADA monitoring system reducing downtime by 40%',
      'Designed 5+ custom PCBs from schematic to production',
      'Implemented OTA firmware update system for 200+ deployed devices',
      'Mentored 2 junior engineers on embedded development practices',
    ],
    techUsed: ['STM32', 'ESP32', 'FreeRTOS', 'Modbus', 'MQTT', 'KiCad', 'Python'],
  },
  {
    id: 'exp-2',
    period: 'Jun 2023 — Feb 2024',
    role: 'Electrical & Software Engineer',
    company: 'CV. Solusi Automasi',
    location: 'Bandung, Indonesia',
    type: 'full-time',
    description:
      'Developed control systems and monitoring software for industrial clients. Handled end-to-end project delivery from electrical design to software deployment.',
    achievements: [
      'Delivered 8 automation projects for manufacturing clients',
      'Built web-based HMI dashboards with real-time data visualization',
      'Reduced sensor data latency from 5s to 200ms through protocol optimization',
      'Created reusable PLC programming library adopted by the team',
    ],
    techUsed: ['PLC', 'HMI', 'Node.js', 'React', 'PostgreSQL', 'Modbus', 'Python'],
  },
  {
    id: 'exp-3',
    period: 'Jan 2023 — May 2023',
    role: 'IoT Developer Intern',
    company: 'Startup IoT Indonesia',
    location: 'Yogyakarta, Indonesia',
    type: 'internship',
    description:
      'Contributed to smart agriculture IoT platform development. Built sensor node firmware and backend data pipeline for a cloud-based crop monitoring solution.',
    achievements: [
      'Developed firmware for 15 environmental sensor nodes',
      'Built REST API endpoints for sensor data ingestion',
      'Implemented automated alert system for threshold violations',
      'Documented full system architecture for the engineering team',
    ],
    techUsed: ['ESP32', 'Arduino', 'MQTT', 'Node.js', 'MongoDB', 'Docker'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'STM32 Embedded Systems Development',
    issuer: 'STMicroelectronics Academy',
    date: '2024',
    credentialUrl: 'https://example.com/cert/stm32',
  },
  {
    name: 'Professional IoT Developer',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    credentialUrl: 'https://example.com/cert/iot',
  },
  {
    name: 'PCB Design with KiCad',
    issuer: 'Udemy',
    date: '2023',
    credentialUrl: 'https://example.com/cert/kicad',
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2023',
    credentialUrl: 'https://example.com/cert/fullstack',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
