import Link from 'next/link'
import ImageLoader from './ImageLoader'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'

const VenueCard = ({
  img,
  href,
  title,
  rating,
  price,
  location,
  wishlistButton,
  dropdown,
  light,
  className,
  ...props
}) => {

  return (
    <div {...props} className={`position-relative${className ? ` ${className}` : ''}`}>
      {img && <div className='position-relative d-flex mb-3'>
        <ImageLoader
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
          light={light ? 1 : 0}
          className='rounded-3'
        />
        <div className='d-flex position-absolute top-0 end-0 m-3 zindex-5'>
          {wishlistButton && <>
            {wishlistButton.tooltip ? <OverlayTrigger
              placement='left'
              overlay={<Tooltip>{wishlistButton.tooltip}</Tooltip>}
            >
              <button
                {...wishlistButton.props}
                type='button'
                className='btn btn-icon btn-light-primary btn-xs text-primary rounded-circle'
              >
                <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
              </button>
            </OverlayTrigger> : <button
              {...wishlistButton.props}
              type='button'
              className='btn btn-icon btn-light-primary btn-xs text-primary rounded-circle'
            >
              <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
            </button>}
          </>}
          {dropdown && <Dropdown>
            <Dropdown.Toggle variant='light btn-icon btn-xs shadow-sm rounded-circle ms-2'>
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
          </Dropdown>}
        </div>
      </div>}
      {title && <h3 className='mb-2 fs-lg'>
        {href ? <Link href={href} className={light ? 'nav-link-light stretched-link' : 'nav-link stretched-link'}>
          {title}
        </Link> : <span className={light ? 'text-light': ''}>
          {title}
        </span>}
      </h3>}
      <ul className='list-inline mb-0 fs-xs' style={{paddingTop: '2px'}}>
        {rating && <li className='list-inline-item pe-1'>
          <i className='fi-star-filled mt-n1 me-1 fs-base text-warning align-middle'></i>
          <b className={light ? 'text-light opacity-70' : ''}>{rating.value}</b>
          {rating.count && <span className={light ? 'text-light opacity-50' : 'text-muted'}>&nbsp;({rating.count})</span>}
        </li>}
        {price && <li className='list-inline-item pe-1'>
          <i className={`fi-credit-card mt-n1 me-1 fs-base align-middle ${light ? 'text-light opacity-50' : 'text-muted'}`}></i>
          <span className={light ? 'text-light opacity-70' : ''}>{price}</span>
        </li>}
        {location && <li className='list-inline-item pe-1'>
          <i className={`fi-map-pin mt-n1 me-1 fs-base align-middle ${light ? 'text-light opacity-50' : 'text-muted'}`}></i>
          <span className={light ? 'text-light opacity-70' : ''}>{location}</span>
        </li>}
      </ul>
    </div>
  )
}

export default VenueCard
