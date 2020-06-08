// NEXT/REACT -
import Head from 'next/head'
import { useState } from 'react'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import PreviewImage from '../components/PreviewImage'
import Card from '../components/Card'

// INTERNAL LIBRARIES -
import { EssayDataForIndex } from '../lib/essayLib'

export default function Home({ allEssayData }) {

  const [image, setImage] = useState(null)

  const handleHover = (essay) => {
    const image = {
      source: essay.image,
      name: `${essay.title}`
    }
    setImage(image)
    console.log(image)
  }

  const listOfLinks = () => {
    const links = allEssayData.map(essay => 
      <Card 
        essay={essay}
        handleHover={handleHover} 
        key={`${essay.dir}.${essay.id}`} 
      />)
      return links
  }


  return (
    <div className="container">
    <Head>
        <title>the guy yard institute of film studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <div className="indexContainer">

        <div className="studiesLinks">
        {listOfLinks()}
      </div>

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

export async function getStaticProps() {
  const allEssayData = EssayDataForIndex()
  return {
    props: {
      allEssayData,
    }
  }
}

// - To Do -
// 1. refactor out all traces of 'articles'
// 2. essay page functionality - arrows to move, timeline component
// 3. clean up index page - flexbox (esp header), handleHover
// 4. clean up essay pages, figure out how this useEffect stuff will work
// 5. assess, polish, start filling with demo content?

