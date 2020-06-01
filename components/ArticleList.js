import Card from './Card'

const ArticleList = ({ articleData, handleHover }) => {
  console.log()
  return (
    <div className="articleList">
      <ul>
        {articleData.map(article => 
          <Card 
            article={article}
            handleHover={handleHover} 
            key={article.id} 
          />)}
      </ul>
      <style jsx>{`
        flex: 1 0 auto;
        max-width: 25rem;
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        `}</style>
    </div>
  )
}

export default ArticleList