import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { LegalDoc } from '@/lib/legal/types'

interface LegalDocPageProps {
  doc: LegalDoc
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
                default:
                  return <p key={i} className="legal-p">{block.text}</p>
              }
            })}
          </article>
        </div>
      </main>

      <Footer variant="consumer" />
    </>
  )
}
