import Head from 'next/head'

import Layout from '../../components/layout/Layout'
import Date from '../../components/Date'
import { getAllArticleIds, getArticleData } from '../../lib/articles'

import { useState } from 'react'

import styles from './article.module.css'

export default function Article({ articleData }) {
  const [page, setPage] = useState(0)
  console.log(articleData.contentHtml)
  const pages = articleData.contentHtml.split("^")
  console.log(pages)

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    if (page !== 0) setPage(page - 1)
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

      {/* <p>{page + 1} / {pages.length}</p> */}

      <div className="contentContainer">
        { page !== 0  && <button onClick={previousPage}>prev</button>}
        <div 
          dangerouslySetInnerHTML={{ __html: pages[page] }}
          className={styles.articleContent}
        />
        { page !== pages.length - 1  && <button onClick={nextPage}>next</button>}
      </div>
      <div className="sceneImageContainer">

      </div>

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
        }
        .sceneImageContainer {
          background: linear-gradient(#333, #F9F5E9);
          border: .25em solid #333;
          width: 2em;
          height: 2em;
        }
        .progress {
          border: 1px solid red;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
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
