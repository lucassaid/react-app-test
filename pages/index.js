import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import ArticlesList from '../components/ArticlesList'

import data from '../components/prueba'

const IndexPage = () => {
  const dispatch = useDispatch()

  return (
    <Layout>
      <ArticlesList articles={data.articles}/>
    </Layout>
  )
}

export default IndexPage
