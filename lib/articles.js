// FOR REFERENCE ONLY:

// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// // internal library for data-fetching
// // from filesystem, external API, or database

// //////////////////////
// // FROM FILESYSTEM: //
// //////////////////////

// const articleDirectory = path.join(process.cwd(), 'articles')

// // CALLED IN INDEX
// export function getSortedArticleData() {
//   const fileNames = fs.readdirSync(articleDirectory)
//   const allArticleData = fileNames.map(fileName => {
//       const id = fileName.replace(/\.md$/, '')
//       const fullPath = path.join(articleDirectory, fileName)
//       const fileContents = fs.readFileSync(fullPath, 'utf8')
//       const matterResult = matter(fileContents) // parsed metadata
//       return {
//           id,
//           ...matterResult.data // returns filename for url and MD metadata
//       }
//     })
//   return allArticleData.sort((a,b) => {
//       if (a.date < b.date) {
//           return 1
//       } else {
//           return -1
//       }
//   })
// }

// // CALLED FOR STATIC PATHS
// export function getAllArticleIds() {
// // will return array of string ids for use as URL.
// // each object in array must have param keys.
// // this will be used by getStaticPaths
//     const fileNames = fs.readdirSync(articleDirectory)
//     return fileNames.map(name=> {
//         return {
//             params: {
//                 id: name.replace(/\.md$/, '')
//             }
//         }
//     })
// }

// // CALLED FOR ARTICLE PAGE (DYNAMICALLY GENERATED)
// export async function getArticleData(id) {
//   const fullPath = path.join(articleDirectory, `${id}.md`)
//   // we're using readFileSync a lot. make sure to include encoding method
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const matterResult = matter(fileContents)

//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   return {
//       id,
//       contentHtml,
//       ...matterResult.data
//   }

// }
