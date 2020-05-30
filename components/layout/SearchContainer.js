const SearchContainer = ({ handleClick, vis }) => {
  return (
    <div>
      <div 
        className="box" 
        onClick={handleClick}
      />
      { vis && (
        <div className="searchContainer">
          <input type="text" className="search" placeholder="search..." />
        </div>       
      )}
    <style jsx>{`
        a {
          color: #333;
          text-decoration: none;
        }

        .box {
          background: #333;
          width: 1em;
          height: 1em;
        }
        .searchContainer {
          position: fixed;
        }
        .search {
          margin: 0;
          padding: 0;

          position: absolute;
          right: -1em;

          background-color: #F9F5E9;

          border: none;
          border-radius: 0;
          border-bottom: 1px solid #333;
          
          height: 2em;

        }
      `}</style>
  </div>
  )
}

export default SearchContainer