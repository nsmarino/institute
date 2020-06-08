// FOR REFERENCE ONLY -

//framework:
import Head from 'next/head'
import { useState } from 'react'
import styles from './article.module.css'
//components:
import Layout from '../../components/layout/Layout'
import Date from '../../components/Date'
import ImageModal from '../../components/ImageModal'
//utilities:
import { getAllArticleIds, getArticleData } from '../../lib/articles'

function Article({ articleData }) {
  // console.log(articleData)
  const [page, setPage] = useState(0)
  const [imageVis, setImageVis] = useState(false)

  const pages = articleData.contentHtml
    .split("^")
    .map(pageStr => {
      const imgStr = pageStr.substring(
        pageStr.indexOf('<img'),
        pageStr.indexOf('</p>')
      )
      const textStr = pageStr.substring(
        pageStr.indexOf('<h3')
      )
      return {image: imgStr, text: textStr}
    })

  // for page navigation
  const nextPage = () => {
    setPage(page + 1)
    setImageVis(false)
  }
  const previousPage = () => {
    setPage(page - 1)
    setImageVis(false)
  }
  const trackProgress = () => {
    const progressBoxes = pages.map(p=>
    pages.indexOf(p) === page ? 
    <div
      key={pages.indexOf(p)} 
      style={{background: '#333', width: '1em', height: '1em', margin: '.25em'}}
    ></div>
    :
    <div 
      key={pages.indexOf(p)}
      style={{background: '#333', width: '.25em', height: '.25em', margin: '.25em'}}
    ></div>
    )
    return progressBoxes
  }

  const displayImg = () => {
    setImageVis(!imageVis)
  }

  return (
    <Layout>
      <Head>
        <title>{articleData.title}</title>
      </Head>
    

      <div className="articleHeader">
        <h1>{articleData.title}</h1>
        <Date dateString={articleData.date} />
      </div>

      <div className="progress">
        {trackProgress()}
      </div>

      <div className="contentContainer">
        { page !== 0  && <button onClick={previousPage} className="btn">🡄</button>}
        <div 
          dangerouslySetInnerHTML={{ __html: pages[page].text }}
          className={styles.articleContent}
        />
        { page !== pages.length - 1  && <button onClick={nextPage} className="btn">🡆</button>}
      </div>
      <button className="imgToggle" onClick={displayImg}>img</button>

      {
        imageVis ?      
        <ImageModal image={pages[page].image} />
        :
        null
      }

      <style jsx>{`
        color: #333;        
        h1 {
          font-size: 2rem;
        }
        .articleHeader {
          display: flex;
          align-items: center;
        }
        .contentContainer {
          display: flex;

          border: 1px solid blue;
        }
        .imgToggle {
          background: linear-gradient(#333, #F9F5E9);
          border: .25em solid #333;
          width: 2em;
          height: 2em;
        }
        .progress {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .btn {
          border: none;
          background: white;
          width: 2em;
          height: 2em;
          align-self: center;
        }
      `}
      </style>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllArticleIds()
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id)
  return {
    props: {
      articleData
    }
  }
}

// getStaticProps() {} for fetching external data and passing as props
// the useSWR hook is good for client-side data fetching (comments section)
// Ex:
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

// dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
