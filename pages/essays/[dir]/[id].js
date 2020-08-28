// Framework:
import { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styling:
import styles from './essay.module.css'

// Components:
import Layout from '../../../components/layout/Layout'
import Timeline from '../../../components/Timeline'

// helpers:
import { getEssayPageIds, getEssayPageData, getEssayNavData } from "../../../lib/essayLib"

export default function EssayPage({ essayData, navData }) {
  const router = useRouter()
  const [preview, setPreview] = useState(null)

  const currentPageIndex = navData.findIndex(page => page.id===essayData.id)
    
  const previousPage = currentPageIndex !== 0 ?
    navData[currentPageIndex - 1].id
      :
    null
    
  const nextPage = currentPageIndex !== navData.length - 1 ?
    navData[currentPageIndex + 1].id
      :
    null

  const handleClick = () => {
      // onClick instead of onPointerDown because 
      // pointerdown is called first on mobile. 
      // pointerdown triggers link; onClick closes thumbnail
      setPreview(null)
  }

  const handlePointerDownCapture = (event) => {
    // This is needed for selecting by preview on mobile --
    // If we dont capture pointerdown event here, then updateMouseX
    // in Timeline.js will be called before the link fires.
    if(event.target.classList.contains('thumbnailLink')) {
      router.push(`/essays/[dir]/[id]`,`/essays/${essayData.dir}/${preview.id}`)
    }    
  }

  return (
  <div
    onClick={handleClick}
    onPointerDownCapture={() => handlePointerDownCapture(event)}
  >
  <Head>
    <title>{essayData.title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
  </Head>
  <Layout>
    <Timeline essayData={essayData} navData={navData} preview={preview} setPreview={setPreview} />

<div className={styles.essayGrid}>
  <div className={styles.previous}>
  { previousPage ?
    <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${previousPage}`}>
      <a>previous</a>
    </Link>  
  : null }
  </div>
  {/* PAGE CONTENT: */}
    <div 
    dangerouslySetInnerHTML={{ __html: essayData.contentHtml }}
    className={styles.essayContent}
    />
    
  <div className={styles.next}>
  { nextPage ?
    <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${nextPage}`}>
      <a>next</a>
    </Link>
    : null } 
    </div>  
</div>
</Layout>
</div>
)
}

export async function getStaticPaths() {
    const paths = getEssayPageIds()
    return {
        paths,
        fallback: false
      }
}

export async function getStaticProps({ params }) {
    const essayData = await getEssayPageData(params.dir, params.id)
    const navData = await getEssayNavData(params.dir)
    return {
        props: {
            essayData,
            navData
        }
    }
}