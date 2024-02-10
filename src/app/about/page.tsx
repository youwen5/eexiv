import Link from 'next/link'

export default function Page() {
  return (
    <div className='content text-slate-800'>
      <p>
        {`eeXiv is a project hosted by Team 1280 EECS ("Electrical Engineering and
        Computer Science"), independent of the department of the same name at`}{' '}
        <Link href='https://eecs.berkeley.edu'>UC Berkeley</Link>. We aim to
        rival arXiv as the single largest open-source and open-access research
        paper repository. eeXiv is{' '}
        <Link href='https://github.com/Team-1280/eeXiv'>open-source</Link> and{' '}
        <Link href='https://github.com/Team-1280/eeXiv/blob/main/LICENSE'>
          licensed
        </Link>{' '}
        under the GNU General Public License.
      </p>
    </div>
  )
}
