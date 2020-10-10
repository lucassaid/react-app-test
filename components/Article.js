import styles from './Article.module.css'

export default function Article({article, extra, loading}) {

  const {
    urlToImage,
    title,
    content
  } = article

  const shouldRenderImage = urlToImage || loading
  const placeholderClass = loading ? styles.placeholder : ''
  
  const image = (
    <div className={styles.imgContainer}>
      <img src={urlToImage} alt={article.title}/>
    </div>
  )

  const imagePlaceholder = (
    <div className={`${styles.imgContainer} ${styles.imagePlaceholder}`}/>
  )
  
  const renderedImage = loading ? imagePlaceholder : image

  return(
    <div className={styles.article}>
      {shouldRenderImage && renderedImage}
      <div className={styles.right}>
        <h3 className={placeholderClass}>{title}</h3>
        <div className={placeholderClass}>{content}</div>
      </div>
      <div className={styles.extra}>{extra}</div>
    </div>
  )
}