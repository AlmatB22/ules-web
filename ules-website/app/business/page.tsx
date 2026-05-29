import type { Metadata } from 'next'
import BusinessContent from './BusinessContent'

export const metadata: Metadata = {
  title: 'Ules for Business — Turn surplus into revenue.',
  description:
    'If you cook fresh food daily and have more than you sell, Ules helps you offer it as surprise bags at the end of the day. No upfront cost — we take a small fee per bag sold.',
}

export default function BusinessPage() {
  return <BusinessContent />
}
