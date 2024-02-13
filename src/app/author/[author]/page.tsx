import AuthorDisplay from './AuthorDisplay'
import { authors } from '@/app/db/data'

export function generateStaticParams() {
  const authorsList = Object.keys(authors)
  return authorsList.map((author) => ({ author }))
}

export default function Page({
  params,
}: Readonly<{
  params: { author: string }
}>) {
  return <AuthorDisplay author={params.author} />
}
