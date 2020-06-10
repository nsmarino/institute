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

      // Metadata used for index page is always 
      // stored in 'info.md' in essay directory.
      const essayInfo = dirContents.find(page => page === 'info.md')
      const pathForDirData = path.join(dirPath, essayInfo)

      const dirData = matter(fs.readFileSync(pathForDirData, 'utf8'))
      return {
        dir,
        id: essayInfo.replace(/\.md$/, ''),
        ...dirData.data
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
export function getEssayPageIds() {
  const essayDirs = fs.readdirSync(essayDirectory)
  
  const pageFiles = essayDirs.map(essayDir => {
    const essayPath = path.join(essayDirectory, essayDir)
    const essayContents = fs.readdirSync(essayPath)

    const essayPages = essayContents.map(page => {
      return {
        dirName: essayDir,
        fileName: page,
      }
    })
    return essayPages
  })
  const pageObjects = Array.prototype.concat.apply([], pageFiles)

  return pageObjects.map(page => {
    return {
      params: {
        dir: page.dirName, 
        id: page.fileName.replace(/\.md$/, '') 
      }
    }
  })  
}

export async function getEssayPageData(dir, id) {
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

// used on essay pages to populate navBar with thumbnails and links
export function getEssayNavData(dir) {
  const dirPath = path.join(essayDirectory, dir)
  const essayPages = fs.readdirSync(dirPath)
  const navData = essayPages.map(page => {
    const pagePath = path.join(dirPath, page)
    const pageData = matter(fs.readFileSync(pagePath, 'utf8')).data
    return {
      image: pageData.image,
      alt: pageData.title,
      id: page.replace(/\.md$/, ''),
      order: page.order || null
    }
  })

  return navData.sort((a,b) => {
    if (a.order < b.order) {
      return 1
      } else {
      return -1
      }
  })
  // return navData 
}
