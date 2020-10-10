import { useEffect, useState } from 'react'
import Background from './Background'
import Logo from './Logo'
import BurguerMenu from './BurguerMenu'
import SectionMenu from './SectionMenu'
import styles from './Header.module.css'

const prueba = ['Home', 'Politics', 'Opinion', 'Sports', 'Nation']

export default function Header({}) {

  const [hiddenSections, setHiddenSections] = useState(false)

  const handleScroll = e => {
    const { scrollTop } = document.documentElement
    if(scrollTop > 400 && !hiddenSections) {
      // user is not at the top, hide sections
      setHiddenSections(true)
    }
    if(scrollTop <= 400 && hiddenSections) {
      // user is at the top, show sections
      setHiddenSections(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hiddenSections])

  return (
    <div className={styles.header}>
      <Background color="#333" className={styles.topBar}>
        <BurguerMenu color="white" className={styles.leftIcon}/>
        <div className={styles.topBarContent}>
          <Logo color="white" title="Prueba"/>
        </div>
      </Background>
      <SectionMenu
        color="white"
        fontSize={20}
        backgroundColor="#333"
        sections={prueba}
        hidden={hiddenSections}
      />
    </div>
  )
}