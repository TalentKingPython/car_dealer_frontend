import { useState, useEffect } from 'react'

const StickyNavbar = ({children, className, ...props}) => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleSticky = (e) => {
      if (e.currentTarget.pageYOffset > 20) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    if (window.pageYOffset > 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }

    window.addEventListener('scroll', handleSticky)
    return () => window.removeEventListener('scroll', handleSticky)
  }, [])

  return (
    <header
      {...props}
      className={`${className ? className : ''}${sticky ? ' navbar-stuck': ''}`}
    >{children}</header>
  )
}

export default StickyNavbar
