/*
* Simple Dropdown
* I chose mouseenter and mouseleave events instead of focus and blur events since I know 
* it is not that easy to handle blur events in safari
*/

import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown({
  overlay,
  children: trigger,
  placement = 'left'
}) {

  const [visibleOverlay, setVisibleOverlay] = useState(false)
  const dropdownRef = useRef(null)
  const mouseoutTimeout = useRef()

  const handleMouseEnter = e => {
    // prevent closing
    clearTimeout(mouseoutTimeout.current)
    setVisibleOverlay(true)
  }
  
  const handleMouseOut = e => {
    mouseoutTimeout.current = setTimeout(() => {
      // close only if the user has left the dropdown for 150ms
      setVisibleOverlay(false)
    }, 150)
  }

  useEffect(() => {
    const dropdownEl = dropdownRef.current
    dropdownEl.addEventListener('mouseenter', handleMouseEnter)
    dropdownEl.addEventListener('mouseleave', handleMouseOut)
    
    // cleanup
    return () => {
      dropdownEl.removeEventListener('mouseenter', handleMouseEnter)
      dropdownEl.removeEventListener('mouseleave', handleMouseOut)
    }
  }, [])

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {trigger}
      {visibleOverlay && (
        <div
          className={styles.overlay}
          style={{
            [placement]: 0
          }}
        >
          {overlay}
        </div>
      )}
    </div>
  )
}