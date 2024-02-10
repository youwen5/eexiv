import type { Metadata } from 'next'
import { Inter, Zilla_Slab } from 'next/font/google'
import './globals.css'
import styles from './home.module.css'
import Link from 'next/link'

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
          <img className={styles.wordmark} src='/eecs-wordmark.png' />
          <p className={styles.contributions}>
            We gratefully acknowledge support from our volunteer peer reviewers,
            member institutions, and all{' '}
            <Link
              href='https://github.com/Team-1280/eeXiv/graphs/contributors'
              target='_blank'
            >
              open-source contributors
            </Link>
            .
          </p>
        </div>
        <div className={styles.banner}>
          <h1 className={[styles.title, zillaSlab.className].join(' ')}>
            <Link href='./'>
              eeXiv<sup>2</sup>
            </Link>
          </h1>
          <div className={styles.search}>
            <input
              type='text'
              className={styles.searchBox}
              name='q'
              placeholder='Search...'
            />
            <button type='submit' className={styles.searchButton}>
              Search
            </button>
          </div>
        </div>
        {children}
        <footer>
          <div className={styles.footerContent}>
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
          </div>
        </footer>
      </body>
    </html>
  )
}
