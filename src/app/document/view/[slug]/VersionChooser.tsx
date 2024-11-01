'use client'
import { Document } from '@/app/db/data'
import { loadAuthors } from '@/app/db/loaders'
import { epoch2date } from '@/app/utils/epoch2datestring'
import generateHash from '@/app/utils/hash'
import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'
import QRCode from 'qrcode.react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const VersionChooser = ({
  doc,
  slug,
}: Readonly<{ doc: Document; slug: string }>) => {
  const { data, error } = useSuspenseQuery({
    queryKey: [doc.manifest.authors.join(' ')],
    queryFn: () => {
      const data = loadAuthors(doc.manifest.authors)
      return data
    },
  })
  if (error) throw error

  const { file } = doc
  const { authors, latest } = doc.manifest
  const date = epoch2date(doc.manifest.dates[doc.manifest.dates.length - 1])

  const fileEnding = file === 'other' ? '' : `.${file}`
  const [selectedRevision, setSelectedRevision] = useState<number>(latest) // Initialize the selected revision with the latest revision
  const notifyCopied = (content: string) =>
    toast.success(`${content} copied to clipboard!`)

  const handleClick = () => {
    const bibtex = `@article{
  author={${authors
    .map((a: string, i) => {
      const author = data[a].name.first + ' ' + data[a].name.last
      if (i === 0) return author
      else if (i === authors.length - 1) return `, and ${author}`
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
    notifyCopied('BibTeX')
  }

  const handleCopy = () => {
    const id = doc.citation ? doc.citation.slice(6) : generateHash(slug)
    navigator.clipboard.writeText(`eeXiv:${id}`)
    notifyCopied('Citation')
    toast.info(
      <div className='p-4'>
        <QRCode value={doc.citation ?? `eeXiv:${generateHash(slug)}`} />
      </div>,
      {
        autoClose: false,
        closeOnClick: true,
      }
    )
  }

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
              case 'pdf':
                return 'PDF'
              case 'docx':
                return 'Word'
              case 'pptx':
                return 'Powerpoint'
            }
          })()}
        </button>
      </Link>
      <button className='button-alternate' onClick={handleClick}>
        Export BibTeX
      </button>
      <button className='button-alternate' onClick={handleCopy}>
        Copy citation
      </button>
      <select
        className='select-default'
        value={`v${selectedRevision}`}
        onChange={(e) => {
          setSelectedRevision(parseInt(e.target.value.replace(/\D/g, ''), 10))
        }}
      >
        {Array.from({ length: latest }, (_, index) => index + 1).map(
          (version) => (
            <option key={version} value={`v${version}`}>
              {version == latest ? 'Latest' : `v${version}`}
            </option>
          )
        )}
      </select>
    </div>
  )
}

export default VersionChooser
