import { useId } from 'react'

export interface BizPhoneLabels {
  location: string
  cafeteria: string
  pending: string
  todayStatus: string
  todayInfo: string
  todayCta: string
  /** Stat tile 1 label — "Today's orders". */
  completed: string
  /** Stat tile 2 label — "New requests". */
  orderReq: string
  revenue: string
  revLabel: string
  seeDetails: string
  daily: string
  weekly: string
  monthly: string
  ratings: string
  seeAll: string
  ratingsFrom: string
  popular: string
  item1: string
  item1Sold: string
  item2: string
  item2Sold: string
}

interface BizPhoneScreenProps {
  labels: BizPhoneLabels
  /**
   * `full` — the hero dashboard: location header, Today's bags banner, stat
   * tiles, revenue card. `analytics` — the revenue/ratings showcase: revenue
   * card, ratings card, popular items.
   */
  variant?: 'full' | 'analytics'
}

/** Revenue card with segmented period control, delta pill, and peak chart. */
function RevenueCard({ labels }: { labels: BizPhoneLabels }) {
  const gradId = `biz-grad${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div className="biz-ph-rev">
      <div className="biz-ph-rev-top">
        <div>
          <div className="biz-ph-rev-lbl">{labels.revenue}</div>
          <div className="biz-ph-rev-numrow">
            <div className="biz-ph-rev-num">₸18,000</div>
            <div className="biz-ph-delta">↑ 20%</div>
          </div>
          <div className="biz-ph-rev-sub">{labels.revLabel}</div>
        </div>
        <span className="biz-ph-see">{labels.seeDetails}</span>
      </div>

      <div className="biz-ph-seg">
        <span className="biz-ph-seg-btn biz-ph-seg-btn-on">{labels.daily}</span>
        <span className="biz-ph-seg-btn">{labels.weekly}</span>
        <span className="biz-ph-seg-btn">{labels.monthly}</span>
      </div>

      <div className="biz-ph-chart">
        <div className="biz-ph-tooltip">₸6,000</div>
        <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: '100%', height: 50 }}>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4BBDE8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#4BBDE8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 C25,30 40,45 60,35 C80,25 100,32 130,22 C160,12 180,18 200,15" stroke="#4BBDE8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M0,40 C25,30 40,45 60,35 C80,25 100,32 130,22 C160,12 180,18 200,15 L200,60 L0,60 Z" fill={`url(#${gradId})`} />
          <circle cx="80" cy="25" r="3" fill="white" stroke="#4BBDE8" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  )
}

function RatingsCard({ labels }: { labels: BizPhoneLabels }) {
  return (
    <div className="biz-ph-ratings">
      <div className="biz-ph-card-head">
        <span className="biz-ph-card-title">{labels.ratings}</span>
        <span className="biz-ph-see">{labels.seeAll}</span>
      </div>
      <div className="biz-ph-ratings-row">
        <span className="ps-star" />
        <span className="biz-ph-rating-num">4.9</span>
        <span className="biz-ph-rating-from">{labels.ratingsFrom}</span>
      </div>
    </div>
  )
}

function PopularCard({ labels }: { labels: BizPhoneLabels }) {
  return (
    <div className="biz-ph-popular">
      <div className="biz-ph-card-head">
        <span className="biz-ph-card-title">{labels.popular}</span>
        <span className="biz-ph-see">{labels.seeAll}</span>
      </div>
      <div className="biz-ph-pop-grid">
        <div className="biz-ph-pop-ph" />
        <div className="biz-ph-pop-ph" />
      </div>
      <div className="biz-ph-pop-grid biz-ph-pop-names">
        <div className="biz-ph-pop-name">{labels.item1} <span>· {labels.item1Sold}</span></div>
        <div className="biz-ph-pop-name">{labels.item2} <span>· {labels.item2Sold}</span></div>
      </div>
    </div>
  )
}

/**
 * The interior of the business dashboard phone mockup, matching the redesigned
 * Ules Business app. Render it inside a `.phone-screen` wrapper. Shared between
 * the business hero (`full`) and the dashboard showcase (`analytics`).
 */
export default function BizPhoneScreen({ labels, variant = 'full' }: BizPhoneScreenProps) {
  return (
    <div className="biz-ph-dash">
      {/* Location + approval header */}
      <div className="biz-ph-loc">
        <div>
          <div className="biz-ph-cap">{labels.location}</div>
          <div className="biz-ph-loc-name">{labels.cafeteria} ▾</div>
          {variant === 'full' && <div className="biz-ph-warn">{labels.pending}</div>}
        </div>
        <div className="biz-avatar" />
      </div>

      {variant === 'full' && (
        <>
          {/* Today's bags banner */}
          <div className="biz-ph-today">
            <div className="biz-ph-today-ic">✓</div>
            <div className="biz-ph-today-body">
              <div className="biz-ph-today-status">{labels.todayStatus}</div>
              <div className="biz-ph-today-info">{labels.todayInfo}</div>
            </div>
            <div className="biz-ph-today-cta">{labels.todayCta} ›</div>
          </div>

          {/* Stat tiles */}
          <div className="biz-ph-stats">
            <div className="biz-ph-stat">
              <div className="biz-ph-stat-num">06</div>
              <div className="biz-ph-stat-lbl">{labels.completed}</div>
            </div>
            <div className="biz-ph-stat">
              <div className="biz-ph-stat-num">02</div>
              <div className="biz-ph-stat-lbl">{labels.orderReq}</div>
            </div>
          </div>
        </>
      )}

      <RevenueCard labels={labels} />

      {variant === 'analytics' && (
        <>
          <RatingsCard labels={labels} />
          <PopularCard labels={labels} />
        </>
      )}
    </div>
  )
}
