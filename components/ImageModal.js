const ImageModal = ({ image }) => {
    const src = (image.substring(
        image.indexOf('/images'),
        image.indexOf("alt") - 2
    ))

    const alt = (image.substring(
        image.indexOf("alt") + 5,
        image.lastIndexOf(">") -1
    ))
    return (
    <div>
    <img src={src} alt={alt} />
      <style jsx>{`
        width: 20em;
        `}
        </style>
    </div>   
    )
  }

export default ImageModal