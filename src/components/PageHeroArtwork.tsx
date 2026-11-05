import type { ReactNode } from 'react'

export type HeroKind = 'about' | 'structure' | 'projects' | 'news' | 'achievements' | 'documents' | 'contacts' | 'notFound'

const icons: Record<HeroKind, ReactNode> = {
  about: (<><path d="M4 21V7l8-4 8 4v14M2 21h20M9 21v-5h6v5M8 8h1m6 0h1M8 12h1m6 0h1" /></>),
  structure: (<><rect x="8" y="3" width="8" height="5" rx="1" /><path d="M12 8v5M4 16v-3h16v3" /><rect x="1" y="16" width="6" height="5" rx="1" /><rect x="9" y="16" width="6" height="5" rx="1" /><rect x="17" y="16" width="6" height="5" rx="1" /></>),
  projects: (<><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4M6 13V9m6 4V7m6 6v-3" /></>),
  news: (<><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M7 2v4m10-4v4M3 9h18M7 13h4m3 0h3M7 17h10" /></>),
  achievements: (<><path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 13v5m-5 3h10l-2-3H9Z" /></>),
  documents: (<><path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><path d="M3 9h18" /></>),
  contacts: (<><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>),
  notFound: (<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6M9 13l6 5m0-5-6 5" /></>),
}

export function PageHeroIcon({ kind }: { kind: HeroKind }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">{icons[kind]}</svg>
}

const drawings: Record<Exclude<HeroKind, 'documents'>, ReactNode> = {
  about: (<><path className="page-art-tint" d="M54 172V62l89-31 80 32v109Z" /><path className="page-art-sheet" d="M54 62 143 31v141H54Z" /><path fill="url(#page-art-about)" d="M143 31 223 63v109h-80Z" /><path d="M72 78v18m22-27v18m22-27v18M72 114v18m22-27v18m22-27v18M164 65v21m21-13v21m19-13v21M164 108v21m21-13v21m19-13v21" stroke="white" strokeWidth="7" opacity=".75" /><rect className="page-art-tint" x="99" y="144" width="29" height="28" rx="3" /><rect className="page-art-sheet" x="29" y="121" width="51" height="37" rx="7" /><path className="page-art-line" d="M42 134h24m-24 10h15" /></>),
  structure: (<><path className="page-art-line" d="M140 73v30M61 126v-23h158v23M140 103v23" /><rect fill="url(#page-art-structure)" x="107" y="27" width="66" height="48" rx="10" /><rect className="page-art-sheet" x="30" y="126" width="62" height="45" rx="9" /><rect className="page-art-sheet" x="109" y="126" width="62" height="45" rx="9" /><rect className="page-art-tint" x="188" y="126" width="62" height="45" rx="9" /><circle cx="140" cy="43" r="6" fill="white" /><path d="M128 62a12 12 0 0 1 24 0" stroke="white" strokeWidth="4" /><path className="page-art-line" d="M45 143h32m-32 11h22m50-11h32m-32 11h22m57-11h32m-32 11h22" /></>),
  projects: (<><path className="page-art-tint" d="M123 145h34l5 26h-44Z" /><rect className="page-art-sheet" x="33" y="36" width="214" height="115" rx="12" /><rect fill="url(#page-art-projects)" x="43" y="46" width="194" height="94" rx="6" /><rect x="56" y="58" width="44" height="69" rx="5" fill="white" opacity=".85" /><path d="M68 72h20m-20 12h14m-14 12h17" stroke="#1777cf" strokeWidth="3" strokeLinecap="round" opacity=".5" /><rect x="112" y="58" width="112" height="69" rx="5" fill="white" opacity=".9" /><path d="M126 111V94m20 17V83m20 28V91m20 20V74m20 37V67" stroke="#1777cf" strokeWidth="9" strokeLinecap="round" /><rect className="page-art-tint" x="102" y="171" width="76" height="7" rx="3" /></>),
  news: (<><g transform="rotate(-9 95 100)"><rect className="page-art-tint" x="39" y="54" width="99" height="117" rx="9" /><path className="page-art-line" d="M55 116h65m-65 13h65m-65 13h44" /><rect x="55" y="72" width="65" height="30" rx="4" fill="url(#page-art-news)" /></g><rect className="page-art-sheet" x="125" y="36" width="111" height="119" rx="10" /><path d="M125 66h111" stroke="currentColor" opacity=".4" /><path d="M149 26v22m64-22v22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><g fill="currentColor" opacity=".5"><rect x="144" y="82" width="13" height="12" rx="3" /><rect x="174" y="82" width="13" height="12" rx="3" /><rect x="204" y="82" width="13" height="12" rx="3" /><rect x="144" y="110" width="13" height="12" rx="3" /><rect x="174" y="110" width="13" height="12" rx="3" /></g><circle cx="222" cy="146" r="25" fill="url(#page-art-news)" /><path d="M212 148h20l-4-7v-5a6 6 0 0 0-12 0v5Zm7 7h6" stroke="white" strokeWidth="2" strokeLinecap="round" /></>),
  achievements: (<><rect className="page-art-sheet" x="168" y="58" width="70" height="104" rx="7" transform="rotate(10 203 110)" /><path className="page-art-line" d="M186 85h31m-31 13h31m-31 13h20" /><path className="page-art-tint" d="M88 54H55v21a35 35 0 0 0 35 35m77-56h32v21a35 35 0 0 1-35 35" /><path fill="url(#page-art-achievements)" d="M86 35h80v49a40 40 0 0 1-80 0Z" /><path d="m126 52 7 14 16 2-12 12 3 16-14-8-14 8 3-16-12-12 16-2Z" fill="white" opacity=".85" /><path d="M126 124v26" stroke="currentColor" strokeWidth="10" /><path className="page-art-tint" d="M102 150h48l10 23H92Z" /><rect fill="url(#page-art-achievements)" x="84" y="169" width="84" height="9" rx="4" /></>),
  contacts: (<><rect className="page-art-sheet" x="44" y="45" width="69" height="127" rx="12" transform="rotate(-9 78 108)" /><path className="page-art-line" d="M63 62h23m-14 94h12" /><path fill="url(#page-art-contacts)" d="M184 29a39 39 0 0 0-39 39c0 30 39 68 39 68s39-38 39-68a39 39 0 0 0-39-39Z" /><circle className="page-art-sheet" cx="184" cy="67" r="15" /><path className="page-art-tint" d="M115 123h99a9 9 0 0 1 9 9v30a9 9 0 0 1-9 9h-66l-20 12v-12h-13a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9Z" /><path className="page-art-line" d="M125 140h78m-78 14h53" /></>),
  notFound: (<><g transform="rotate(-8 131 99)"><path className="page-art-sheet" d="M80 27h79l29 29v108a9 9 0 0 1-9 9H80a9 9 0 0 1-9-9V36a9 9 0 0 1 9-9Z" /><path className="page-art-tint" d="M159 27v22a7 7 0 0 0 7 7h22Z" /><path className="page-art-line" d="M91 72h69m-69 14h42m-42 57h42" /></g><circle cx="183" cy="119" r="36" fill="url(#page-art-notFound)" /><circle cx="183" cy="119" r="23" fill="white" opacity=".9" /><path d="m174 110 18 18m0-18-18 18m17 20 25 23" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></>),
}

export function PageHeroIllustration({ kind }: { kind: HeroKind }) {
  if (kind === 'documents') return (<svg viewBox="0 0 280 200" fill="none" focusable="false">
            <defs>
              <linearGradient id="documents-folder-front" x1="60" y1="100" x2="210" y2="183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#77c9f5" />
                <stop offset="1" stopColor="#1777cf" />
              </linearGradient>
            </defs>
            <ellipse cx="144" cy="181" rx="96" ry="8" fill="currentColor" opacity=".1" />
            <path className="documents-art-folder-back" d="M47 68a10 10 0 0 1 10-10h48l15 17h99a10 10 0 0 1 10 10v76H47Z" />
            <g className="documents-art-paper" transform="rotate(12 168 93)">
              <rect className="documents-art-sheet-back" x="128" y="24" width="81" height="123" rx="8" />
              <path d="M144 47h46M144 60h34M144 79h46M144 92h38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".3" />
            </g>
            <g className="documents-art-paper" transform="rotate(-8 114 98)">
              <path className="documents-art-sheet" d="M79 25h58l24 24v99H79a8 8 0 0 1-8-8V33a8 8 0 0 1 8-8Z" />
              <path d="M137 25v17a7 7 0 0 0 7 7h17" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
              <rect x="87" y="47" width="25" height="24" rx="5" fill="currentColor" opacity=".14" />
              <path d="M88 85h55M88 98h55M88 111h37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".3" />
            </g>
            <path className="documents-art-folder-front" d="M43 100h190a7 7 0 0 1 7 9l-17 59a12 12 0 0 1-12 9H66a12 12 0 0 1-12-10l-18-58a7 7 0 0 1 7-9Z" fill="url(#documents-folder-front)" />
            <path d="M52 108h176" stroke="white" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
            <rect x="77" y="135" width="38" height="5" rx="2.5" fill="white" opacity=".8" />
            <rect x="77" y="147" width="58" height="4" rx="2" fill="white" opacity=".4" />
            <path d="M36 48h10m-5-5v10M236 56h8m-4-4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".35" />
          </svg>)
  return (
    <svg viewBox="0 0 280 200" fill="none" focusable="false">
      <defs><linearGradient id={`page-art-${kind}`} x1="60" y1="35" x2="210" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#77c9f5" /><stop offset="1" stopColor="#1777cf" /></linearGradient></defs>
      <ellipse cx="144" cy="181" rx="96" ry="8" fill="currentColor" opacity=".1" />
      {drawings[kind]}
      <path d="M28 48h10m-5-5v10M242 45h8m-4-4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".35" />
    </svg>
  )
}
