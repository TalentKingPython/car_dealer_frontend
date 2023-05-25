import Link from 'next/link'
import ImageLoader from './ImageLoader'

const VenueCardOverlay = ({
  img,
  title,
  date,
  time,
  button,
  overlay,
  className,
  ...props
}) => {

  return (
    <div {...props} className={`card border-0 pt-5${className ? ` ${className}` : ''}`}>
      {overlay && <span className='img-gradient-overlay'></span>}
      {img && <ImageLoader src={img.src} layout='fill' objectFit='cover' quality={100} alt={img.alt} className='rounded-3' />}
      <div className='d-none d-md-block' style={{height: '13rem'}}></div>
      <div className='card-body content-overlay text-center text-md-start pt-4 pt-xl-0'>
        <div className='d-md-flex justify-content-between align-items-end'>
          <div className='me-2 mb-4 mb-md-0'>
            <div className='d-flex justify-content-center justify-content-md-start text-light fs-sm mb-2'>
              {date && <div className='text-nowrap me-3'>
                <i className='fi-calendar-alt me-1 opacity-70'></i>
                <span className='align-middle'>{date}</span>
              </div>}
              {time && <div className='text-nowrap'>
                <i className='fi-clock me-1 opacity-70'></i>
                <span className='align-middle'>{time}</span>
              </div>}
            </div>
            {title && <h3 className='h5 text-light mb-0'>{title}</h3>}
          </div>
         {button && <div className='btn-group'>
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

export default VenueCardOverlay
