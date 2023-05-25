import Link from 'next/link'
import ImageLoader from '../ImageLoader'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const CardImage = ({ horizontal, images, href, badges, wishlistButton, light }) => {

  return (
    <div className='card-img-top card-img-hover d-flex'>
      {horizontal ? <ImageLoader
        src={images[0][0]}
        alt={images[0][1]}
        layout='fill'
        objectFit='cover'
        quality={100}
        light={light ? 1 : 0}
      /> : <ImageLoader
        src={images[0][0]}
        width={images[0][1]}
        height={images[0][2]}
        alt={images[0][3]}
        light={light ? 1 : 0}
      />}
      {href ? <Link href={href} className='img-overlay'></Link> : <span className='img-overlay'></span>}
      {badges && <div className='position-absolute start-0 top-0 pt-3 ps-3'>
        {badges.map((badge, indx) => {
          return <span key={indx} className={`d-table badge bg-${badge[0]} mb-1`}>{badge[1]}</span>
        })}
      </div>}
      {wishlistButton && <div className={`${wishlistButton.active ? 'position-absolute zindex-5' : 'content-overlay'} end-0 top-0 pt-3 pe-3`}>
        {wishlistButton.tooltip ? <OverlayTrigger
          placement='left'
          overlay={<Tooltip>{wishlistButton.tooltip}</Tooltip>}
        >
          <button
            {...wishlistButton.props}
            type='button'
            className='btn btn-icon btn-light btn-xs text-primary rounded-circle'
          >
            <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
          </button>
        </OverlayTrigger> : <button
          {...wishlistButton.props}
          type='button'
          className='btn btn-icon btn-light btn-xs text-primary rounded-circle'
        >
          <i className={wishlistButton.active ? 'fi-heart-filled' : 'fi-heart'}></i>
        </button>}
      </div>}
    </div>
  )
}

export default CardImage
