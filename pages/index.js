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

<div className="containerBorder">
      <div className="imageContainer" style={{ backgroundImage: `url(${image.source})`, opacity: '0.25', backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
        {/* {image ?
        <img
        className="previewImage"
        src={image.source}
        alt={image.name}
        />
        :
        null
        } */}
      </div>
      </div>

    </div>
  </Layout>
    <style jsx>{`
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

// 1. attach links to prev/next buttons [✓ 6/10/20]
// 2. refactor timeline into own component [✓ 6/10/20]
// 3. set up dummy essay data -- 5 films with 5 parts plus info page [✓ 6/10/20]
// 4. header css [✓ 6/13/20]
// 5. index css and preview image [✓ 6/13/20]
// 6. timeline css [✓ 6/13/20]

// - timeline refinement with js
// - next/previous buttons -- settle on a design that works at various screen sizes, / swipes
// - header dropdown on scroll, so only timeline is sticky. could be cool.
// - revisit grid system for content once next/prev buttons are settled
// - make collections page -- will this be better layout than current index? more 'mobile-first'

// 8. responsive design
// 9. more dummy data -- many images
// 10. image optimization
// 11. about page
// 12. clean up, iterate, refactor...how to organize css? MAKE VERY CLEAN! COMMENTS AND D.R.Y.!

