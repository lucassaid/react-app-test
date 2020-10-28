import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faFrown, faMeh } from '@fortawesome/free-regular-svg-icons'
import styles from './EmotionsSelector.module.css'
import Dropdown from './Dropdown'

const emotions = {
  positive: {icon: faSmile, label: 'Positive', color: '#4CD362'},
  negative: {icon: faFrown, label: 'Negative', color: '#F4443A'},
  neutral: {icon: faMeh, label: 'Neutral', color: '#444'},
}

const unsetEmotion = {icon: faSmile, label: 'Positive', color: '#AAA'}

export default function EmotionSelector({selected, onEmotionChanged}) {

  /* list emotions to show in our dropdown */
  const emotionsMenu = (
    <div className={styles.emotionsMenu}>
      {Object.keys(emotions).map(emotionId => {
        const emotion = emotions[emotionId]
        return (
          <div
            key={emotionId}
            className={styles.emotionsMenuItem}
            style={{color: emotion.color}}
            onClick={() => onEmotionChanged(emotionId)}
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

  const selectedEmotion = emotions[selected] || unsetEmotion
  const { icon, color } = selectedEmotion

  const trigger = (
    <FontAwesomeIcon
      style={{cursor: 'pointer'}}
      color={color}
      size="lg"
      icon={icon}
    />
  )

  return(
    <Dropdown placement="right" overlay={emotionsMenu}>
      {trigger}
    </Dropdown>
  )
}