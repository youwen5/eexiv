'use client'
import { useState } from 'react'
import { Document } from '@/app/db/data'
import Link from 'next/link'

const VersionChooser = ({
  doc,
  slug,
}: Readonly<{ doc: Document; slug: string }>) => {
  const { file } = doc
  const {
    title,
    authors,
    topics,
    dates,
    references,
    code,
    type,
    latest,
    reviewers,
    status,
  } = doc.manifest

  const fileEnding = file === 'other' ? '' : `.${file}`
  const [selectedRevision, setSelectedRevision] = useState<number>(latest) // Initialize the selected revision with the latest revision

  return (
    <div>
      <Link
        href={`/download/${slug}/file${selectedRevision}${fileEnding}`}
        target='_blank'
      >
        <button className='button-default'>
          Download{' '}
          {(() => {
            switch (file) {
              case 'other':
                return <></>
              case 'tar.gz':
                return 'Tarball'
            }
          })()}
        </button>
      </Link>
      <select
        className='ml-2 p-2.5 bg-slate-300 rounded-md'
        value={`v${selectedRevision}`}
        onChange={(e) => { setSelectedRevision(parseInt(e.target.value.replace(/\D/g, ''), 10)) }}
      >
        {Array.from({ length: latest }, (_, index) => index + 1).map(
          (version) => (
            <option key={version} value={`v${version}`} className='p-2.5'>
              {version == latest ? 'Latest' : `v${version}`}
            </option>
          )
        )}
      </select>
    </div>
  )
}

export default VersionChooser
