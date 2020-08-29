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
      <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '50rem'}}>
      <h2>About the Institute</h2>

    <p>Veniam fugiat nulla eiusmod dolor incididunt laboris. In ad eiusmod in ut ullamco cillum ipsum sint incididunt Lorem. Ea voluptate sint voluptate sit elit ea ipsum exercitation aute excepteur.
Commodo et amet duis dolore aute elit laborum officia. Deserunt excepteur voluptate occaecat pariatur laborum officia dolore occaecat quis aliquip occaecat magna. Reprehenderit dolor ut officia sunt et ad labore amet ex cillum velit sint.</p>
    </main>
    </Layout>
    <style jsx>{`
        main {
          margin: 5%;
        }
        p {
          font-size: 1.25rem;
          line-height: 2.25rem;
        }
      `}</style>
  </div>
  )
}