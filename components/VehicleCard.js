import dynamic from 'next/dynamic'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'

const CardImage = dynamic(() => import('./partials/CardImage'))
const CardImageSlider = dynamic(() => import('./partials/CardImageSlider'))

const VehicleCard = ({
  images,
  href,
  title,
  year,
  location,
  price,
  badges,
  wishlistButton,
  checkbox,
  dropdown,
  footer,
  horizontal,
  light,
  className,
  ...props
}) => {

  const horizontalClass = horizontal ? ' card-horizontal' : '',
        extraClass = className ? ` ${className}` : ''

  return (
    <div
      {...props}
      className={light ? `card card-light card-hover${horizontalClass}${extraClass}` : `card card-hover shadow-sm border-0${horizontalClass}${extraClass}`}
    >
      {images && <>
        {images.length > 1 ? 
          <CardImageSlider
            horizontal={horizontal ? true : false}
            images={images}
            href={href}
            badges={badges}
            wishlistButton={wishlistButton}
            light={light ? 1 : 0}
          /> :
          <CardImage
            horizontal={horizontal ? true : false}
            images={images}
            href={href}
            badges={badges}
            wishlistButton={wishlistButton}
            light={light ? 1 : 0}
          />
        }
      </>}
      <div className='card-body'>
        <div className='d-flex align-items-center justify-content-between pb-1'>
          {year && <span className={`fs-sm${light ? ' text-light' : ''} me-3`}>
            {year}
          </span>}
          {dropdown ? <Dropdown className='mt-n1 me-n2'>
            <Dropdown.Toggle variant={`${light ? 'translucent-light' : 'light shadow-sm'} btn-icon btn-xs rounded-circle`}>
              <i className='fi-dots-vertical'></i>
            </Dropdown.Toggle>
            <Dropdown.Menu variant={light? 'dark' : ''} className='my-1'>
              {dropdown.map((item, indx) => {
                if (item.href) {
                  return <Dropdown.Item key={indx} as={Link} href={item.href} {...item.props}>
                    <i className={`${item.icon}${light ? '' : ' opacity-60'} me-2`}></i>
                    {item.label}
                  </Dropdown.Item>
                } else {
                  return <Dropdown.Item key={indx} as='button' {...item.props}>
                    <i className={`${item.icon}${light ? '' : ' opacity-60'} me-2`}></i>
                    {item.label}
                  </Dropdown.Item>
                }
              })}
            </Dropdown.Menu>
          </Dropdown> : checkbox && <div className={`form-check${light ? ' form-check-light' : ''}`}>
            <label className='form-check-label'>
              <input {...checkbox.props} type='checkbox' className='form-check-input' />
              <span className='fs-sm'>{checkbox.label}</span>
            </label>
          </div>}
        </div>
        {title && <h3 className='h6 mb-1'>
          {href ? <Link href={href} className={light ? 'nav-link-light' : 'nav-link'}>
            {title}
          </Link> : <span className={light ? 'text-light' : ''}>
            {title}
          </span>}
        </h3>}
        {price && <div className='text-primary fw-bold mb-1'>{price}</div>}
        {location && <div className={`fs-sm${light ? ' text-light opacity-70' : ''}`}>
          <i className='fi-map-pin me-1'></i>
          {location}
        </div>}
        {horizontal && <>
          {footer && <div className={`border-top${light ? ' border-light' : ''} pt-3 mt-3`}>
            <div className="me-n1">
              <div className='row g-2'>
                {footer.map((item, indx) => {
                  return <div key={indx} className='col me-sm-1'>
                    <div className={`${light ? 'bg-dark text-light' : 'bg-secondary'} rounded text-center w-100 h-100 text-nowrap p-2`}>
                      <i className={`${item[0]} ${light ? 'text-light' : 'text-body'} d-block h4 mb-0`}></i>
                      <span className='fs-xs'>{item[1]}</span>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>}
        </>}
      </div>
      {!horizontal && <>
        {footer && <div className='card-footer border-0 pt-0'>
          <div className={`border-top${light ? ' border-light' : ''} pt-3`}>
            <div className="me-n1">
              <div className='row g-2'>
                {footer.map((item, indx) => {
                  return <div key={indx} className='col me-sm-1'>
                    <div className={`${light ? 'bg-dark text-light' : 'bg-secondary'} rounded text-center w-100 h-100 text-nowrap p-2`}>
                      <i className={`${item[0]} ${light ? 'text-light' : 'text-body'} d-block h4 mb-0`}></i>
                      <span className='fs-xs'>{item[1]}</span>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>}
      </>}
    </div>
  )
}

export default VehicleCard
