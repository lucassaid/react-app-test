import EmotionSelector from './EmotionSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

export default function ArticleActions({
  emotion,
  onEmtionChanged,
  onDelete
}) {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <EmotionSelector
        onEmtionChanged={onEmtionChanged}
        selected={emotion}
      />
      <FontAwesomeIcon
        style={{cursor: 'pointer', marginLeft: 10}}
        size="lg"
        icon={faTrashAlt}
        color="#444"
        onClick={onDelete}
      />
    </div>
  )
}