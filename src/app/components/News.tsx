import Link from 'next/link'

export default function News() {
  return (
    <div className='bg-slate-800 rounded-lg p-6 w-full basis-full md:basis-2/5 my-4 lg:my-0 max-h-[250px] overflow-y-auto'>
      <span className='text-3xl md:text-4xl text-slate-200'>eeXiv News</span>
      <br className='my-2' />
      <span className='text-xl text-slate-400'>
        Stay up to date with what is happening at eeXiv.
      </span>
      <br className='my-2' />
      <span className='text-lg text-slate-200'>Latest news</span>
      <br className='my-4' />
      <ul className='text-slate-50 px-6 list-disc'>
        <li key={1}>
          eeXiv 1.0 has been released! All basic features like search and
          document viewing are available.
        </li>
        <li key={2}>eeXiv is currently under active development!</li>
        <li key={3}>
          There may be major updates, breaking changes, or weird bugs. Report
          bugs, suggest new features, or give us feedback at{' '}
          <a href='https://github.com/team-1280/eexiv-2/issues' target='_blank'>
            our issue tracker.
          </a>
        </li>
        <li key={4}>
          Want to upload your documents or just make yourself a profile on
          eeXiv? Check our <Link href='/about'>about page</Link> for more
          information!
        </li>
      </ul>
    </div>
  )
}
