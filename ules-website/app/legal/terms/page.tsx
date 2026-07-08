import type { Metadata } from 'next'
import LegalDocPage from '@/components/LegalDocPage'
import terms from '@/lib/legal/terms'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение',
  description: 'Пользовательское соглашение платформы Ules.',
}

export default function TermsPage() {
  return <LegalDocPage doc={terms} />
}
