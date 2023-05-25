import { useRef, useEffect } from 'react'
import Rellax from 'rellax'

const ElementParallax = ({
  options,
  children,
  ...props
}) => {

  const el = useRef(null)

  useEffect(() => {
    const rellax = new Rellax(el.current, options)

    return (() => {
      rellax.destroy()
    })

  }, [children, options])

  return (
    <div ref={el} {...props}>{children}</div>
  )

}

export default ElementParallax
