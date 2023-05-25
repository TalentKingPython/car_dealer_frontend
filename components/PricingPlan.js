import Link from 'next/link'
import ImageLoader from './ImageLoader'

const PricingPlan = ({
  image,
  title,
  price,
  period,
  options,
  button,
  light,
  featured,
  className,
  ...props
}) => {

  const extraClass = className ? ` ${className}` : ''

  // Main wrapper CSS class
  let containerClass
  if (featured) {
    if (light) {
      containerClass = 'card card-light border-light card-active' + extraClass
    } else {
      containerClass = 'card shadow' + extraClass
    }    
  } else {
    if (light) {
      containerClass = 'card card-light border-light' + extraClass
    } else {
      containerClass = 'card' + extraClass
    }
  }

  // Render markup
  return (
    <div {...props} className={containerClass}>
      <div className='card-body'>
        {image && <div className='text-center mt-2 mb-4'>
          <ImageLoader
            src={image.src}
            width={parseInt(image.width)}
            height={parseInt(image.height)}
            alt={image.alt}
          />
        </div>}
        {title && <h3 className={`h5 fw-normal text-center mb-1${light ? ' text-light': ''}`}>
          {title}
        </h3> }
        {price && <div className='d-flex align-items-end justify-content-center mb-4'>
          <div className={`h1 mb-0${light ? ' text-light': ''}`}>{price}</div>
          <div className={`pb-2 ps-2${light ? ' text-light opacity-70': ''}`}>/{period}</div>
        </div>}
        {options && <ul className='list-unstyled d-block mb-0 mx-auto' style={{maxWidth: '16rem'}}>
          {options.map((option, indx) => {
            return <li key={indx}>
              {option.available ? <div key={indx} className='d-flex'>
                <i className='fi-check text-primary fs-sm mt-1 me-2'></i>
                <span className={light ? 'text-light': ''}>{option.title}</span>
              </div> : 
              <div key={indx} className={`d-flex ${light ? 'text-light opacity-50' : 'text-muted'}`}>
                <i className='fi-x fs-xs mt-2 me-2'></i>
                <span>{option.title}</span>
              </div>}
            </li>
          })}
        </ul>}
      </div>
      {button && <div className='card-footer py-2 border-0'>
        <div className={`border-top text-center pt-4 pb-3${light ? ' border-light' : ''}`}>
          {button.href ? <Link href={button.href} {...button.props} className={button.variant ? `btn btn-${button.variant}` : 'btn btn-outline-primary'}>
            {button.title}
          </Link> : <button {...button.props} type='button' className={button.variant ? `btn btn-${button.variant}` : 'btn btn-outline-primary'}>
            {button.title}
          </button>}
        </div>
      </div>}
    </div>
  )
}

export default PricingPlan
