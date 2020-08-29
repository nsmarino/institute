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

// By Sept 1?
// clean up pointer event code on timeline
// responsive design: prev/next buttons
// image optimization
// ABOUT page
// COLLECTIONS page
// improve essay layout, article design

