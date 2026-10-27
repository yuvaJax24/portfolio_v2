export const skillGroups = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'Redux Saga', 'Zustand', 'React Query'],
  Backend: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'gRPC', 'Real-time communication'],
  Data: ['PostgreSQL', 'Prisma', 'Knex', 'SQLite', 'MongoDB'],
  'Desktop & Device': ['Electron.js', 'Desktop packaging', 'Biometric SDKs', 'Hardware integration'],
  'Cloud & Quality': ['AWS', 'Docker', 'CI/CD', 'CircleCI', 'Playwright', 'Cypress', 'Jest', 'SonarQube', 'Sentry'],
} as const

export const capabilities = [
  ['Frontend Architecture', 'Composable systems, resilient state, and accessible interfaces built for long-term change.'],
  ['Backend API Design', 'Clear service boundaries, typed contracts, data access, and real-time communication.'],
  ['Enterprise Applications', 'Complex operational workflows translated into focused, dependable product experiences.'],
  ['Desktop Engineering', 'Electron applications that bridge web technology, device SDKs, and kiosk hardware.'],
  ['Testing & Automation', 'Confidence through unit, component, integration, and end-to-end testing strategies.'],
  ['Cloud & Delivery', 'Repeatable builds, containerized services, CI/CD, monitoring, and pragmatic AWS delivery.'],
] as const
