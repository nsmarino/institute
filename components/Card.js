import Link from 'next/link'
import styles from './Card.module.css'

import { useState } from 'react'

export default function Card({ essay }) {
  const [hover, setHover] = useState(false)


  return (
    <div className={styles.card} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

    <img src={essay.image} alt={essay.title} className={hover ? styles.hoverImage : styles.cardImage} />

      <h2 className={hover ? styles.hoverTitle : styles.cardTitle}>
        <Link href='essays/[dir]/[id]' as={`essays/${essay.dir}/${essay.id}`}>
          <a>{essay.title}</a>       
        </Link>
      </h2>
    </div>
  )
}

// style={{ 
//   backgroundImage: `url(${essay.image})`, 
//   opacity: '0.25', 
//   backgroundPosition: 'center', 
//   backgroundSize: '100%', 
//   backgroundRepeat: 'no-repeat'
//   }
// }