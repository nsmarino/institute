import Nav from './Nav'
import styles from './navcontainer.module.css'

const NavContainer = ({ handleClick, vis }) => {
  return (
  <div className={styles.navBoxContainer}>
    <div 
      className={styles.box} 
      onClick={handleClick}
    >
      <div className={styles.lineOne}></div>
      <div className={styles.lineTwo}></div>
      <div className={styles.lineTwo}></div>
    </div>
    { vis && (
      <div className={styles.navContainer}>
        <Nav className={styles.nav} />
      </div>       
    )}
  </div>
  )
}

export default NavContainer