import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

// Layer
export const Layer = ({ depth, children, className, ...props }) => (
  <div
    {...props}
    data-depth={depth ? depth : 0.1}
    className={`parallax-layer${className ? ` ${className}` : ''}`}
  >
    {children}
  </div>
)

// Main wrapper
const CursorParallax = ({ children, className, ...props }) => {
  const el = useRef(null)

  useEffect(() => {
    const parallax = new Parallax(el.current)

    return (() => {
      parallax.disable()
    })

  }, [children])

  return (
    <div
      ref={el}
      {...props}
      className={`parallax${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}

export default CursorParallax
