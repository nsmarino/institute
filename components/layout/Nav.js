import Link from 'next/link'

const Nav = () => {
  return (
  <div>
    <ul>
      <li>
        <Link href="/about">
          <a>about the institute</a>
        </Link>
      </li>

      <li>collections</li>
    </ul>
   
    <style jsx>{`
        border: 1px solid #333;
        background-color: #F9F5E9;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #333;
          text-decoration: none;
        }
        a:hover {
          background-color: #ebe7dd
        }
      `}</style>
  </div>
  )
}

export default Nav