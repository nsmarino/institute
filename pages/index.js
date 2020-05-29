import Head from 'next/head'

import { useState } from 'react'

import Layout from '../components/layout'
import Card from '../components/Card'

import { getSortedArticleData } from '../lib/articles'



export default function Home({ allArticleData}) {

  const [image, setImage] = useState({
    source: "/images/profile.jpg",
    name: 'testName'
  })

  const handleHover = (article) => {
    console.log(article)
    const image = {
      source: article.image,
      name: 'article.title'
    }
    setImage(image)
  }

  return (
    <div className="container">

      <Head>
        <title>the guy yard institute of film studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="indexContainer">

          <div className="articleList">
            <ul>
              {allArticleData.map(article => 
                <Card 
                  article={article}
                  handleHover={handleHover} 
                  key={article.id} 
                />)}
            </ul>
          </div>

          <div className="imgContainer">
          <img
              src={image.source}
              alt={image.name}
            />
          </div>

        </div>
      </Layout>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .indexContainer {
          border: 1px solid black;
          display: flex;
          justify-content: space-between;
        }

        img {
          width: 20em;
        }
        `}</style>
    </div>
  )
}

// this function will fill the `props` of the above component
// with data, and mark this page to be statically generated at build time
export async function getStaticProps() {
  const allArticleData = getSortedArticleData()
  return {
    props: {
      allArticleData
    }
  }
}

{/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */}