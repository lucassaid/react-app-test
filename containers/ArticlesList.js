import { useEffect } from 'react'
import Article from '../components/Article'
import { fetchArticles, selectArticles } from '../lib/slices/articlesSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ArticlesList({}) {

  const dispatch = useDispatch()
  const dispatchFetchArticles = () => {
    dispatch(fetchArticles())
  }
  useEffect(() => dispatchFetchArticles(), [])
  const articles = useSelector(selectArticles)

  return(
    <>
      {articles.map(article => (
        <>
          <Article
            key={article.id}
            article={article}
          />
          <hr/>
        </>
      ))}
    </>
  )
}