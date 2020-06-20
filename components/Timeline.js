import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

import styles from './Timeline.module.css'

export default function Timeline({essayData, navData}) {
  const [sticky, setSticky] = useState(false)
  const ref = useRef()
  const [preview, setPreview] = useState(null)
  const [previewLocation, setPreviewLocation] = useState('')

  const handleScroll = () => {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= 0) {
        setSticky(true)
      }
      if (window.scrollY < 32) {
        setSticky(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);


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
    <div ref={ref} className={sticky ? styles.sticky : ''} onMouseLeave={() => setPreview(null)} >
      <div className={styles.navContainer}>

        <div className={styles.nav}>
          {showTimeline()}
        </div>

      </div>




      { preview ?
      <div className={styles.thumbnailContainer} style={{left: previewLocation,}} onClick={() => console.log(preview)} >
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