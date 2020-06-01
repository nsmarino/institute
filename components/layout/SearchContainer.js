const SearchContainer = () => {
  return (
    <div className="searchContainer">
      <input type="text" className="search" placeholder="search..." />        
    <style jsx>{`
      .searchContainer {
        width: 15em;
        display: flex;
        flex-direction: row-reverse;
      }
        .search {
          margin: 0;
          padding: 0;

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