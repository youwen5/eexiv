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
  description: 'eeXiv just got better',
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
          <Container width='1200px'>
            <img className={styles.wordmark} src='/eecs-wordmark.png' />
            <p className={styles.contributions}>
              We gratefully acknowledge support from our volunteer peer
              reviewers, member institutions, and all{' '}
              <a
                href='https://github.com/Team-1280/eeXiv/graphs/contributors'
                target='_blank'
              >
                open-source contributors
              </a>
              .
            </p>
          </Container>
        </div>
        <div className={styles.banner}>
          <Container width='1200px'>
            <h1 className={`${styles.title} ${zillaSlab.className}`}>
              <Link href='/' className='no-link-style'>
                eeXiv<sup>2</sup>
              </Link>
            </h1>
          </Container>
          <SearchBar />
        </div>
        <Container width='1200px' fill>
          {children}
        </Container>
        <footer>
          <div className={styles.footerContent}>
            <Container width='1200px'>
              <ul>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/help'>Help</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li>
                  <Link href='/subscribe'>Subscribe</Link>
                </li>
                <li>
                  <Link href='/legal/copyright'>Copyright</Link>
                </li>
                <li>
                  <Link href='/legal/privacy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/help/accessibility'>Accessibility</Link>
                </li>
                <li>
                  <Link href='/status'>eeXiv status</Link>
                </li>
                <li>
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
