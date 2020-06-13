// NEXT/REACT -
import Head from 'next/head'
import { useState } from 'react'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import IndexLink from '../components/IndexLink'

// INTERNAL LIBRARIES -
import { EssayDataForIndex } from '../lib/essayLib'

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

      <div className="imageContainer">
        {image ?
        <img
        className="previewImage"
        src={image.source}
        alt={image.name}
        />
        :
        null
        }
      </div>

    </div>
  </Layout>
    <style jsx>{`
  .indexContainer {
    display: grid;   
  }

  .linkContainer, .imageContainer {
      grid-column: 1;
      grid-row: 1;
    }

    .linkContainer {
      z-index: 99;
      margin-left: 5em;
    }

  .imageContainer {
    display: flex;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
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

// 6/10/2020 Goals for the next few days:
// 1. attach links to prev/next buttons [✓ 6/10/20]
// 2. refactor timeline into own component [✓ 6/10/20]
// 3. set up dummy essay data -- 5 films with 5 parts plus info page [✓ 6/10/20]
// 4. header css [✓ 6/13/20]
// 5. index css and preview image [✓ 6/13/20]

// 6/13/20
// 6. essay page css incl. timeline css (!)

// 6/14/20
// 7. responsive design

// 6/15/20
// 8. more dummy data -- many images
// 9. image optimization

// 6/16/20
// 10. collections and about page
// 11. clean up, iterate, refactor...how to organize css?

