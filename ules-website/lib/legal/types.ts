export type LegalBlock = {
  /** h1 = document title, h2 = section, h3 = subsection, p = body paragraph */
  t: 'h1' | 'h2' | 'h3' | 'p'
  text: string
}

export type LegalDoc = LegalBlock[]
