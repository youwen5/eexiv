import styles from './searchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <input
        type='text'
        className={[styles.searchBox, 'text-slate-800'].join(' ')}
        name='q'
        placeholder='Search...'
      />
      <button type='submit' className={styles.searchButton}>
        Search
      </button>
    </div>
  )
}
