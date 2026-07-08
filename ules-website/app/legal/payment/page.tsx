import type { Metadata } from 'next'
import LegalDocPage from '@/components/LegalDocPage'
import payment from '@/lib/legal/payment'

export const metadata: Metadata = {
  title: 'Правила оформления заказов, отмен и возвратов',
  description:
    'Правила оформления заказов, отмен, возвратов и рассмотрения жалоб платформы Ules.',
}

export default function PaymentPage() {
  return <LegalDocPage doc={payment} />
}
