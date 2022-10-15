import { useEffect, useState } from 'react'
import { use100vh } from 'react-div-100vh'

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  )
}

export const useFocusId = () => {
  // const height = use100vh()
  // const [focusId, setFocusId] = useState<number>(0)

  // const onScroll = (): void => {
  //   console.log(height)
  //   if (!height) return
  //   const position = scrollTop()
  //   console.log('position: ' + position)
  //   if (0 <= position && position < height * 2) {
  //     setFocusId(0)
  //   } else if (height * 2 <= position && position < height * 3) {
  //     setFocusId(1)
  //   } else if (height * 3 <= position && position < height * 4) {
  //     setFocusId(2)
  //   } else if (height * 4 <= position && position < height * 5) {
  //     setFocusId(3)
  //   } else if (height * 5 <= position && position < height * 6) {
  //     setFocusId(4)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', onScroll)
  //   return (): void => document.removeEventListener('scroll', onScroll)
  // })

  // return focusId

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
