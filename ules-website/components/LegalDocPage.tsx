import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LocalizedLegalArticle from '@/components/LocalizedLegalArticle'
import { renderBlock } from '@/components/legalBlocks'
import type { LegalDoc, LocalizedLegalDoc } from '@/lib/legal/types'

type LegalDocPageProps =
  /** Russian-only document, rendered as-is regardless of the site language. */
  | { doc: LegalDoc; docs?: never }
  /** Translated document, swapped in place by the Nav language switcher. */
  | { docs: LocalizedLegalDoc; doc?: never }

/**
 * Renders a legal document (Terms, Payment rules, Account deletion, …) inside
 * the standard site chrome.
 */
export default function LegalDocPage(props: LegalDocPageProps) {
  return (
    <>
      <Nav variant="consumer" />

      <main className="legal-doc">
        <div className="legal-wrap">
          <Link href="/" className="legal-back">← Ules</Link>
          {props.docs ? (
            <LocalizedLegalArticle docs={props.docs} />
          ) : (
            <article className="legal-article" lang="ru">
              {props.doc.map((block, i) => renderBlock(block, i))}
            </article>
          )}
        </div>
      </main>

      <Footer variant="consumer" />
    </>
  )
}
