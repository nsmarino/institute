// NEXT/REACT -
import Head from 'next/head'
import { useState } from 'react'

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