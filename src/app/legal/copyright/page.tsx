import Link from 'next/link'
import standardStyles from '../../styles/standard.module.css'

export default function Page() {
  return (
    <div className={standardStyles.content}>
      <p>
        All content on this site is licensed under the{' '}
        <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
          Creative Commons Attribution-ShareAlike 4.0 International License
        </a>
        . United States and international copyright laws apply. Failure to cite
        or credit the authors of any content taken from this site is copyright
        infringement and in violation of the eeXiv terms of use. For more
        information, see our <Link href='/legal/privacy'>privacy policy</Link>.
      </p>
    </div>
  )
}
