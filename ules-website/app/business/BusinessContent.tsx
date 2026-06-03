'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BizPhoneScreen from '@/components/BizPhoneScreen'
import { useLanguage } from '@/context/LanguageContext'

export default function BusinessContent() {
  const { t } = useLanguage()
  const b = t.business
  const bh = b.hero
  const hw = b.how
  const db = b.dashboard
  const pr = b.pricing
  const fq = b.faq
  const ct = b.contact

  const phoneLabels = {
    location: bh.phoneLocation,
    cafeteria: bh.phoneCafeteria,
    completed: bh.phoneCompleted,
    orderReq: bh.phoneOrderReq,
    revenue: bh.phoneRevenue,
    daily: bh.phoneDaily,
  }

  return (
    <>
      <Nav variant="business" />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="hero biz-hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="kicker kicker-business">
              <span className="kicker-dot kicker-dot-business" />
              {bh.kicker}
            </div>
            <h1>
              {bh.h1a}<br />
              <span className="accent-orange">{bh.h1b}</span>
            </h1>
            <p className="lede">{bh.lede}</p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-num">{bh.stat1}</span>
                <span className="hero-meta-label">{bh.stat1Label}</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-meta-item">
                <span className="hero-meta-num">{bh.stat2}</span>
                <span className="hero-meta-label">{bh.stat2Label}</span>
              </div>
              <div className="hero-divider" />
              <div className="hero-meta-item">
                <span className="hero-meta-num">{bh.stat3}</span>
                <span className="hero-meta-label">{bh.stat3Label}</span>
              </div>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone phone-tilt phone-biz">
              <div className="phone-notch" />
              <div className="phone-screen biz-phone-screen">
                <BizPhoneScreen labels={phoneLabels} warning={bh.phonePending} />
              </div>
              <div className="phone-tabbar">
                <div className="phone-tab phone-tab-on" />
                <div className="phone-tab" />
                <div className="phone-tab phone-tab-add" />
                <div className="phone-tab" />
                <div className="phone-tab" />
              </div>
            </div>
            <div className="phone-float phone-float-sm">
              <div className="pf-row">
                <div className="pf-bag" />
                <div>
                  <div className="pf-strong">{bh.floatNewOrder}</div>
                  <div className="pf-weak">{bh.floatNewOrderDesc}</div>
                </div>
              </div>
            </div>
            <div className="phone-float phone-float-md">
              <div className="pf-row">
                <div className="pf-leaf" style={{ background: 'rgba(75,189,232,0.15)' }} />
                <div>
                  <div className="pf-strong">{bh.floatRating}</div>
                  <div className="pf-weak">{bh.floatRatingDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="biz-how" id="how">
        <div className="section-wrap">
          <div className="section-head">
            <div className="eyebrow">{hw.eyebrow}</div>
            <h2>{hw.h2}</h2>
          </div>
          <div className="how-grid">
            {hw.steps.map((step, i) => (
              <article className="how-card" key={i}>
                <div className="how-num">{i + 1}</div>
                <h3>{step.h3}</h3>
                <p>{step.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DASHBOARD SHOWCASE ─────────────────────────────────────────────── */}
      <section className="biz-dash" id="dashboard">
        <div className="section-wrap">
          <div className="section-head">
            <div className="eyebrow">{db.eyebrow}</div>
            <h2>{db.h2}</h2>
            <p className="section-lede">{db.subtitle}</p>
          </div>

          <div className="feat-row">
            <div className="feat-copy">
              <div className="feat-num feat-num-orange">{db.d1.num}</div>
              <h3>{db.d1.h3}</h3>
              <p>{db.d1.p}</p>
              <ul className="feat-points feat-points-orange">
                {db.d1.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="feat-mock">
              <div className="phone phone-static">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="biz-list-head">
                    <div className="biz-list-back" />
                    <div className="ps-h ps-h-big-sm">{db.phoneMyFoodList}</div>
                  </div>
                  <div className="biz-list-tabs">
                    <div className="biz-list-tab biz-list-tab-on">{db.phoneAll}</div>
                    <div className="biz-list-tab">{db.phoneSalty}</div>
                    <div className="biz-list-tab">{db.phoneSweet}</div>
                  </div>
                  <div className="biz-list-count">{db.phoneTotal}</div>
                  {[
                    { price: '₸3,000', tag: db.phoneSalty, w: '60%' },
                    { price: '₸3,000', tag: db.phoneSweet, w: '60%' },
                    { price: '₸5,000', tag: db.phoneSweet, w: '65%' },
                  ].map((item, i) => (
                    <div className="biz-list-row" key={i}>
                      <div className="biz-list-thumb" />
                      <div style={{ flex: 1 }}>
                        <div className="ps-line ps-line-strong" style={{ width: item.w }} />
                        <div className="biz-list-pill biz-list-pill-salty">{item.tag}</div>
                        <div className="ps-line" style={{ width: '50%' }} />
                      </div>
                      <div className="biz-list-meta">
                        <div className="biz-list-dots">⋯</div>
                        <div className="biz-list-price">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="phone-tabbar">
                  <div className="phone-tab" />
                  <div className="phone-tab phone-tab-on" />
                  <div className="phone-tab phone-tab-add" />
                  <div className="phone-tab" />
                  <div className="phone-tab" />
                </div>
              </div>
            </div>
          </div>

          <div className="feat-row feat-row-reverse">
            <div className="feat-copy">
              <div className="feat-num feat-num-orange">{db.d2.num}</div>
              <h3>{db.d2.h3}</h3>
              <p>{db.d2.p}</p>
              <ul className="feat-points feat-points-orange">
                {db.d2.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="feat-mock">
              <div className="phone phone-static">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <BizPhoneScreen labels={phoneLabels}>
                    <div className="biz-rev-mini">
                      <div className="ps-line ps-line-strong" style={{ width: '30%' }} />
                      <div className="biz-rev-mini-row">
                        <span className="ps-star" />
                        <div className="ps-line ps-line-strong" style={{ width: 28 }} />
                        <div className="ps-line" style={{ width: 80 }} />
                      </div>
                    </div>
                  </BizPhoneScreen>
                </div>
                <div className="phone-tabbar">
                  <div className="phone-tab phone-tab-on" />
                  <div className="phone-tab" />
                  <div className="phone-tab phone-tab-add" />
                  <div className="phone-tab" />
                  <div className="phone-tab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─────────────────────────────────────────────── */}
      <section className="biz-pricing" id="pricing">
        <div className="section-wrap">
          <div className="section-head">
            <div className="eyebrow">{pr.eyebrow}</div>
            <h2>{pr.h2}</h2>
          </div>
          <div className="pricing-card">
            <div className="pricing-grid">
              {pr.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && <div className="pricing-divider" />}
                  <div className="pricing-item">
                    <div className="pricing-num">{item.num}</div>
                    <div className="pricing-lbl">{item.label}</div>
                    <p>{item.p}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <p className="pricing-foot">{pr.footnote}</p>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="biz-faq" id="faq">
        <div className="section-wrap-narrow">
          <div className="section-head">
            <div className="eyebrow">{fq.eyebrow}</div>
            <h2>{fq.h2}</h2>
          </div>
          <div className="faq-list">
            {fq.items.map((item, i) => (
              <details className="faq-item" key={i} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─────────────────────────────────────────────── */}
      <section className="biz-contact">
        <div className="section-wrap">
          <div className="contact-card">
            <div>
              <div className="eyebrow eyebrow-light">{ct.eyebrow}</div>
              <h2>{ct.h2}</h2>
              <p>{ct.p}</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:partners@ules.kz" className="biz-link biz-link-primary">partners@ules.kz</a>
              <Link href="/" className="biz-link">{ct.backLink}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="business" />
    </>
  )
}
