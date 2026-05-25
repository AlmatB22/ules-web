import type { Metadata } from 'next'
import BusinessContent from './BusinessContent'

export const metadata: Metadata = {
  title: 'Ules for Business — Turn surplus into revenue.',
  description:
    'If you cook fresh food daily and end up with leftovers, Ules helps you sell them in surprise bags. No upfront cost — we take a small fee per bag sold.',
}

export default function BusinessPage() {
  return <BusinessContent />
}
