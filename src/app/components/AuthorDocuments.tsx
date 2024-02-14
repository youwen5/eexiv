/* this component is likely extremely inefficient so it should only be used in
server side static components */

export default function AuthorDocuments({
  authorId,
}: Readonly<{ authorId: string }>) {
  return <div className='content text-slate-800'>{authorId}</div>
}
