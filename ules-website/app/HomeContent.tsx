'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function HomeContent() {
  const { t, locale } = useLanguage()
  const dir = locale === 'en' ? 'eng' : locale
  const h = t.home
  const hr = h.hero
  const ms = h.mission
  const au = h.audiences
  const ft = h.features
  const bz = h.biz

  return (
    <>
      <Nav variant="consumer" />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="kicker">
              <span className="kicker-dot" />
              {hr.kicker}
            </div>
            <h1>
              {hr.h1a}<br />
              <span className="accent">{hr.h1b}</span>
            </h1>
            <p className="lede">{hr.lede}</p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-num">{hr.stat1}</span>
                <span className="hero-meta-label">{hr.stat1Label}</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-meta-item">
                <span className="hero-meta-num">{hr.stat2}</span>
                <span className="hero-meta-label">{hr.stat2Label}</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-meta-item">
                <span className="hero-meta-num">{hr.stat3}</span>
                <span className="hero-meta-label">{hr.stat3Label}</span>
              </div>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone phone-tilt">
              <img src={`/screens/${dir}/home.png`} alt="Ules app home screen" className="phone-screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─────────────────────────────────────────────── */}
      <section className="mission" id="mission">
        <div className="section-wrap">
          <div className="mission-head">
            <div className="eyebrow">{ms.eyebrow}</div>
            <h2>{ms.h2a}<br /><span className="muted">{ms.h2b}</span></h2>
          </div>
          <div className="mission-grid">
            <p className="mission-lede">{ms.p1}</p>
            <p className="mission-lede">{ms.p2}</p>
          </div>
        </div>
      </section>

      {/* ─── AUDIENCES ─────────────────────────────────────────────── */}
      <section className="audiences" id="audiences">
        <div className="section-wrap">
          <div className="aud-grid">
            <article className="aud-card aud-card-consumer">
              <div className="aud-tag">{au.consumerTag}</div>
              <h3>{au.consumerH3}</h3>
              <p>{au.consumerP}</p>
              <ul className="aud-list">
                {au.consumerList.map((item, i) => (
                  <li key={i}><span className="aud-dot" />{item}</li>
                ))}
              </ul>
            </article>
            <article className="aud-card aud-card-business">
              <div className="aud-tag aud-tag-business">{au.businessTag}</div>
              <h3>{au.businessH3}</h3>
              <p>{au.businessP}</p>
              <ul className="aud-list">
                {au.businessList.map((item, i) => (
                  <li key={i}><span className="aud-dot aud-dot-business" />{item}</li>
                ))}
              </ul>
              <Link href="/business" className="aud-link">{au.businessLink}</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────── */}
      <section className="features" id="features">
        <div className="section-wrap">
          <div className="section-head">
            <div className="eyebrow">{ft.eyebrow}</div>
            <h2>{ft.h2}</h2>
          </div>

          {/* Feature 01 — Map */}
          <div className="feat-row">
            <div className="feat-copy">
              <div className="feat-num">{ft.f1.num}</div>
              <h3>{ft.f1.h3}</h3>
              <p>{ft.f1.p}</p>
              <ul className="feat-points">
                {ft.f1.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="feat-mock">
              <div className="phone phone-static">
                <img src={`/screens/${dir}/map.png`} alt="Restaurant map view" className="phone-screenshot" />
              </div>
            </div>
          </div>

          {/* Feature 02 — Detail */}
          <div className="feat-row feat-row-reverse">
            <div className="feat-copy">
              <div className="feat-num">{ft.f2.num}</div>
              <h3>{ft.f2.h3}</h3>
              <p>{ft.f2.p}</p>
              <ul className="feat-points">
                {ft.f2.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="feat-mock">
              <div className="phone phone-static">
                <img src={`/screens/${dir}/bag.png`} alt="Food detail screen" className="phone-screenshot" />
              </div>
            </div>
          </div>

          {/* Feature 03 — Stats */}
          <div className="feat-row">
            <div className="feat-copy">
              <div className="feat-num">{ft.f3.num}</div>
              <h3>{ft.f3.h3}</h3>
              <p>{ft.f3.p}</p>
              <ul className="feat-points">
                {ft.f3.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="feat-mock">
              <div className="phone phone-static">
                <img src={`/screens/${dir}/profile.png`} alt="Profile screen" className="phone-screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR BUSINESS ─────────────────────────────────────────────── */}
      <section className="biz" id="business">
        <div className="section-wrap">
          <div className="biz-grid">
            <div className="biz-copy">
              <div className="eyebrow eyebrow-light">{bz.eyebrow}</div>
              <h2>{bz.h2}</h2>
              <p>{bz.p1}</p>
              <p className="biz-soft">{bz.p2}</p>
              <Link href="/business" className="biz-link">{bz.link}</Link>
            </div>
            <div className="biz-mock">
              <div className="biz-laptop">
                <div className="biz-laptop-screen">
                  <div className="biz-header">
                    <div className="biz-loc">
                      <div className="ps-line ps-line-strong ps-line-blue" style={{ width: 40 }} />
                      <div className="ps-line ps-line-strong" style={{ width: 65 }} />
                    </div>
                    <div className="biz-avatar" />
                  </div>
                  <div className="biz-stat-grid">
                    <div className="biz-stat-card">
                      <div className="biz-stat-num">20</div>
                      <div className="biz-stat-label">Completed orders</div>
                    </div>
                    <div className="biz-stat-card">
                      <div className="biz-stat-num">05</div>
                      <div className="biz-stat-label">Order requests</div>
                    </div>
                  </div>
                  <div className="biz-rev-card">
                    <div className="biz-rev-head">
                      <div>
                        <div className="ps-line" style={{ width: 60 }} />
                        <div className="biz-rev-num">₸2,241</div>
                      </div>
                      <div className="biz-dd">Daily ▾</div>
                    </div>
                    <svg className="biz-chart" viewBox="0 0 200 60" preserveAspectRatio="none">
                      <path d="M0,40 C30,30 40,45 60,35 C80,25 100,32 130,22 C160,12 180,18 200,15" stroke="#4BBDE8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <path d="M0,40 C30,30 40,45 60,35 C80,25 100,32 130,22 C160,12 180,18 200,15 L200,60 L0,60 Z" fill="url(#biz-grad)" />
                      <defs>
                        <linearGradient id="biz-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4BBDE8" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#4BBDE8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="consumer" />
    </>
  )
}
