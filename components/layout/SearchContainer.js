import styles from './searchcontainer.module.css'

const SearchContainer = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.search} placeholder="search..." />        
    </div>
  )
}

export default SearchContainer