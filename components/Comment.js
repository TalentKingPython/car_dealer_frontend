const Comment = ({
  author,
  badges,
  text,
  date,
  replyLabel,
  replyClick,
  children,
  light,
  className,
  ...props
}) => {

  const thumbShape = author.thumbShape ? author.thumbShape : 'rounded',
        thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ${thumbShape} me-3`,
        thumbSrc = author.thumbSrc,
        thumbSize = author.thumbSize + 'px',
        name = author.name,
        extraClass = className ? ` ${className}` : ''

  return (
    <div {...props} className={`comment${extraClass}${light ? ' border-light' : ''}`}>
      <p className={light ? 'text-light opacity-70' : ''}>{text}</p>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center pe-2'>
          {thumbSrc && <div className={thumbClass} style={{width: thumbSize, height: thumbSize, backgroundImage: 'url(' + thumbSrc + ')'}}></div>}
          <div>
            <h6 className={`fs-base mb-0${light ? ' text-light' : ''}`}>
              {name}
              {badges && <>
                {badges.map((badge, indx) => {
                  return <span key={indx} className={`badge bg-${badge[0]} ms-2 rounded-pill fs-xs`}>{badge[1]}</span>
                })}
              </>}
            </h6>
            <span className={`fs-sm ${light ? 'text-light opacity-50' : 'text-muted'}`}>{date}</span>
          </div>
        </div>
        {replyLabel && <button type='button' className={`btn btn-link btn-sm${light ? ' btn-light' : ''}`} onClick={replyClick}>
          <i className='fi-reply fs-lg me-2'></i>
          <span className='fw-normal'>{replyLabel}</span>
        </button>}
      </div>
      {children}
    </div>
  )
}

export default Comment