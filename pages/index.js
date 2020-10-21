// NEXT/REACT -
import Head from 'next/head'

// COMPONENTS -
import Layout from '../components/layout/Layout'
import Card from '../components/Card'
import Footer from '../components/Footer'

// INTERNAL LIBRARIES -
import { EssayDataForIndex } from '../lib/essayLib'

export default function Home({ allEssayData }) {

  return (
    <div className="container">
    <Head>
        <title>studies.film</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <div className="cardFlex">
        {allEssayData.map(essay => <Card essay={essay} key={essay.title} />)}
      </div>
      <Footer />
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

// image optimization

// After taking a break to finish Reed Events:
// clean up pointerEvent code
// COLLECTIONS page
// fine-tune essay layout and overall design

