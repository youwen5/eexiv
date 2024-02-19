import { authors } from '@/app/db/data'
import AuthorDisplay from './AuthorDisplay'

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
