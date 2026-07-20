export type LegalBlock =
  | {
      /** h1 = document title, h2 = section, h3 = subsection, p = body paragraph */
      t: 'h1' | 'h2' | 'h3' | 'p'
      text: string
    }
  | {
      /** Accepted card scheme logos (Visa, Mastercard) */
      t: 'cards'
    }

export type LegalDoc = LegalBlock[]
