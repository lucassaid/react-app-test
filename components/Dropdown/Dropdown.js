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

  const [opened, setOpened] = useState(false)

  // set a reference to the dropdown so we can attach listeners to it
  const dropdownRef = useRef(null)
  
  // set a timer that persist between renders
  const mouseoutTimeout = useRef()

  const handleMouseEnter = e => {
    clearTimeout(mouseoutTimeout.current) // prevent closing
    setOpened(true)
  }
  
  const handleMouseOut = e => {
    // close only if the user has left the dropdown for 150ms
    mouseoutTimeout.current = setTimeout(() => {
      setOpened(false)
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
      {opened && (
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