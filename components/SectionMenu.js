import Background from './Background'
import styles from './SectionMenu.module.css'

export default function SectionMenu({
  sections,
  color,
  hidden,
  backgroundColor
}) {

  const style = {
    color,
    transform: `translateY(${hidden ? -48 : 0}px)`,
    backgroundColor
  }
  
  return (
    <nav className={styles.nav} style={style}>
      {sections.map(section => (
        <div className={styles.section} key={section}>
          {section}
        </div>
      ))}
    </nav>
  )
}