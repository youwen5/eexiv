import standardStyles from '../styles/standard.module.css'

export default function Page() {
  return (
    <div className={standardStyles.content}>
      <p>
        eeXiv is <strong>online</strong>. All systems{' '}
        <strong>operational</strong>.
      </p>
    </div>
  )
}
