import Link from 'next/link'

import styles from './header.module.css'

import NavContainer from './NavContainer'

const Header = ({ navVis, handleNavClick }) => {

  return (
    <header className={styles.header}>

      {/* one */}
      <NavContainer handleClick={handleNavClick} vis={navVis} />
      
      {/* two */}
      <div>
        <Link href="/">
          <a className={styles.link}>
            <h1 className={styles.siteName}>center for temporal film studies</h1>
          </a>
        </Link>
      </div>
      
      </header>
    )
  }

export default Header