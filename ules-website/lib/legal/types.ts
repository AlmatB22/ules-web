import type { Locale } from '@/lib/i18n'

export type LegalBlock =
  | {
      /** h1 = document title, h2 = section, h3 = subsection, p = body paragraph */
      t: 'h1' | 'h2' | 'h3' | 'p'
      text: string
    }
  | {
      /** Standfirst under the h1 — app name, legal entity, jurisdiction. */
      t: 'lede'
      text: string
    }
  | {
      /** Numbered, step-by-step instructions. */
      t: 'steps'
      items: string[]
    }
  | {
      /** Unordered list. */
      t: 'ul'
      items: string[]
    }
  | {
      /** Callout for an irreversible action. */
      t: 'note'
      text: string
    }
  | {
      /** Tinted box grouping a few blocks (a heading, a list, a closing line). */
      t: 'card'
      blocks: LegalBlock[]
    }
  | {
      /** Two-or-more-column table. Stacks into labelled rows on narrow screens. */
      t: 'table'
      head: string[]
      rows: string[][]
    }
  | {
      /** Postal address and the like — one <br>-separated paragraph. */
      t: 'address'
      lines: string[]
    }
  | {
      /** Small print closing the document. */
      t: 'footnote'
      text: string
    }
  | {
      /** Accepted card scheme logos (Visa, Mastercard) */
      t: 'cards'
    }

export type LegalDoc = LegalBlock[]

/** A legal document that exists in every site language and swaps in-page. */
export type LocalizedLegalDoc = Record<Locale, LegalDoc>
