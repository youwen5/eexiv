export default function News() {
  return (
    <div className='bg-slate-800 rounded-lg p-6 w-full lg:max-w-lg md:max-w-md my-4 lg:my-0'>
      <span className='text-3xl md:text-4xl text-slate-200'>
        eeXiv<sup>2</sup> News
      </span>
      <br className='my-2' />
      <span className='text-xl text-slate-400'>
        Stay up to date with what is happening at eeXiv<sup>2</sup>.
      </span>
      <br className='my-2' />
      <span className='text-lg text-slate-200'>Latest news</span>
      <br className='my-4' />
      <ul className='text-slate-50 px-6 list-disc'>
        <li key={1}>eeXiv is currently under active development!</li>
        <li key={2}>
          There may be major updates, breaking changes, or weird bugs. Report
          bugs, suggest new features, or give us feedback at{' '}
          <a href='https://github.com/team-1280/eexiv-2/issues' target='_blank'>
            our issue tracker.
          </a>
        </li>
      </ul>
    </div>
  )
}
