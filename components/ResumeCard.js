import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'
import ImageLoader from './ImageLoader'

const ResumeCard = ({
  href,
  img,
  title,
  location,
  salary,
  badges,
  dropdown,
  views,
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
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-start'>
            <div
              className='position-relative rounded-circle overflow-hidden flex-shrink-0 d-none d-sm-block'
              style={{width: 100, height: 100}}
            >
              {img && <ImageLoader
                src={img.src}
                layout='fill'
                objectFit='cover'
                quality={90}
                alt={img.alt}
                light={light ? 1 : 0}
              />}
            </div>
            <div className='ps-sm-3'>
              <h3 className='h6 card-title pb-1 mb-2'>
                {href ? <Link href={href} className={`${light ? 'text-light opacity-80' : 'text-nav'} stretched-link text-decoration-none`}>
                    {title}
                    {badges && <>
                      {badges.map((badge, indx) => {
                        return <span key={indx} className={`badge bg-faded-${badge[0]} rounded-pill fs-sm ms-2`}>{badge[1]}</span>
                      })}
                    </>}
                </Link> : <span className={light ? 'text-light opacity-90' : 'text-nav'}>
                  {title}
                  {badges && <>
                    {badges.map((badge, indx) => {
                      return <span key={indx} className={`badge bg-faded-${badge[0]} rounded-pill fs-sm ms-2`}>{badge[1]}</span>
                    })}
                  </>}
                </span>}
              </h3>
              <div className='fs-sm'>
                {location && <div className='text-nowrap mb-2'>
                  <i className={`fi-map-pin ${light ? 'text-light opacity-50' : 'text-muted'} me-1`}></i>
                  <span className={light ? 'text-light opacity-60' : ''}>{location}</span>
                </div>}
                {salary && <div className='text-nowrap'>
                  <i className={`fi-cash fs-base ${light ? 'text-light opacity-50' : 'text-muted'} me-1`}></i>
                  <span className={light ? 'text-light opacity-60' : ''}>{salary}</span>
                </div>}
              </div>
            </div>
          </div>
          <div className='d-flex flex-column align-items-end justify-content-between'>
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
            <strong className={light ? 'text-light opacity-70' : 'fs-sm'}>{views}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
