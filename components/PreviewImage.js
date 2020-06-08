const PreviewImage = ({ image }) => {
  return (
  <>
  <div className="repl"></div>
    {image ?
      <img
        src={image.source}
        alt={image.name}
      />
    :
      null
    }
    <style jsx>{`
    `}</style>
  </>
  )
}

export default PreviewImage