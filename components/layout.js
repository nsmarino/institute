import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Nav from './Nav.js'
import { useState } from 'react'

const name = 'the guy yard institute of film studies'
export const siteTitle = 'the guy yard institute of film studies'

const Header = () => {
  const [vis, setVis] = useState(false)

  const handleClick = () => {
    console.log('handle click on box')
    setVis(!vis)
  }
  return (
    <header className={styles.header}>
      <div>
        {/* <Link href="/">
          <a> */}
            <div className="box" onClick={handleClick} />        
          {/* </a>
        </Link> */}
        <div className="navContainer">
        <Nav display={vis} className="nav" />
        </div>
      </div>




      <Link href="/">
        <a>
        <h1>Guy Yard Institute of Film Studies</h1>
        </a>
      </Link>
      <Link href="/">
        <a>search</a>
      </Link>
      <style jsx>{`
        a {
          color: #333;
          text-decoration: none;
        }
        border: 1px solid #333;
        .box {
          background: #333;
          width: 1em;
          height: 1em;
        }
        .navContainer {
          position: fixed;
        }
        .nav {
          position: absolute;
        }
      `}</style>
    </header>
  )
}

const Footer = () => {
  return (
    <div>
    <p>© 2020</p>
    </div>
  )
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="fim criticism"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
    </div>
  )
}