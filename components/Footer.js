import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/about">
          <a>about</a>
      </Link>
      <Link href="/about">
          <a>collections</a>
      </Link>

      <a href="https://nmarino.dev">nmarino.dev</a>
    
    </footer>
  )
}

export default Footer