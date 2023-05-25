import { useCallback, useRef } from 'react'
import { jarallax } from 'jarallax'

const BgParallax = ({
  type,
  speed,
  imgSrc,
  overlay,
  children,
  contentWrapper,
  className,
  ...props
}) => {

  // Create ref callback
  const useHookWithRefCallback = () => {
    const el = useRef(null)
    const setParallax = useCallback(node => {

      // Destroy Jarallax on component unmount
      if (el.current) {
        jarallax(el.current, 'destroy')
      }
      
      // Init Jarallax on component mount and update
      if (node) {
        jarallax(node, {
          type: type || 'scroll',
          speed: speed || 0.3
        })
      }
      
      el.current = node
    }, [])
    
    return [setParallax]
  }
  
  const [el] = useHookWithRefCallback()

  // Overlay element
  let overlayEl
  if (overlay === 'gradient') {
    overlayEl = <span className='img-overlay bg-transparent opacity-100' style={{backgroundImage: 'linear-gradient(0deg, rgba(31, 27, 45, .7), rgba(31, 27, 45, .7)'}}></span>
  } else {
    overlayEl = <span className='img-overlay' style={{opacity: overlay + '%'}}></span>
  }  

  // Render markup
  return (
    <div ref={el} {...props} className={`jarallax${className ? ` ${className}` : ''}`}>
      {overlay && overlayEl}
      <div className='jarallax-img' style={{backgroundImage: `url(${imgSrc})`}}></div>
      {contentWrapper ? <div {...contentWrapper} className={`content-overlay${contentWrapper.className ? ` ${contentWrapper.className}` : ''}`}>
        {children}
      </div> : <div className='content-overlay'>
        {children}
      </div>}
      
    </div>
  )
}

export default BgParallax
