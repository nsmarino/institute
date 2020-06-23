import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

import styles from './Timeline.module.css'

// Would love to get rid of the useRefs, maybe replace with effect hooks or state stored in a higher component

export default function Timeline({essayData, navData}) {
  // sets timeline CSS to 'sticky' on scroll
  const [sticky, setSticky] = useState(false)
  const scrollRef = useRef()

  // allows us to update preview image even when not hovering timeline blocks
  const blocksRef = useRef()
  const [blockSpans, setBlockSpans] = useState([])

  // governs preview image and location
  const [preview, setPreview] = useState(null)
  const [previewLocation, setPreviewLocation] = useState('')

  // this has a hardcoded value of '32' still -- should be changed before deployment
  const handleScroll = () => {
    if (scrollRef.current) {
      if (scrollRef.current.getBoundingClientRect().top <= 0) {
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

  useEffect(() => {
    const blockLocations = []
    blocksRef.current.childNodes.forEach(block => {
      const blockLocation = {
          left: block.getBoundingClientRect().x, 
          right: block.getBoundingClientRect().x + block.getBoundingClientRect().width,
        }
      blockLocations.push(blockLocation)
    })
    setBlockSpans(blockLocations)
  }, [])


  const findMatchingBlock = (x) => {
    const matchingSpan = blockSpans.find(block => block.left < x && x < block.right)
    const spanIndex = blockSpans.indexOf(matchingSpan)
    return navData[spanIndex]
  }

  const updateMouseX = e => {
    const rightEdge = Math.min(document.documentElement.clientWidth, window.innerWidth) // account for scrollbar

    const mouseLocation = e.clientX

    const matchingBlock = findMatchingBlock(mouseLocation)
    setPreview(matchingBlock)

    const adjustLocation = (location) => {
      if (rightEdge - location < 150) return rightEdge - 300
      else if (location < 150) return 0
      else return location - 150
    }
    const adjustedLocation = adjustLocation(mouseLocation)
    setPreviewLocation(adjustedLocation)
  }

  const showTimeline = () => {
    return navData.map(block =>
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${block.id}`} key={block.id}>

      <div 
          className={block.id === essayData.id ? styles.currentBlock : styles.block} 
          onMouseMove={() => updateMouseX(event)}
        >
        </div>

      </Link>
      )
    }

  return (
    <div ref={scrollRef} className={sticky ? styles.sticky : ''} onMouseLeave={() => setPreview(null)} >
      <div className={styles.navContainer}>

        <div className={styles.nav} ref={blocksRef}>
          {showTimeline()}
        </div>

      </div>




      { preview ?
      <div className={styles.thumbnailContainer} 
           style={{left: previewLocation,}} 
           onMouseMove={() => updateMouseX(event)}
           >

           <div className={styles.markerFlexbox}>
             <div className={styles.marker}></div>
           </div>

           <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${preview.id}`}>
             <a>
               <img src={preview.image} alt={preview.alt} className={styles.thumbnail} />
             </a>
           </Link>

      </div>
          :
        null
      }
      <style jsx>{`

      `}</style>
    </div>
  )
}