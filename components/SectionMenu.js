import styles from './SectionMenu.module.css'

export default function SectionMenu({
  sections,
  color,
  hidden,
  backgroundColor,
  selected
}) {

  const style = {
    color,
    transform: `translateY(${hidden ? -48 : 0}px)`,
    backgroundColor
  }

  const renderSection = section => {
    const selectedClass = section == selected ? styles.selected : ''
    return (
      <div
        className={`${styles.section} ${selectedClass}`}
        key={section}
      >
        {section}
      </div>
    )
  }

  return (
    <nav className={styles.nav} style={style}>
      {sections.map(renderSection)}
    </nav>
  )
}