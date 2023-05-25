import Link from 'next/link'
import Image from 'next/image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'

const JobCard = ({
  href,
  company,
  title,
  description,
  location,
  salary,
  badges,
  dropdown,
  wishlistButton,
  light,
  className,
  ...props
}) => {

  const extraClass = className ? ` ${className}` : ''

  return (
    <div
      {...props}
      className={light ? `card card-light card-hover${extraClass}` : `card card-hover bg-secondary${extraClass}`}
    >
      <div className='card-body pb-0'>
        <div className='d-flex justify-content-between align-items-start mb-2'>
          <div className='d-flex align-items-center'>
            {company && <>
              {company.logo && <span className='me-2'>
                <Image
                  src={company.logo.src}
                  width={company.logo.size[0]}
                  height={company.logo.size[1]}
                  alt={company.name}
                />
              </span>}
              <span className={`fs-sm ${light ? 'text-light' : 'text-dark'} opacity-80 pe-1`}>
                {company.name}
              </span>
            </>}
            {dropdown && <>
              {badges && <>
                {badges.map((badge, indx) => {
                  return <span key={indx} className={`badge bg-faded-${badge[0]} rounded-pill fs-sm ms-2`}>{badge[1]}</span>
                })}
              </>}
            </>}
          </div>

          {dropdown ? <Dropdown className='position-relative zindex-10'>
            <Dropdown.Toggle variant={`${light ? 'translucent-light' : 'light shadow-sm'} btn-icon btn-xs rounded-circle`}>
              <i className='fi-dots-vertical'></i>
            </Dropdown.Toggle>
            <Dropdown.Menu variant={light? 'dark' : ''} className='my-1'>
              {dropdown.map((item, indx) => {
                if (item.href) {
                  return <Dropdown.Item key={indx} as={Link} href={item.href} {...item.props}>
                    <i className={`${item.icon} opacity-60 me-2`}></i>
                    {item.label}
                  </Dropdown.Item>
                } else {
                  return <Dropdown.Item key={indx} as='button' {...item.props}>
                    <i className={`${item.icon} opacity-60 me-2`}></i>
                    {item.label}
                  </Dropdown.Item>
                }
              })}
            </Dropdown.Menu>
          </Dropdown> : badges && <div>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`badge bg-faded-${badge[0]} rounded-pill fs-sm ms-2`}>{badge[1]}</span>
            })}
          </div>}
        </div>
        {title && <h3 className='h6 card-title pt-1 mb-3'>
          {href ? <Link href={href} className={`${light ? 'text-light opacity-80' : 'text-nav'} stretched-link text-decoration-none`}>
            {title}
          </Link> : <span className={light ? 'text-light opacity-90' : 'text-nav'}>
            {title}
          </span>}
        </h3>}
        {description && <p className='mt-n2 fs-sm'>
          {description}
        </p>}
      </div>
      <div className='card-footer d-flex align-items-center justify-content-between border-0 pt-0'>
        <div className='fs-sm mb-1'>
          {location && <span className='text-nowrap me-3'>
            <i className={`fi-map-pin ${light ? 'text-light opacity-50' : 'text-muted'} me-1`}></i>
            <span className={light ? 'text-light opacity-60' : ''}>{location}</span>
          </span>}
          {salary && <span className='text-nowrap me-3'>
            <i className={`fi-cash fs-base ${light ? 'text-light opacity-50' : 'text-muted'} me-1`}></i>
            <span className={light ? 'text-light opacity-60' : ''}>{salary}</span>
          </span>}
        </div>
        {wishlistButton && <>
          {wishlistButton.tooltip ? <OverlayTrigger
            placement='top'
            overlay={<Tooltip>{wishlistButton.tooltip}</Tooltip>}
          >
            <button
              {...wishlistButton.props}
              type='button'
              className={`btn btn-icon ${light ? 'btn-translucent-light' : 'btn-light'} btn-xs text-primary rounded-circle shadow-sm content-overlay`}
            >
              <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
            </button>
          </OverlayTrigger> : <button
            {...wishlistButton.props}
            type='button'
            className='btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm content-overlay'
          >
            <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
          </button>}
        </>}
      </div>
    </div>
  )
}

export default JobCard
