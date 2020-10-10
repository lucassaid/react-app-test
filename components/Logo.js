export default function Logo({
  image,
  size,
  title,
  color,
}) {
  
  const renderedImage = typeof image == 'string' ? (
    <img src={image}/>
  ) : image

  return(
    <div 
      style={{
        width: size,
        height: 'auto',
        color,
        maxWidth: '70%'
      }}
    >
      {!image && title && <h4>{title}</h4>}
      {image && renderedImage}
    </div>
  )
}