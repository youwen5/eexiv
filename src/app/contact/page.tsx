import standardStyles from '../styles/standard.module.css'

export default function Page() {
  return (
    <div className={standardStyles.content}>
      <p>
        You can contact a team representative directly at{' '}
        <a href='mailto:sanramonvalleyrobotics@gmail.com'>
          sanramonvalleyrobotics@gmail.com
        </a>
        . If you encounter any problems with the site or eeXiv content,{' '}
        <a href='https://github.com/Team-1280/eeXiv/issues'>open an issue</a>{' '}
        and provide a helpful description of the problem. For ways you can help,
        see <a href='../help'>Help</a>.
      </p>
    </div>
  )
}
