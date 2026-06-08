import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ules.business'),
  title: {
    default: 'Ules — Rescue food. Save money.',
    template: '%s | Ules',
  },
  description:
    'Local restaurants in Astana and Almaty cook more than they sell. Ules lets you pick up surplus food at the end of the day — at least 40% off.',
  openGraph: {
    siteName: 'Ules',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
