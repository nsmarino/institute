import Link from 'next/link'
import styles from './Card.module.css'

import { useState } from 'react'

export default function Card({ essay }) {
  const [hover, setHover] = useState(false)
  const opacity = hover ? '0.75' : '0.25'

  return (
  <Link href='essays/[dir]/[id]' as={`essays/${essay.dir}/${essay.id}`}>
  <a className={styles.cardLink}>
    <div 
      className={styles.card} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)} 
      onTouchEnd={() => setHover(false)}
    >
      
    <div style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${essay.image})`, 
      opacity,
      backgroundPosition: 'center', 
      backgroundSize: '100%', 
      backgroundRepeat: 'no-repeat',
      gridColumn: 1,
      gridRow: 1,
    }}>
    </div>

      <div className={styles.titleHolder}>
        <h2 className={hover ? styles.hoverTitle : styles.cardTitle}>
          {essay.title}
        </h2>
      </div>

    </div>
  </a>
  </Link>
  )
}