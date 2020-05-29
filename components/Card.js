import Link from 'next/link'

export default function Card({ article, handleHover }) {
  return (
    <div onMouseOver={() => handleHover(article)}>
      <li>
        <Link href='/articles/[id]' as={`/articles/${article.id}`}>
          <a>{article.title}</a>       
        </Link>
      </li>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
          font-size: 2rem; 
        } 
        a:hover {
          color: #444
        }
      `}</style>
    </div>
  )
}