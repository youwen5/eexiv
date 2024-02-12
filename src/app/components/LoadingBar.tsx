import styles from './loading.module.css'
const LoadingBar = () => {
  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
        <div
          className={`${styles.progress} w-full h-full bg-blue-500 ${styles['left-right']}`}
        ></div>
      </div>
    </div>
  )
}

export default LoadingBar
