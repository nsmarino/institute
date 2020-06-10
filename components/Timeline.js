import Link from 'next/link'
import { useState } from 'react'

import styles from './Timeline.module.css'

export default function Timeline({essayData, navData}) {
  const [preview, setPreview] = useState(null)

  const handleNavHover = (block) => {
    setPreview(block)
  }

  const showTimeline = () => {
    return navData.map(block =>
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${block.id}`} key={block.id}>
        <div 
          className={block.id === essayData.id ? styles.currentBlock : styles.block} 
          onMouseOver={() => handleNavHover(block)}
        >
        </div>
      </Link>
      )
    }

  return (
    <div>
      {showTimeline()}
      { preview ?
        <img src={preview.image} alt={preview.alt} className={styles.thumbnail} />
          :
        null
      }
      <style jsx>{`

      `}</style>
    </div>
  )
}