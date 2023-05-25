import React from 'react'
import Link from 'next/link'

// Single step
export const Step = ({ href, active, children, index, ...props }) => {
  const isActive = active ? ' active' : '',
        currentNumber = index + 1

  return (
    <>
      {href ? <Link href={href} {...props} className={`step${isActive}`}>
        <div className='step-progress'>
          <span className='step-progress-start'></span>
          <span className='step-progress-end'></span>
          <span className='step-number'>{currentNumber}</span>
        </div>
        <div className='step-label'>{children}</div>
      </Link> : <div {...props} className={`step${isActive}`}>
        <div className='step-progress'>
          <span className='step-progress-start'></span>
          <span className='step-progress-end'></span>
          <span className='step-number'>{currentNumber}</span>
        </div>
        <div className='step-label'>{children}</div>
      </div>}
    </>
  )
}

// Main wrapper
const Steps = ({ vertical, light, className, children, ...props }) => {

  const extraClass = className ? ` ${className}` : '',
        isVertical = vertical ? ' steps-vertical' : '',
        isLight = light ? ' steps-light' : ''

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { index })
    }
    return child
  })

  return (
    <div {...props} className={`steps${isVertical}${isLight}${extraClass}`}>{childrenWithProps}</div>
  )
}

export default Steps
