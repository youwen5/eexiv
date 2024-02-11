import type { Metadata } from 'next'
import { Inter, Zilla_Slab } from 'next/font/google'
import './globals.css'
import styles from './home.module.css'
import Link from 'next/link'
import SearchBar from './searchBar/SearchBar'
import Container from './container/Container'

/* The default font is Inter. If you want to use Zilla Slab (or any other Google Font, 
  which are pre-provided by Next.js in the 'next/font/google' module), you need to 
  import it, as is done here with Zilla Slab, and then execute a CSS exploit by assigning 
  the tag className={zillaSlab.className} to set the font family of an element to your desired font.
  DO NOT directly set the font family in CSS using font-family. You will break EVERYTHING!
*/
const inter = Inter({ subsets: ['latin'] })
const zillaSlab = Zilla_Slab({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
  title: 'eeXiv^2',
  description: 'arXiv just got better',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.header}>
          <div className='max-w-[1200px] flex flex-nowrap mx-auto justify-between items-center'>
            <Link href='/affiliation/1280-eecs'>
              <img className='h-[100px] mt-4' src='/eecs-wordmark.png' />
            </Link>
            <p className={`max-w-[600px] hidden md:inline`}>
              We gratefully acknowledge support from our volunteer peer
              reviewers, member institutions, and all{' '}
              <a
                href='https://github.com/couscousdude/eeXiv-2/graphs/contributors'
                target='_blank'
              >
                open-source contributors
              </a>
              .
            </p>
          </div>
        </div>
        <div className={`${styles.banner} w-full h-[100px] mb-[50px]`}>
          <div className='max-w-[1200px] flex justify-between mx-auto items-center pt-3 flex-nowrap'>
            <h1 className={`${styles.title} ${zillaSlab.className} mx-10`}>
              <Link href='/' className='no-link-style'>
                eeXiv<sup>2</sup>
              </Link>
            </h1>
            <div className='hidden md:inline'>
              <SearchBar />
            </div>
          </div>
        </div>
        <Container width='1200px' fill>
          {children}
        </Container>
        <footer>
          <div className={styles.footerContent}>
            <Container width='1200px'>
              <ul>
                <li key='about'>
                  <Link href='/about'>About</Link>
                </li>
                <li key='help'>
                  <Link href='/help'>Help</Link>
                </li>
                <li key='contact'>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li key='subscribe'>
                  <Link href='/subscribe'>Subscribe</Link>
                </li>
                <li key='copyright'>
                  <Link href='/legal/copyright'>Copyright</Link>
                </li>
                <li key='privacy'>
                  <Link href='/legal/privacy'>Privacy Policy</Link>
                </li>
                <li key='accessibility'>
                  <Link href='/help/accessibility'>Accessibility</Link>
                </li>
                <li key='status'>
                  <Link href='/status'>eeXiv status</Link>
                </li>
                <li key='notifications'>
                  <Link href='/status/notifications'>
                    Get status notifications
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        </footer>
      </body>
    </html>
  )
}
