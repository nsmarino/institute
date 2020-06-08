// import utility functions

import { getTestPageIds, getTestPageData } from "../../../lib/essayLib"

import styles from './essay.module.css'


export default function TestPage({ testData }) {
    console.log(testData)
    return (
        <div 
          dangerouslySetInnerHTML={{ __html: testData.contentHtml }}
          className={styles.essayContent}
        />
    )
}

export async function getStaticPaths() {
    const paths = getTestPageIds()
    return {
        paths,
        fallback: false
      }
}

export async function getStaticProps({ params }) {
    const testData = await getTestPageData(params.dir, params.id)
    return {
        props: {
            testData
        }
    }
}