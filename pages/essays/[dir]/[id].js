import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout/Layout'

import { useState } from 'react'

import { getEssayPageIds, getEssayPageData, getEssayNavData } from "../../../lib/essayLib"

import styles from './essay.module.css'

export default function EssayPage({ essayData, navData }) {
    const [preview, setPreview] = useState(null)
    console.log('essay data', essayData)
    console.log('nav data', navData)

    const handleNavHover = (block) => {
        setPreview(block)
    }

    const showNav = () => {
      return navData.map(block =>
        <Link href='/essays/[dir]/[id]' as={`/essays/${essayData.dir}/${block.id}`}>
        <div 
        className={block.id === essayData.id ? styles.currentBlock : styles.block} 
        key={block.id}
        onMouseOver={() => handleNavHover(block.image)}
        >
        </div>
        </Link>
      )
    }

    return (
    <div>
      <Head>
        <title>{essayData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        {showNav()}
      </div>
      <Layout>

      { preview ?
        <img src={preview} alt="guy yard" className={styles.thumbnail} />
       :
        null
      }
<button>previous</button>
        <div 
          dangerouslySetInnerHTML={{ __html: essayData.contentHtml }}
          className={styles.essayContent}
        /> 
        <button>next</button>     
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