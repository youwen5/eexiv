'use client'
import ErrorBoundary from '@/app/utils/ErrorBoundary'
import DocumentViewer from './DocumentViewer'

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  return (
    <ErrorBoundary>
      <DocumentViewer slug={params.slug} />
    </ErrorBoundary>
  )
}
