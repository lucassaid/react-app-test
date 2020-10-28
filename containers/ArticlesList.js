import { useEffect } from 'react'
import Article from '../components/Article'
import { 
  fetchArticles,
  selectArticles,
  loadingStateSelector,
  setEmotion,
  deleteArticle
} from '../lib/slices/articlesSlice'
import { useDispatch, useSelector } from 'react-redux'
import ArticleActions from '../components/ArticleActions'

export default function ArticlesList({}) {

  const dispatch = useDispatch()

  // fetch articles and store them in redux state
  const dispatchFetchArticles = () => {
    dispatch(fetchArticles())
  }

  useEffect(() => {
    dispatchFetchArticles()
  }, [dispatch])

  const articles = useSelector(selectArticles)
  const loadingState = useSelector(loadingStateSelector)

  const handleEmotionChanged = (articleId, emotionId) => {
    dispatch(setEmotion({articleId, emotionId}))
  }

  const handleDelete = articleId => {
    dispatch(deleteArticle({articleId}))
  }

  const articlesArr = loadingState == 'loading'
    ? [{},{},{},{}]
    : articles

  return(
    <>
      {articlesArr.map((article, i) => {

        const actions = (
          <ArticleActions
            articleId={article.id}
            emotion={article.emotion}
            onEmotionChanged={emotionId => {
              handleEmotionChanged(article.id, emotionId)
            }}
            onDelete={() => handleDelete(article.id)}
          />
        )

        return(
          <div key={article.id || i}>
            <Article
              article={article}
              loading={!Boolean(article.id)}
              extra={article.id && actions}
            />
            <hr/>
          </div>
        )
      })}
    </>
  )
}