import { useEffect, useState } from 'react'
import Background from './Background'
import Logo from './Logo'
import BurguerMenu from './BurguerMenu'
import SectionMenu from './SectionMenu'
import styles from './Header.module.css'


export default function Header({sections, onMenuClicked}) {

  const [hiddenSections, setHiddenSections] = useState(false)

  const handleScroll = e => {
    const breakPoint = 400
    const { scrollTop } = document.documentElement
    if(scrollTop > breakPoint && !hiddenSections) {
      // user is not at the top, hide sections
      setHiddenSections(true)
    }
    if(scrollTop <= breakPoint && hiddenSections) {
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
        <BurguerMenu
          color="white"
          className={styles.leftIcon}
          onClick={onMenuClicked}
        />
        <div className={styles.topBarContent}>
          <Logo
            size={200}
            image="https://spacedev.uy/assets/img/space.png"
            title="Prueba"
          />
        </div>
      </Background>
      <SectionMenu
        color="white"
        fontSize={20}
        backgroundColor="#333"
        sections={sections}
        hidden={hiddenSections}
      />
    </div>
  )
}