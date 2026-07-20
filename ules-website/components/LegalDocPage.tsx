import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { LegalDoc } from '@/lib/legal/types'

interface LegalDocPageProps {
  doc: LegalDoc
}

const LINK_RE = /(https?:\/\/[^\s(),]+|[\w.+-]+@[\w-]+\.[\w.]+?)(?=[.,;)]*(?:\s|$))/g

/** Turns bare emails and URLs inside legal copy into real links. */
function linkify(text: string) {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part
    const href = part.includes('@') ? `mailto:${part}` : part
    return (
      <a key={i} href={href} className="legal-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {part}
      </a>
    )
  })
}

/**
 * Renders a legal document (Terms, Payment rules, …). The content is authored
 * in Russian and shown as-is regardless of the site language.
 */
export default function LegalDocPage({ doc }: LegalDocPageProps) {
  return (
    <>
      <Nav variant="consumer" />

      <main className="legal-doc" lang="ru">
        <div className="legal-wrap">
          <Link href="/" className="legal-back">← Ules</Link>
          <article className="legal-article">
            {doc.map((block, i) => {
              switch (block.t) {
                case 'h1':
                  return <h1 key={i} className="legal-title">{block.text}</h1>
                case 'h2':
                  return <h2 key={i} className="legal-h2">{block.text}</h2>
                case 'h3':
                  return <h3 key={i} className="legal-h3">{block.text}</h3>
                case 'cards':
                  return (
                    <div key={i} className="legal-cards">
                      <img src="/payments/visa.png" alt="Visa" />
                      <img src="/payments/mastercard.png" alt="Mastercard" />
                    </div>
                  )
                default:
                  return <p key={i} className="legal-p">{linkify(block.text)}</p>
              }
            })}
          </article>
        </div>
      </main>

      <Footer variant="consumer" />
    </>
  )
}
