import type { Metadata } from 'next'
import LegalDocPage from '@/components/LegalDocPage'
import privacy from '@/lib/legal/privacy'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности и обработки персональных данных платформы Ules.',
}

export default function PrivacyPage() {
  return <LegalDocPage doc={privacy} />
}
