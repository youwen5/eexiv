import Link from 'next/link'

export default function Page() {
  return (
    <div className='content text-slate-800'>
      <h1 className='text-3xl text-slate-800 mt-4 mb-2 font-serif'>
        Get status notifications
      </h1>
      <p>
        We currently do not have the technical support to implement mailing
        lists in eeXiv. Check <Link href='/status'>status</Link> frequently for
        updates. The best way to stay connected with the status of the eeXiv
        project is to watch it on{' '}
        <a href='https://github.com/youwen5/eeXiv'>GitHub</a>.
      </p>
    </div>
  )
}
