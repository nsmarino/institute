import Link from 'next/link'

const Nav = () => {
  return (
  <div className="nav">
    <ul>
      <li>
        <input type="text" placeholder="search..." className="search" />
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
          width: 12em;
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
        }
        a:hover {
          background-color: #ebe7dd
        }

        .search {
          margin: 0;
          padding: 0;

          background-color: #F9F5E9;

          border: none;
          border-radius: 0;
          border-bottom: 1px solid #333;
          
          height: 1.5em;
          width: 11em;
          padding-left: 1em;
        }
      `}</style>
  </div>
  )
}

export default Nav