import Link from 'next/link'

export default function Page() {
  return (
    <div className='text-slate-600'>
      <h1 className='text-3xl text-slate-800 mt-4 mb-1 font-serif'>About Us</h1>
      <p>
        eeXiv<sup>2</sup>{' '}
        {`is a project hosted by Team 1280 EECS ("Electrical Engineering and
        Computer Science"), independent of the department of the same name at`}{' '}
        <Link href='https://eecs.berkeley.edu'>UC Berkeley</Link>. We aim to
        rival arXiv as the single largest open-source and open-access research
        paper repository. eeXiv<sup>2</sup> is{' '}
        <Link href='https://github.com/Team-1280/eeXiv'>open-source</Link> and{' '}
        <Link href='https://github.com/Team-1280/eeXiv/blob/main/LICENSE'>
          licensed
        </Link>{' '}
        under the GNU General Public License (GPL).
      </p>
      <h1 className='text-3xl text-slate-800 mt-6 mb-1 font-serif'>
        Frequently Asked Questions
      </h1>
      <ul className='list-disc'>
        <li key='1'>
          Why are you called eeXiv<sup>2</sup> with the superscript `{'2'}`?
          <ul>
            <li key='1' className='mx-2 my-1 text-slate-500'>
              The original project called {`"eeXiv"`} was completed within 2
              days of its conception as a competitor to arXiv focused around
              FRC, but it quickly accumulated an exponential amount of technical
              debt due to poor design choices made from day one as well as vast
              amounts of AI generated code. eeXiv<sup>2</sup> was quickly
              created within 24 hours of the release of the original eeXiv to
              reimplement its features and vision under a more maintainable and
              appropriate design. While eeXiv<sup>2</sup> technically refers
              specifically to this redesigned version, eeXiv and eeXiv
              <sup>2</sup> are de facto the same project and may be referred to
              as either name.
            </li>
          </ul>
        </li>
        <li key='2'>
          How can I contribute to research or development on eeXiv (or even just
          add my profile to the site)?
          <ul key='1' className='mx-2 my-1 text-slate-500'>
            <li>
              You can contribute to our website development or add your
              documents and user account to eeXiv on our{' '}
              <Link
                href='https://github.com/couscousdude/eexiv-2'
                target='_blank'
              >
                GitHub repository
              </Link>
              .
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
