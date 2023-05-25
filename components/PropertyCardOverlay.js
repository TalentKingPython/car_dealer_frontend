import Link from 'next/link'
import ImageLoader from './ImageLoader'

const PropertyCardOverlay = ({
  img,
  href,
  title,
  category,
  location,
  button,
  overlay,
  badges,
  className,
  ...props
}) => {

  return (
    <div {...props} className={`card border-0 overflow-hidden${className ? ` ${className}` : ''}`}>
      {overlay && <span className='img-gradient-overlay'></span>}
      {img && <ImageLoader src={img.src} layout='fill' objectFit='cover' quality={100} alt={img.alt} className='rounded-3' />}
      <div className='card-body content-overlay pb-0'>
        {badges && <>
          {badges.map((badge, indx) => <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>
            {badge[1]}
          </span>)}
        </>}
      </div>
      <div className='card-footer content-overlay border-0 pt-0 pb-4'>
        <div className='d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5'>
          {href ? <Link href={href} className='text-decoration-none text-light pe-2'>
            {category && <div className='fs-sm text-uppercase pt-2 mb-1'>{category}</div>}
            {title && <h3 className='h5 text-light mb-1'>{title}</h3>}
            {location && <div className='fs-sm opacity-70'>
              <i className='fi-map-pin me-1'></i>
              {location}
            </div>}
          </Link> : <div className='text-decoration-none text-light pe-2'>
            <div className='fs-sm text-uppercase pt-2 mb-1'>{category}</div>
            <h3 className='h5 text-light mb-1'>{title}</h3>
            {location && <div className='fs-sm opacity-70'>
              <i className='fi-map-pin me-1'></i>
              {location}
            </div>}
          </div>}
          {button && <div className='btn-group ms-n2 ms-sm-0 mt-3'>
            {button.href ?
              <Link
                href={button.href}
                {...button.props}
                className={button.variant ? `btn btn-${button.variant} rounded-end-0 px-3` : 'btn btn-primary rounded-end-0 px-3'}
              >
                {button.title}
              </Link> :
              <button
                type='button'
                className={button.variant ? `btn btn-${button.variant} rounded-end-0 px-3` : 'btn btn-primary rounded-end-0 px-3'}
              >
                {button.title}
              </button>
            }
            <div className='posiion-relative border-start border-light zindex-5' style={{marginLeft: '-1px'}}></div>
            <button
              {...button.wishlistProps}
              type='button'
              className={button.variant ? `btn btn-${button.variant} rounded-start-0 px-3` : 'btn btn-primary rounded-start-0 px-3'}
            >
              <i className='fi-heart'></i>
            </button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default PropertyCardOverlay
