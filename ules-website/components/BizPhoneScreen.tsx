import { useId, type ReactNode } from 'react'

interface BizPhoneScreenProps {
  labels: {
    location: string
    cafeteria: string
    completed: string
    orderReq: string
    revenue: string
    daily: string
  }
  /** Optional pending-orders banner shown under the location header. */
  warning?: string
  /** Extra content rendered after the revenue card (e.g. a rating mini-card). */
  children?: ReactNode
}

/**
 * The interior of the business dashboard phone mockup (location header, stats,
 * revenue chart). Render it inside a `.phone-screen` wrapper. Shared between the
 * business hero and the dashboard showcase so the markup stays in one place.
 */
export default function BizPhoneScreen({ labels, warning, children }: BizPhoneScreenProps) {
  // Unique per instance so multiple charts on one page don't share a gradient.
  const gradId = `biz-grad${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <>
      <div className="biz-ph-loc">
        <div>
          <div className="biz-ph-cap">{labels.location}</div>
          <div className="biz-ph-loc-name">{labels.cafeteria}</div>
        </div>
        <div className="biz-avatar" />
      </div>

      {warning && <div className="biz-ph-warn">{warning}</div>}

      <div className="biz-ph-stats">
        <div className="biz-ph-stat">
          <div className="biz-ph-stat-num">20</div>
          <div className="biz-ph-stat-lbl">{labels.completed}</div>
        </div>
        <div className="biz-ph-stat">
          <div className="biz-ph-stat-num">05</div>
          <div className="biz-ph-stat-lbl">{labels.orderReq}</div>
        </div>
      </div>

      <div className="biz-ph-rev">
        <div className="biz-ph-rev-head">
          <div>
            <div className="biz-ph-rev-lbl">{labels.revenue}</div>
            <div className="biz-ph-rev-num">₸2,241</div>
          </div>
          <div className="biz-ph-dd">{labels.daily}</div>
        </div>
        <div className="biz-ph-chart">
          <div className="biz-ph-tooltip">₸500</div>
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

      {children}
    </>
  )
}
