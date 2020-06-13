import Nav from './Nav'

const NavContainer = ({ handleClick, vis }) => {
  return (
  <div className="navBoxContainer">
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
    .navBoxContainer {
      width: 20em;
      }
        .box {
          background: #F9F5E9;
          width: 1.5em;
          height: 1.5em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .lineOne {
          width: 1em;
          height: .15em;
          background: #333;
          margin: .125em;
        }
        .lineTwo {
          width: 1em;
          height: .05em;
          background: #333;
          margin: .125em;
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

//;