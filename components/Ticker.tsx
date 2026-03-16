const keywords = [
  'Shopify',
  'BigCommerce',
  'JavaScript',
  'Next.js',
  'UX Design',
  'eCommerce',
  'Product Strategy',
  'Interaction Design',
  'Technical Integrations',
  'TypeScript',
  'Merchant Tooling',
  'Frontend Engineering',
]

const item = (word: string) => (
  <span key={word} className="flex items-center gap-6">
    <span className="text-black font-bold uppercase tracking-widest text-xs">
      {word}
    </span>
    <span className="text-black/30 text-xs">◆</span>
  </span>
)

export function Ticker() {
  return (
    <div className="bg-accent overflow-hidden py-3 select-none border-y border-accent/0">
      <div className="marquee flex gap-6 whitespace-nowrap w-max">
        {keywords.map((k) => item(k))}
        {keywords.map((k) => item(`${k}-2`))}
      </div>
    </div>
  )
}
