import { useState, useEffect } from 'react' 
import styles from './Drawer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export default function Drawer({
  visible,
  onClose,
  children
}) {

  const [drawerVisible, setDrawerVisible] = useState(false)
  const [renderDrawer, setRenderDrawer] = useState(false)

  useEffect(() => {
    if(visible) {
      setRenderDrawer(true)
      setTimeout(() => setDrawerVisible(true), 0)
    } else {
      setDrawerVisible(false)
      setTimeout(() => setRenderDrawer(false), 300)
    }
  }, [visible])

  if(!renderDrawer) return <></>
  
  const drawerStyle = {
    transform: `translateX(${drawerVisible ? 0 : '-100%'})`
  }

  const drawerTop = (
    <div className={styles.drawerTop}>
      <FontAwesomeIcon
        style={{cursor: 'pointer'}}
        onClick={onClose}
        icon={faTimesCircle}
        size="2x"
      />
    </div>
  )

  const backDrow = (
    <div
      onClick={onClose}
      className={styles.backdrop}
      style={{opacity: drawerVisible ? 0.7 : 0}}
    />
  )

  return(
    <div className={styles.drawerContainer}>
      <div className={styles.drawer} style={drawerStyle}>
        {drawerTop}
        {children}
      </div>
      {backDrow}
    </div>
  )
}