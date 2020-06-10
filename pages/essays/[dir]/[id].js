// Framework:
import Head from 'next/head'
import Link from 'next/link'

// Styling:
import styles from './essay.module.css'

// Components:
import Layout from '../../../components/layout/Layout'
import Timeline from '../../../components/Timeline'

// helpers:
import { getEssayPageIds, getEssayPageData, getEssayNavData } from "../../../lib/essayLib"

export default function EssayPage({ essayData, navData }) {
  const currentPageIndex = navData.findIndex(page => page.id===essayData.id)
    
  const previousPage = currentPageIndex !== 0 ?
    navData[currentPageIndex - 1].id
      :
    null
    
  const nextPage = currentPageIndex !== navData.length - 1 ?
    navData[currentPageIndex + 1].id
      :
    null

  return (
  <div>
  <Head>
    <title>{essayData.title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layout>
    <Timeline essayData={essayData} navData={navData} />

    { previousPage ?
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${previousPage}`}>
        <a>previous</a>
      </Link>  
      : null }

      {/* PAGE CONTENT: */}
      <div 
        dangerouslySetInnerHTML={{ __html: essayData.contentHtml }}
        className={styles.essayContent}
      />

    { nextPage ?
      <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${nextPage}`}>
        <a>next</a>
      </Link>
      : null }
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
    // const navData
    const navData = await getEssayNavData(params.dir)
    return {
        props: {
            essayData,
            navData
        }
    }
}