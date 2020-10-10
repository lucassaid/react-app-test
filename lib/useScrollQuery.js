import { useEffect, useState } from 'react'

export default function useScrollQuery(breakPoint) {

  // crosed is true when user scrolls and cross the breakPoint
  const [crossed, setCrossed] = useState(false)

  const handleScroll = e => {
    const { scrollTop } = document.documentElement
    if(scrollTop > breakPoint && !crossed) {
      // user is not at the top, hide sections
      setCrossed(true)
    }
    if(scrollTop <= breakPoint && crossed) {
      // user is at the top, show sections
      setCrossed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [crossed])

  return crossed
} 