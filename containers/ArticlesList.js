import { useEffect } from 'react'
import Article from '../components/Article'
import { 
  fetchArticles,
  selectArticles,
  setEmotion,
  deleteArticle
} from '../lib/slices/articlesSlice'
import { useDispatch, useSelector } from 'react-redux'
import ArticleActions from '../components/ArticleActions'

export default function ArticlesList({}) {

  const dispatch = useDispatch()
  const dispatchFetchArticles = () => {
    dispatch(fetchArticles())
  }
  useEffect(() => dispatchFetchArticles(), [dispatch])
  const articles = useSelector(selectArticles)

  const handleEmotionChanged = (articleId, emotionId) => {
    dispatch(setEmotion({articleId, emotionId}))
  }

  const handleDelete = articleId => {
    dispatch(deleteArticle({articleId}))
  }

  return(
    <>
      {articles.map(article => (
        <>
          <Article
            key={article.id}
            article={article}
            extra={
              <ArticleActions
                articleId={article.id}
                emotion={article.emotion}
                onEmtionChanged={emotionId => {
                  handleEmotionChanged(article.id, emotionId)
                }}
                onDelete={() => handleDelete(article.id)}
              />
            }
          />
          <hr/>
        </>
      ))}
    </>
  )
}