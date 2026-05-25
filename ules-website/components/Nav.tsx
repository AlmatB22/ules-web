'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Locale } from '@/lib/i18n'

const UlesLogo = ({ size = 32 }: { size?: number }) => (
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

interface NavProps {
  variant?: 'consumer' | 'business'
}

export default function Nav({ variant = 'consumer' }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const isBusiness = variant === 'business'

  function close() { setMenuOpen(false) }

  const consumerLinks = (
    <>
      <a href="#mission" onClick={close}>{t.nav.mission}</a>
      <a href="#features" onClick={close}>{t.nav.features}</a>
      <a href="#gallery" onClick={close}>{t.nav.app}</a>
      <a href="#business" onClick={close}>{t.nav.forBusiness}</a>
      <a href="#team" onClick={close}>{t.nav.team}</a>
    </>
  )

  const businessLinks = (
    <>
      <Link href="/" onClick={close}>{t.nav.forConsumers}</Link>
      <a href="#how" onClick={close}>{t.nav.howItWorks}</a>
      <a href="#dashboard" onClick={close}>{t.nav.dashboard}</a>
      <a href="#pricing" onClick={close}>{t.nav.fees}</a>
      <a href="#faq" onClick={close}>{t.nav.faq}</a>
    </>
  )

  const links = isBusiness ? businessLinks : consumerLinks

  return (
    <div className="nav-wrapper">
      <header className="nav">
        <Link className="nav-brand" href={isBusiness ? '/' : '#top'}>
          <UlesLogo size={32} />
          <span className="brand-word">
            ules{isBusiness && <> <span className="brand-sub">/ business</span></>}
          </span>
        </Link>

        <nav className="nav-links">{links}</nav>

        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            {(['en', 'ru', 'kz'] as Locale[]).map((l) => (
              <button
                key={l}
                type="button"
                className={locale === l ? 'active' : ''}
                onClick={() => setLocale(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && <nav className="nav-mobile-menu">{links}</nav>}
    </div>
  )
}
