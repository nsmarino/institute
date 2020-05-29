const Nav = ({ display }) => {
  return (
  <>
    {display ?
      <div>
        <ul>
          <li>about the institute</li>
          <li>collections</li>
        </ul>
      </div>
      :
      null
    }
    <style jsx>{`
        border: 1px solid #333;
        background-color: #F9F5E9;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
  </>
  )
}

export default Nav