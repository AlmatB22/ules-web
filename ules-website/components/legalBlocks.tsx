import { Fragment } from 'react'
import type { LegalBlock } from '@/lib/legal/types'

const LINK_RE = /(https?:\/\/[^\s(),]+|[\w.+-]+@[\w-]+\.[\w.]+?)(?=[.,;)]*(?:\s|$))/g
const BOLD_RE = /\*\*([^*]+)\*\*/g

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
 * Inline markup allowed in legal copy: `**bold**`, plus the bare emails and
 * URLs linkify() picks up. Deliberately tiny — this is body text, not Markdown.
 */
export function inline(text: string) {
  return text.split(BOLD_RE).map((part, i) => (
    <Fragment key={i}>{i % 2 === 1 ? <strong>{linkify(part)}</strong> : linkify(part)}</Fragment>
  ))
}

/** Renders one authored block. Shared by the static and the localized page. */
export function renderBlock(block: LegalBlock, key: number) {
  switch (block.t) {
    case 'h1':
      return <h1 key={key} className="legal-title">{block.text}</h1>
    case 'h2':
      return <h2 key={key} className="legal-h2">{block.text}</h2>
    case 'h3':
      return <h3 key={key} className="legal-h3">{block.text}</h3>
    case 'lede':
      return <p key={key} className="legal-lede">{inline(block.text)}</p>
    case 'steps':
      return (
        <ol key={key} className="legal-steps">
          {block.items.map((item, i) => <li key={i}>{inline(item)}</li>)}
        </ol>
      )
    case 'ul':
      return (
        <ul key={key} className="legal-ul">
          {block.items.map((item, i) => <li key={i}>{inline(item)}</li>)}
        </ul>
      )
    case 'note':
      return <div key={key} className="legal-note"><p>{inline(block.text)}</p></div>
    case 'card':
      return (
        <div key={key} className="legal-card">
          {block.blocks.map((b, i) => renderBlock(b, i))}
        </div>
      )
    case 'table':
      return (
        <div key={key} className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>{block.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{inline(cell)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'address':
      return (
        <p key={key} className="legal-address">
          {block.lines.map((line, i) => (
            <Fragment key={i}>{i > 0 && <br />}{inline(line)}</Fragment>
          ))}
        </p>
      )
    case 'footnote':
      return <p key={key} className="legal-footnote">{inline(block.text)}</p>
    case 'cards':
      return (
        <div key={key} className="legal-cards">
          <img src="/payments/visa.png" alt="Visa" />
          <img src="/payments/mastercard.png" alt="Mastercard" />
        </div>
      )
    default:
      return <p key={key} className="legal-p">{inline(block.text)}</p>
  }
}
