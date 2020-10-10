import Dropdown from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faFrown, faMeh } from '@fortawesome/free-regular-svg-icons'
import styles from './EmotionsSelector.module.css'

const emotions = {
  positive: {icon: faSmile, label: 'Positive', color: '#4CD362'},
  negative: {icon: faFrown, label: 'Negative', color: '#F4443A'},
  neutral: {icon: faMeh, label: 'Neutral', color: '#444'},
}

export default function EmotionSelector({selected, onEmtionChanged}) {

  const emotionsMenu = (
    <div className={styles.emotionsMenu}>
      {Object.keys(emotions).map(emotionId => {
        const emotion = emotions[emotionId]
        return (
          <div
            key={emotionId}
            className={styles.emotionsMenuItem}
            style={{color: emotion.color}}
            onClick={() => onEmtionChanged(emotionId)}
          >
            <FontAwesomeIcon
              icon={emotion.icon}
              style={{marginRight: 5}}
            />
            {emotion.label}
          </div>
        )
      })}
    </div>
  )

  const triggerIcon = selected ? emotions[selected].icon : faSmile
  const triggerColor = selected ? emotions[selected].color : '#AAA'

  const trigger = (
    <FontAwesomeIcon
      style={{cursor: 'pointer'}}
      color={triggerColor}
      size="lg"
      icon={triggerIcon}
    />
  )

  return(
    <Dropdown placement="right" overlay={emotionsMenu}>
      {trigger}
    </Dropdown>
  )
}