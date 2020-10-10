import Header from './Header'

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <main style={{paddingTop: 135}}>
        {children}
      </main>
    </>
  )
}