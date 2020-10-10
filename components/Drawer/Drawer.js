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
      // set render to true
      setRenderDrawer(true)
      // wait for next render before starting animation
      setTimeout(() => setDrawerVisible(true), 0)
    } else {
      // init animation
      setDrawerVisible(false)
      // wait for animation to complete before setting render to false
      setTimeout(() => setRenderDrawer(false), 300)
    }
  }, [visible])

  if(!renderDrawer) return <></>
  
  const drawerStyle = {
    transform: `translateX(${drawerVisible ? 0 : '-100%'})`
  }

  // top bar of the drawer
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
  
  // backdrop to darken everything else and close drawer if clicked
  const backdrop = (
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
      {backdrop}
    </div>
  )
}