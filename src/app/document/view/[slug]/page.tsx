'use client'
import DocumentViewer from './DocumentViewer'
import ErrorBoundary from '@/app/utils/ErrorBoundary'

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  return (
    <ErrorBoundary>
      <DocumentViewer slug={params.slug} />
    </ErrorBoundary>
  )
}
