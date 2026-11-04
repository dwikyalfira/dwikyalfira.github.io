// Semua data profil ada di sini. Ubah file ini untuk memperbarui isi web.
export const site = {
  name: 'Muhammad Dwiky Alfira',
  shortName: 'Dwiky',
  initials: 'DA',
  role: 'Software Engineer',
  location: 'Padang, Indonesia',
  tagline: 'I build Android apps and websites, and enjoy working on the design side too.',
  description:
    'Muhammad Dwiky Alfira, a software engineering graduate who builds Android apps and websites.',
  email: 'dwikyalfira1@gmail.com',
  status: 'Open to opportunities',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dwikyalfira' },
    // TODO: ganti dengan username GitHub Anda
    { label: 'GitHub', href: 'https://github.com/dwikyalfira' },
  ],
};

export const about = {
  intro: [
    "I studied Software Engineering at Politeknik Negeri Padang. Most of what I build is Android apps and websites, and I like spending time on the design side too.",
    'I joined the mobile development path at Bangkit Academy, and spent a semester at ISEP in Porto, Portugal through the IISMA exchange, where I also helped with a small exhibition on Indonesian art and culture.',
    "I'm still learning a lot. I enjoy working with people from different backgrounds on things that are useful.",
  ],
  highlights: [
    { title: 'What I use', text: 'Kotlin and Flutter for Android, HTML, CSS and JavaScript for the web, and Figma for design.' },
    { title: 'Background', text: 'Software Engineering at Politeknik Negeri Padang, Bangkit Academy 2023, and an IISMA exchange at ISEP, Portugal.' },
    { title: 'How I work', text: 'I like to understand the problem first, ask questions, and keep an eye on the details.' },
  ],
};

export const skills = [
  { group: 'Mobile', items: ['Kotlin', 'Android SDK', 'Flutter', 'Dart', 'Jetpack Compose', 'Coroutines', 'Dagger / Hilt', 'TensorFlow Lite'] },
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'Web Hosting'] },
  { group: 'Design', items: ['Figma', 'UI/UX', 'User Research', 'Prototyping'] },
  { group: 'Practice', items: ['MVVM', 'Clean Architecture', 'Git', 'Android Studio', 'VS Code'] },
];

export const strengths = [
  'Problem Solving', 'Adaptability', 'Attention to Detail', 'Teamwork', 'Communication',
];

export const experience = [
  {
    period: 'Sep 2024 — Feb 2025',
    title: 'IISMA Exchange Student',
    org: 'Instituto Superior de Engenharia do Porto (ISEP) · Portugal',
    text: 'One semester abroad through the IISMA scholarship. Took engineering courses with international students and helped organise an exhibition on Indonesian art and culture.',
  },
  {
    period: 'Aug 2023 — Jan 2024',
    title: 'Mobile Development Path',
    org: 'Bangkit Academy — Google, GoTo & Traveloka',
    text: 'Graduated with distinction. Learned Kotlin, Jetpack Compose and app architecture (MVVM, Clean Architecture), and built the Android app for our BCare capstone.',
  },
  {
    period: 'Aug 2021 — Feb 2026',
    title: 'B.A.Sc. Software Engineering',
    org: 'Politeknik Negeri Padang',
    text: 'Bachelor of Applied Science (S.Tr.Kom.), GPA 3.73 / 4.00.',
  },
];
