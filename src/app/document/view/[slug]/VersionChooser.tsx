'use client'
import { useState, useEffect } from 'react'
import { Document } from '@/app/db/data'
import Link from 'next/link'
import { loadAllAuthors } from '@/app/db/loaders'
import { useSuspenseQuery } from '@tanstack/react-query'
import { epoch2date } from '@/app/utils/epoch2datestring'

const VersionChooser = ({
  doc,
  slug,
}: Readonly<{ doc: Document; slug: string }>) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['authors_all'],
    queryFn: () => {
      const data = loadAllAuthors()
      return data
    },
  })
  if (error) throw error

  useEffect(() => {
    console.log(data)
  }, [data])

  const { file } = doc
  const { authors, latest } = doc.manifest
  const date = epoch2date(doc.manifest.dates[doc.manifest.dates.length - 1])

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
      <button
        className='ml-2 h-10 px-2.5 bg-slate-300 rounded-md'
        onClick={() => {
          const bibtex = `@article{
  author={${authors
    .map((a: string, i) => {
      const author = data[a].name.first + ' ' + data[a].name.last
      if (i === 0) return author
      else if (i === authors.length - 1) return ` and ${author}`
      else return `, ${author}`
    })
    .join('')}},
  title={${doc.manifest.title}},
  journal={eeXiv journal},
  year={${date.getFullYear()}},
  month={${date.toLocaleString('default', { month: 'short' })}},
  url={${window.location.href}}
}`
          navigator.clipboard.writeText(bibtex)
        }}
      >
        Export BibTeX
      </button>
      <select
        className='ml-2 h-10 px-2.5 bg-slate-300 rounded-md'
        value={`v${selectedRevision}`}
        onChange={(e) => {
          setSelectedRevision(parseInt(e.target.value.replace(/\D/g, ''), 10))
        }}
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
