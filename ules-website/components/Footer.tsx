'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

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
              <img src="/ules-logo.png" alt="Ules" width={40} height={40} className="nav-logo" />
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
