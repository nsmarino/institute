import Link from 'next/link'
import styles from './IndexLink.module.css'

export default function IndexLink({ essay, handleHover }) {
  return (
    <div onMouseOver={() => handleHover(essay)}>
      <li className={styles.listItem}>
        <Link href='essays/[dir]/[id]' as={`essays/${essay.dir}/${essay.id}`}>
          <a className={styles.link}>
            {essay.title}
          </a>       
        </Link>
      </li>
    </div>
  )
}