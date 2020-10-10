import { useEffect, useState } from 'react'
import Background from './Background'
import Logo from './Logo'
import BurguerMenu from './BurguerMenu'
import SectionMenu from './SectionMenu'
import styles from './Header.module.css'

export default function Header({customization, onMenuClicked}) {

  const {
    sections = [],
    headerBgColor,
    headerTextColor,
    logo,
    name
  } = customization

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
      <Background color={headerBgColor} className={styles.topBar}>
        <BurguerMenu
          color={headerTextColor}
          className={styles.leftIcon}
          onClick={onMenuClicked}
        />
        <div className={styles.topBarContent}>
          <Logo
            size={200}
            image={logo}
            title={name}
          />
        </div>
      </Background>
      <SectionMenu
        color={headerTextColor}
        fontSize={20}
        backgroundColor={headerBgColor}
        sections={sections}
        hidden={hiddenSections}
        selected="Home"
      />
    </div>
  )
}