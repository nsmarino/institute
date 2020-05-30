import Nav from './Nav'

const NavContainer = ({ handleClick, vis }) => {
  return (
  <div>
    <div 
      className="box" 
      onClick={handleClick}
    >
      <div className='lineOne'></div>
      <div className='lineTwo'></div>
      <div className='lineTwo'></div>
    </div>
    { vis && (
      <div className="navContainer">
        <Nav className="nav" />
      </div>       
    )}
    <style jsx>{`

        .box {
          background: #333;
          width: 1em;
          height: 1em;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .lineOne {
          width: .8em;
          height: .08em;
          background: #F9F5E9;
        }
        .lineTwo {
          width: .8em;
          height: .01em;
          background: #F9F5E9;
        }
        .navContainer {
          position: fixed;
        }
        .nav {
          position: absolute;
        }
      `}</style>
  </div>
  )
}

export default NavContainer