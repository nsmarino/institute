import Nav from './Nav'
import Hamburger from './Hamburger'

import styles from './NavContainer.module.css'

const NavContainer = ({ handleClick, vis }) => {
  return (
  <div className={styles.navContainer}>

  <Hamburger handleClick={handleClick} vis={vis} />

    {/* Dropdown box: */}
    { vis && (
      <div className={styles.dropdownBox}>
        <Nav />
      </div>       
    )}

  </div>
  )
}

export default NavContainer