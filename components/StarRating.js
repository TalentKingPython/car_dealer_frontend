const StarRating = (props) => {

  const ratingProp = parseFloat(props.rating),
        rating = (Math.round(ratingProp * 2) / 2).toFixed(1),
        size = props.size ? ` star-rating-${props.size}` : '',
        light = props.light ? ' text-light' : '',
        extraClass = props.className ? ` ${props.className}` : '',
        style = props.style

  let stars
  switch (rating) {
    case '1.0':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star'></i>,
        <i key='3' className='star-rating-icon fi-star'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '1.5':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-half active'></i>,
        <i key='3' className='star-rating-icon fi-star'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '2.0':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '2.5':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-half active'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>,
      ]
      break
    case '3.0':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-filled active'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '3.5':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-filled active'></i>,
        <i key='4' className='star-rating-icon fi-star-half active'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '4.0':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-filled active'></i>,
        <i key='4' className='star-rating-icon fi-star-filled active'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
      break
    case '4.5':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-filled active'></i>,
        <i key='4' className='star-rating-icon fi-star-filled active'></i>,
        <i key='5' className='star-rating-icon fi-star-half active'></i>
      ]
      break
    case '5.0':
      stars = [
        <i key='1' className='star-rating-icon fi-star-filled active'></i>,
        <i key='2' className='star-rating-icon fi-star-filled active'></i>,
        <i key='3' className='star-rating-icon fi-star-filled active'></i>,
        <i key='4' className='star-rating-icon fi-star-filled active'></i>,
        <i key='5' className='star-rating-icon fi-star-filled active'></i>
      ]
      break
    default:
      stars = [
        <i key='1' className='star-rating-icon fi-star'></i>,
        <i key='2' className='star-rating-icon fi-star'></i>,
        <i key='3' className='star-rating-icon fi-star'></i>,
        <i key='4' className='star-rating-icon fi-star'></i>,
        <i key='5' className='star-rating-icon fi-star'></i>
      ]
  }

  return (
    <span className={`star-rating${size}${light}${extraClass}`} style={style}>
      {stars}
    </span>
  )
}


export default StarRating
