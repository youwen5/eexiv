import { affiliations } from '@/app/db/data'
import { notFound } from 'next/navigation'
import { Zilla_Slab } from 'next/font/google'
import findDocumentsByAffiliation from './findDocumentsByAffiliation'
import { Fragment } from 'react'
import DocumentCard from '@/app/components/DocumentCard'
import Image from 'next/image'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

export function generateStaticParams() {
  const affiliationsList = Object.keys(affiliations)
  return affiliationsList.map((shortName) => ({ shortName }))
}

const Description = ({ description }: Readonly<{ description: string }>) => {
  return (
    <>
      {description.split('[linebreak]').map((d, i) => (
        <>
          <div className='text-lg sm:text-md font-serif'>{d}</div>
          <br className='m-1' />
        </>
      ))}
    </>
  )
}

export default function Page({
  params,
}: Readonly<{ params: { shortName: string } }>) {
  const { shortName } = params
  const { name, short, image, description } = affiliations[shortName]
  if (!name) {
    notFound()
  }

  const affiliationDocuments = findDocumentsByAffiliation(shortName)

  return (
    <div>
      <div className='grid grid-cols-1 max-w-3xl mx-auto'>
        <div className='mx-auto mb-4 max-w-3xl md:w-auto md:h-[40vw] lg:h-[20vw] rounded-lg shadow-lg shadow-slate-400'>
          <Image
            alt='profile'
            width={1000}
            height={1000}
            className='rounded-lg mx-auto p-8 object-cover w-full h-full'
            src={image}
          />
        </div>
        <br />
        <span
          className={`${zillaSlab.className} font-bold text-4xl text-center`}
        >
          {name}
        </span>
        <div className='text-slate-600 text-2xl mt-4 text-center'>{short}</div>
      </div>
      <div className='max-w-3xl mx-auto grid grid-cols-1'>
        <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md' />
        <br />
        <Description description={description} />
      </div>
      {affiliationDocuments.length > 0 && (
        <>
          <hr className='mx-auto w-full h-1 border-0 bg-slate-200 my-2 rounded-md mt-8' />
          <h1 className='text-3xl md:my-6 my-4 font-serif'>
            Related documents {`(${affiliationDocuments.length})`}
          </h1>
          {affiliationDocuments.map((d) => (
            <Fragment key={d.slug}>
              <DocumentCard doc={d.doc} href={`/document/view/${d.slug}`} />
            </Fragment>
          ))}
        </>
      )}
    </div>
  )
}
