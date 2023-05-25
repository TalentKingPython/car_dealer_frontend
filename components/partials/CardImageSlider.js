import dynamic from 'next/dynamic'
import Link from 'next/link'
import ImageLoader from '../ImageLoader'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const CardImageSlider = ({ horizontal, images, href, badges, wishlistButton, light }) => {

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      className='card-img-top card-img-hover'
    >
      {images.map((image, indx) => {
        return <SwiperSlide key={indx} className='d-flex'>
          {horizontal ? <ImageLoader
            src={image[0]}
            alt={image[1]}
            layout='fill'
            objectFit='cover'
            quality={100}
            light={light ? 1 : 0}
          /> : <ImageLoader
            src={image[0]}
            width={image[1]}
            height={image[2]}
            alt={image[3]}
            light={light ? 1 : 0}
          />}
        </SwiperSlide>
      })}
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
    </Swiper>
  )
}

export default CardImageSlider
