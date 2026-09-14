import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-KJGHSC8RSL'

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
    <html lang="ru" suppressHydrationWarning>
      <body className={dmSans.className}>
        <LanguageProvider>{children}</LanguageProvider>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
