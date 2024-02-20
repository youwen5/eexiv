import { Inter, Zilla_Slab } from 'next/font/google'
import Link from 'next/link'

const zillaSlab = Zilla_Slab({ weight: '600', subsets: ['latin'] })
const inter = Inter({ weight: ['400', '500'], subsets: ['latin'] })

export default function News() {
  return (
    <div
      className={
        inter.className +
        ' mt-6 bg-slate-800 rounded-lg p-6 w-full basis-full md:basis-2/5 my-4 lg:my-0 max-h-[350px] overflow-y-auto shadow-slate-500 shadow-sm'
      }
    >
      <div className={zillaSlab.className + ' text-3xl text-slate-200'}>
        eeXiv News
      </div>
      <div className='text-lg text-slate-400 mb-4'>
        Stay up to date with what is happening at eeXiv.
      </div>
      <div className={zillaSlab.className + ' text-slate-200 text-2xl mb-2'}>
        Latest news
      </div>
      <ul className='text-slate-50 px-6 list-disc'>
        <li key={5}>
          eeXiv v2 has been released! See the{' '}
          <a
            href='https://github.com/Team-1280/eeXiv/releases/tag/2.0'
            className='text-blue-300'
          >
            GitHub release
          </a>{' '}
          for what&apos;s new.{' '}
        </li>
        <li key={4}>
          eeXiv has been re-released! You can now select document version and
          export as BibTeX.{' '}
        </li>
        <li key={3}>
          We are working on becoming an{' '}
          <a
            href='https://www.doi.org/the-foundation/about-us/'
            target='_blank'
            className='text-blue-300'
          >
            ISO 26324 DOI registry
          </a>
          {'!'}
        </li>
        <li key={2}>
          eeXiv is currently under active development! There may be major
          updates, breaking changes, or weird bugs. Report bugs, suggest new
          features, or give us feedback at{' '}
          <a
            href='https://github.com/team-1280/eexiv/issues'
            target='_blank'
            className='text-blue-300'
          >
            our issue tracker
          </a>
          {'.'}
        </li>
        <li key={1}>
          Want to upload your documents or just make yourself a profile on
          eeXiv? Check our{' '}
          <Link href='/about' className='text-blue-300'>
            about page
          </Link>{' '}
          for more information!
        </li>
      </ul>
    </div>
  )
}
