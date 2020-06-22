import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

import styles from './Timeline.module.css'

// My Beautiful Dark Twisted Timeline Component
// 1. make preview thumbnails Links (should actually be kind of easy?) [✓ 6/22/20]
// 2. Vertical #333 bar on timeline at mouseX location...also should hover i guess
// 3. this is SO LONG at this point, hard to read...can it be organized better?

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

  // FOR QA ONLY
  useEffect(() => {
    console.log(blockSpans)
  }, [blockSpans])

  const findMatchingBlock = (x) => {
    const matchingSpan = blockSpans.find(block => block.left < x && x < block.right)
    const spanIndex = blockSpans.indexOf(matchingSpan)
    return navData[spanIndex]
  }

  const updateMouseX = e => {
    const rightEdge = Math.min(document.documentElement.clientWidth, window.innerWidth) // account for scrollbar

    // I don't normally use 'let' in this way but it does what I want it to here
    let location;
    if (rightEdge - e.clientX < 50) location = rightEdge - 100
    else if (e.clientX < 50) location = 0
    else {location = e.clientX - 50}

    const matchingBlock = findMatchingBlock(location)
    setPreview(matchingBlock)

    setPreviewLocation(location)
  }

  const handleNavHover = (block) => {
    // setPreview(block)
    return null
  }

  const showTimeline = () => {
    return navData.map(block =>
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${block.id}`} key={block.id}>
        <div 
          className={block.id === essayData.id ? styles.currentBlock : styles.block} 
  //        onMouseOver={() => handleNavHover(block)}
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
           onClick={() => console.log(preview)}
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