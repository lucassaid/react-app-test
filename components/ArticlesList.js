import Article from './Article'

export default function ArticlesList({articles}) {

  return(
    <>
      {articles.map((article, i) => (
        <div style={{padding: 15}}>
          <Article key={i} article={article} />
          <hr/>
        </div>
      ))}

    </>
  )
}