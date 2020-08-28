const Hamburger = ({ handleClick, vis}) => {
  return (
  <div style={{width: '2rem', marginLeft: '1rem', cursor: 'pointer'}} onClick={handleClick}>
    {
    vis ?    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        <line id="topLine" y2="350" x2="350" y1="150" x1="150" strokeWidth="20" stroke="#000" fill="none"/>
        <line id="bottomLine" y2="150" x2="350" y1="350" x1="150" strokeWidth="20" stroke="#000" fill="none"/>
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        <line id="topLine" y2="150" x2="425" y1="150" x1="75" strokeWidth="20" stroke="#000" fill="none"/>
        <line id="middleLine" y2="250" x2="425" y1="250" x1="75" strokeWidth="20" stroke="#000" fill="none"/>
        <line id="bottomLine" y2="350" x2="425" y1="350" x1="75" strokeWidth="20" stroke="#000" fill="none"/>
      </svg>
    }
  </div>
  )
}

export default Hamburger