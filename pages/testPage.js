import Head from 'next/head'
import Layout from '../components/layout/Layout'

import { useState } from 'react'

import styles from './testPage.module.css'

const testData = {
    title: 'Test Data',
    id: 1,
    content: [
        {
            image: '/images/mauvais.jpg',
            alt: 'mauvais',
            text: 'la la la'
        },
        {
            image: '/images/profile.jpg',
            alt: 'mauvais',
            text: 'la la la'
        },
        {
            image: '/images/windrises.jpg',
            alt: 'mauvais',
            text: 'la la la'
        },
    ]
}

export default function Test() {
    const [preview, setPreview] = useState(null)
  console.log()
  const handleScrub = (block) => {
      console.log(block)
      setPreview(block)
  }
  const showScrub = () => {
      const scrubBlocks = testData.content.map(content=>content.image)
      return scrubBlocks.map(block => <div onMouseOver={() => handleScrub(block)} className={styles.block} key={block}></div>)
  }

  return (
  <div className="container">
    <Head>
      <title>test page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="scrub">
        {showScrub()}
      </div>
    <Layout>
{ preview ?
<img src={preview} alt="guy yard" />
:
null
}
      <h2>{testData.title}</h2>
      <img src={testData.content[0].image} alt=""/>
      <p>{testData.content[0].text}</p>
    </Layout>
    <style jsx>{`
        .scrub {
          display: flex;
          width: 100vw;
          border: 1px solid blue;
          flex-direction: row;
          justify-content: space-between;
        }
        img {
          width: 10em;
        }
        `}</style>
  </div>
  )
}