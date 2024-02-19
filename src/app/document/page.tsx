import { documents } from '@/app/db/data'
import { Zilla_Slab } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import DocumentCard from '../components/DocumentCard'

const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500'] })

const DocumentCardWrapper = ({
  params,
}: Readonly<{ params: { shortName: string } }>) => {
  const { shortName } = params
  const doc = documents[shortName]
  const href = `/document/view/${shortName}`
  if (!doc) {
    notFound()
  }

  return <DocumentCard doc={doc} href={href} />
}

const Page = () => {
  return (
    <div className='p-6'>
      <h1 className={`${zillaSlab.className} text-6xl text-center mb-10`}>
        Documents
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Object.keys(documents).map((documentShortName) => {
          return (
            <Fragment key={documentShortName}>
              <DocumentCardWrapper
                key={documentShortName}
                params={{ shortName: documentShortName }}
              />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page
