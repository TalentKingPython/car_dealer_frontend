import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const ScrollTopButton = ({ showOffset, duration, easing, tooltip }) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShow = (e) => {
      if (e.currentTarget.pageYOffset > showOffset) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleShow)
    return () => window.removeEventListener('scroll', handleShow)
  }, [showOffset])

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: duration,
      smooth: easing
    })
  }

  return (
    <button type='btton' className={`btn-scroll-top${show ? ' show' : ''}`} onClick={scrollToTop}>
      <span className='btn-scroll-top-tooltip text-muted fs-sm me-2'>{tooltip}</span>
      <i className='btn-scroll-top-icon fi-chevron-up'></i>
    </button>
  )
}

export default ScrollTopButton
