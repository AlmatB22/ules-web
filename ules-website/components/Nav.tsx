'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Locale } from '@/lib/i18n'

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
    </>
  )

  const businessLinks = (
    <>
      <a href="#how" onClick={close}>{t.nav.howItWorks}</a>
      <a href="#dashboard" onClick={close}>{t.nav.dashboard}</a>
      <a href="#pricing" onClick={close}>{t.nav.fees}</a>
      <a href="#faq" onClick={close}>{t.nav.faq}</a>
    </>
  )

  const links = isBusiness ? businessLinks : consumerLinks

  const crossCta = isBusiness ? (
    <Link href="/" className="nav-cta nav-cta-consumer" onClick={close}>
      {t.nav.forConsumers}
    </Link>
  ) : (
    <Link href="/business" className="nav-cta nav-cta-business" onClick={close}>
      {t.nav.forRestaurants}
    </Link>
  )

  const langSwitch = (
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
  )

  return (
    <div className="nav-wrapper">
      <header className="nav">
        <Link className="nav-brand" href={isBusiness ? '/' : '#top'}>
          <img src="/ules-logo.png" alt="Ules" width={48} height={48} className="nav-logo" />
          <span className="brand-word">
            ules{isBusiness && <> <span className="brand-sub">/ business</span></>}
          </span>
        </Link>

        <nav className="nav-links">{links}</nav>

        <div className="nav-right">
          {crossCta}
          <div className="nav-lang-desktop">{langSwitch}</div>
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

      {menuOpen && (
        <nav className="nav-mobile-menu">
          {links}
          <div className="nav-mobile-lang">{langSwitch}</div>
        </nav>
      )}
    </div>
  )
}
