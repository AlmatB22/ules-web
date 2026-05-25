'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const UlesLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect width="100" height="100" rx="22" fill="#4BBDE8" />
    <circle cx="37" cy="22" r="7" fill="white" />
    <circle cx="63" cy="22" r="7" fill="white" />
    <path
      d="M25 36 L25 63 Q25 80 50 80 Q75 80 75 63 L75 36"
      stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
)

interface FooterProps {
  variant?: 'consumer' | 'business'
}

export default function Footer({ variant = 'consumer' }: FooterProps) {
  const { t } = useLanguage()
  const f = t.footer
  const isBusiness = variant === 'business'

  return (
    <footer className="footer">
      <div className="section-wrap">
        <div className="footer-grid">
          <div>
            <Link className="nav-brand" href={isBusiness ? '/' : '#top'}>
              <UlesLogo size={28} />
              <span className="brand-word">ules</span>
            </Link>
            <p className="footer-soft">{f.tagline}</p>
          </div>

          {isBusiness ? (
            <>
              <div className="footer-col">
                <div className="footer-h">{f.partnersCol}</div>
                <a href="#how">{t.nav.howItWorks}</a>
                <a href="#dashboard">{t.nav.dashboard}</a>
                <a href="#pricing">{t.nav.fees}</a>
                <a href="#faq">{t.nav.faq}</a>
              </div>
              <div className="footer-col">
                <div className="footer-h">Site</div>
                <Link href="/">{t.nav.forConsumers}</Link>
                <Link href="/#team">{f.team}</Link>
              </div>
            </>
          ) : (
            <>
              <div className="footer-col">
                <div className="footer-h">{f.productCol}</div>
                <a href="#features">{t.nav.features}</a>
                <a href="#gallery">{f.appTour}</a>
                <a href="#mission">{t.nav.mission}</a>
              </div>
              <div className="footer-col">
                <div className="footer-h">{f.partnersCol}</div>
                <Link href="/business">{f.forRestaurants}</Link>
                <a href="mailto:partners@ules.kz">partners@ules.kz</a>
              </div>
            </>
          )}

          <div className="footer-col">
            <div className="footer-h">{f.contactCol}</div>
            <a href="mailto:hello@ules.kz">hello@ules.kz</a>
            {isBusiness
              ? <a href="mailto:partners@ules.kz">partners@ules.kz</a>
              : <a href="#team">{f.team}</a>
            }
          </div>
          <div className="footer-col">
            <div className="footer-h">{f.legalCol}</div>
            <a href="#" title="Coming soon">{f.terms}</a>
            <a href="#" title="Coming soon">{f.privacy}</a>
            <a href="#" title="Coming soon">{f.payment}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{f.copyright}</span>
          <span className="footer-soft">{f.languages}</span>
        </div>
      </div>
    </footer>
  )
}
