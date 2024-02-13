'use client'
import { Zilla_Slab } from 'next/font/google'
import { DocumentType, reviewer, Document, documents } from '@/app/db/data'
import { loadDocument, loadAllDocuments } from '@/app/db/loaders'
import DocumentViewer from './DocumentViewer'
import createResource from '@/app/utils/createResource'
import { Suspense, useEffect, useMemo } from 'react'

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  // const docResource = createResource(loadDocument(params.slug))
  // const doc = docResource.read()

  useEffect(() => {
    const check = async () => {
      const doc = await loadDocument(params.slug)
      console.log(doc)
    }
    check()
  })

  return (
    <>
      <div>hi</div>
      <DocumentViewer doc={documents[params.slug]} slug={params.slug} />
    </>
  )
}
