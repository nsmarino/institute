import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const essayDirectory = path.join(process.cwd(), 'essays')

export function EssayDataForIndex() {
    const dirNames = fs.readdirSync(essayDirectory)
    const essayData = dirNames.map(dirName => {
      const dir = dirName
      const dirPath = path.join(essayDirectory, dirName)
      const dirContents = fs.readdirSync(dirPath)
      const id = dirContents[0].replace(/\.md$/, '')
      const pathForDirData = path.join(dirPath, dirContents[0])
      const dirData = fs.readFileSync(pathForDirData, 'utf8')
      const dirMetaData = matter(dirData)
      return {
        dir,
        id,
        ...dirMetaData.data
      }
    })
    return essayData
    // if i want sorted return: 
    // return essayData.sort((a,b) => {
    //     if (a.date < b.date) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
  }

// - To be used to create static paths in pages/[dir]/[id]
export function getTestPageIds() {
  const essayDirs = fs.readdirSync(essayDirectory)
  
  const sceneFiles = essayDirs.map(essayDir => {
    const essayPath = path.join(essayDirectory, essayDir)
    const essayContents = fs.readdirSync(essayPath)

    const essayScenes = essayContents.map( scene => {
      return {
        dirName: essayDir,
        fileName: scene,
      }
    })
    return essayScenes
  })
  const sceneObjects = Array.prototype.concat.apply([], sceneFiles)

  return sceneObjects.map(scene => {
    return {
      params: {
        dir: scene.dirName, 
        id: scene.fileName.replace(/\.md$/, '') 
      }
    }
  })  
}

export async function getTestPageData(dir, id) {
  const fullPath = path.join(essayDirectory, dir, `${id}.md`)
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
