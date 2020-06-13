import Link from 'next/link'
import { useState } from 'react'

import styles from './header.module.css'

import NavContainer from './NavContainer'
import SearchContainer from './SearchContainer'

const Header = () => {
  const [navVis, setNavVis] = useState(false)
  
  const handleNavClick = () => {
    setNavVis(!navVis)
  }
  
  return (
    <header className={styles.header}>

      {/* one */}
      <NavContainer handleClick={handleNavClick} vis={navVis} />

      {/* two */}
      <div className={styles.nameOfSite}>
        <Link href="/">
          <a className={styles.link}>
            <h1 className={styles.logo}>center for temporal film studies</h1>
          </a>
        </Link>
      </div>
      
      {/* three */}
      <SearchContainer />
      </header>
    )
  }

export default Header

// .navContainer {
//   position: fixed;
// }
// .nav {
//   position: absolute;
// }