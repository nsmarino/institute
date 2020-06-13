import Link from 'next/link'

export default function IndexLink({ essay, handleHover }) {
  return (
    <div onMouseOver={() => handleHover(essay)}>
      <li>
        <Link href='essays/[dir]/[id]' as={`essays/${essay.dir}/${essay.id}`}>
          <a>{essay.title}</a>       
        </Link>
      </li>
      <style jsx>{`
        li {
          list-style-type: none;
          line-height: 2.5em;
        }
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