import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import styles from './layout.module.css'

import NavContainer from './NavContainer'
import SearchContainer from './SearchContainer'

const name = 'the guy yard institute of film studies'
export const siteTitle = 'the guy yard institute of film studies'

const Header = () => {
  const [navVis, setNavVis] = useState(false)

  const handleNavClick = () => {
    setNavVis(!navVis)
  }

  return (
    <header className={styles.header}>

      <NavContainer handleClick={handleNavClick} vis={navVis} /> 
    
    <div>
      <Link href="/">
        <a>
          <h1>Guy Yard Institute of Film Studies</h1>
        </a>
      </Link>
    </div>
    
      <SearchContainer />

      <style jsx>{`
        a {
          color: #333;
          text-decoration: none;
        }
        h1 {
          text-align: center;
        }
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

      <div className={styles.app}>
      <Header />
      <main className={styles.container}>{children}</main>
      </div>
    </div>
  )
}