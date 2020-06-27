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
        width: 75em;
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

// 1. attach links to prev/next buttons [✓ 6/10/20]
// 2. refactor timeline into own component [✓ 6/10/20]
// 3. set up dummy essay data -- 5 films with 5 parts plus info page [✓ 6/10/20]
// 4. header css [✓ 6/13/20]
// 5. index css and preview image [✓ 6/13/20]
// 6. timeline css [✓ 6/13/20]

// - timeline refinement with js [✓ 6/24/20]
// - next/previous buttons -- settle on a design that works at various screen sizes, / swipes
// - header dropdown on scroll, so only timeline is sticky. could be cool.
// - revisit grid system for content once next/prev buttons are settled
// - make collections page -- will this be better layout than current index? more 'mobile-first'

// 8. responsive design
// 9. more dummy data -- many images
// 10. image optimization
// 11. about page
// 12. clean up, iterate, refactor...how to organize css? MAKE VERY CLEAN! COMMENTS AND D.R.Y.!

