export default function Logo({
  image,
  size,
  title,
  style,
}) {
  
  // you can pass any type of data to image property.
  // If it is a string, it will be used as the src of the img
  const renderedImage = typeof image == 'string'
    ? <img src={image}/>
    : image

  return(
    <div 
      style={{
        width: size,
        height: 'auto',
        maxWidth: '70%',
        ...style
      }}
    >
      {!image && title && <h4>{title}</h4>}
      {image && renderedImage}
    </div>
  )
}