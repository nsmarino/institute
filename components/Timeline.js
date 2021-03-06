import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState, useRef, useEffect } from 'react'

import styles from './Timeline.module.css'

export default function Timeline({essayData, navData, preview, setPreview}) {
  const router = useRouter()

  // sets timeline CSS to 'sticky' on scroll
  const [sticky, setSticky] = useState(false)
  const scrollRef = useRef()

  // flag used for mobile scene select via timeline
  const [mobileSceneSelect, setMobileSceneSelect] = useState(false)

  // allows us to update preview image even when not hovering timeline blocks
  const blocksRef = useRef()
  const [blockSpans, setBlockSpans] = useState([])

  // governs preview and marker location
  // preview and setPreview is controlled at page level so onClick can toggle vis on mobile
  const [previewLocation, setPreviewLocation] = useState('')
  const [isEdge, setIsEdge] = useState(false)
  const [edgeMarkerLocation, setEdgeMarkerLocation] = useState('')

  // Handle timeline sticky:
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

  // Gets size for timeline blocks:
  const getBlockLocations = () => {
    const blockLocations = []
    blocksRef.current.childNodes.forEach(block => {
      const blockLocation = {
          left: block.getBoundingClientRect().x, 
          right: block.getBoundingClientRect().x + block.getBoundingClientRect().width,
        }
      blockLocations.push(blockLocation)
    })
    setBlockSpans(blockLocations)
  }
  useEffect(() => {
    getBlockLocations()
    window.addEventListener('resize', getBlockLocations)
    return () => {
      // remove resize listener
      window.removeEventListener('resize', getBlockLocations);
    }
  }, [])

  // Called by updateMouseX to find preview image to display:
  const findMatchingBlock = (x) => {
    // supposedly a simple FOR LOOP is way more performant than array.find() ???
    const matchingSpan = blockSpans.find(block => block.left <= x && x < block.right)
    const spanIndex = blockSpans.indexOf(matchingSpan)
    return navData[spanIndex]
  }

  // Controls location of preview thumbnail based on mouse/pointer position
  const updateMouseX = e => {
    const rightEdge = Math.min(document.documentElement.clientWidth, window.innerWidth) // account for scrollbar
    const mouseLocation = e.clientX
    const matchingBlock = findMatchingBlock(mouseLocation)
    setPreview(matchingBlock)

    const adjustLocation = (location) => {
      if (rightEdge - location < 150) return {edge: true, adjust: rightEdge - 300, marker: location - rightEdge + 300}
      else if (location < 150) return {edge: true, adjust: 0, marker: location}
      else return {edge: false, adjust: location - 150, marker: null}
    }
    const adjustedLocation = adjustLocation(mouseLocation)

    setPreviewLocation(adjustedLocation.adjust)
    setIsEdge(adjustedLocation.edge)
    setEdgeMarkerLocation(adjustedLocation.marker)
  }

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") setPreview(null)
  }

  const showTimeline = () => {
    return navData.map(block =>
      <Link 
        href='/essays/[dir]/[id]' 
        as={`/essays/${essayData.dir}/${block.id}`} 
        key={block.id}
        
      >
        <div 
            className={block.id === essayData.id ? styles.currentBlock : styles.block} 
            onPointerMove={() => updateMouseX(event)}
        ></div>

      </Link>
      )
    }

  return (
    <div 
      ref={scrollRef} 
      className={sticky ? styles.sticky : ''}
      onPointerLeave={() => handlePointerLeave(event)}
      style={{ touchAction: "none" }}
    >
      <div className={styles.timelineContainer}>
        <div className={styles.timeline} ref={blocksRef}>
          {showTimeline()}
        </div>
      </div>

      { preview ?
      // Thumbnail image:
      <div className={styles.thumbnailContainer} 
        style={{left: previewLocation,}}
        onPointerDown={() => {
          if (preview && event.pointerType !== "mouse") {
            setMobileSceneSelect(true)
          }
        }} 
        onPointerMove={() => {
          if (mobileSceneSelect) {
            setMobileSceneSelect(false)
            setPreview(null)
          } else {
            updateMouseX(event)
          }
          }}
      >

        {/* Marker is centered above thumbnail on timeline 
         except when thumbnail is against edge of window */}
        {isEdge ?
          <div style={{
            width:'3px',
            height: '2rem',
            backgroundColor:'#333',
            position: 'absolute',
            top: '-2rem',
            left: `${edgeMarkerLocation}px`,
          }}></div>
          :
        <div className={styles.markerFlexbox}>
          <div className={styles.marker}></div>
        </div>
        } 

        <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${preview.id}`}>
          <a>
            <img 
              src={preview.image} 
              alt={preview.alt} 
              className={`thumbnailLink ${styles.thumbnail}`} 
            />
          </a>
        </Link>
      </div>
          :
        null
      }
    </div>
  )
}