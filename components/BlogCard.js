import Link from 'next/link'
import ImageLoader from './ImageLoader'

const BlogCard = ({
  type,
  size,
  href,
  img,
  badges,
  title,
  category,
  author,
  date,
  comments,
  text,
  light,
  className,
  ...props
}) => {

  const extraClass = className ? ` ${className}` : ''

  // Wrapper css classes and image markup depending on card type
  let wrapperClass,
      cardImage,
      cardBodyClass
  switch (type) {
    case 'horizontal':
      wrapperClass = `card card-horizontal border-0${extraClass}`
      cardBodyClass = 'card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2'
      if (img) {
        cardImage = href ? <Link href={href} className='card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3'>
          <ImageLoader
            src={img.src}
            layout='fill'
            objectFit='cover'
            quality={100}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </Link> : <div className='card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3'>
          <ImageLoader
            src={img.src}
            layout='fill'
            objectFit='cover'
            quality={100}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </div>
      }
      break
    case 'card':
      wrapperClass = `card card-hover ${light ? 'card-light' : 'border-0 shadow-sm'} h-100${extraClass}`
      cardBodyClass = 'card-body pb-0'
      if (img) {
        cardImage = href ? <Link href={href} className='card-img-top d-flex position-relative overflow-hidden'>
          <ImageLoader
            src={img.src}
            width={img.size[0]}
            height={img.size[1]}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </Link> : <div className='card-img-top d-flex position-relative overflow-hidden'>
          <ImageLoader
            src={img.src}
            width={img.size[0]}
            height={img.size[1]}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </div>
      }
      break
    case 'card-horizontal':
      wrapperClass = `card card-horizontal card-hover ${light ? 'card-light' : 'border-0 shadow-sm'}${extraClass}`
      cardBodyClass = 'card-body'
      if (img) {
        cardImage = href ? <Link href={href} className='card-img-top d-flex position-relative overflow-hidden'>
          <ImageLoader
            src={img.src}
            layout='fill'
            objectFit='cover'
            quality={100}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </Link> : <div className='card-img-top d-flex position-relative overflow-hidden'>
          <ImageLoader
            src={img.src}
            layout='fill'
            objectFit='cover'
            quality={100}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </div>
      }
      break
    default:
      wrapperClass = className
      cardBodyClass = 'py-3'
      if (img) {
        cardImage = href ? <Link href={href} className='d-flex position-relative rounded-3 overflow-hidden'>
          <ImageLoader
            src={img.src}
            width={img.size[0]}
            height={img.size[1]}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </Link> : <div className='d-flex position-relative rounded-3 overflow-hidden'>
          <ImageLoader
            src={img.src}
            width={img.size[0]}
            height={img.size[1]}
            alt={img.alt}
            light={light ? 1 : 0}
          />
          {badges && <div className='position-absolute end-0 top-0 pt-3 pe-3'>
            {badges.map((badge, indx) => {
              return <span key={indx} className={`d-table badge bg-${badge[0]} fs-sm mb-1`}>{badge[1]}</span>
            })}
          </div>}
        </div>
      }
  }

  // Render markup
  return (
    <article {...props} className={wrapperClass}>
      {cardImage}
      <div className={cardBodyClass}>
        {category && <>
          {category.href ? <Link href={category.href} className={`${size === 'lg' ? 'fs-sm' : 'fs-xs'} text-uppercase text-decoration-none`}>
            {category.title}
          </Link> : <div className={`${size === 'lg' ? 'fs-sm' : 'fs-xs'} text-uppercase text-primary`}>{category.title}</div>}
        </>}
        {title && <h3 className={`${size === 'lg' ? 'h5' : 'fs-base'} pt-1 mb-2`}>
          {href ? <Link href={href} className={light ? 'nav-link-light' : 'nav-link'}>
            {title}
          </Link> : <span className={light ? 'text-light opacity-80' : 'text-nav'}>{title}</span>}
        </h3>}
        {text && <p className={`${size === 'lg' ? 'fs-base' : 'fs-sm'} mb-2 ${light ? 'text-light opacity-50' : 'text-muted'}`}>{text}</p>}
        {type !== 'card' && <>
          {author ? <>
            {author.href ? <Link href={author.href} className='d-flex align-items-center text-decoration-none pt-2'>
              {author.img && <div
                className='position-relative flex-shrink-0 rounded-circle overflow-hidden me-2'
                style={size === 'lg' ? {width: '48px', height: '48px'} : {width: '44px', height: '44px'}}
              >
                <ImageLoader
                  src={author.img}
                  layout='fill'
                  objectFit='cover'
                  quality={90}
                  alt={author.name}
                  light={light ? 1 : 0}
                />
              </div>}
              <div>
                <h6 className={`fs-sm ${light ? 'text-light opacity-80' : 'text-nav'} lh-base mb-1`}>{author.name}</h6>
                <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
                  {date && <span className='me-2 pe-1'>
                    <i className='fi-calendar-alt opacity-70 me-1'></i>
                    {date}
                  </span>}
                  {comments && <span>
                    <i className='fi-chat-circle opacity-70 me-1'></i>
                    {comments}
                  </span>}
                </div>
              </div>
            </Link> : <div className='d-flex align-items-center pt-2'>
              {author.img && <div
                className='position-relative flex-shrink-0 rounded-circle overflow-hidden me-2'
                style={size === 'lg' ? {width: '48px', height: '48px'} : {width: '44px', height: '44px'}}
              >
                <ImageLoader
                  src={author.img}
                  layout='fill'
                  objectFit='cover'
                  quality={90}
                  alt={author.name}
                  light={light ? 1 : 0}
                />
              </div>}
              <div>
                <h6 className={`fs-sm ${light ? 'text-light opacity-80' : 'text-nav'} lh-base mb-1`}>{author.name}</h6>
                <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
                  {date && <span className='me-2 pe-1'>
                    <i className='fi-calendar-alt opacity-70 me-1'></i>
                    {date}
                  </span>}
                  {comments && <span>
                    <i className='fi-chat-circle opacity-70 me-1'></i>
                    {comments}
                  </span>}
                </div>
              </div>
            </div>}
          </> : <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
            {date && <span className='me-2 pe-1'>
              <i className='fi-calendar-alt opacity-70 me-1'></i>
              {date}
            </span>}
            {comments && <span>
              <i className='fi-chat-circle opacity-70 me-1'></i>
              {comments}
            </span>}
          </div>}
        </>}
      </div>
      {type === 'card' && <>
        {author ? <>
          {author.href ? <Link href={author.href} className='card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1'>
            {author.img && <div
              className='position-relative flex-shrink-0 rounded-circle overflow-hidden me-2'
              style={size === 'lg' ? {width: '48px', height: '48px'} : {width: '44px', height: '44px'}}
            >
              <ImageLoader
                src={author.img}
                layout='fill'
                objectFit='cover'
                quality={90}
                alt={author.name}
                light={light ? 1 : 0}
              />
            </div>}
            <div>
              <h6 className={`fs-sm ${light ? 'text-light opacity-80' : 'text-nav'} lh-base mb-1`}>{author.name}</h6>
              <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
                {date && <span className='me-2 pe-1'>
                  <i className='fi-calendar-alt opacity-70 me-1'></i>
                  {date}
                </span>}
                {comments && <span>
                  <i className='fi-chat-circle opacity-70 me-1'></i>
                  {comments}
                </span>}
              </div>
            </div>
          </Link> : <div className='card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1'>
            {author.img && <div
              className='position-relative flex-shrink-0 rounded-circle overflow-hidden me-2'
              style={size === 'lg' ? {width: '48px', height: '48px'} : {width: '44px', height: '44px'}}
            >
              <ImageLoader
                src={author.img}
                layout='fill'
                objectFit='cover'
                quality={90}
                alt={author.name}
                light={light ? 1 : 0}
              />
            </div>}
            <div>
              <h6 className={`fs-sm ${light ? 'text-light opacity-80' : 'text-nav'} lh-base mb-1`}>{author.name}</h6>
              <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
                {date && <span className='me-2 pe-1'>
                  <i className='fi-calendar-alt opacity-70 me-1'></i>
                  {date}
                </span>}
                {comments && <span>
                  <i className='fi-chat-circle opacity-70 me-1'></i>
                  {comments}
                </span>}
              </div>
            </div>
          </div>}
        </> : <div className={`d-flex ${light ? 'text-light opacity-60' : 'text-body'} fs-xs`}>
          {date && <span className='me-2 pe-1'>
            <i className='fi-calendar-alt opacity-70 me-1'></i>
            {date}
          </span>}
          {comments && <span>
            <i className='fi-chat-circle opacity-70 me-1'></i>
            {comments}
          </span>}
        </div>}
      </>}
    </article>
  )
}

export default BlogCard
