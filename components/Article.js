
import styles from './Article.module.css'

export default function Article({article, extra}) {

  const Image = (
    <div className={styles.imgContainer}>
      <img src={article.urlToImage} alt={article.title}/>
    </div>
  )

  return(
    <div className={styles.article}>
      {article.urlToImage && Image}
      <div className={styles.right}>
        <h3>{article.title}</h3>
        <div>{article.content}</div>
      </div>
      <div className={styles.extra}>{extra}</div>
    </div>
  )
}