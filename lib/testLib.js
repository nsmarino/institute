import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const testDirectory = path.join(process.cwd(), 'testDir')

export function getTestDataForIndex() {
    const dirNames = fs.readdirSync(testDirectory)
    const testData = dirNames.map(dirName => {
      const dirPath = path.join(testDirectory, dirName)
      const dirContents = fs.readdirSync(dirPath)
    })
    return dirNames
    // const allArticleData = fileNames.map(fileName => {
    //     const id = fileName.replace(/\.md$/, '')
    //     const fullPath = path.join(articleDirectory, fileName)
    //     const fileContents = fs.readFileSync(fullPath, 'utf8')
    //     const matterResult = matter(fileContents) // parsed metadata
    //     return {
    //         id,
    //         ...matterResult.data // returns filename for url and MD metadata
    //     }
    //   })
    // return allArticleData.sort((a,b) => {
    //     if (a.date < b.date) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
  }

export function getTestPageIds() {
  const articleDirs = fs.readdirSync(testDirectory)
  
  const sceneFiles = articleDirs.map(articleDir => {
    const articlePath = path.join(testDirectory, articleDir)
    const articleContents = fs.readdirSync(articlePath)

    const articleScenes = articleContents.map( scene => {
      return {
        dirName: articleDir,
        fileName: scene,
      }
    })
    return articleScenes
  })

  // per stackoverflow, this is less efficient (quadratic time vs linear time below)
  // const sceneObjects = sceneFiles.reduce((a, b) => [...a, ...b], [])

  const sceneObjects = Array.prototype.concat.apply([], sceneFiles)
// sceneObjects = [ scene1, scene2, scene3, ]
// scene = {
//   dirName: 'foo',
//   fileName: 'bar',
// }

return sceneObjects.map(scene => {
  return {
    params: {
      dir: scene.dirName, 
      id: scene.fileName.replace(/\.md$/, '') 
    }
  }
})  

  // return null
}

export async function getTestPageData(dir, id) {
  // return null // firing blanks

  const fullPath = path.join(testDirectory, dir, `${id}.md`)

  // 1. GET ALL FILE CONTENTS
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 2. GET METADATA
  const matterResult = matter(fileContents)

  // 3. GET CONTENT AS HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // 4. RETURN DATA
  return {
      dir,
      id,
      contentHtml,
      ...matterResult.data
  }
}
