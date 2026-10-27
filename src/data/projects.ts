import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'smart-gate', index: '01', tone: 'lime', domain: 'Aviation · Identity · Kiosk',
    title: 'Intelligent Airport Smart Gate System',
    description: 'A secure airport kiosk journey combining biometric face verification, identity processing, real-time events, and automated gate navigation.',
    stack: ['Electron', 'React', 'TypeScript', 'MediaPipe', 'FaceTec', 'SignalR'],
    contributions: ['Biometric capture and verification flows', 'Passport fallback and session recovery', 'Real-time device events and multilingual UX'],
  },
  {
    id: 'tax-refund', index: '02', tone: 'violet', domain: 'FinTech · Travel Retail',
    title: 'Automated Tourist Tax Refund Platform',
    description: 'An interactive kiosk platform for transaction verification, inspection workflows, eligibility decisions, and multiple refund methods.',
    stack: ['Electron', 'React', 'Vite', 'SQLite', 'Zustand', 'SignalR'],
    contributions: ['Refund and inspection workflows', 'Card, cash, and wallet journeys', 'Offline-aware session and device handling'],
  },
  {
    id: 'healthcare', index: '03', tone: 'rose', domain: 'Healthcare · Digital Platforms',
    title: 'Digital Healthcare Management Platform',
    description: 'Healthcare application work centered on dependable web experiences, gateway integrations, and care-advisor workflows.',
    stack: ['React', 'TypeScript', 'Node.js', 'REST APIs'],
    contributions: ['Accessible workflow-focused interfaces', 'Service and gateway integration', 'Reliable state and error handling'],
    note: 'Presented at domain level to protect commercial details.',
  },
  {
    id: 'enterprise', index: '04', tone: 'blue', domain: 'Enterprise SaaS · Architecture',
    title: 'Scalable Enterprise Management Platform',
    description: 'A modular application ecosystem for business operations, with reusable frontend packages, secure services, and structured data management.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    contributions: ['Modular application architecture', 'Authentication and backend communication', 'Testing and deployment foundations'],
  },
  {
    id: 'sales-ai', index: '05', tone: 'orange', domain: 'AI · Sales Enablement · Exploration',
    title: 'AI-Powered Sales Intelligence Platform',
    description: 'A product exploration for voice transcription, post-call reporting, conversational agents, and agent-driven sales workflows.',
    stack: ['React', 'TypeScript', 'Node.js', 'ElevenLabs', 'AI Agents'],
    contributions: ['Product and interaction design exploration', 'Voice and conversational integration research', 'Agent workflow prototyping'],
    note: 'Exploratory work; not represented as a production deployment.',
  },
]
