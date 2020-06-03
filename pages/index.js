// NEXT/REACT -
import Head from 'next/head'
import { useState, Component } from 'react'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import PreviewImage from '../components/PreviewImage'
import ArticleList from '../components/ArticleList'

// INTERNAL LIBRARIES -
import { getSortedArticleData } from '../lib/articles'

export default function Home({ allArticleData}) {
  const [image, setImage] = useState(null)

  const handleHover = (article) => {
    const image = {
      source: article.image,
      name: 'article.title'
    }
    setImage(image)
  }

  return (
    <div className="container">
    <Head>
        <title>the guy yard institute of film studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <div className="indexContainer">

        <ArticleList 
          articleData={allArticleData} 
          handleHover={handleHover}
        />

        <PreviewImage image={image} />

      </div>
    </Layout>
    <style jsx>{`
      .indexContainer {
        display: flex;
        justify-content: space-between;
        width: 75rem;
        border: 1px solid black;
      }
      
    `}</style>
  </div>
  )
}
// this function will fill the `props` of the above component
// with data, and mark this page to be statically generated at build time
export async function getStaticProps() {
  const allArticleData = getSortedArticleData()
  return {
    props: {
      allArticleData
    }
  }
}


// next:
// create imageModal component, attach w wire
// to toggle-box. 
// fix homepage so preview image is properly placed
// at full scale -- subtle arrows on sides.
// it would be cool to have a "scrub" preview on progress bar?...
// a bar that fills up as you go thru pages. it has the title of film
// when you hover you can preview the different images
// honestly starting to wonder if even for myself a cms would be better
// the markdown stuff is getting kind of weird

// 1. image modal box
// 2. fix index TOC and preview image.
// 3. fix header
// 4. add sub-header progress bar (decide about cms)
// 5. tighten up article styling
// 6. tighten up index styling
// 7. refactor, clean up, assess.
