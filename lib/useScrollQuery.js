import { useEffect, useState } from 'react'

/* Made by Lucas Said */

export default function useScrollQuery(breakPoint) {

  // crossed is true when user scrolls and cross the breakPoint
  const [crossed, setCrossed] = useState(false)

  const handleScroll = e => {
    const { scrollTop } = document.documentElement
    if(scrollTop > breakPoint && !crossed) {
      setCrossed(true)
    }
    if(scrollTop <= breakPoint && crossed) {
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