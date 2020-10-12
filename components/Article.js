import styles from './Article.module.css'

export default function Article({article, extra, loading}) {

  const { urlToImage, title, content } = article

  const placeholderClass = loading ? styles.placeholder : ''
  
  // image to show if the article has one
  const image = (
    <div className={styles.imgContainer}>
      <img src={urlToImage} alt={title}/>
    </div>
  )

  //placeholder to show if this article is loading
  const imagePlaceholder = (
    <div className={`${styles.imgContainer} ${styles.imagePlaceholder}`}/>
  )
  
  // little logic to choose between them
  const RenderedImage = () => {
    if(loading) return imagePlaceholder
    return urlToImage ? image : null
  }

  return(
    <div className={styles.article}>
      <RenderedImage/>
      <div className={styles.right}>
        <h3 className={placeholderClass}>{title}</h3>
        <div className={placeholderClass}>{content}</div>
      </div>
      <div className={styles.extra}>{extra}</div>
    </div>
  )
}