
import styles from './Article.module.css'

export default function Article({article}) {

  return(
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={article.urlToImage} alt={article.title}/>
      </div>
      <div className={styles.right}>
        <h3>{article.title}</h3>
        <div>{article.content}</div>
      </div>
    </div>
  )
}