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
    <p>Veniam fugiat nulla eiusmod dolor incididunt laboris. In ad eiusmod in ut ullamco cillum ipsum sint incididunt Lorem. Ea voluptate sint voluptate sit elit ea ipsum exercitation aute excepteur.

Commodo et amet duis dolore aute elit laborum officia. Deserunt excepteur voluptate occaecat pariatur laborum officia dolore occaecat quis aliquip occaecat magna. Reprehenderit dolor ut officia sunt et ad labore amet ex cillum velit sint.</p>
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