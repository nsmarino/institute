import Link from 'next/link'

const Nav = () => {
  return (
  <div className="nav">
    <ul>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about the institute</a>
        </Link>
      </li>
      <li>
      <Link href="/all">
          <a>all films</a>
        </Link>
      </li>
      <li>
      <Link href="/about">
          <a>collections</a>
        </Link>
      </li>
    </ul>
   
    <style jsx>{`
    .nav {
          position: absolute;
          z-index: 100;
          background-color: #F9F5E9;
          border: 2px solid #333;
          width: 16em;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #333;
          text-decoration: none;
          display: block;
          padding: .25em;
          font-size: 1.25em;
          border-top: 1px solid #ebe7dd;
        }
        a:hover, a:active {
          background-color: #ebe7dd
        }
      `}</style>
  </div>
  )
}

export default Nav