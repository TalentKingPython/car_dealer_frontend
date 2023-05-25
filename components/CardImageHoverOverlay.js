import ImageLoader from './ImageLoader'

const CardImageHoverOverlay = ({
  img,
  children,
  light,
  className,
  ...props
}) => {

  return (
    <>
      {img && <div
        {...props}
        className={`card-img-top card-img-hover d-flex${className ? ` ${className}` : ''}`}
      >
        <span className='img-overlay opacity-65'></span>
        <ImageLoader
          src={img.src}
          width={img.size[0]}
          height={img.size[1]}
          alt={img.alt}
          light={light ? 1 : 0}
        />
        <div className='content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3'>
          <div className='w-100 p-1'>
            {children}
          </div>
        </div>
      </div>}
    </>
  )
}

export default CardImageHoverOverlay
