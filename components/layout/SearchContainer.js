const SearchContainer = () => {
  return (
    <div className="searchContainer">
      <input type="text" className="search" placeholder="search..." />        
    <style jsx>{`
      .searchContainer {
        display: flex;
        flex-direction: row-reverse;
        width: 20em;
      }
        .search {
          margin: 0;
          padding: 0;

          background-color: #F9F5E9;

          border: none;
          border-radius: 0;
          border-bottom: 1px solid #333;
          
          height: 1.5em;
          width: 20em;
          padding-left: 1em;
        }
      `}</style>
    </div>
  )
}

export default SearchContainer