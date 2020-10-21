import Head from 'next/head'
import { useState } from 'react'
import styles from './layout.module.css'

import Header from './Header'

export const siteTitle = 'studies.film'

export default function Layout({ children }) {
  const [navVis, setNavVis] = useState(false)

  const handleNavClick = () => {
    setNavVis(!navVis)
  }

  const handleAppClick = (e) => {
    setNavVis(false)
  }

  return (
    <div onClickCapture={handleAppClick}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="film criticism"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.app}>
      <Header navVis={navVis} handleNavClick={handleNavClick} />
      <main>{children}</main>
      </div>
    </div>
  )
}