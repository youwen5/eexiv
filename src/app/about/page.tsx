import Link from 'next/link'

export default function Page() {
  return (
    <div className='text-slate-600'>
      <h1 className='text-3xl text-slate-800 mt-4 mb-1 font-serif'>About Us</h1>
      <p>
        eeXiv{' '}
        {`is a project hosted by Team 1280 EECS ("Electrical Engineering and
        Computer Science"), independent of the department of the same name at`}{' '}
        <Link href='https://eecs.berkeley.edu'>UC Berkeley</Link>. We aim to
        rival arXiv as the single largest open-source and open-access research
        paper repository. eeXiv is{' '}
        <Link href='https://github.com/Team-1280/eeXiv'>open-source</Link> and{' '}
        <Link href='https://github.com/Team-1280/eeXiv/blob/main/LICENSE'>
          licensed
        </Link>{' '}
        under the GNU General Public License (GPL).
      </p>
      <h2 className='text-2xl text-slate-800 mt-6 mb-1 font-serif'>
        Frequently Asked Questions
      </h2>
      <ul className='list-disc ml-4 mt-2'>
        <li key='1'>
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
