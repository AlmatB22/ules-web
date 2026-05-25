import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Ules — Rescue food. Save money.',
  description:
    'Local restaurants in Astana and Almaty cook more than they sell. Ules lets you pick up surplus food at the end of the day — at up to 70% off.',
}

export default function HomePage() {
  return <HomeContent />
}
