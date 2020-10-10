export default function Background({
  color = '#FFFFFF',
  gradient,
  children,
  className,
  style
}) {
  return(
    <div
      className={className} 
      style={{
        backgroundColor: color,
        ...style
      }}
    >
      {children}
    </div>
  )
}