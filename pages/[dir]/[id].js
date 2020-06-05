// import utility functions

import { getTestPageIds, getTestPageData } from "../../lib/testLib"

export default function TestPage({ testData }) {
    console.log(testData)
    return (
        <div>
            <h1>{testData.title}</h1>
        </div>
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