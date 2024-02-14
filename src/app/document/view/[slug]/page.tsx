import DocumentViewer from './DocumentViewer'
import { documents } from '@/app/db/data'

export function generateStaticParams() {
  const docsList = Object.keys(documents)
  return docsList.map((doc) => ({ doc }))
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  return <DocumentViewer slug={params.slug} />
}
