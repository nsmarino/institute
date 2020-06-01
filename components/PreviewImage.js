const PreviewImage = ({ image }) => {
  return (
  <>
  <div className="repl"></div>
    {/* {image ?
      <img
        src={image.source}
        alt={image.name}
      />
    :
      null
    } */}
    <style jsx>{`
      .repl {
        background: darkred;
        width: 50rem;
        height: 20rem;
      }
      img {
        flex: 2 0 auto;
        width: 50rem;
      }
    `}</style>
  </>
  )
}

export default PreviewImage