import type { Metadata } from 'next'
import LegalDocPage from '@/components/LegalDocPage'
import accountDeletion from '@/lib/legal/accountDeletion'

export const metadata: Metadata = {
  title: 'Удаление аккаунта — Ules',
  description:
    'Как удалить аккаунт в приложении Ules, какие данные удаляются безвозвратно, какие сохраняются и в течение какого срока.',
}

export default function AccountDeletionPage() {
  return <LegalDocPage docs={accountDeletion} />
}
