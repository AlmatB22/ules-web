import type { Metadata } from 'next'
import LegalDocPage from '@/components/LegalDocPage'
import payments from '@/lib/legal/payments'

export const metadata: Metadata = {
  title: 'Платежи. Оплата банковской картой онлайн',
  description:
    'Оплата банковской картой Visa или Mastercard, гарантии безопасности и защита данных при онлайн-платежах на Ules.',
}

export default function PaymentsPage() {
  return <LegalDocPage doc={payments} />
}
