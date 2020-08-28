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
      {/* <style jsx>{`
        li {
          list-style-type: none;
          line-height: 2.5em;
        }
        a {
          color: black;
          text-decoration: none;
          font-size: 2rem; 
        } 
        a:hover {
          color: #444
        }
      `}</style> */}
    </div>
  )
}