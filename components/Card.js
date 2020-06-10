import Link from 'next/link'

export default function Card({ essay, handleHover }) {
  return (
    <div onMouseOver={() => handleHover(essay)}>
      <li>
        <Link href='essays/[dir]/[id]' as={`essays/${essay.dir}/${essay.id}`}>
          <a>{essay.title}</a>       
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