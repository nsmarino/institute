import Head from 'next/head'

import styles from './layout.module.css'

import Header from './Header'

export const siteTitle = 'Center for temporal film studies'

export default function Layout({ children }) {
  return (
    <div>
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
      <Header />
      <main className={styles.container}>{children}</main>
      </div>
    </div>
  )
}