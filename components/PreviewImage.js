const PreviewImage = ({ image }) => {
  return (
  <div className="imgContainer">
    {image ?
      <img
        src={image.source}
        alt={image.name}
      />
    :
      null
    }
    <style jsx>{`
    .imgContainer {
        width: 20em;
    }
    img {
        width: 20em;
    }
    `}</style>
  </div>
  )
}

export default PreviewImage