import Link from 'next/link'

const IconBox = ({
  href,
  media,
  mediaColor,
  mediaShape,
  imageSrc,
  title,
  titleSize,
  text,
  type,
  light,
  align,
  className,
  ...props
}) => {

  const mediaShapeClass = mediaShape ? ` rounded-${mediaShape}` : '',
        alignment = align ? ` text-${align}` : '',
        cardSkinClass = light ? ' card-light' : '',
        titleFontSize = titleSize ? ` fs-${titleSize}` : ' fs-base',
        titleSkinClass = light ? ' text-light' : '',
        textSkinClass = light ? ' text-light opacity-60' : ' text-body',
        extraClass = className ? ` ${className}` : ''


  // Icon box media class
  let mediaColorClass
  if (light) {
    mediaColorClass = ' bg-faded-light text-light'
  } else {
    mediaColorClass = mediaColor ? ` bg-faded-${mediaColor} text-${mediaColor}` : ' bg-faded-primary text-primary'
  }

  // CSS classes that depend on prop.type, prop.light, prop.alignment, prop.className
  let iconBoxClass,
      iconBoxMediaClass,
      iconBoxTitleClass,
      iconBoxTextClass

  switch (type) {
    case 'card':
      iconBoxClass = 'icon-box card card-body card-hover h-100 text-decoration-none' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media mb-3' + mediaColorClass + mediaShapeClass
      iconBoxTitleClass = 'icon-box-title mb-0' + titleFontSize + titleSkinClass
      iconBoxTextClass = 'fs-sm mt-2 mb-0' + textSkinClass
      break
    case 'card-shadow':
      iconBoxClass = 'icon-box card card-body h-100 border-0 shadow-sm card-hover text-decoration-none' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media mb-3' + mediaColorClass + mediaShapeClass
      iconBoxTitleClass = 'icon-box-title mb-0' + titleFontSize + titleSkinClass
      iconBoxTextClass = 'fs-sm mt-2 mb-0' + textSkinClass
      break
    case 'pill':
      iconBoxClass = 'icon-box card flex-row align-items-center card-hover rounded-pill text-decoration-none py-2 ps-2 pe-4' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media rounded-pill me-2' + mediaColorClass
      iconBoxTitleClass = 'icon-box-title fs-sm ps-1 pe-1 mb-0' + titleSkinClass
      iconBoxTextClass = 'd-none'
      break
    case 'pill-shadow':
      iconBoxClass = 'icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill text-decoration-none py-2 ps-2 pe-4' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media rounded-pill me-2' + mediaColorClass
      iconBoxTitleClass = 'icon-box-title fs-sm ps-1 pe-1 mb-0' + titleSkinClass
      iconBoxTextClass = 'd-none'
      break
    case 'pill-rounded':
      iconBoxClass = 'icon-box card flex-row align-items-center card-hover text-decoration-none py-2 ps-2 pe-4' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media me-2' + mediaColorClass
      iconBoxTitleClass = 'icon-box-title fs-sm ps-1 pe-1 mb-0' + titleSkinClass
      iconBoxTextClass = 'd-none'
      break
    case 'pill-rounded-shadow':
      iconBoxClass = 'icon-box card flex-row align-items-center card-hover border-0 shadow-sm text-decoration-none py-2 ps-2 pe-4' + cardSkinClass + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media me-2' + mediaColorClass
      iconBoxTitleClass = 'icon-box-title fs-sm ps-1 pe-1 mb-0' + titleSkinClass
      iconBoxTextClass = 'd-none'
      break
    default:
      iconBoxClass = 'icon-box text-decoration-none' + alignment + extraClass
      iconBoxMediaClass = 'icon-box-media mb-3' + mediaColorClass + mediaShapeClass
      iconBoxTitleClass = 'icon-box-title mb-0' + titleFontSize + titleSkinClass
      iconBoxTextClass = 'fs-sm mt-2 mb-0' + textSkinClass
  }

  // Icon box text
  let iconBoxText = text ? <p className={iconBoxTextClass}>{text}</p> : ''

  // Icon box media markup
  let iconBoxMedia
  if (media) {
    iconBoxMedia = media === 'image' ? <div className={iconBoxMediaClass} style={{backgroundImage: 'url(' + imageSrc + ')'}}></div> : <div className={iconBoxMediaClass}><i className={media}></i></div>
  }

  // Render markup
  return (
    <>
      {href ? <Link href={href} className={iconBoxClass} {...props}>
        {iconBoxMedia}
        <h3 className={iconBoxTitleClass}>{title}</h3>
        {iconBoxText}
      </Link> : <div className={iconBoxClass} {...props}>
        {iconBoxMedia}
        <h3 className={iconBoxTitleClass}>{title}</h3>
        {iconBoxText}
      </div>}
    </>
  )
}

export default IconBox
