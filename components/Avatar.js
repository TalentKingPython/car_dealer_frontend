import ImageLoader from './ImageLoader'

const Avatar = ({
  img,
  size,
  rounded,
  light,
  className,
  ...props
}) => {

  return (
    <div
      {...props}
      className={`position-relative ${rounded ? `rounded-${rounded}` : 'rounded-circle'} overflow-hidden${className ? ` ${className}` : ''}`}
      style={size ? {width: size[0], height: size[1]} : {width: '48px', height: '48px'}}
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
  )
}

export default Avatar
