'use client'

import { useLanguage } from '@/context/LanguageContext'
import { renderBlock } from '@/components/legalBlocks'
import type { LocalizedLegalDoc } from '@/lib/legal/types'

/** Our locale codes vs. the BCP-47 tags the `lang` attribute wants. */
const LANG_TAG: Record<string, string> = { ru: 'ru', en: 'en', kz: 'kk' }

/**
 * A legal document that exists in all three site languages. The Nav language
 * switcher swaps it in place — the site has no per-language routes, and every
 * language is in the served HTML, so nothing is fetched to render this.
 */
export default function LocalizedLegalArticle({ docs }: { docs: LocalizedLegalDoc }) {
  const { locale } = useLanguage()

  return (
    <article className="legal-article" lang={LANG_TAG[locale] ?? locale}>
      {docs[locale].map((block, i) => renderBlock(block, i))}
    </article>
  )
}
