import Link from 'next/link'
import { useState } from 'react'

import styles from './Timeline.module.css'

export default function Timeline({essayData, navData}) {
  const [preview, setPreview] = useState(null)
  const [previewLocation, setPreviewLocation] = useState('')

  console.log(navData)

  const updateMouseX = e => {
    const location = window.innerWidth - e.clientX < 50 ? window.innerWidth - 100 : e.clientX - 50
    setPreviewLocation(location)
  }

  const handleNavHover = (block) => {
    setPreview(block)
  }

  const showTimeline = () => {
    return navData.map(block =>
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${block.id}`} key={block.id}>
        <div 
          className={block.id === essayData.id ? styles.currentBlock : styles.block} 
          onMouseOver={() => handleNavHover(block)}
          onMouseMove={() => updateMouseX(event)}
        >
        </div>
      </Link>
      )
    }

  return (
    <div>
      <div className={styles.navContainer}>

        <div className={styles.nav} onMouseOut={()=> setPreview(null)}>
          {showTimeline()}
        </div>

        <div className={styles.filmTitle}>
          <h2 >{navData[0].alt}</h2>
        </div>
        

      </div>




      { preview ?
      <div className={styles.thumbnailContainer} style={{left: previewLocation,}}>
        <img src={preview.image} alt={preview.alt} className={styles.thumbnail} />
      </div>
          :
        null
      }
      <style jsx>{`

      `}</style>
    </div>
  )
}