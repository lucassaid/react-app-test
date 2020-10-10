import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function BurguerMenu({color, className, onClick}) {
  return (
    <div
      className={className}
      style={{cursor: 'pointer'}}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faBars}
        color={color}
        size="lg"
      /> 
    </div> 
  )
}