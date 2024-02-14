import DocumentViewer from './DocumentViewer'
import ErrorBoundary from '@/app/utils/ErrorBoundary'
import { documents } from '@/app/db/data'

export function generateStaticParams() {
  const docsList = Object.keys(documents)
  return docsList.map((doc) => ({ doc }))
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  return (
    <ErrorBoundary>
      <DocumentViewer slug={params.slug} />
    </ErrorBoundary>
  )
}
