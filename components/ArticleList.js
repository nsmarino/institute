import Card from './Card'

const ArticleList = ({ articleData, handleHover }) => {
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