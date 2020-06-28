// NEXT/REACT -
import Head from 'next/head'
import { useState } from 'react'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import IndexLink from '../components/IndexLink'

// INTERNAL LIBRARIES -
import { EssayDataForIndex } from '../lib/essayLib'

// This is currently preserved 'just in case' but will likely not be used in the final version -- maybe as search results?

export default function Home({ allEssayData }) {
  const [image, setImage] = useState({source: '/images/taipei-story/taipei-story.jpg', name: null})

  const handleHover = (essay) => {
    const image = {
      source: essay.image,
      name: `${essay.title}`
    }
    setImage(image)
  }

  const listOfLinks = () => {
    const links = allEssayData.map(essay => 
      <IndexLink 
        essay={essay}
        handleHover={handleHover} 
        key={`${essay.dir}.${essay.id}`} 
      />)
      return links
  }

  return (
    <div className="container">
    <Head>
        <title>center for temporal film studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <div className="indexContainer">

        <div className="linkContainer">
          <ul>
          {listOfLinks()}
          </ul>
      </div>

    <div className="containerBorder">
      <div className="imageContainer" 
        style={{ 
          backgroundImage: `url(${image.source})`, 
          opacity: '0.25', 
          backgroundPosition: 'center', 
          backgroundSize: '100%', 
          backgroundRepeat: 'no-repeat'
          }
        }
      ></div>
    </div>

    </div>
  </Layout>
    <style jsx>{`

      .testDiv {
        width: 20rem;
        height: 20rem;
        background: blue;
      }

  .indexContainer {
    display: grid;   
  }

  .linkContainer, .imageContainer, .containerBorder {
      grid-column: 1;
      grid-row: 1;
    }

    .linkContainer {
      z-index: 99;
      margin-left: 5em;
    }

.containerBorder {
  border-top: 2px solid #333;
    border-bottom: 2px solid #333;
}
  .imageContainer {
    display: flex;
    width: 75rem;
    height: 40rem;
    justify-content: center;
    align-items: center;
    position: relative;
    }
  
  .previewImage {
    filter: opacity(25%);
    }

@media only screen and (min-width: 800px) {
  .previewImage {
    width: 75rem;
    }
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