// NEXT/REACT -
import Head from 'next/head'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import Card from '../components/Card'

// INTERNAL LIBRARIES -
import { EssayDataForIndex } from '../lib/essayLib'

export default function Home({ allEssayData }) {

  return (
    <div className="container">
    <Head>
        <title>center for temporal film studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <div className="cardFlex">
        {allEssayData.map(essay => <Card essay={essay} key={essay.title} />)}
      </div>
    </Layout>

    <style jsx>{` 
      .cardFlex {
        display: flex;
        justify-content: center;
        max-width: 75em;
        flex-wrap: wrap;
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

// Starting 8/27:
// add emotion css to project and re-factor all css into emotion-styled-components
// bugfix menu open/close
// responsive design: timeline
// responsive design: prev/next buttons
// image optimization
// ABOUT page
// search functionality - refactor the "ALL" page into search results; load image if hover for more than 1 second
// testing?

