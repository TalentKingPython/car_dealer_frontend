import StarRating from '/components/StarRating'

const Review = ({
  author,
  rating,
  date,
  likeCount,
  dislikeCount,
  likeActive,
  dislikeActive,
  likeClick,
  dislikeClick,
  children,
  light,
  ...props
}) => {

  const thumbShape = author.thumbShape ? author.thumbShape : 'rounded',
        thumbClass = `flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ${thumbShape} me-3`,
        thumbSrc = author.thumbSrc,
        thumbSize = author.thumbSize + 'px',
        name = author.name

  return (
    <div {...props}>
      <div className='d-flex justify-content-between mb-3'>
        <div className='d-flex align-items-center pe-2'>
          {thumbSrc && <div className={thumbClass} style={{width: thumbSize, height: thumbSize, backgroundImage: 'url(' + thumbSrc + ')'}}></div>}
          <div>
            <h6 className={`fs-base mb-0${light ? ' text-light' : ''}`}>{name}</h6>
            <StarRating light={light ? 1 : 0} rating={rating} />
          </div>
        </div>
        {date && <span className={`fs-sm ${light ? 'text-light opacity-50' : 'text-muted'}`}>{date}</span>}
      </div>
      <div className={`pb-1 mb-3${light ? ' text-light opacity-70' : ''}`}>{children}</div>
      <div className='d-flex align-items-center'>
        <button type='button' className={`btn-like${likeActive ? ' active' : ''}${light ? ' btn-light' : ''}${likeClick ? '' : ' pe-none'}`} onClick={likeClick}>
          <i className='fi-like'></i>
          <span>{likeCount ? `(${likeCount})` : '(0)'}</span>
        </button>
        <div className={`border-end me-1${light ? ' border-light' : ''}`}>&nbsp;</div>
        <button type='button' className={`btn-dislike${dislikeActive ? ' active' : ''}${light ? ' btn-light' : ''}${dislikeClick ? '' : ' pe-none'}`} onClick={dislikeClick}>
          <i className='fi-dislike'></i>
          <span>{dislikeCount ? `(${dislikeCount})` : '(0)'}</span>
        </button>
      </div>
    </div>
  )
}

export default Review
