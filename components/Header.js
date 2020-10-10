import Background from './Background'
import Logo from './Logo'
import BurguerMenu from './BurguerMenu'
import SectionMenu from './SectionMenu'
import styles from './Header.module.css'
import useScrollQuery from '../lib/useScrollQuery'

export default function Header({customization, onMenuClicked}) {

  const {
    sections = [],
    headerBgColor,
    headerTextColor,
    logo,
    name
  } = customization

  const hiddenSections = useScrollQuery(400)

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