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

// 6/10/2020 Goals for the next few days:
// 1. attach links to prev/next buttons [✓ 6/10/20]
// 2. refactor timeline into own component [✓ 6/10/20]
// 3. set up dummy essay data -- 5 films with 5 parts plus info page
// 4. header css
// 5. index css
// 6. essay page css incl. timeline css (!)
// 7. responsive design
// 8. image optimization

