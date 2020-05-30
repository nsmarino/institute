import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function About() {
  return (
  <div className="container">
    <Head>
      <title>ABOUT THE INSTITUTE</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h2>About the Institute</h2>
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